# Comment installer WSL sur Windows ?

Bonjour futur génération, dans ce document, nous verrons la tâche ardue qu'est d'installer **Ubuntu** avec WSL.

## Ajouter les fonctionnalités

Pour commencer, il faut activer les **fonctionnalités facultatives** de Windows.

1. Appuyez sur le bouton `Windows`
2. Cherchez `Facultatives`
3. Cliquez sur `Fonctionnalités facultatives`
4. Une fois dans l'application `Paramètres`, cliquez sur `Plus de fonctionnalités Windows`
5. Une fenêtre devrait apparaître
6. Cherchez et cochez `Hyper-V` et `Sous-système Linux pour Windows`
7. Cliquez sur `Ok`
8. Redémarrez

## Installer Ubuntu

On va maintenant passer à la partie installation de **Ubuntu**.

1. Appuyez sur le bouton `Windows` et `R` en même temps.
2. Une petite fenêtre `Exécuter` devrait apparaître
3. Dans le champ texte, écrivez `cmd` et appuyez sur `Entrée`
4. Une fois dans le **terminal**, faites la commande suivante :
```bash
wsl --install -d Ubuntu
```
5. Patientez jusqu'à la fin du téléchargement et de l'installation.

## Configurez Ubuntu
Et enfin, on va configurer votre nom d'utilisateur et un mot de passe.

1. `Create a default Unix user account:` Entrez un nom d'utilisateur
2. `New password:` Entrez un mot de passe (c'est normal de ne ni voir de * ni les lettres que vous écrivez)
3. `Retype new password` Réecrivez le mot de passe
4. `Would you like to opt-in to platform metrics collection (Y/n) ? ...` Appuyez tout simplement sur `Entrée`
5. Le terminal devrait ressembler à ça à présent :
```bash
nom-utilisateur@ORDINATEUR: |
```

GG, l'étape la plus dur de l'année a bien été complétée.

## Réouvrir
Vous remarquerez que si vous fermez le terminal où était ouvert **WSL** et que vous ouvrez un autre terminal, WSL ne sera pas activé d'office.  
Pour utiliser WSL à chaque fois que vous ouvrez un terminal, faites tout simplement :
```bash
wsl
```
