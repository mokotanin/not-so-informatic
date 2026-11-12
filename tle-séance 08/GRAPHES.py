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

ajouter_arc(G2, "A", "B")
ajouter_arc(G2, "A", "C")
ajouter_arc(G2, "A", "D")
ajouter_arc(G2, "B", "C")
ajouter_arc(G2, "B", "D")
ajouter_arc(G2, "C", "D")

print("Graphe G2 :")
for sommet, voisins in G2.items():
    print(f"  {sommet} -> {voisins}")


def supprimer_sommet(G, S):
    if S in G:
        del G[S]
        for cle in G:
            if S in cle:
                index_de_S = G.get(cle).index(S)
        return G
    else:
        print("Impossible de supprimer ce sommet.")
