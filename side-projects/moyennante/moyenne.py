import json
from collections import defaultdict
from pathlib import Path

import matplotlib.dates as mdates
import matplotlib.pyplot as plt
import pronotepy

# ==========================================
# CONFIGURATION
# ==========================================

CREDENTIALS_FILE = Path(__file__).parent / "credentials.json"
OUTPUT_FILE = Path(__file__).parent / "evolution_notes.png"


# ==========================================
# 1. CONNEXION PRONOTE
# ==========================================

with CREDENTIALS_FILE.open("r", encoding="utf-8") as file:
    credentials = json.load(file)

client = pronotepy.Client.token_login(**credentials)

if not client.logged_in:
    raise RuntimeError("Impossible de se connecter à Pronote.")

print(f"Connecté à Pronote : {client.info.name}")

# Important : Pronote renouvelle le token après connexion.
credentials = client.export_credentials()

with CREDENTIALS_FILE.open("w", encoding="utf-8") as file:
    json.dump(credentials, file, indent=4, ensure_ascii=False)


# ==========================================
# 2. FONCTIONS UTILITAIRES
# ==========================================


def to_float(value):
    """Convertit une valeur Pronote en nombre."""
    if value is None:
        raise ValueError("Valeur absente")

    return float(str(value).replace(",", ".").strip())


# ==========================================
# 3. RÉCUPÉRATION DES NOTES
# ==========================================

notes = []
notes_sans_coefficient = 0
notes_ignorees = 0

for periode in client.periods:
    print(f"Récupération : {periode.name}")

    for grade in periode.grades:
        try:
            valeur = to_float(grade.grade)
            bareme = to_float(grade.out_of)

            if bareme <= 0 or grade.date is None:
                notes_ignorees += 1
                continue

            # Coefficient de l'évaluation
            try:
                coefficient = to_float(grade.coefficient)

                if coefficient < 0:
                    raise ValueError("Coefficient négatif")

            except ValueError, TypeError, AttributeError:
                coefficient = 1.0
                notes_sans_coefficient += 1

            # Conversion sur 20
            valeur_sur_20 = valeur / bareme * 20

            matiere = grade.subject.name if grade.subject is not None else "Autre"

            notes.append(
                {
                    "date": grade.date,
                    "valeur": valeur_sur_20,
                    "matiere": matiere,
                    "coefficient": coefficient,
                    "originale": valeur,
                    "bareme": bareme,
                    "periode": periode.name,
                }
            )

        except ValueError, TypeError, AttributeError:
            notes_ignorees += 1
            continue


# ==========================================
# 4. TRI CHRONOLOGIQUE
# ==========================================

notes.sort(key=lambda note: note["date"])

if not notes:
    raise RuntimeError("Aucune note numérique récupérée.")

print(f"\n{len(notes)} notes récupérées.")
print(f"{notes_sans_coefficient} notes sans coefficient exploitable.")
print(f"{notes_ignorees} notes ignorées.")


# ==========================================
# 5. CALCUL DE LA MOYENNE PONDÉRÉE
# ==========================================

moyennes_cumulees = []

somme_ponderee = 0.0
somme_coefficients = 0.0

for note in notes:
    coefficient = note["coefficient"]

    if coefficient > 0:
        somme_ponderee += note["valeur"] * coefficient
        somme_coefficients += coefficient

    if somme_coefficients > 0:
        moyenne = somme_ponderee / somme_coefficients
    else:
        moyenne = None

    moyennes_cumulees.append(moyenne)

moyenne_finale = somme_ponderee / somme_coefficients if somme_coefficients > 0 else None

print("\n========== BILAN ==========")

if moyenne_finale is not None:
    print(f"Moyenne pondérée : {moyenne_finale:.2f}/20")

print(f"Total des coefficients : {somme_coefficients}")


# ==========================================
# 6. REGROUPEMENT PAR MATIÈRE
# ==========================================

notes_par_matiere = defaultdict(list)

for note in notes:
    notes_par_matiere[note["matiere"]].append(note)


# ==========================================
# 7. CRÉATION DU GRAPHIQUE
# ==========================================

plt.style.use("seaborn-v0_8-darkgrid")

fig, ax = plt.subplots(figsize=(15, 8))

couleurs = plt.cm.tab20.colors

# Notes individuelles
for i, (matiere, evaluations) in enumerate(sorted(notes_par_matiere.items())):
    dates = [n["date"] for n in evaluations]
    valeurs = [n["valeur"] for n in evaluations]

    ax.scatter(
        dates,
        valeurs,
        color=couleurs[i % len(couleurs)],
        label=matiere,
        s=65,
        alpha=0.85,
        edgecolors="white",
        linewidths=0.5,
        zorder=3,
    )


# Moyenne cumulée pondérée
dates_moyennes = [
    note["date"]
    for note, moyenne in zip(notes, moyennes_cumulees)
    if moyenne is not None
]

valeurs_moyennes = [moyenne for moyenne in moyennes_cumulees if moyenne is not None]

ax.plot(
    dates_moyennes,
    valeurs_moyennes,
    color="black",
    linewidth=2.5,
    linestyle="--",
    label="Moyenne cumulée pondérée",
    zorder=4,
)


# Ligne de référence à 10/20
ax.axhline(
    y=10,
    color="gray",
    linestyle=":",
    linewidth=1.5,
    label="10/20",
)


# ==========================================
# 8. MISE EN FORME
# ==========================================

ax.set_title(
    "Évolution de mes notes",
    fontsize=18,
    fontweight="bold",
    pad=20,
)

ax.set_xlabel("Date des évaluations", fontsize=12)
ax.set_ylabel("Note sur 20", fontsize=12)

ax.set_ylim(0, 20)

ax.xaxis.set_major_locator(mdates.AutoDateLocator())
ax.xaxis.set_major_formatter(mdates.DateFormatter("%d/%m/%Y"))

ax.grid(True, alpha=0.3)

ax.legend(
    title="Légende",
    bbox_to_anchor=(1.02, 1),
    loc="upper left",
)

plt.xticks(rotation=45)

fig.tight_layout()


# ==========================================
# 9. EXPORT
# ==========================================

fig.savefig(
    OUTPUT_FILE,
    dpi=300,
    bbox_inches="tight",
)

print(f"\nGraphique exporté : {OUTPUT_FILE}")

plt.show()
