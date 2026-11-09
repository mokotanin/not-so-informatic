class CompteBancaire:  # crée une classe CompteBancaire
    def __init__(
        self, numeroCompte: int, nom: str, solde
    ):  # introduction des attributs numeroCompte, nom et solde
        self.numeroCompte = numeroCompte
        self.nom = nom
        self.solde = solde

    def Versement(self, montant):  # ajoute montant au solde
        self.solde = self.solde + montant

    def Retrait(self, montant):  # retire montant au solde
        if self.solde < 0:  # impossible de faire un retrait si le solde est négatif
            return "Votre solde est à 0 ou moins"

        else:
            self.solde = self.solde - montant

    def Agios(
        self, taux=0.05
    ):  # applique les agios avec taux = 5%. possible seulement si solde < 0
        if self.solde < 0:
            montant_agios = abs(self.solde) * taux
            self.solde = self.solde - montant_agios

        else:
            return "Votre solde n'est pas éligible aux Agios"

    def afficher(self):  # affiche les informations de compte
        print(
            f"Compte numéro : {self.numeroCompte} \n Nom : {self.nom} \n Solde : {self.solde} euros "
        )


compte1 = CompteBancaire(13081975, "Dupont", 22300)  # crée l'objet type CompteBancaire
compte1.Versement(1500)  # verse 1500€ sur le compte
compte1.Retrait(24000)  # retire 24000€ du compte
compte1.afficher()  # affiche les informations de compte dans la console
