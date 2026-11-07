ma_liste = [5, 8, 6, 9]
print(type(ma_liste))
print(ma_liste[2])
ma_liste[2] = 15
print(ma_liste)
ma_liste.append(33)
print(ma_liste)
del ma_liste[1]
print(ma_liste)
print(len(ma_liste))
print(ma_liste)

chaine = "Dupont Pierre"
print(chaine[0])
print(chaine[1])
print(chaine[1:4])
print(chaine[2:])
print(chaine[-1])
print(chaine[-6:])

m = [[1, 3, 4], [5, 6, 8], [2, 1, 3], [7, 8, 15]]
print(m[1][2])

moyennes = {"math": 12.5, "anglais": 15.8}
print(type(moyennes))
print(moyennes["anglais"])
moyennes["anglais"] = 14.3
print(moyennes)
moyennes["sport"] = 11.0
print(moyennes)

numero = input("Entrer votre numéro de sécurité sociale (13 chiffres) : ")
cle = 97 - (int(numero) % 97)
print("Clé de contrôle :", cle)

import math

print(math.sqrt(4.63 - 15 / 16))

prenom = input("Prénom : ")
nom = input("Nom : ")
print(prenom[0].upper() + nom[0].upper())

prenom = input("Prénom : ")
nom = input("Nom : ")
identifiant = (prenom[0] + nom[:6]).lower()
print(identifiant)

logins = {"alecout": "Hwtrey", "lmartin": "montyo", "jloupin": "gnugpl"}
identifiant = input("Identifiant : ")
mot_passe = input("Mot de passe : ")
ok = identifiant in logins and logins[identifiant] == mot_passe
print(ok)
