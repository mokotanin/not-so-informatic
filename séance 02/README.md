# Séance 2

### Réponses
1. NON avec NAND : relier A aux deux entrées de la NAND. S = NAND(A,A) = NON A.
2. ET avec NAND : S = NAND(NAND(A,B), NAND(A,B)).
3. OU avec NAND : S = NAND(NAND(A,A), NAND(B,B)).
4. NON avec NOR : relier A aux deux entrées de la NOR. S = NOR(A,A) = NON A.
5. ET avec NOR : S = NOR(NOR(A,A), NOR(B,B)).
6. OU avec NOR : S = NOR(NOR(A,B), NOR(A,B)).

7. Simplifications algébriques :
- a.b.c.d reste a.b.c.d.
- a.b + a.b.c = a.b.
- a.b + b.c = b.(a + c).
- c.b + a + c = a + c.

Salle de cinéma :
- S8 = 1 si exactement un haut-parleur est allumé.
  S8 = a.b̄.c̄ + ā.b.c̄ + ā.b̄.c.
- S4 = 1 si exactement deux haut-parleurs sont allumés.
  S4 = a.b.c̄ + a.b̄.c + ā.b.c.
- a=b=c=0 : aucune sortie. a=b=c=1 : interdit.

Serrure de coffre :
- A ne peut ouvrir qu’avec B ou C : a.(b + c).
- B, C ou D ne peuvent ouvrir qu’avec au moins deux des autres responsables.
- Une forme possible de l’équation globale :
  S = a.(b+c) + b.(a.c + a.d + c.d) + c.(a.b + a.d + b.d) + d.(a.b + a.c + b.c).
  À simplifier ensuite avec Karnaugh.

## Crédits

[Giselle Bareux](http://gisele.bareux.free.fr/index.htm)
