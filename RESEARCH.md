# accès par la banquise 🐧

## prologue

Le papier suivant décrit mes étapes pour réussir à me connecter et à accéder à internet depuis mon ordinateur opérant sous Arch Linux.\
Si vous n'utilisez pas Linux, voir *proxy*.

### dépendances

C'est surtout une histoire de bien-être parce que alterner entre plusieurs connexions c'est long.

```bash
sudo pacman -S openssl networkmanager openbsd-netcat bind traceroute
```

(si **NetworkManager** n'était pas installé)

```bash
sudo systemctl enable --now NetworkManager
```

> [!TIP]
> Ici, j'utilise **NetworkManager**. faites de même.

## identifiants

Avant de commencer, veuillez bien avoir vos **identifiants réseaux**.

## pkcs12

On va d'abord commencer à voir si on **détecte** les **signaux** qui nous seront utiles:

```bash
nmcli radio wifi on # active le wifi
nmcli device wifi list
```

Une longue **liste** de **wifi** devraient apparaître, mais celui qui nous **intéresse** dans cette section est `Etablissement_invite`.\
C'est un **wifi public** donc on va simplement se connecter.

Je **conseille** d'utiliser la **commande** `nmtui` pour être sûr de savoir ce que l'ont fais et **éviter** les **fautes de frappes**.\
Donc pour se connecter:

```bash
nmtui
```

Utilisez les **flèches directrices** et le **bouton** `Entrée` pour pouvoir naviguer dans le tui (*la souris ne fonctionnera jamais*).\
Allez dans la **section** `Activer une connexion` et **sélectionnez** `Etablissement_invite`.\
Quand un petit `*` apparaît à côté du nom du réseau, ça veut dire qu'on y est bien **connecté**.

À la **différence** de windows, la **page** **ssl** (où on **rentre** nos **identifiants** sur le **navigateur**) ne s'**ouvre pas** toute seule.\
Donc dans votre **navigateur**, écrivez:

```url
http://neverssl.com
```

Quand la **page** avec *Lycée 4.0* apparaît, entrez votre **identifiant** et votre **mot de passe** tout en acceptant les conditions.\
Ensuite, un **bouton** `Téléchargement` apparaît sur la page. **Cliquez** dessus et un fichier `OnboardCertificate.pkcs12` devrait se **télécharger**.

> [!CAUTION]
> Sur cette même page, un **code** `Le fichier de certificat est protégé par mot de passe à l'aide de ce mot de passe : XXXXXX` devrait aussi apparaître, **ne partagez jamais** ce code avec ce fichier.

**Notez bien** ce **code** quelque part, il nous sera **utile** pendant tout le processus de **connexion**.\

On va maintenant **inspecter** le **certificat**:

```bash
openssl pkcs12 -in OnboardCertificate.pkcs12 -clcerts -nokeys
```

Le `Import Password:` est donc le code `XXXXXXXX`.

Le **résultat** de la **commande** devrait **ressembler** à ça:

```bash
Bag Attributes
    localKeyID: 01 00 00 00
    friendlyName: votre_nom_utilisateur
```

Si toutes les **étapes** ci-dessus se sont bien **passées**, on passe **maintenant** à la **connexion** (ne veut pas dire internet encore...)

## extraction crt/key

Mais quelle peut bien être la **sécurité** **annoncée**:

```bash
nmcli -f SSID,SECURITY device wifi list | grep -E 'Etablissement($|_)'
```

Le **retour** sera, normalement:

```bash
Etablissement_enregistrement  --
Etablissement_invite          --
Etablissement_enregistrement  --
Etablissement_invite          --
Etablissement_invite          --
```

Hmm, donc **pas de sécurité annoncée**.

```bash
nmcli -f BSSID,SSID,CHAN,SIGNAL,SECURITY device wifi list
```

Ah, j'ai rien dit. d'après le **résultat** de cette **commande**, `Etablissement` **annonce** `WPA2 802.1X`.\
On en déduit donc que le réseau **utilise** **WPA2-Enterprise / 802.1X**, ce qui est **cohérent** avec notre **certificat PKCS12**.\
Donc d'après toutes les **informations** qu'on a trouvé, on va **configurer** **EAP-TLS** avec **NetworkManager**.

> [!WARNING]
> Les étapes ci-dessous vont traiter des fichiers très sensibles donc faites très attention aux accès de votre ordinateur.

On va d'abord commencer par **extraire** le **certificat** et sa **clé** dans un dossier à part:

```bash
mkdir -p ~/.config/wifi
chmod 700 ~/.config/wifi
```

Puis:

```bash
openssl pkcs12 -in OnboardCertificate.pkcs12 \
  -clcerts -nokeys \
  -out ~/.config/wifi/etablissement-client.crt
```

Quand vous allez faire cette **commande**, un **prompt** apparaîtra en vous demandant `Enter PEM pass phrase`.\
Ce **mot de passe PEM** est **définit par vous**. Vous pouvez y mettre ce que vous voulez, même si je conseille d'utiliser le même mot de passe pour `Import Password`.\
**Réecrivez** simplement ce que vous avez écris quand `Verifying - Enter PEM pass phrase` apparaît.

```bash
openssl pkcs12 -in OnboardCertificate.pkcs12 \
  -nocerts \
  -out ~/.config/wifi/etablissement-client.key # fichier sensible en question
```

Enfin:

```bash
chmod 600 ~/.config/wifi/etablissement-client.key # restreint l'accès au fichier
```

## eap-tls

On va maintenant **crée le profil** EAP-TLS:

```bash
nmcli connection add type wifi \
  ifname "*" \
  con-name "Etablissement" \
  ssid "Etablissement"
```

Puis:

```bash
nmcli connection modify "Etablissement" \
  wifi-sec.key-mgmt wpa-eap \
  802-1x.eap tls \
  802-1x.identity "csiegrist1" \
  802-1x.client-cert "$HOME/.config/wifi/etablissement-client.crt" \
  802-1x.private-key "$HOME/.config/wifi/etablissement-client.key"
```

**Vérifions** maintenant que tout à bien été pris en compte:

```bash
nmcli connection show "Etablissement" | grep 802-1x
```

On devrait y voir:

```text
802-1x.eap:              tls
802-1x.identity:         csiegrist1
802-1x.client-cert:      /home/...
802-1x.private-key:      /home/...
```

Et ENFIN si tout est bon:

```bash
nmcli --ask connection up "Etablissement"
```

Le **mot de passe de la clé privée** est le **PEM** précédemment définit.\
La **commande prend un temps à se faire** donc laisse faire, jusqu'à soit `Connexion activée (chemin D-Bus actif: ...)` ou une **erreur**.\

On est maintenant **authentifié** sur le wifi sauf que on ne peut **pas** encore **accéder** à internet.

```bash
ping -c 4 1.1.1.1
```

## recherche du proxy (facultatif)

Quand je veux `curl`, je ne vais **jamais** réussir à **recevoir** les paquets.

Je vais donc **chercher** la *route*.

```bash
ip route
```

Eureka, je trouve `10.167.227.254`, qui est la **passerelle** HTTP/S.

Avec très peu d'espoirs, je vais quand même tester voir si je reçois une réponse de la **passerelle** en HTTP ou en HTTPS:

```bash
curl -v --connect-timeout 5 http://10.167.227.254
curl -v --connect-timeout 5 https://10.167.227.254
```

- En HTTP: `Connexion refusée`
- En HTTPS: un **certificat** auto-signé `subject: CN=HTTPS-Self-Signed-Certificate-d32...`

Mais comme vu dans la rubrique avant, `ping` **fonctionne**.
donc:

```bash
ping -c 4 10.167.227.254
```

Et là ça fonctionne: `4 paquets transmis, 4 reçus, 0% packet loss`

Je vais donc **vérifier** si c'est un **portail captif**.

```bash
curl -k -v --connect-timeout 5 https://10.167.227.254/
```

Réponse:

```bash
HTTP/1.1 301 Moved Permanently
Location: /web/index.html
```

Ah!

```bash
curl -k https://10.167.227.254/web/index.html
```

Et là on **obtient** du **HTML** avec `Web managerment Home` et un script qui **redirige** vers `/wnm/ssl/web/frame/login.html`.

**Conclusion**: ce n'est **pas** un portail **captif classique**, mais une **interface admin Aruba** (**inutilisable** dans notre cas).

Je vais donc comparer le **réseau local** et **internet**.

**Test des ports locaux:**
```bash
nc -vz -w 5 10.167.227.254 443
```

Réponse: `succeeded!`

**Test des ports internet:**

```bash
nc -vz -w 5 1.1.1.1 80
nc -vz -w 5 1.1.1.1 443
```

Réponse: `timed out`
Donc le TCP sortant direct est bloqué. Il faut donc passer par un **proxy**.

Je vérifie donc la config de NM:

```bash
nmcli device show wlan0 | grep -E 'IP4|DOMAIN|DNS|PROXY|GATEWAY'
```

Résultat:
`IP4.ADDRESS[1]: 10.167.227.50/24`
`IP4.GATEWAY: 10.167.227.254`
`IP4.DNS[1]: 192.168.228.254`
`IP4.DOMAIN[1]: 0680066c-01.etab.ac-strasbourg.fr`

Et d'après `nmcli connection show "Etablissement" | grep -iE 'proxy|802-1x|ipv4'`, il n'y a pas de `proxy.method`. Donc **aucun** **proxy** n'est configuré dans NM.

Je vérifie donc le **DNS institutionnel** trouvé juste au-dessus `192.168.228.254`:

```bash
nslookup google.com 192.168.228.254
```

Et il répond bien:  
`Name: google.com`
`Address: 172.217.17.46`

Mais mais est-ce que **monsieur** **TCP** va vouloir fonctionner...

```bash
nc -vz -w 5 192.168.228.254 53
```

`succeeded!`

```bash
nc -vz -w 5 192.168.228.254 443
```

`timed out`
Hm...

Donc le DNS fonctionne, mais pas le **TCP vers internet**.

Je vais donc essayer de **visualiser** le tout avec un **traceroute**.

```bash
traceroute -4 1.1.1.1
```

Et je vois: `2 wpad.0680066c-01.etab.ac-strasbourg.fr (192.168.228.254)`
Le nom `wpad` est très important : cela signifie **Web Proxy Auto-Discovery**.
Donc le réseau **utilise** bien un **proxy**.

Mon **DHCP** ne m'a pas directement donné le proxy dans NetworkManager car il **existe donc sur internet** et **permet** donc aux **navigateurs** de **découvrir** **automatiquement** le **proxy**.\
C'est pour ça que **aucune commande** venant d'un **terminal** **fonctionne**, car il ne **passe jamais** par le **proxy** énoncé dans le WPAD.

Je vais donc `curl` le wpad pour y voir plus clair

```bash
curl -v --connect-timeout 5 http://wpad.0680066c-01.etab.ac-strasbourg.fr/wpad.dat
```

Et le **fichier** contient bien `return "PROXY 192.168.228.254:3128";` et des **exceptions** pour les réseaux **internes** en `DIRECT`.\
C'est-à- que pour certains sites, on peut se connecter **directement** et pour les autres ont doit **passer** par le proxy `192.168.228.254:3128`.

Je valide donc toutes mes hypothèses:

```bash
curl -v --proxy http://192.168.228.254:3128 https://www.google.com
```

Et le résultat est enfin bon:
`CONNECT www.google.com:443 HTTP/1.1`
`HTTP/1.1 200 Connection established`

**Conclusion**: le problème n'était pas le wifi, ni EAP-TLS, ni le DNS: c'était l'**absence d'utilisation du proxy** (navigateur incapable quoi).

### TL;DR

J'ai donc:

1. **Tester** la passerelle locale ;

2. **Vérifier** si c’est un portail captif ;

3. **Comparer** accès local et accès Internet ;

4. **Vérifier** DNS, routes, NetworkManager ;

5. **Fais** un traceroute ;

6. **Découvert** le WPAD ;

7. **Lu** le fichier wpad.dat ;

8. **Tester** le proxy 192.168.228.254:3128 ;

9. **Conclus** que le réseau impose ce proxy.

## proxy

Mais donc maintenant, comment utiliser ce proxy ?
Malheureusement, va falloir le configurer manuellement pour chaque application...
