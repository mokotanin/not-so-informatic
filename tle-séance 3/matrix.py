from pyDatalog import pyDatalog as pg

pg.create_terms(
    "ours,elephant,chat,chien,petit,grand,brun,noir,blanc,sombre,clair,couleur,taille,X"
)

# on établit les faits
+taille("ours", "grand")
+taille("elephant", "grand")
+taille("chat", "petit")
+taille("chien", "petit")
+couleur("ours", "brun")
+couleur("elephant", "gris")
+couleur("chat", "noir")
+couleur("chien", "blanc")

sombre(X) <= (couleur(X, "noir"))
sombre(X) <= (couleur(X, "brun"))
clair(X) <= (couleur(X, "gris"))
clair(X) <= (couleur(X, "blanc"))

# on pose les questions
print(clair(X))

print(sombre(X) & (taille(X, "grand")))
