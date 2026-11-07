L = [8, 5, 6, 1, 17]
print(L[4])
L[1] = 17
L[3] = L[2] + L[4]
for i in range(5):
    print(L[-1])
print(L)

L = [6, 12, 18, 5]
aux = L[0]
L[0] = L[-1]
L[-1] = aux
print(L)

L = [8, 24, 48, 2, 16]
for x in L:
    print(x)


L = [8, 24, 48, 2, 16]
compteur = 0
for x in L:
    if x % 3 == 0:
        compteur += 1
print(compteur)


L = [8, 24, 48, 2, 16]
somme = 0
for x in L:
    if x % 2 == 0:
        somme += x
print(somme)

L = [8, 24, 48, 2, 16]
minimum = L[0]
maximum = L[0]
for x in L:
    if x < minimum:
        minimum = x
    if x > maximum:
        maximum = x
print("Min :", minimum)
print("Max :", maximum)

L = [8, 24, 48, 2, 16]
somme = 0
for x in L:
    somme += x
moyenne = somme / len(L)
vraie = moyenne >= 10
print(vraie)

L = [8, 24, 48, 2, 16]
for i in range(len(L) - 1, -1, -1):
    print(L[i])

L = [13, 27, 50, 42, 3]
for i in range(len(L)):
    L[i] = L[i] + 1
print(L)

L = [8, 24, 42, 16]
dernier = L[-1]
for i in range(len(L) - 1, 0, -1):
    L[i] = L[i - 1]
L[0] = dernier
print(L)

L = [8, 24, 42, 16]
for i in range(len(L) // 2):
    aux = L[i]
    L[i] = L[-1 - i]
    L[-1 - i] = aux
print(L)

L = [8, 27, 42, 17, 4]
LC = []
for x in L:
    LC.append(x**2)
print(LC)

L1 = [8.3, 27.2, 42, 17, 4.1]
L2 = [15, 5.9, 59, 10.1, 2]

L3 = L1[1:]
L4 = L1 + L2

print(L3)
print(L4)
