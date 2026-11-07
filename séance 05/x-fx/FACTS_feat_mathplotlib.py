import math

def factorielle(N):
    resultat = 1
    for i in range(1, N + 1):
        resultat = resultat * i
    return resultat

for n in [2, 10, 20, 50]:
    print(n, "! =", factorielle(n))
    print("math.factorial :", math.factorial(n))
