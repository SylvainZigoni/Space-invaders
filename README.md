# Projet javascript, ou l'on va créer une mozaique pour dessiner

On s'inspire du jeu [Space Invaders](https://fr.wikipedia.org/wiki/Space_Invaders).

Voici le résultat attendu : ![rendu](resultat.png)

## Étape 1 - Créer la zone de dessin

-   On va commencer par créer une grille en javascript de 8x8
-   Comme on le fait en javascript, on va passer par l'ajout d'élements au DOM

## Étape 2 - Clic sur pixel

-   On va ici s'occuper de changer la couleur du pixel quand un clic est réalisé sur lui :
-   Au clic, le pixel gris devient noir
-   Au clic, le pixel noir devient gris

## Étape 3 - Ajout d'un formulaire pour la grille

-   Toujours en javascript : Créer un formulaire dans lequel l'utilisateur pourra choisir sa taille de grille (on reste sur un format carré).
-   Un champs pour la taille de grill
-   Un bouton pour valider

## Étape 4 - Ajout d'un champ au formulaire

-   On va ajouter en plus a notre formulaire un champ pour définir la taille de nos pixels.

## Etape 5 - Palette de couleur

-   On va offrir a l'utilisateur le choix de choisir ses couleurs.
-   On propose 4 style :
-   "rempli" (plain),
-   "vide" (empty),
-   "allumé" (light),
-   "syrligné" (highlight)

-   On doit permettre à l'utilisateur de choisir parmi ces 4 styles, une fois choisi, il peut cliquer sur des pixels pour leur appliquer une classe en fonction du style sélectionné.
-   En CSS on associe une couleur à chaque style
