def dijkstra(G, s):
    s_explore = {s: [0, [s]]}
    s_a_explorer = {}

    for suivant in G[s]:
        s_a_explorer[suivant] = [G[s][suivant], s]

    while s_a_explorer:
        s_min = min(s_a_explorer, key=lambda k: s_a_explorer[k][0])
        longueur_s_min = s_a_explorer[s_min][0]
        precedent_s_min = s_a_explorer[s_min][1]

        for successeur in G[s_min]:
            if successeur in s_a_explorer:
                distance = longueur_s_min + G[s_min][successeur]
                if distance < s_a_explorer[successeur][0]:
                    s_a_explorer[successeur] = [distance, s_min]

        s_explore[s_min] = [longueur_s_min, s_explore[precedent_s_min][1] + [s_min]]

        del s_a_explorer[s_min]
        print("longueur", longueur_s_min, ":", "→".join(s_explore[s_min][1]))

    for sommet in G:
        if sommet not in s_explore:
            print(f"Il n'y a aucun chemin de {s} à {sommet}")

    print()
    return s_explore


Graphe = {
    "A": {"B": 12, "D": 14},
    "B": {"A": 12, "F": 9, "G": 16, "H": 21},
    "C": {"E": 13, "F": 10},
    "D": {"A": 14, "E": 10},
    "E": {"D": 10, "C": 13, "F": 16, "H": 10},
    "F": {"B": 9, "C": 10, "E": 16, "H": 11},
    "G": {"B": 16, "H": 11},
    "H": {"B": 21, "E": 10, "F": 11, "G": 11},
}

dijkstra(Graphe, "A")
