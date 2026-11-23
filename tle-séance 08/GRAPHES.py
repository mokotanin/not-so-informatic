def creer_graphe_vide():
    return {}


gr = creer_graphe_vide()


def ajouter_sommet(G, S):
    if S in G:
        print("ce sommet existe déjà !")
    else:
        G[S] = []


ajouter_sommet(gr, "A")
ajouter_sommet(gr, "B")
ajouter_sommet(gr, "C")
ajouter_sommet(gr, "D")
ajouter_sommet(gr, "E")
ajouter_sommet(gr, "F")

print(gr)


def ajouter_arc(G, sd, sf):
    if sd in G and sf in G and sf not in G[sd]:
        # Ajout de sf dans la liste des successeurs de sd
        G[sd].append(sf)
        return G
    else:
        print("Impossible de rajouter cet arc")
        return G


def ajouter_arete(G, sd, sf):
    if sd in G and sf in G and sf not in G[sd]:
        # Ajout de sf dans la liste des voisins de sd
        G[sd].append(sf)
        # Si les sommets sont différents, on ajoute aussi sd chez sf
        if sd != sf:
            G[sf].append(sd)
        return G
    else:
        print("Impossible de rajouter cette arête")
        return G


G2 = creer_graphe_vide()
ajouter_sommet(G2, "A")
ajouter_sommet(G2, "B")
ajouter_sommet(G2, "C")
ajouter_sommet(G2, "D")

ajouter_arete(G2, "A", "B")
ajouter_arete(G2, "A", "C")
ajouter_arete(G2, "A", "D")
ajouter_arete(G2, "B", "C")
ajouter_arete(G2, "B", "D")
ajouter_arete(G2, "C", "D")

print("Graphe G2 :")
for sommet, voisins in G2.items():
    print(f"  {sommet} -> {voisins}")


def supprimer_sommet(G, S):
    if S in G:
        del G[S]
        for cle in list(G.keys()):
            if S in G[cle]:
                index_de_S = G[cle].index(S)
                del G[cle][index_de_S]
        return G
    else:
        print("Impossible de supprimer ce sommet")


supprimer_sommet(G2, "D")
supprimer_sommet(G2, "E")
print(G2)


def supprimer_arc(G, sd, sf):
    if sd in G and sf in G.get(sd):
        del G[sd][G[sd].index(sf)]
        return G
    else:
        print("Impossible de supprimer cet arc")


ajouter_arc(gr, "A", "B")
ajouter_arc(gr, "B", "C")
ajouter_arc(gr, "C", "F")
ajouter_arc(gr, "F", "E")
ajouter_arc(gr, "E", "D")
print(gr)

supprimer_arc(gr, "A", "B")
supprimer_arc(gr, "E", "A")
print(gr)


def supprimer_arete(G, sd, sf):
    if sd in G and sf in G.get(sd):
        index_de_sf = G.get(sd).index(sf)
        del G[sd][index_de_sf]

        if sd != sf:
            index_de_sd = G.get(sf).index(sd)
            del G[sf][index_de_sd]

        return G
    else:
        print("Impossible de supprimer cette arête")


supprimer_arete(G2, "A", "B")
supprimer_arete(G2, "E", "A")
print(G2)


def nb_sommets(G):
    return len(G)


print("Le nombre de sommets de gr est : " + str(nb_sommets(gr)))
print("Le nombre de sommets de G2 est : " + str(nb_sommets(G2)))


def deg_non_oriente(g, s):
    if s in g:
        return len(g[s])
    return 0


print("Le degré du sommet A de G2 est : " + str(deg_non_oriente(G2, "A")))
print("Le degré du sommet C de G2 est : " + str(deg_non_oriente(G2, "C")))


def deg_oriente(g, s):
    deg = 0
    if g.get(s) is not None:
        deg = len(g[s])

    for cle in g:
        if s in g.get(cle) and cle != s:
            deg += 1
    return deg


print("Le degré du sommet A de gr est : " + str(deg_oriente(gr, "A")))
print("Le degré du sommet B de gr est : " + str(deg_oriente(gr, "B")))


def conversion_g_en_mat_adj(G):
    n = nb_sommets(G)
    sommets = []
    mat = [n * [0] for i in range(n)]
    for cle in sorted(G.keys()):
        sommets.append(cle)
    for cle in G:
        valeurs = G.get(cle)
        valeurs.sort()
        index_ligne = sommets.index(cle)
        for i in valeurs:
            index_colonnes = sommets.index(i)
            mat[index_ligne][index_colonnes] = 1

    return mat


G3 = {"A": ["B", "D"], "B": ["A", "C"], "C": ["B"], "D": ["A", "B"]}
print(conversion_g_en_mat_adj(G3))


def conversion_mat_adj_en_g(mat):
    graphe = creer_graphe_vide()
    for i in range(len(mat)):
        ajouter_sommet(graphe, chr(65 + i))
    for k in range(len(mat)):
        for j in range(len(mat)):
            if mat[k][j] == 1:
                ajouter_arc(graphe, chr(65 + k), chr(65 + j))

    return graphe


mat = [[0, 1, 0, 1], [1, 0, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]]
print(conversion_mat_adj_en_g(mat))


import math

import matplotlib.pyplot as plt

figure, ax = plt.subplots()


def tracer_sommets(n):
    global X, Y, figure, ax
    X = []
    Y = []
    cercles = []
    teta = 2 * math.pi / n
    ax.set_xlim((-1.5, 1.5))
    ax.set_ylim((-1.5, 1.5))
    for i in range(n):
        X.append(math.cos(i * teta))
        Y.append(math.sin(i * teta))
    for j in range(len(X)):
        cercles.append(plt.Circle((X[j], Y[j]), 0.12, color="blue"))
    for k in range(len(cercles)):
        ax.add_artist(cercles[k])
        plt.text(X[k] - 0.03, Y[k] - 0.03, chr(65 + k), color="red")


# tracer_sommets(10)


def tracer_arc(mat):
    global X, Y  # Décalaration en variables globale X,Y
    for i in range(len(mat)):  # pour chaque ligne de la matrice
        for j in range(len(mat)):  # pour chaque colonne de la matrice
            if mat[i][j] == 1:  # si lélément i, j de la matrice = 1 alors
                if (
                    mat[j][i] == 1 and i != j
                ):  # cela signifie qu'il faudra tracer deux arcs entre les deux sommets
                    if i > j:  # on trace l'arc supérieur
                        lx = [
                            X[i],
                            (X[i] + X[j]) / 2,
                            X[j],
                        ]  # coordonnées x de l'arc supérieur
                        ly = [
                            Y[i],
                            (Y[i] + Y[j]) / 2 - 0.1,
                            Y[j],
                        ]  # coordonnées y de l'arc supérieur
                        plt.plot(lx, ly, "b")  # tracer de l'arc
                        x = (X[i] + X[j]) / 2  # coordonnée x du début de la flèche
                        y = (
                            Y[i] + Y[j]
                        ) / 2 - 0.1  # coordonnée y du début de la flèche
                        dx = (
                            7 * (X[j] - ((X[i] + X[j]) / 2)) / 10
                        )  # longueur en x de la flèche
                        dy = (
                            7 * (Y[j] - ((Y[i] + Y[j]) / 2 - 0.1)) / 10
                        )  # longueur en y de la flèche
                        # tracé de la flèche d'origine x,y de longueur dx,dy, echelle 1, epaisseur 0.005 et couleur Bleue
                        plt.quiver(
                            x,
                            y,
                            dx,
                            dy,
                            scale_units="xy",
                            angles="xy",
                            scale=1,
                            width=0.005,
                            color="b",
                        )
                    else:  # on trace l'arc inférieur
                        lx = [
                            X[i],
                            (X[i] + X[j]) / 2,
                            X[j],
                        ]  # coordonnées x de l'arc inférieur
                        ly = [
                            Y[i],
                            (Y[i] + Y[j]) / 2 + 0.1,
                            Y[j],
                        ]  # coordonnées y de l'arc inférieur
                        plt.plot(lx, ly, "b")  # tracer de l'arc
                        x = (X[i] + X[j]) / 2  # coordonnée x du début de la flèche
                        y = (
                            Y[i] + Y[j]
                        ) / 2 + 0.1  # coordonnée y du début de la flèche
                        dx = (
                            7 * (X[j] - ((X[i] + X[j]) / 2)) / 10
                        )  # longueur en x de la flèche
                        dy = (
                            7 * (Y[j] - ((Y[i] + Y[j]) / 2 + 0.1)) / 10
                        )  # coordonnée y du début de la flèche
                        # tracé de la flèche d'origine x,y de longueur dx,dy, echelle 1, epaisseur 0.005 et couleur Bleue
                        plt.quiver(
                            x,
                            y,
                            dx,
                            dy,
                            scale_units="xy",
                            angles="xy",
                            scale=1,
                            width=0.005,
                            color="b",
                        )
                else:
                    if i == j:  # on trace la boucle
                        lx = [
                            X[i] - 0.1,
                            X[i] - 0.15,
                            X[i] - 0.1,
                            X[i],
                            X[i] + 0.1,
                            X[i] + 0.15,
                            X[i] + 0.1,
                        ]  # coordonnées x de la boucle
                        ly = [
                            Y[i],
                            Y[i] + 0.1,
                            Y[i] + 0.2,
                            Y[i] + 0.25,
                            Y[i] + 0.2,
                            Y[i] + 0.1,
                            Y[i],
                        ]  # coordonnées y de la boucle
                        plt.plot(lx, ly, "b")  # tracer de l'arc
                        x = X[i] + 0.15  # coordonnée x du début de la flèche
                        y = Y[i] + 0.1  # coordonnée y du début de la flèche
                        dx = (
                            7 * (X[i] + 0.1 - (X[i] + 0.15)) / 10
                        )  # longueur en x de la flèche
                        dy = (
                            7 * (Y[j] - (Y[i] + 0.1)) / 10
                        )  # coordonnée y du début de la flèche
                        # tracé de la flèche d'origine x,y de longueur dx,dy, echelle 1, epaisseur 0.005 et couleur Bleue
                        plt.quiver(
                            x,
                            y,
                            dx,
                            dy,
                            scale_units="xy",
                            angles="xy",
                            scale=1,
                            width=0.005,
                            color="b",
                        )
                    else:  # on trace une droite entre les deux sommets
                        lx = [X[i], X[j]]  # coordonnées x de l'arc droit
                        ly = [Y[i], Y[j]]  # coordonnées y de l'arc droit
                        plt.plot(lx, ly, "b")  # tracer de l'arc
                        x = X[i]  # coordonnée x du début de la flèche
                        y = Y[i]  # coordonnée y du début de la flèche
                        dx = 9.2 * (X[j] - X[i]) / 10  # longueur en x de la flèche
                        dy = (
                            9.2 * (Y[j] - Y[i]) / 10
                        )  # coordonnée y du début de la flèche
                        # tracé de la flèche d'origine x,y de longueur dx,dy, echelle 1, epaisseur 0.005 et couleur Bleue
                        plt.quiver(
                            x,
                            y,
                            dx,
                            dy,
                            scale_units="xy",
                            angles="xy",
                            scale=1,
                            width=0.005,
                            color="b",
                        )


def tracer_aretes(mat):
    global X, Y, figure, ax
    for i in range(len(mat)):
        for j in range(len(mat)):
            if mat[i][j] == 1:
                if i != j:
                    lx = [X[i], X[j]]
                    ly = [Y[i], Y[j]]
                    plt.plot(lx, ly, "b")
                else:
                    lx = [
                        X[i] - 0.1,
                        X[i] - 0.15,
                        X[i] - 0.1,
                        X[i],
                        X[i] + 0.1,
                        X[i] + 0.15,
                        X[i] + 0.1,
                    ]
                    ly = [
                        Y[i],
                        Y[i] + 0.1,
                        Y[i] + 0.2,
                        Y[i] + 0.25,
                        Y[i] + 0.2,
                        Y[i] + 0.1,
                        Y[i],
                    ]
                    plt.plot(lx, ly, "b")


def tracer_graphe_oriente(mat):
    tracer_sommets(len(mat))
    tracer_arc(mat)


def tracer_graphe_non_oriente(mat):
    tracer_sommets(len(mat))
    tracer_aretes(mat)


mat = [[0, 1, 0, 1], [1, 0, 1, 1], [0, 1, 0, 0], [1, 1, 0, 0]]
tracer_graphe_non_oriente(mat)

G5 = {
    "A": ["B", "C"],
    "B": ["A", "D", "E"],
    "C": ["A", "D", "H"],
    "D": ["B", "C", "F"],
    "E": ["B", "D", "F"],
    "F": ["E", "G"],
    "G": ["F", "H"],
    "H": ["G", "C"],
}

import random


def dfs(G, s):
    P = {s: None}
    Q = [s]
    while Q:
        u = Q[-1]
        R = [y for y in G[u] if y not in P]

        if R:
            v = random.choice(R)
            P[v] = u
            Q.append(v)
        else:
            Q.pop()
    return P


G = {
    "A": ["B", "C"],
    "B": ["A", "D", "E"],
    "C": ["A", "D", "H"],
    "D": ["B", "C", "E"],
    "E": ["B", "D", "F"],
    "F": ["E", "G"],
    "G": ["F", "H"],
    "H": ["G", "C"],
}
print(dfs(G, "C"))


def connexe(G):
    if len(G) == len(dfs(G, "A")):
        print("ce graphe est connexe")
    else:
        print("ce graphe n'est pas connexe")


def bfs(G, s):
    P = {s: None}
    Q = [s]
    while Q:
        u = Q.pop(0)
        for v in G[u]:
            if v in P:
                continue
            P[v] = u
            Q.append(v)
    return P


G = {
    "A": ["B", "C"],
    "B": ["A", "D", "E"],
    "C": ["A", "D", "H"],
    "D": ["B", "C", "E"],
    "E": ["B", "D", "F"],
    "F": ["E", "G"],
    "G": ["F", "H"],
    "H": ["G", "C"],
}

print(bfs(G, "C"))
# plt.show()
