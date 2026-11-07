def Tri_Insertion(t):
    for i in range(1, len(t)):
        aux = t[i]
        j = i - 1
        while j >= 0 and aux < t[j]:
            t[j + 1] = t[j]
            j = j - 1
        t[j + 1] = aux
    return t

print(Tri_Insertion([6, 4, 5, 1, 9]))
