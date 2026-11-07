def rendu(longueur_mur):
    try:
        assert longueur_mur > 0
        pieces = [5, 4, 1]
        rendu = []
        reste = longueur_mur
        for p in pieces:
            quantite = reste // p
            rendu.append(quantite)
            reste = reste % p

        for i in range(len(pieces)):
            print("Il faut prendre", rendu[i], "lego(s) de", pieces[i], "plots")
    except AssertionError:
        print("On ne peut pas construire un mur d'une longueur négative")

mur = int(input("Longueur du mur : "))
rendu(mur)
