#############################################################################
# Jeux de données fournis                                                   #
#############################################################################
from mesures import mesures
from plantes import Plante, plantes

#############################################################################
# Écrire le code de la fonction croissance_moyenne de la question 1         #
#############################################################################


def croissance_moyenne(plantes):
    assert len(plantes) != 0
    somme = 0
    L = plantes

    for el in L:
        if el.croissance <= 0:
            print("moyenne non valable")
        somme += el.croissance

    return somme / len(L)


print(croissance_moyenne(plantes))

#############################################################################
# Écrire le code de la fonction dictionnaire_mesure de la question 2      #
#############################################################################


def dictionnaire_mesure(plantes, mesures):
    resultat = {}
    for pl in plantes:
        resultat[pl.nom] = []
    for mesure in mesures:
        plante = mesure["plante"]
        if plante in resultat:
            resultat[plante].append(mesure)

    return resultat


print(dictionnaire_mesure(plantes, mesures))


#############################################################################
# Fonction défaillante à analyser et corriger pour les questions 3 et 4     #
#############################################################################


def purger_mesures_extremes(liste_mesures):
    """
    Supprime de la liste toutes les mesures dont la température
    n'est pas comprise entre 20 et 25°C inclus.
    """
    for mesure in liste_mesures[:]:  # la folie des grandeurs [:] blud
        if mesure["temperature"] < 20 or mesure["temperature"] > 25:
            liste_mesures.remove(mesure)


def test_purger():
    mesures_test = [
        {"jour": 1, "plante": "Basilic", "temperature": 18.0},
        {"jour": 2, "plante": "Basilic", "temperature": 19.0},
        {"jour": 3, "plante": "Basilic", "temperature": 22.0},
        {"jour": 4, "plante": "Basilic", "temperature": 28.0},
        {"jour": 5, "plante": "Basilic", "temperature": 29.0},
    ]

    purger_mesures_extremes(mesures_test)

    print("Résultat après la purge :")
    for m in mesures_test:
        print(f"Jour {m['jour']} : {m['temperature']}°C")


test_purger()
