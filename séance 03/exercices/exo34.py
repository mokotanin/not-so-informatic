banque = int(input("Code banque : "))
guichet = int(input("Code guichet : "))
compte = int(input("Numéro de compte : "))
cle_saisie = int(input("Clé : "))

cle_calculee = 97 - ((89 * banque + 15 * guichet + 3 * compte) % 97)

if cle_saisie == cle_calculee:
    print("RIB valide")
else:
    print("RIB invalide")
    print("Clé calculée :", cle_calculee)
