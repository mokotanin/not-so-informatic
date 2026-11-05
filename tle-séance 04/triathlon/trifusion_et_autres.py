from random import *

from matplotlib import pyplot

cpt_fusion = 0
cpt_minimum = 0
cpt_insertion = 0
cpt_bulle = 0


def Minimum(L, d, f):
    if d == f:
        return L[d]
    else:
        m = (d + f) // 2
        x = Minimum(L, d, m)
        y = Minimum(L, m + 1, f)
        if x < y:
            return x
        else:
            return y


def Maximum(L, d, f):
    if d == f:
        return L[d]
    else:
        m = (d + f) // 2
        x = Maximum(L, d, m)
        y = Maximum(L, m + 1, f)
        if x > y:
            return x
        else:
            return y


L = [28, 30, 42, 56, 7, 15, 23, 11, 14, 55, 13]

print(Maximum(L, 0, len(L) - 1), "maximum de la liste")


def fusion(liste1, liste2):
    liste = []
    i, j = 0, 0
    global cpt_fusion
    while i < len(liste1) and j < len(liste2):
        cpt_fusion += 1
        if liste1[i] <= liste2[j]:
            liste.append(liste1[i])
            i += 1
        else:
            liste.append(liste2[j])
            j += 1
    while i < len(liste1):
        cpt_fusion += 1
        liste.append(liste1[i])
        i += 1
    while j < len(liste2):
        cpt_fusion += 1
        liste.append(liste2[j])
        j += 1
    return liste


def tri_fusion(liste):
    if len(liste) < 2:
        return liste
    else:
        milieu = len(liste) // 2
        liste1 = tri_fusion(liste[:milieu])
        liste2 = tri_fusion(liste[milieu:])
    return fusion(liste1, liste2)


L = [28, 30, 42, 56, 7, 15, 23, 11, 14, 55, 13]
print(tri_fusion(L), "liste triée par la methode tri fusion")


def tri_minimum(t):
    global cpt_minimum
    nb = len(t)
    for i in range(nb):
        min = t[i]  # au départ on dit que le min est le premier élément
        posmin = i  # au départ la poisiton du min est le premier élément
        for j in range(i + 1, nb):
            cpt_minimum += 1
            if t[j] < min:
                min = t[j]  # on récupère la valeur du min
                posmin = j  # on récupère la poisition du min
        # on echange i et j
        t[posmin] = t[i]
        t[i] = min
    return t


L = [28, 30, 42, 56, 7, 15, 23, 11, 14, 55, 13]
print("tri par recherche du minimum", tri_minimum(L))


def tri_insertion(t):
    global cpt_insertion
    nb = len(t)
    for i in range(1, nb):
        aux = t[i]
        j = i - 1
        while j >= 0 and aux < t[j]:
            cpt_insertion += 1
            t[j + 1] = t[j]
            j = j - 1
        t[j + 1] = aux
    return t


L = [28, 30, 42, 56, 7, 15, 23, 11, 14, 55, 13]
print("tri par insertion", tri_insertion(L))


def tri_bulle(t):
    global cpt_bulle
    permutation = True
    passage = 0
    nb = len(t)
    while permutation == True:
        permutation = False
        passage = passage + 1
        for i in range(0, nb - passage):
            cpt_bulle += 1
            if t[i] > t[i + 1]:
                permutation = True
                # On echange les deux elements
                temp = t[i]
                t[i] = t[i + 1]
                t[i + 1] = temp
    return t


L = [28, 30, 42, 56, 7, 15, 23, 11, 14, 55, 13]
print("tri à bulle", tri_bulle(L))

L1 = [28, 30, 42, 56, 7, 15, 23, 11, 14, 55, 13]

cpt_fusion = 0
tri_fusion(L)
print("Compteur tri par fusion:", cpt_fusion)

L = L1[:]
cpt_minimum = 0
tri_minimum(L)
print("Compteur tri par séléction du minimum:", cpt_minimum)

L = L1[:]
cpt_insertion = 0
tri_insertion(L)
print("Compteur tri par insertion:", cpt_insertion)

L = L1[:]
cpt_bulle = 0
tri_bulle(L)
print("Compteur tri bulle:", cpt_bulle)
