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
