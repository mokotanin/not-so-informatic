M1 = [[2, 5, 1], [0, 1, 2]]
M2 = [[20, -5, 11], [10, -1, 5]]

M = []
for i in range(len(M1)):
    ligne = []
    for j in range(len(M1[i])):
        ligne.append(M1[i][j] + M2[i][j])
    M.append(ligne)

print("M1=", M1)
print("M2=", M2)
print("M=", M)
