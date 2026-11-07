nom = "Dupont"
print(nom)
print(type(nom))
prenom = "Pierre"
print(prenom)
print(nom, prenom)

nom = "Dupont"
prenom = "Jean"

chaine = nom + prenom
print(chaine)

chaine = prenom + nom
print(chaine)

chaine = prenom + " " + nom
print(chaine)

chaine = chaine + " 18 ans"
print(chaine)

print(len(chaine))

chaine = "Aujourd'hui"
print(chaine)

chaine = "Aujourd'hui"
print(chaine)

chaine = "Première ligne\nDeuxième ligne"
print(chaine)

chaine = """Première ligne
Deuxième ligne"""
print(chaine)

chaine = input("Entrer un nombre réel : ")
print(chaine)
print(type(chaine))

nombre = float(chaine)
print(nombre**2)
