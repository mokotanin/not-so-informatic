import math
import os

import chess
import chess.engine
import matplotlib.pyplot as plt
from matplotlib import patches
from matplotlib.widgets import Button

STOCKFISH_PATH = os.environ.get(
    "STOCKFISH_PATH",
    "/home/nino-nakano/Téléchargements/stockfish/stockfish/stockfish-linux-x86-64-universal",
)

START_FEN = chess.STARTING_FEN

PIECE_SYMBOLS = {
    "P": "♙",
    "R": "♖",
    "N": "♘",
    "B": "♗",
    "Q": "♕",
    "K": "♔",
    "p": "♟",
    "r": "♜",
    "n": "♞",
    "b": "♝",
    "q": "♛",
    "k": "♚",
}


def cp_to_win(cp: float) -> float:
    return 1 / (1 + math.exp(-0.00368 * cp))


def color_for(cls: str) -> str:
    return {
        "Meilleur coup (Best Move) ★": "#26ac5e",
        "Excellent": "#81b64c",
        "Bon": "#96bc4b",
        "Imprécision (?!)": "#f7c04a",
        "Erreur (?)": "#e58f2a",
        "Gaffe (??)": "#ca3431",
    }.get(cls, "#808080")


class LiveAnalyzer:
    def __init__(
        self, fen: str = START_FEN, engine_path: str = STOCKFISH_PATH, depth: int = 14
    ):
        self.board = chess.Board(fen)
        self.engine = chess.engine.SimpleEngine.popen_uci(engine_path)
        self.depth = depth
        self.flipped = False
        self.selected = None
        self.last_move = None
        self.last_classification = None
        self.last_win_before = None
        self.last_win_after = None

        # Analyse initiale (perspective du joueur au trait)
        self._refresh_analysis()

        # --- Figure ---
        self.fig = plt.figure(figsize=(11, 6))
        gs = self.fig.add_gridspec(1, 2, width_ratios=[3, 1.2], wspace=0.15)
        self.ax_board = self.fig.add_subplot(gs[0, 0])
        self.ax_bar = self.fig.add_subplot(gs[0, 1])

        self.btn_undo = Button(self.fig.add_axes([0.32, 0.02, 0.10, 0.05]), "↶ Annuler")
        self.btn_reset = Button(self.fig.add_axes([0.43, 0.02, 0.10, 0.05]), "⟲ Reset")
        self.btn_flip = Button(self.fig.add_axes([0.54, 0.02, 0.10, 0.05]), "⇅ Pivoter")
        self.btn_undo.on_clicked(self._undo)
        self.btn_reset.on_clicked(self._reset)
        self.btn_flip.on_clicked(self._flip)

        self.fig.canvas.mpl_connect("button_press_event", self._on_click)
        self.fig.canvas.mpl_connect("key_press_event", self._on_key)

        self._draw()
        plt.show()
        self.engine.quit()

    # ----- coordonnées -----
    def _xy(self, square: int):
        f, r = chess.square_file(square), chess.square_rank(square)
        if self.flipped:
            f, r = 7 - f, 7 - r
        return f + 0.5, r + 0.5

    def _sq(self, x: float, y: float):
        f, r = int(x), int(y)
        if self.flipped:
            f, r = 7 - f, 7 - r
        if 0 <= f < 8 and 0 <= r < 8:
            return chess.square(f, r)
        return None

    # ----- analyse -----
    def _refresh_analysis(self):
        """Recalcule win_before / best_move_hint pour le joueur au trait."""
        info = self.engine.analyse(self.board, chess.engine.Limit(depth=self.depth))
        player = self.board.turn
        cp = info["score"].pov(player).score(mate_score=10000) or 0
        self.win_before = cp_to_win(cp)
        pv = info.get("pv") or []
        self.best_move_hint = pv[0] if pv else None

    # ----- interactions -----
    def _on_click(self, event):
        if event.inaxes != self.ax_board or event.xdata is None:
            return
        sq = self._sq(event.xdata, event.ydata)
        if sq is None:
            return

        # Sélection
        if self.selected is None:
            piece = self.board.piece_at(sq)
            if piece and piece.color == self.board.turn:
                self.selected = sq
                self._draw()
            return

        # Déplacement
        moves = [
            m
            for m in self.board.legal_moves
            if m.from_square == self.selected and m.to_square == sq
        ]
        if not moves:
            piece = self.board.piece_at(sq)
            self.selected = sq if (piece and piece.color == self.board.turn) else None
            self._draw()
            return

        move = next((m for m in moves if m.promotion == chess.QUEEN), moves[0])
        self._play(move)

    def _on_key(self, event):
        if event.key == "u":
            self._undo(None)
        elif event.key == "r":
            self._reset(None)
        elif event.key == "f":
            self._flip(None)

    def _play(self, move: chess.Move):
        win_before = self.win_before
        best_hint = self.best_move_hint

        self.board.push(move)
        self.last_move = move
        self.selected = None

        # Analyse après le coup, du point de vue de celui qui vient de jouer
        info = self.engine.analyse(self.board, chess.engine.Limit(depth=self.depth))
        player = not self.board.turn
        cp = info["score"].pov(player).score(mate_score=10000) or 0
        win_after = cp_to_win(cp)

        # Classification
        prob_loss = win_before - win_after
        if best_hint is not None and move == best_hint:
            cls = "Meilleur coup (Best Move) ★"
        elif prob_loss <= 0.02:
            cls = "Excellent"
        elif prob_loss <= 0.05:
            cls = "Bon"
        elif prob_loss <= 0.09:
            cls = "Imprécision (?!)"
        elif prob_loss <= 0.20:
            cls = "Erreur (?)"
        else:
            cls = "Gaffe (??)"

        self.last_classification = cls
        self.last_win_before = win_before
        self.last_win_after = win_after

        # Nouveau calcul pour le joueur suivant
        self._refresh_analysis()
        self._draw()

    def _undo(self, _):
        if self.board.move_stack:
            self.board.pop()
            self.last_move = None
            self.last_classification = None
            self.last_win_before = None
            self.last_win_after = None
            self.selected = None
            self._refresh_analysis()
            self._draw()

    def _reset(self, _):
        self.board.reset()
        self.last_move = None
        self.last_classification = None
        self.last_win_before = None
        self.last_win_after = None
        self.selected = None
        self._refresh_analysis()
        self._draw()

    def _flip(self, _):
        self.flipped = not self.flipped
        self._draw()

    # ----- dessin -----
    def _draw(self):
        ax = self.ax_board
        ax.clear()
        ax.set_xlim(0, 8)
        ax.set_ylim(0, 8)
        ax.set_aspect("equal")
        ax.axis("off")

        # Cases
        base = ["#eeeed2", "#769656"]
        for row in range(8):
            for col in range(8):
                ax.add_patch(
                    patches.Rectangle((col, row), 1, 1, color=base[(row + col) % 2])
                )

        # Dernier coup
        if self.last_move is not None:
            for sq in (self.last_move.from_square, self.last_move.to_square):
                x, y = self._xy(sq)
                ax.add_patch(
                    patches.Rectangle(
                        (x - 0.5, y - 0.5),
                        1,
                        1,
                        facecolor="#f7c04a",
                        alpha=0.5,
                        edgecolor="none",
                    )
                )

        # Sélection + coups légaux
        if self.selected is not None:
            x, y = self._xy(self.selected)
            ax.add_patch(
                patches.Rectangle(
                    (x - 0.5, y - 0.5),
                    1,
                    1,
                    facecolor="#26ac5e",
                    alpha=0.55,
                    edgecolor="none",
                )
            )
            for m in self.board.legal_moves:
                if m.from_square == self.selected:
                    cx, cy = self._xy(m.to_square)
                    is_capture = self.board.piece_at(m.to_square) is not None
                    if is_capture:
                        ax.add_patch(
                            patches.Circle(
                                (cx, cy),
                                0.42,
                                fill=False,
                                lw=3,
                                color="#26ac5e",
                                alpha=0.8,
                            )
                        )
                    else:
                        ax.add_patch(
                            patches.Circle((cx, cy), 0.13, color="#26ac5e", alpha=0.7)
                        )

        # Pièces
        for sq in chess.SQUARES:
            p = self.board.piece_at(sq)
            if p:
                x, y = self._xy(sq)
                sym = PIECE_SYMBOLS.get(p.symbol(), p.symbol())
                col = "black" if p.color == chess.BLACK else "#ffffff"
                ax.text(
                    x,
                    y,
                    sym,
                    ha="center",
                    va="center",
                    fontsize=26,
                    color=col,
                    weight="bold",
                )

        # Flèche du meilleur coup (indice)
        if self.best_move_hint is not None and self.selected is None:
            x1, y1 = self._xy(self.best_move_hint.from_square)
            x2, y2 = self._xy(self.best_move_hint.to_square)
            ax.annotate(
                "",
                xy=(x2, y2),
                xytext=(x1, y1),
                arrowprops=dict(arrowstyle="-|>", color="#26ac5e", lw=3, alpha=0.75),
            )

        # Titre
        if self.last_classification:
            ax.set_title(
                self.last_classification,
                color=color_for(self.last_classification),
                fontsize=13,
                fontweight="bold",
            )
        else:
            ax.set_title("À vous de jouer", fontsize=13, fontweight="bold")

        turn = "Blancs" if self.board.turn else "Noirs"
        self.fig.suptitle(
            f"Trait aux {turn}   —   cliquez pièce puis destination   "
            f"([u] annuler, [r] reset, [f] pivoter)",
            fontsize=10,
        )

        # Barre
        self.ax_bar.clear()
        self.ax_bar.set_ylim(0, 100)
        self.ax_bar.set_ylabel("Chances de gain (%)")
        self.ax_bar.grid(axis="y", linestyle="--", alpha=0.5)

        if self.last_win_before is not None and self.last_win_after is not None:
            self.ax_bar.bar(
                ["Avant"],
                [self.last_win_before * 100],
                color="#bbbbbb",
                edgecolor="black",
                width=0.5,
            )
            self.ax_bar.bar(
                ["Après"],
                [self.last_win_after * 100],
                color=color_for(self.last_classification or ""),
                edgecolor="black",
                width=0.5,
            )
            self.ax_bar.text(
                0,
                self.last_win_before * 100 + 2,
                f"{self.last_win_before * 100:.1f}%",
                ha="center",
                fontsize=10,
            )
            self.ax_bar.text(
                1,
                self.last_win_after * 100 + 2,
                f"{self.last_win_after * 100:.1f}%",
                ha="center",
                fontsize=10,
                fontweight="bold",
            )
        else:
            self.ax_bar.bar(
                ["Actuel"],
                [self.win_before * 100],
                color="#81b64c",
                edgecolor="black",
                width=0.5,
            )
            self.ax_bar.text(
                0,
                self.win_before * 100 + 2,
                f"{self.win_before * 100:.1f}%",
                ha="center",
                fontsize=10,
            )

        self.fig.canvas.draw_idle()


if __name__ == "__main__":
    LiveAnalyzer()
