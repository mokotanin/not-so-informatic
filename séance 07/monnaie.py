def rendu(somme_a_rendre):
    try:
        assert somme_a_rendre > 0
        pieces = [200, 100, 50, 20, 10, 5, 2, 1]
        rendu = []
        reste = somme_a_rendre
        for p in pieces:
            quantite = reste // p
            rendu.append(quantite)
            reste = reste % p

        for i in range(len(pieces)):
            if rendu[i] > 0:
                print("Il faut rendre", rendu[i], "pièce(s) de", pieces[i] / 100, "euros")
    except AssertionError:
        print("On ne peut pas rendre une somme négative ou nulle")

somme_a_rendre = float(input("Somme à rendre en euros : "))
rendu(int(somme_a_rendre * 100))
