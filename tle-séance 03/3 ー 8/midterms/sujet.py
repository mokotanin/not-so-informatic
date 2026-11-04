# Proposition intermédiaire:
# Dans l'éditeur PYTHON


class Piece:
    def __init__(self, nom, surface):
        self.nom = nom
        self.surface = surface

    def getNom(self):
        return self.surface

    def getSurface(self): ...
    def setSurface(self, s): ...


class Appartement:
    def __init__(self, nom):
        self.listeDePieces = []
        self.nom = nom

    def ajouter(self, piece):
        pass

    def nbPieces(self): ...

    def getSurfaceTotale(self): ...

    def getListePieces(self): ...
