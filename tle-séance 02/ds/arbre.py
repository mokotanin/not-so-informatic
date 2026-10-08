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


Exemple4 = (
    "x",
    ("-", (3, None, None), (2, None, None)),
    ("+", (7, None, None), ("/", (10, None, None), (2, None, None))),
)


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


# dessiner(Exemple4)


def operation(s):
    x = racine(s)
    u = fg(s)
    v = fd(s)
    if x == "+":
        return operation(u) + operation(v)
    elif x == "-":
        return operation(u) - operation(v)
    elif x == "*":
        return operation(u) * operation(v)
    elif x == "/":
        return operation(u) / operation(v)
    else:
        return racine(s)


print(operation(Exemple4))
dessiner(Exemple4)
