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
    if sd in G and (sf in G.get(sd)):
        del G.get(sd)[G.get(sd).index(sf)]
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
    return G


print("Le nombre de sommets de gr est : " + str(nb_sommets(gr)))
print("Le nombre de sommets de G2 est : " + str(nb_sommets(G2)))


def deg_non_oriente(g, s):
    if g.keys != None:
        return len(s)


print("Le degré du sommet A de G2 est : " + str(deg_non_oriente(G2, "A")))
print("Le degré du sommet C de G2 est : " + str(deg_non_oriente(G2, "C")))
