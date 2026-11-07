import random

chaine = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

def mot_de_passe(N):
    mdp = ''
    for i in range(N):
        indice = random.randint(0, len(chaine) - 1)
        mdp = mdp + chaine[indice]
    return mdp

print(mot_de_passe(6))
print(mot_de_passe(10))
