def Tri_min(t):
    n = len(t)
    for i in range(n - 1):
        minimum = t[i]
        posmin = i
        for j in range(i + 1, n):
            if t[j] < minimum:
                minimum = t[j]
                posmin = j
        t[posmin] = t[i]
        t[i] = minimum
    return t

print(Tri_min([5, 9, -1, 2, 7]))
