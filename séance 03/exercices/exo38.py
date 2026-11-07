import time

quitter = 'n'
while quitter != 'o':
    print('Heure courante ', time.strftime('%H:%M:%S'))
    quitter = input("Voulez-vous quitter le programme (o/n) ? ")

print("A bientôt")
