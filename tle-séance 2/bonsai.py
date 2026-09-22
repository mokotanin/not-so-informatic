import queue
import random

import matplotlib

matplotlib.use("TkAgg")

import matplotlib.pyplot as plt

plt.rcParams["figure.figsize"] = (20, 6)


def vide():
    return None


def racine(t):
    return t[0]


def fg(t):
    return t[1]


def fd(t):
    return t[2]


def fils(t):
    return (fg(t), fd(t))


def est_vide(t):
    return t == None


def arbre(x, u, v):
    return (x, u, v)


"""exemple = (
    2,
    (1, (0, None, None), None),
    (
        5,
        (4, (3, None, None), None),
        (
            12,
            (9, (8, (6, None, (7, None, None)), None), (10, None, (11, None, None))),
            (
                13,
                None,
                (
                    14,
                    None,
                    (18, (17, (15, None, (16, None, None)), None), (19, None, None)),
                ),
            ),
        ),
    ),
)"""

"""exemple = (
    "A",
    ("B", ("C", None, ("E", None, None)), ("D", None, None)),
    ("F", ("G", ("I", None, None), None), ("H", None, ("J", None, None))),
)"""

exemple = (
    8,
    (3, (1, None, None), (6, (4, None, None), (7, None, None))),
    (10, None, (14, (13, None, None), None)),
)


def nombre_noeuds(t):
    if est_vide(t):
        return 0
    else:
        _, u, v = racine(t), fg(t), fd(t)
        return nombre_noeuds(u) + nombre_noeuds(v) + 1


print(nombre_noeuds(exemple))


def liste_feuilles(t):
    if est_vide(t):
        return []
    else:
        x, u, v = racine(t), fg(t), fd(t)
        if est_vide(u) and est_vide(v):
            return [x]
        else:
            return liste_feuilles(u) + liste_feuilles(v)


print(liste_feuilles(exemple))


def nombre_feuilles(t):
    if est_vide(t):
        return 0
    else:
        x, u, v = racine(t), fg(t), fd(t)
        if est_vide(u) and est_vide(v):
            return 1
        else:
            return nombre_feuilles(u) + nombre_feuilles(v)


print(nombre_feuilles(exemple))


def hauteur(t):
    if est_vide(t):
        return 1  # départ d'une racine = 1
    else:
        u, v = fg(t), fd(t)
        return 1 + max(hauteur(u), hauteur(v))


print(hauteur(exemple))


def dessiner(t, labels=True):
    d = 512
    pad = 20
    dy = (d - 2 * pad) / (hauteur(t))
    dessiner_aux(t, (pad, d - pad, pad, d - pad), dy, labels)
    # plt.axis([0, d, 0, d])
    plt.axis("off")
    plt.show()


def dessiner_aux(t, rect, dy, labels):
    if est_vide(t):
        return
    x1, x2, y1, y2 = rect
    xm = (x1 + x2) // 2
    x, t1, t2 = t

    dessiner_aux(t1, (x1, xm, y1, y2 - dy), dy, labels)
    dessiner_aux(t2, (xm, x2, y1, y2 - dy), dy, labels)
    if labels:
        plt.text(
            xm - 5,
            y2 + 5,
            str(x),
            fontsize=10,
            horizontalalignment="center",
            va="bottom",
        )

    if not est_vide(t1):
        a, b = ((xm, (x1 + xm) // 2), (y2, y2 - dy))
        plt.plot(a, b, "k", marker="o", markerfacecolor="r")

    if not est_vide(t2):
        c, d = ((xm, (x2 + xm) // 2), (y2, y2 - dy))
        plt.plot(c, d, "k", marker="o", markerfacecolor="r")


def rechercher(x, t):
    if est_vide(t):
        return False
    else:
        y, u, v = racine(t), fg(t), fd(t)
        if x < y:
            return rechercher(x, u)
        elif x > y:
            return rechercher(x, v)
        else:
            return True


def maximum(t):
    if est_vide(t):
        return Exception("Arbre vide")
    else:
        x, _, v = racine(t), fg(t), fd(t)
        if est_vide(v):
            return x
        else:
            return maximum(v)


def minimum(t):
    if est_vide(t):
        return Exception("Arbre vide")
    else:
        x, u, _ = racine(t), fg(t), fd(t)
        if est_vide(u):
            return x
        else:
            return minimum(u)


def supprimer(x, t):
    if est_vide(t):
        return None
    else:
        y, u, v = racine(t), fg(t), fd(t)
        print("y", y, "u", u, "v", v)
        if x < y:
            return (y, supprimer(x, u), v)
        elif x > y:
            return (y, u, supprimer(x, v))
        elif est_vide(v):
            return u
        else:
            m = minimum(v)
            print("m", m)
            return (m, u, supprimer(m, v))


dessiner(exemple)
