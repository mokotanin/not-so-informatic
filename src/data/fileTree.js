const file = (name, path, language, content) => ({
  type: "file",
  name,
  path,
  language,
  content,
})

const folder = (name, path, children) => ({
  type: "folder",
  name,
  path,
  children,
})

export const fileTree = [
  folder("Algorithmique", "Algorithmique", [
    folder("Tri et recherche", "Algorithmique/Tri et recherche", [
      file(
        "tri_insertion.py",
        "Algorithmique/Tri et recherche/tri_insertion.py",
        "Python",
        `def tri_insertion(valeurs):
    """Trie une liste en place par ordre croissant."""
    for i in range(1, len(valeurs)):
        valeur = valeurs[i]
        j = i - 1

        while j >= 0 and valeurs[j] > valeur:
            valeurs[j + 1] = valeurs[j]
            j -= 1

        valeurs[j + 1] = valeur

    return valeurs

print(tri_insertion([8, 3, 5, 1, 9]))  # [1, 3, 5, 8, 9]`,
      ),
      file(
        "recherche_dichotomique.py",
        "Algorithmique/Tri et recherche/recherche_dichotomique.py",
        "Python",
        `def recherche_dichotomique(tableau, cible):
    gauche, droite = 0, len(tableau) - 1

    while gauche <= droite:
        milieu = (gauche + droite) // 2
        if tableau[milieu] == cible:
            return milieu
        if tableau[milieu] < cible:
            gauche = milieu + 1
        else:
            droite = milieu - 1

    return -1`,
      ),
      file(
        "complexite.md",
        "Algorithmique/Tri et recherche/complexite.md",
        "Markdown",
        `# Mesurer la complexité

La complexité décrit l'évolution du temps d'exécution en fonction de la taille **n** des données.

| Algorithme | Meilleur cas | Cas moyen | Pire cas |
| --- | ---: | ---: | ---: |
| Recherche séquentielle | O(1) | O(n) | O(n) |
| Recherche dichotomique | O(1) | O(log n) | O(log n) |
| Tri par insertion | O(n) | O(n²) | O(n²) |

> La recherche dichotomique nécessite une séquence déjà triée.`,
      ),
    ]),
    folder("Récursivité", "Algorithmique/Récursivité", [
      file(
        "factorielle.py",
        "Algorithmique/Récursivité/factorielle.py",
        "Python",
        `def factorielle(n):
    if n < 0:
        raise ValueError("n doit être positif")
    if n <= 1:
        return 1
    return n * factorielle(n - 1)

for nombre in range(6):
    print(f"{nombre}! = {factorielle(nombre)}")`,
      ),
      file(
        "exercices.md",
        "Algorithmique/Récursivité/exercices.md",
        "Markdown",
        `# Exercices — récursivité

1. Écrire une fonction qui calcule la somme des entiers de 1 à n.
2. Écrire une fonction récursive qui compte le nombre de chiffres d'un entier.
3. Comparer une version récursive et une version itérative de Fibonacci.

Pour chaque fonction, préciser le **cas de base** et le **cas récursif**.`,
      ),
    ]),
  ]),
  folder("Python", "Python", [
    folder("Bases", "Python/Bases", [
      file(
        "variables_et_types.py",
        "Python/Bases/variables_et_types.py",
        "Python",
        `# Types simples
nom = "Ada"          # str
age = 17             # int
moyenne = 16.5       # float
est_inscrite = True  # bool

print(f"{nom} a {age} ans")

# Une liste est modifiable
notes = [14, 17, 12]
notes.append(19)
print(sum(notes) / len(notes))`,
      ),
      file(
        "fonctions.md",
        "Python/Bases/fonctions.md",
        "Markdown",
        `# Fonctions en Python

Une fonction permet de nommer et de réutiliser un traitement.

\`\`\`python
 def aire_rectangle(longueur, largeur):
     return longueur * largeur
\`\`\`

Les paramètres sont les valeurs reçues par la fonction. L'instruction \`return\` renvoie son résultat.`,
      ),
      file(
        "boucles.py",
        "Python/Bases/boucles.py",
        "Python",
        `# Parcourir une séquence
for lettre in "NSI":
    print(lettre)

# Répéter tant qu'une condition est vraie
compteur = 3
while compteur > 0:
    print(compteur)
    compteur -= 1`,
      ),
    ]),
    folder("Structures de données", "Python/Structures de données", [
      file(
        "pile.py",
        "Python/Structures de données/pile.py",
        "Python",
        `class Pile:
    def __init__(self):
        self._elements = []

    def empiler(self, valeur):
        self._elements.append(valeur)

    def depiler(self):
        if not self._elements:
            raise IndexError("pile vide")
        return self._elements.pop()

    def est_vide(self):
        return len(self._elements) == 0`,
      ),
      file(
        "file.py",
        "Python/Structures de données/file.py",
        "Python",
        `from collections import deque

file = deque()
file.append("Alice")  # Enfiler
file.append("Bilal")

premier = file.popleft()  # Défiler
print(premier)  # Alice
print(list(file))  # ['Bilal']`,
      ),
    ]),
  ]),
  folder("Bases de données", "Bases de données", [
    folder("SQL", "Bases de données/SQL", [
      file(
        "schema.sql",
        "Bases de données/SQL/schema.sql",
        "SQL",
        `CREATE TABLE Eleve (
    id INTEGER PRIMARY KEY,
    nom TEXT NOT NULL,
    classe TEXT NOT NULL
);

CREATE TABLE Note (
    id INTEGER PRIMARY KEY,
    valeur REAL NOT NULL CHECK (valeur BETWEEN 0 AND 20),
    matiere TEXT NOT NULL,
    eleve_id INTEGER NOT NULL REFERENCES Eleve(id)
);`,
      ),
      file(
        "requêtes.sql",
        "Bases de données/SQL/requêtes.sql",
        "SQL",
        `SELECT Eleve.nom, Note.matiere, Note.valeur
FROM Eleve
JOIN Note ON Note.eleve_id = Eleve.id
WHERE Note.valeur >= 15
ORDER BY Note.valeur DESC;

-- Compter les élèves par classe
SELECT classe, COUNT(*) AS effectif
FROM Eleve
GROUP BY classe;`,
      ),
      file(
        "modèle_relationnel.md",
        "Bases de données/SQL/modèle_relationnel.md",
        "Markdown",
        `# Modèle relationnel

- Une **relation** est représentée par une table.
- Une **clé primaire** identifie chaque ligne de façon unique.
- Une **clé étrangère** référence une autre table.
- Une jointure rassemble des informations liées.

On évite les redondances en séparant les entités dans plusieurs tables.`,
      ),
    ]),
  ]),
  folder("Réseaux", "Réseaux", [
    file(
      "adressage_ip.md",
      "Réseaux/adressage_ip.md",
      "Markdown",
      `# Adressage IP

Une adresse IPv4 est composée de **32 bits**, souvent écrits en quatre octets :

\`192.168.1.24\`

Le masque de sous-réseau distingue la partie réseau de la partie machine. Avec un masque \`/24\`, les 24 premiers bits identifient le réseau.`,
    ),
    file(
      "modele_tcp_ip.md",
      "Réseaux/modele_tcp_ip.md",
      "Markdown",
      `# Le modèle TCP/IP

1. **Application** — HTTP, DNS, SMTP
2. **Transport** — TCP ou UDP
3. **Internet** — IP et routage
4. **Accès réseau** — Ethernet, Wi-Fi

Chaque couche ajoute ses informations de contrôle avant l'envoi.`,
    ),
    file(
      "client_http.py",
      "Réseaux/client_http.py",
      "Python",
      `from urllib.request import urlopen

url = "https://example.com"
with urlopen(url, timeout=5) as reponse:
    contenu = reponse.read(120).decode("utf-8")
    print(reponse.status)
    print(contenu)`,
    ),
  ]),
  folder("Web", "Web", [
    file(
      "index.html",
      "Web/index.html",
      "HTML",
      `<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Mon premier site</title>
  </head>
  <body>
    <main>
      <h1>Bonjour, NSI !</h1>
      <p>Le Web relie des documents grâce aux hyperliens.</p>
    </main>
  </body>
</html>`,
    ),
    file(
      "dom.js",
      "Web/dom.js",
      "JavaScript",
      `const bouton = document.querySelector("button")
const compteur = document.querySelector("output")
let valeur = 0

bouton.addEventListener("click", () => {
  valeur += 1
  compteur.textContent = valeur
})`,
    ),
  ]),
]

export function flattenTree(nodes, ancestors = []) {
  return nodes.flatMap((node) => {
    const entry = { ...node, ancestors }
    return node.type === "folder"
      ? [entry, ...flattenTree(node.children, [...ancestors, node])]
      : [entry]
  })
}
