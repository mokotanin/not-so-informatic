# Séance 12

### Exercices
#### II) Ping
- La commande ping envoie des paquets ICMP Echo Request.
- La durée affichée est le temps aller-retour en ms.
- Le protocole utilisé est ICMP.

#### III) Protocoles
- Ping : ICMP.
- ipconfig : commande locale de configuration ; elle ne transporte pas de données applicatives.
- Client/serveur générique : TCP (port 55555).
  - SYN : demande de connexion.
  - ACK : accusé de réception.
  - PSH : données à traiter immédiatement.
  - FIN : fin de connexion.
  - RST : réinitialisation.
  - URG : données urgentes.

#### IV) Trois ordinateurs
- Ajouter un switch.
- Choisir par exemple 192.168.1.3/255.255.255.0 pour le troisième PC.
- Tester : ping 192.168.1.1 et ping 192.168.1.2.

#### VI/VII) Réseaux interconnectés
- Sans passerelle, un ping entre 192.168.1.2 et 192.168.10.30 échoue : les réseaux sont différents.
- Configurer la passerelle des PC du réseau 1 à 192.168.1.1 et ceux du réseau 2 à 192.168.10.1.
- Le ping fonctionne ensuite.
- traceroute affiche les routeurs traversés.

#### IX) Serveur web
- Modifier index.html pour afficher : « Bienvenue sur le serveur web de NSI ».
- Démarrer le serveur web sur 192.168.1.2.
- Depuis un navigateur, http://192.168.1.2 affiche la page.

#### X) DNS
- Créer un serveur DNS 192.168.2.10, passerelle 192.168.2.1.
- Ajouter une interface au routeur.
- Configurer le DNS sur tous les PCs : 192.168.2.10.
- Sur le serveur DNS : nom de domaine www.NSI.fr -> 192.168.1.2.
- Démarrer le DNS.
- http://www.NSI.fr doit afficher la page du serveur web.

#### XI) Grand réseau - proposition d’adressage
Masque : 255.255.255.0. DNS : 192.168.5.3.

| Réseau | Ordinateur | IP proposée | Passerelle |
|---|---|---|---|
| R1 | M1 | 192.168.1.1 | 192.168.1.254 |
| R1 | M2 | 192.168.1.2 | 192.168.1.254 |
| R1 | M3 | 192.168.1.3 | 192.168.1.254 |
| R2 | M4 | 192.168.2.1 | 192.168.2.254 |
| R2 | M5 | 192.168.2.2 | 192.168.2.254 |
| R2 | M6 | 192.168.2.3 | 192.168.2.254 |
| R3 | M7 | 192.168.3.1 | 192.168.3.254 |
| R3 | M8 | 192.168.3.2 | 192.168.3.254 |
| R4 | M9 | 192.168.4.1 | 192.168.4.254 |
| R4 | M10 | 192.168.4.2 | 192.168.4.254 |
| R4 | Serveur | 192.168.4.3 | 192.168.4.254 |
| R5 | M11 | 192.168.5.1 | 192.168.5.254 |
| R5 | M12 | 192.168.5.2 | 192.168.5.254 |
| R5 | Serveur DNS | 192.168.5.3 | 192.168.5.254 |
| R6 | M13 | 172.12.0.1 | 172.12.0.254 |
| R6 | M14 | 172.12.0.2 | 172.12.0.254 |
| R6 | M15 | 172.12.0.3 | 172.12.0.254 |

Table des routeurs : recopier celle du PDF :
- A : Switch R1 / Routeur H -> 192.168.7.1/24
- B : Switch R2 / Routeur A -> 192.168.8.2/24 ; Routeur D -> 192.168.9.1/24
- C : Switch R3 / Routeur D -> 192.168.10.2/24 ; Routeur H -> 192.168.11.1/24
- D : Routeur B -> 192.168.9.2/24 ; Routeur C -> 192.168.10.1/24 ; Routeur E -> 192.168.13.1/24
- E : Switch R4 / Routeur D -> 192.168.13.2/24 ; Routeur F -> 192.168.9.1/24
- F : Switch R5 / Routeur E -> 192.168.9.2/24 ; Routeur G -> 192.168.14.2/24
- G : Routeur H -> 192.168.15.2/24 ; Switch R6 / Routeur F -> 192.168.14.1/24
- H : Routeur A -> 192.168.7.2/24 ; Routeur C -> 192.168.11.2/24 ; Routeur F -> 192.168.15.1/24

#### DNS final
- Sur 192.168.5.3 : créer le domaine NSIEXO.fr -> 192.168.4.3.
- Tester depuis M2, M6, M15 et M8 : http://NSIEXO.fr.
- Depuis M2 : traceroute NSIEXO.fr et colorier le parcours.


## Crédits

[Giselle Bareux](http://gisele.bareux.free.fr/index.htm)
