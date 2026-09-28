class Cartes:
    """Cette classe définit une carte par sa valeur, sa couleur et sa figure"""

    # C'est le docstring : décrit la classe et renvoyé en tapant Cartes.__doc__
    def __init__(self, val, coul):  # on définit le constructeur
        self.__valeur = val  # l'attribut valeur est privé car __
        self.__couleur = coul  # l'attribut couleur est privé car __
        if val == 13:
            self.__figure = "Roi"
        else:
            if val == 12:
                self.__figure = "Dame"
            else:
                if val == 11:
                    self.__figure = "Valet"
                else:
                    self.__figure = "Aucune"  # du 10 à l'as, il n'y a pas de figure

    def __str__(self):
        return "Bonjour"

    def get_valeur(self):
        """Retourne la valeur d'une carte"""
        return self.__valeur

    def get_couleur(self):
        """Retourne la couleur d'une carte"""
        return self.__couleur

    def get_figure(self):
        """Retourne la figure d'une carte"""
        return self.__figure

    def __set_figure(self, val):
        # méthode pour changer la figure d'une carte suivant sa valeur
        if val == 13:
            self.__figure = "Roi"
        else:
            if val == 12:
                self.__figure = "Dame"
            else:
                if val == 11:
                    self.__figure = "Valet"
                else:
                    self.__figure = "Aucune"

    def set_valeur(self, val):
        if 1 <= val < 14:
            self.__valeur = val
            self.__set_figure(val)
            return True

    def set_couleur(self, coul):
        liste_couleur = ["Coeur", "Pic", "Carreau", "Trèfle"]
        if coul in liste_couleur:
            self.__couleur = coul
            return True
        else:
            return False


# ma_carte = Cartes(13, "Coeur")
# print(ma_carte)
# print(ma_carte.__doc__)
# print(ma_carte.set_valeur(11))
# print(ma_carte.set_couleur("Pique"))
# print(ma_carte.get_valeur())
# print(ma_carte.get_couleur())
# print(ma_carte.get_figure())

import random


class JeudeCarte:
    def __CreePaquet(self):
        monpaquet = []
        if self.__NbCartes == 32:
            num_debut = 7
        else:
            num_debut = 2
        for coul in ["Coeur", "Piques", "Carreau", "Trèfle"]:
            for i in range(num_debut, 14, 1):
                nouvelleCarte = Cartes(i, coul)
                monpaquet.append(nouvelleCarte)
        return monpaquet

    def __init__(self, nb):
        self.__NbCartes = nb
        self.__PaquetdeCartes = self.__CreePaquet()

    def GetNbCartes(self):
        """Retourne le Nb de cartes du jeu 32 ou 52"""
        return self.__NbCartes

    def GetPaquet(self):
        """Retourne le paquet de cartes"""
        return self.__PaquetdeCartes

    def MelangerCartes(self):
        """Mélange le paquet de cartes"""
        random.shuffle(self.__PaquetdeCartes)


mon_jeu = JeudeCarte(32)
print(mon_jeu.GetNbCartes())
mon_paquet = mon_jeu.GetPaquet()
for i in range(len(mon_paquet)):
    print(
        f"Valeur : {mon_paquet[i].get_valeur()} \n Couleur : {mon_paquet[i].get_couleur()} Figure : {mon_paquet[i].get_figure()}"
    )
print(
    "*********************************MELANGE DES CARTES****************************************"
)
