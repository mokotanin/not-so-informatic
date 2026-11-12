# tle séance 8

> [!note]
> Séance fait juste après la séance 4 car d'après le prof, les graphes se rapprochent des arbres donc c cool

## Première partie
Au début de la séance, il n'y a pas d'exercice où l'on va coder.

2. Donner la matrice d'adjacence du graphe suivant

|  | A | B | C | D | E | F |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **A** | 0 | 1 | 0 | 0 | 0 | 0 |
| **B** | 0 | 0 | 1 | 0 | 1 | 0 |
| **C** | 0 | 1 | 0 | 0 | 1 | 0 |
| **D** | 1 | 1 | 0 | 0 | 0 | 1 |
| **E** | 0 | 0 | 0 | 1 | 0 | 1 |
| **F** | 0 | 0 | 0 | 1 | 0 | 0 |

3. Les listes successeurs et prédécesseurs du graphe ci-dessus
```python
# Successeurs
'A':['B']
'B':['C','E']
'C':['B','E']
'D':['A','B','F']
'E':['D','F']
'F':['D']

# Prédécesseurs
'A':['D']
'B':['A','C','D']
'C':['B']
'D':['E','F']
'E':['B','C']
'F':['D','E']
```

4. Il n'y a pas de symétrie donc il n'est pas orienté. Puisqu'il n'est pas orienté, on ne met pas les flèches.
5. Il est symétrique donc c'est un graphe orienté.

8. La matrice d'adjacence de ce graphe
|  | 1 | 2 | 3 | 4 |
| :--- | :---: | :---: | :---: | :---: |
| **1** | 0 | 1 | 0 | 0 |
| **2** | 1 | 2 | 1 | 0 |
| **3** | 0 | 0 | 1 | 1 |
| **4** | 0 | 0 | 0 | 0 |

> [!warning]
> Source de cette matrice : Damien (pas fiable)
