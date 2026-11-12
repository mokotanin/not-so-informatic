# Séance 10 / 12

1. [code(Sic.)](<./code(Sic)/>) (html et css)
2. [pipo](./popipopipopipo/) (php)
3. [jarvanIV](./jsarvanIV/)

# Dépendances

```command prompt (admin)
mklink "C:\xampp\htdocs\NAME.php" "C:\PATH\TO\SOURCE.php"
```

- [PHP](https://www.php.net/)
- [XAMPP](https://www.apachefriends.org/fr/index.html)

## Configurer XAMPP

> [!IMPORTANT]
> Si le bouton `start` fonctionne sans rien faire, configurer XAMPP n'est _pas nécessaire_.

1. Cliquer sur `config` de `Apache`
2. Cliquer sur `httpd.conf`
3. Chercher `80`
4. Remplacer `Listen 80` par `Listen 82`
5. Cliquer sur `suivant`
6. Changer `Servername localhost:80` en `Servername localhost:82`
7. Sauvegarder
8. Refaite la première étape et cliquer sur `httpd-ssl.conf`
9. Changer `Listen 443` en `Listen 4433`
10. Sauvegarder et essayer de démarrer `Apache`
