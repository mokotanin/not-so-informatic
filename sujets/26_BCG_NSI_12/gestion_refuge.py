import csv


class Renard:
    """
    Classe représentant un renard dans le refuge.
    Attributs : identifiant, nom, poids, date_arrivee.
    """

    def __init__(self, identifiant, nom, poids, date_arrivee):
        self.identifiant = identifiant
        self.nom = nom
        self.poids = poids
        self.date_arrviee = date_arrivee

    def __str__(self):
        return f"Renard ID {self.identifiant} - {self.nom} (Arrivé le {self.date_arrviee}) "


class Refuge:
    """
    Classe représentant le refuge contenant la liste des renards.
    """

    def __init__(self, nom, adresse):
        self.nom = nom
        self.adresse = adresse
        self.liste_renards = []

    def recueillir(self, un_renard):
        """
        Méthode d'ajout d'un renard au refuge.
        """
        self.liste_renards.append(un_renard)

    def lister_peu_corpulents(self):
        """
        Méthode qui renvoie une liste des Renards dont le poids est < 6.0 kg.
        """
        return [renard for renard in self.liste_renards if renard.poids < 6.0]

    def pourcentage_peu_corpulents(self):
        """
        Méthode qui renvoie le pourcentage des renards peu corpulents.
        """
        if len(self.liste_renards) == 0:
            return 0.0
        return len(self.lister_peu_corpulents()) / len(self.liste_renards) * 100

    def importer_donnees(self, nom_fichier):
        """
        Fonction qui importe les données des renards à partir d'un fichier CSV.
        """
        print(f"Tentative d'importation depuis {nom_fichier}...")
        with open(nom_fichier, "r", encoding="utf-8") as f:
            lignes = csv.DictReader(f, delimiter=";")
            for ligne in lignes:
                renard = Renard(
                    identifiant=int(ligne["id"]),
                    nom=ligne["nom"],
                    poids=float(ligne["poids"]),
                    date_arrivee=ligne["date_arrivee"],
                )
                self.recueillir(renard)
        return print("Importé!")


renard1 = Renard(200, "Oscar", 5.1, "2026-01-01")
print(renard1)

refuge1 = Refuge("SOS Goupil", "12 rue de la Forêt")
refuge1.importer_donnees("donnees_renards.csv")

print("======== Liste de peu corpulents =========")
for renard in refuge1.lister_peu_corpulents():
    print(renard)

print(f"Pourcentage de peu corpulents: {refuge1.pourcentage_peu_corpulents()}%")

# justification
L = [renard for renard in refuge1.lister_peu_corpulents()]

print(
    f"Le nombre de renards peu corpulents {len(L)} ; le nombre de renards dans le refuge {len(refuge1.liste_renards)} "
)
