p1 = {
    "nom": "DUPONT",
    "prenom": "Maxime",
    "notes": [("NSI", 12), ("philo", 8), ("maths", 15), ("anglais", 5)],
}
p2 = {
    "nom": "PETIT",
    "prenom": "Toto",
    "notes": [("NSI", 10), ("philo", 2), ("maths", 18), ("anglais", 16)],
}
p3 = {
    "nom": "DUPONT",
    "prenom": "Maxime",
    "notes": [("NSI", 5), ("philo", 9), ("maths", 10), ("anglais", 4)],
}
p4 = {
    "nom": "DUPONT",
    "prenom": "Maxime",
    "notes": [("NSI", 20), ("philo", 19), ("maths", 15), ("anglais", 14)],
}

db = [p1, p2, p3, p4]
pbs = [(p["nom"], m) for p in db for m, n in p["notes"] if n < 10]
# print(pbs)
print(["Cher monsieur %s, vous devez repasser : %s" % p for p in pbs])
nice = [(p["nom"], m) for p in db for m, n in p["notes"] if n > 16]
# print(nice)
print(
    [
        "Cher monsieur %s, félicitations, vous avez obtenu plus de 16/20 en %s " % p
        for p in nice
    ]
)
