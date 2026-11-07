t = [12, 0, 5, 10]
x = int(input("Donner le nombre à rechercher : "))

tr = False
i = 0
while i < len(t) and tr == False:
    if t[i] == x:
        tr = True
    i = i + 1

print(tr)

t = [12, 5, 10, 22]

somme = 0
for i in range(len(t)):
    somme = somme + t[i]

moyenne = somme / len(t)
print(moyenne)

t = [12, 5, 10, 22]

maximum = t[0]
for i in range(1, len(t)):
    if t[i] > maximum:
        maximum = t[i]

print(maximum)

tableau = [12, 5, 10, 22]


def x_dans_t(tab):
    x = int(input("Donner le nombre à rechercher : "))
    tr = False
    i = 0
    while i < len(tab) and tr == False:
        if tab[i] == x:
            tr = True
        i = i + 1
    return tr


def max_de_t(tab):
    maximum = tab[0]
    for i in range(1, len(tab)):
        if tab[i] > maximum:
            maximum = tab[i]
    return maximum


def moyenne_de_t(tab):
    somme = 0
    for i in range(len(tab)):
        somme = somme + tab[i]
    return somme / len(tab)


print("Est-ce que x est dans le tableau ? ", x_dans_t(tableau))
print("Max :", max_de_t(tableau))
print("Moyenne :", moyenne_de_t(tableau))
