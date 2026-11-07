def factorielle(N):
    resultat = 1
    for i in range(1, N + 1):
        resultat = resultat * i
    return resultat

N = int(input("Valeur de N : "))
print(factorielle(N))
