class Piece:
    def __init__(self, nom: str, surface: float) -> None:
        self.__nom = nom
        self.__surface = surface

    def getNom(self) -> str:
        return self.__nom

    def getSurface(self) -> float:
        return self.__surface

    def setSurface(self, s) -> None:
        self.__surface = s

    def setNom(self, n) -> None:
        self.__nom = n


cuisine = Piece("cuisine", 10)
salon = Piece("salon", 20)
chambre = Piece("chambre", 10)

print(cuisine.getSurface())

cuisine.setSurface(20)

print(cuisine.getSurface())


class Appartement:
    def __init__(self, nom: str) -> None:
        self.__listeDePieces = []
        self.nom = nom

    def ajouter(self, piece) -> None:
        self.__listeDePieces.append(piece)

    def nbPieces(self) -> float:
        return len(self.__listeDePieces)

    def getSurfaceTotale(self) -> float:
        s_totale = 0
        for ele in self.__listeDePieces:
            s_totale += ele.getSurface()

        return s_totale

    def getListePieces(self):
        L = []
        for ele in self.__listeDePieces:
            L.append(ele.getNom())

        return L


mon_appartement = Appartement("Adam")
mon_appartement.ajouter(cuisine)
mon_appartement.ajouter(salon)
mon_appartement.ajouter(chambre)
print(mon_appartement.nbPieces())
print(mon_appartement.getSurfaceTotale())
print(mon_appartement.getListePieces())
