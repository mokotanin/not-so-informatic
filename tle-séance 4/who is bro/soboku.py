# 素朴 (soboku): naïveté naturelle (souvent perçue positivement)
import time


def recherche_naive(motif, texte):
    tab_occurence = []
    nb_test = 0
    for i in range(len(texte) - len(motif) + 1):
        if texte[i : i + len(motif)] == motif:
            # print(f"occurence à la position: {i}")
            tab_occurence.append(i)
        nb_test += 1
    return tab_occurence, "test", nb_test


with open("Texte_comparaison.txt", "r", encoding="utf-8") as fichier:
    texte = fichier.read()
# print(texte)
a = time.perf_counter()
motif = "en vain cherchent leurs mots"
# print(recherche_naive("e", texte))
print(recherche_naive(motif, texte))
b = time.perf_counter()
print(f"temps d'éxecution: {b - a}")

motif1 = "CTGCGA"
motif2 = "ACTGCGA"


def table(motif):
    table = {}
    j = 0
    for i in range(len(motif) - 1):
        table[motif[i]] = len(motif) - 1 - i

    return table


print(table(motif1))
print(table(motif2))


def broyer_moore_horspool(motif, texte, table):
    nb_test = 0
    N = len(texte)
    n = len(motif)
    positions = []

    i = n - 1  # つずく
