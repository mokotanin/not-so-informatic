import datetime
import json
from pathlib import Path

import pronotepy

# 1. Charger les identifiants préalablement sauvegardés
path_credentials = Path("credentials.json")
credentials = json.loads(path_credentials.read_text())

# 2. Connexion via le token
client = pronotepy.Client.token_login(**credentials)

if client.logged_in:
    # 3. IMPORTANT : PRONOTE génère un nouveau jeton à chaque connexion.
    # Il faut impérativement sauvegarder les nouvelles informations pour la prochaine fois.
    new_credentials = client.export_credentials()
    path_credentials.write_text(json.dumps(new_credentials))

    print(f"Connecté en tant que {client.info.name}")

    # --- Exemple 1 : Récupérer les notes du trimestre/semestre ---
    for period in client.periods:
        print(f"--- Période : {period.name} ---")
        for grade in period.grades:
            print(
                f"{grade.subject.name} : {grade.grade}/{grade.out_of} (Moyenne classe : {grade.average})"
            )

    # --- Exemple 2 : Récupérer les devoirs pour aujourd'hui ---
    today = datetime.date.today()
    homework = client.homework(today)
    for work in homework:
        status = "Fait" if work.done else "À faire"
        print(
            f"[{status}] {work.subject.name} pour le {work.date} : {work.description}"
        )
