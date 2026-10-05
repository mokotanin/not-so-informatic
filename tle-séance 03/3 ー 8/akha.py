class Pile:
    def __init__(self):
        self.__pile = []

    def empiler(self, x):
        self.__pile.append(x)

    def depiler(self):
        return self.__pile.pop()

    def est_vide(self):
        return len(self.__pile) == 0

    def get_pile(self):
        return self.__pile


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


mapile = Pile()
mapile.empiler(3)
mapile.empiler(7)
mapile.empiler(6)
mapile.empiler(8)

mapile.depiler()
mapile.depiler()
mapile.empiler(5)

print("------------------------ PILE -----------------------------")
print(mapile.est_vide())
print(mapile.get_pile())

mafile = File()
mafile.enfiler(3)
mafile.enfiler(6)
mafile.enfiler(7)
mafile.enfiler(8)

mafile.defiler()
mafile.defiler()
mafile.enfiler(5)

mafile.get_file()
print("------------------------ FILE -----------------------------")
print(mafile.est_vide())
print(mafile.get_file())
