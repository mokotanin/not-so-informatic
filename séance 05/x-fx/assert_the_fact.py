def factorielle(N):
    try:
        assert N >= 0
        resultat = 1
        for i in range(1, N + 1):
            resultat = resultat * i
        return resultat
    except AssertionError:
        print("On ne peut pas calculer la factorielle d'un nombre négatif")
        return "n'existe pas"

for n in [0, 10, -10]:
    print(n, "! =", factorielle(n))
