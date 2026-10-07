# https://i.pinimg.com/736x/97/7d/e9/977de90002e93f8208f4ee9ec9679bf1.jpg


class File:
    def __init__(self):
        self.__file = []

    def enfiler(self, x):
        return self.__file.append(x)

    def est_vide(self):
        return len(self.__file) == 0

    def defiler(self):
        return self.__file.pop(0)  # pop le premier chiffre de la file

    def get_file(self):
        return self.__file


class Noeuds:
    def __init__(self, cle):
        self.cle = cle


class Arbre:
    def __init__(self, cle):
        self.racine = Noeuds(cle)
        self.sag = None
        self.sad = None

    def taille(self, a):
        if a is None:
            return 0
        else:
            return 1 + self.taille(a.sag) + self.taille(a.sad)

    def hauteur(self, a):
        if self.sag == None and self.sad == None:
            return 1
        else:
            return max(self.taille(a.sag), self.taille(a.sad)) - 1


a = Arbre("A")
a.sag = Arbre("B")
a.sag.sag = Arbre("C")
a.sag.sad = Arbre("D")
a.sag.sad.sag = Arbre("E")
a.sag.sad.sad = Arbre("F")
a.sad = Arbre("G")
a.sad.sad = Arbre("H")
a.sad.sad.sag = Arbre("I")

print(a.taille(a))
print(a.hauteur(a))
