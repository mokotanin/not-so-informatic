L = [1, 7, 9, 15, 5, 20, 10, 8]
mon_tab = [p**2 for p in L if p < 10]
print(mon_tab)

L = [n for n in range(0, 16)]
L_pair = [2 * n for n in L if n % 2 == 0]
print(L)
print(L_pair)

L = [n for n in range(0, 16)]
L_finale = [2 * n if n % 2 == 0 else 3 * n for n in L]
print(L)
print(L_finale)

L = [[0, "a"], [2, "b"], [3, "c"]]
L_finale = []
for nombre, texte in L:
    L_finale.append(nombre * 2)
    L_finale.append(texte * 3)
print(L)
print(L_finale)
