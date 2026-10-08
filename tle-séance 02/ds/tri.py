L = [1, 11, 12, 2, 60, 9]

n = len(L)
for i in range(1, n):
    aux = L[i]
    j = i - 1

    while j >= 0 and aux < L[j]:
        L[j + 1] = L[j]
        j = j - 1

    L[j + 1] = aux

print(L)
