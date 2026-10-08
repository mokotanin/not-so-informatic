import matplotlib.pyplot as plt

L = [1, 11, 12, 2, 60, 9]


def est_vide(t):
    return t == None


def racine(t):
    return t[0]


def fg(t):
    return t[1]


def fd(t):
    return t[2]


def tri(t):
    n = len(t)
    for i in range(1, n):
        aux = t[i]
        j = i - 1

        while j >= 0 and aux < t[j]:
            t[j + 1] = t[j]
            j = j - 1

        t[j + 1] = aux


def parcours_infixe(t):
    if est_vide(t):
        return []
    else:
        x, u, v = racine(t), fg(t), fd(t)
        return parcours_infixe(u) + [x] + parcours_infixe(v)


def hauteur(t):
    if est_vide(t):
        return 1  # départ d'une racine = 1
    else:
        u, v = fg(t), fd(t)
        return 1 + max(hauteur(u), hauteur(v))


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


def inserer(x, t):
    if est_vide(t):
        return (x, None, None)
    y, u, v = racine(t), fg(t), fd(t)
    if x < y:
        return (y, inserer(x, u), v)
    elif x > y:
        return (y, u, inserer(x, v))
    else:
        return t


def construire_arbre(L):
    t = None
    for x in L:
        t = inserer(x, t)
    return t


L = [1, 11, 12, 2, 60, 9]
arbre = construire_arbre(L)

print(f"liste trié: {parcours_infixe(arbre)}")
dessiner(arbre)
