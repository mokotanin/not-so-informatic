import string


class Alphabet_majuscules:  # classe mere
    def __init__(self):
        self.lettres = string.ascii_uppercase


class Alphabet_miniscules(Alphabet_majuscules):  # classe fille de Alpha maju
    def __init__(self):
        Alphabet_majuscules.__init__(self)  # on récupere les majuscules
        self.lettres = self.lettres.lower()  # on les mets en minuscules


class Alphabet_trie(Alphabet_miniscules):
    def __init__(self):
        Alphabet_miniscules.__init__(self)
        self.voyelles = []
        self.consonnes = []
        for lettres in self.lettres:
            if lettres in "aeiouy":
                self.voyelles.append(lettres)
            else:
                self.consonnes.append(lettres)

    # methode (fonction)

    def liste_vers_chaine(self):
        self.voyelles_chaine = "".join(self.voyelles)
        self.consonnes_chaine = "".join(self.consonnes)


maj = Alphabet_majuscules()  # on crée un objet maj qui est de type majuscule,
# on appele cela instencier une classe
# a partir de mtn le self sera changer par maj pour cet objet la
minuscules = Alphabet_miniscules()  # on crée un objet minuscules

test = Alphabet_trie()
test.liste_vers_chaine()
print(test.consonnes_chaine, test.voyelles_chaine)


print(test.voyelles)
print(test.consonnes)


print(maj.lettres)  # on affiche la methode lettre de l'objet maj
print(minuscules.lettres)


toutou = Alphabet_majuscules()
print(toutou.lettres)
