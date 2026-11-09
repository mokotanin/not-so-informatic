class Rectangle:  # classe mère
    def __init__(self, longueur, largeur):  # introduction des attributs
        self.longueur = longueur
        self.largeur = largeur

    def Perimetre(self):  # retourne le périmètre du rectangle
        return self.longueur * 2 + self.largeur * 2

    def Surface(self):  # retourne la surface / aire du rectangle
        return self.longueur * self.largeur


class Parallelepipede(Rectangle):  # classe fille qui hérite de Rectangle()
    def __init__(self, longueur, largeur, hauteur):  # un attribut hauteur en plus
        Rectangle.__init__(self, longueur, largeur)
        self.hauteur = hauteur

    def Volume(self):  # retourne le volume du parrallelepipede
        return self.longueur * self.largeur * self.hauteur


monRectangle = Rectangle(
    6, 3
)  # crée l'objet monRectangle avec les paramètres longueur = 6 et largeur = 3
monParallelepipede = Parallelepipede(
    9, 4, 3
)  # crée l'objet monParallelepipede avec les paramètres longueur = 9, largeur = 4 et hauteur = 3

print(
    "Le périmètre de mon rectangle est :", monRectangle.Perimetre()
)  # affiche le périmètre de monRectangle
print(
    "La surface de mon rectangle est :", monRectangle.Surface()
)  # affiche la surface / aire de monRectangle
print(
    "Le volume de mon parallelepipede est :", monParallelepipede.Volume()
)  # affiche le volume de monParallelepipedes
