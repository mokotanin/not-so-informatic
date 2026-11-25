class Sommet:
    def __init__(self, cle):
        self.Cle = cle
        self.Couleur = "Blanc"

    def construire(self, val, coul):
        self.Cle = val
        self.Couleur = coul


class File:
    def __init__(self):
        self.__file = []

    def construire(self):
        # Réinitialise la file
        self.__file = []

    def enfiler(self, x):
        # On ajoute en fin de liste (queue)
        self.__file.append(x)

    def defiler(self):
        # On retire en tête de liste (front) -> FIFO
        if self.est_vide():
            return None
        return self.__file.pop(0)

    def est_vide(self):
        return len(self.__file) == 0

    def obtenir_file(self):
        return self.__file


class Pile:
    def __init__(self):
        self.__pile = []

    def construire(self):
        self.__pile = []

    def empiler(self, x):
        # On ajoute en fin de liste (sommet de pile)
        self.__pile.append(x)

    def depiler(self):
        # On retire en fin de liste -> LIFO
        if self.est_vide():
            return None
        return self.__pile.pop()

    def est_vide(self):
        return len(self.__pile) == 0

    def obtenir_pile(self):
        return self.__pile


class Graphe:
    def __init__(self):
        self.ListeS = []
        self.ListeAdj = {}

    def AjouterSommet(self, s):
        self.ListeS.append(s)
        self.ListeAdj[s.Cle] = []

    def AjouterArete(self, cle1, cle2):
        # Graphe orienté dans le stockage : un seul sens.
        # (le jeu de test fournit déjà les deux directions)
        self.ListeAdj[cle1].append(cle2)

    def GetSommet(self, cle):
        for i in range(len(self.ListeS)):
            if self.ListeS[i].Cle == cle:
                return self.ListeS[i]
        return None

    def ResetCouleur(self):
        for i in range(len(self.ListeS)):
            self.ListeS[i].Couleur = "Blanc"

    # ---------- Parcours en largeur (BFS) ----------
    def largeur(self, sdep):
        self.ResetCouleur()
        liste_resultat = []
        f = File()
        f.construire()

        s = self.GetSommet(sdep)
        if s is None:
            return liste_resultat

        s.Couleur = "Gris"  # découvert
        f.enfiler(s)

        while not f.est_vide():
            s = f.defiler()
            liste_resultat.append(s.Cle)
            for i in self.ListeAdj[s.Cle]:
                som = self.GetSommet(i)
                if som.Couleur == "Blanc":
                    som.Couleur = "Gris"
                    f.enfiler(som)
            s.Couleur = "Noir"

        return liste_resultat

    # ---------- Parcours en profondeur (DFS) ----------
    def profondeur(self, sdep):
        self.ResetCouleur()
        liste_resultat = []
        p = Pile()
        p.construire()

        s = self.GetSommet(sdep)
        if s is None:
            return liste_resultat

        s.Couleur = "Gris"
        p.empiler(s)

        while not p.est_vide():
            s = p.depiler()
            if s.Couleur == "Noir":
                continue
            liste_resultat.append(s.Cle)
            for i in reversed(self.ListeAdj[s.Cle]):
                som = self.GetSommet(i)
                if som.Couleur == "Blanc":
                    som.Couleur = "Gris"
                    p.empiler(som)
            s.Couleur = "Noir"

        return liste_resultat

        def presencecycle(self, sdep):
            P = Pile()
            s = self.GetSommet(sdep)
            P.empiler(s)
            while P.est_vide() == False:
                som = P.depiler()
                for i in self.ListeAdj[som.Cle]:
                    sv = self.GetSommet(i)
                    if sv.Couleur == "Blanc":
                        P.empiler(sv)
                if som.Couleur == "Noir":
                    return True
                else:
                    som.Couleur = "Noir"

            return False


# ---------- Jeu de test ----------
g = Graphe()
lst_cle = ["A", "B", "C", "D", "E", "F", "G", "H"]
for cle in lst_cle:
    g.AjouterSommet(Sommet(cle))

g.AjouterArete("A", "B")
g.AjouterArete("A", "C")
g.AjouterArete("B", "A")
g.AjouterArete("B", "E")
g.AjouterArete("B", "D")
g.AjouterArete("C", "A")
g.AjouterArete("C", "D")
g.AjouterArete("C", "H")
g.AjouterArete("D", "C")
g.AjouterArete("D", "B")
g.AjouterArete("D", "E")
g.AjouterArete("E", "D")
g.AjouterArete("E", "B")
g.AjouterArete("E", "F")
g.AjouterArete("F", "E")
g.AjouterArete("F", "G")
g.AjouterArete("G", "F")
g.AjouterArete("G", "H")
g.AjouterArete("H", "G")
g.AjouterArete("H", "C")

print("Sommets    :", [s.Cle for s in g.ListeS])
print("Adjacence  :", g.ListeAdj)
print("BFS depuis A :", g.largeur("C"))
print("DFS depuis A :", g.profondeur("A"))
