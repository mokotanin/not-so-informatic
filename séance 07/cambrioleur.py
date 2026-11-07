def tri_insertion_decroissant(t):
    for i in range(1, len(t)):
        aux = t[i]
        j = i - 1
        while j >= 0 and aux > t[j]:
            t[j + 1] = t[j]
            j = j - 1
        t[j + 1] = aux
    return t

def sac_a_dos(objets, poids_max):
    rapport = [objets[i][1] / objets[i][0] for i in range(len(objets))]
    ordre = list(range(len(objets)))
    for i in range(1, len(ordre)):
        aux = ordre[i]
        j = i - 1
        while j >= 0 and rapport[aux] > rapport[ordre[j]]:
            ordre[j + 1] = ordre[j]
            j = j - 1
        ordre[j + 1] = aux

    a_prendre = [0] * len(objets)
    reste = poids_max
    for i in ordre:
        poids = objets[i][0]
        quantite = reste // poids
        a_prendre[i] = quantite
        reste = reste - quantite * poids

    poids_total = 0
    valeur_total = 0
    for i in range(len(objets)):
        poids_total += a_prendre[i] * objets[i][0]
        valeur_total += a_prendre[i] * objets[i][1]
        if a_prendre[i] > 0:
            print("Il faut prendre", a_prendre[i], "objet(s)", i + 1)

    print("Poids total :", poids_total, "kg")
    print("Valeur totale :", valeur_total, "€")

objets = [[13, 70], [12, 40], [8, 30], [10, 30]]
sac_a_dos(objets, 30)
