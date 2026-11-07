# Séance 10 - Architecture matérielle

## Bascule D active sur niveau
- Quand C = 1 : Q suit D.
- Quand C = 0 : Q garde sa valeur précédente.
- Table : D=X, C=0 -> Qn=Qn-1 ; D=0, C=1 -> Qn=0 ; D=1, C=1 -> Qn=1.

## Bascule D à commande sur front
- Q prend la valeur de D uniquement sur le front montant de l’horloge.
- Entre deux fronts, Q reste mémorisé.

## Montage à 3 bascules D en chaîne
- Chaque bascule divise la fréquence par 2.
- Q1 bascule à chaque front montant de H.
- Q2 bascule à chaque front montant de Q1.
- Q3 bascule à chaque front montant de Q2.
- Fréquences : f(Q1)=f(H)/2 ; f(Q2)=f(H)/4 ; f(Q3)=f(H)/8.
- C’est un compteur asynchrone modulo 8.

## Commandes Linux
13) ls /
14) cd / puis ls : on observe la racine et ses répertoires.
15) cd ~ puis ls : retour au répertoire personnel.
16) On peut taper simplement : cd
17) Chemin absolu du fichier cat : /bin/cat
18) mkdir ~/test_nsi
19) touch ~/test_nsi/fic.txt
20) mkdir ~/test_nsi/copie ; cp ~/test_nsi/fic.txt ~/test_nsi/copie/
21) rm -r ~/test_nsi/copie
22) ls -l affiche les droits, le propriétaire, le groupe, la taille, la date et le nom.
23) chmod 754 fic.txt puis ls -l : utilisateur rwx, groupe r-x, autres r--.
24) 751 = rwx r-x --x
    521 = r-x -w- --x
    214 = -w- --x r--
    150 = --x r-x ---
25) rw-r--r-- = 644
    rwxr-xr-x = 755
26) adduser user1 ; adduser user2 ; adduser user3 ; adduser user4
27) addgroup --force-badname groupeA ; addgroup --force-badname groupeB
28) adduser user1 groupeA ; adduser user2 groupeA
29) adduser user3 groupeB ; adduser user4 groupeB
30) mkdir /home/groupeA ; mkdir /home/groupeB
31) chgrp groupeA /home/groupeA ; chgrp groupeB /home/groupeB
32) chmod 770 /home/groupeA ; chmod 770 /home/groupeB
33) ls -ld /home/groupeA /home/groupeB
