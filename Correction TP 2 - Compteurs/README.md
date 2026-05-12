# TP 2 — Compteurs

Ce README explique la logique globale du TP.
Les details ligne par ligne sont dans `app.js`.

## But du TP

Construire une page avec plusieurs compteurs qui peuvent:

- monter (+1)
- descendre (-1, sans aller sous 0)
- revenir a 0
- etre supprimes
- etre controles au clavier quand ils sont actifs

## Idee importante a retenir

Un compteur n'est pas "juste un nombre".
C'est un petit bloc avec:

- une valeur
- des boutons
- un etat visuel

Donc il faut penser en "composant" et pas en code copie-colle.

## Methode simple pour le faire

1. Faire marcher un seul compteur (plus, moins, reset).
2. Creer des fonctions reutilisables (`lireValeur`, `ecrireValeur`, `initialiserCompteur`).
3. Appliquer ces fonctions a tous les compteurs.
4. Ajouter la creation dynamique avec le bouton "Nouveau compteur".
5. Ajouter la gestion clavier avec la notion de compteur actif.

## Pourquoi la variable `conteneurActif` est utile

Le clavier agit sur un seul compteur a la fois.
Cette variable permet de savoir "lequel" est cible.
Sans cette variable, les fleches ne sauraient pas quel compteur modifier.

## Choix techniques utiles pour debutants

- Bloquer la valeur a 0 evite les valeurs negatives.
- Mettre a jour la couleur dans `ecrireValeur` garde un comportement coherent.
- Utiliser `stopPropagation()` evite qu'un clic sur "Supprimer" fasse des actions en trop.
- Initialiser les compteurs deja presents ET les nouveaux evite les oublis.

## Erreurs frequentes

- Oublier d'appeler `initialiserCompteur` apres creation d'un nouveau compteur.
- Changer la valeur sans mettre a jour le style.
- Ecrire plusieurs versions de la meme logique dans plusieurs endroits.
- Supprimer un compteur sans nettoyer l'etat actif.

## Pistes d'amelioration

- Ajouter un bouton "Tout supprimer".
- Sauvegarder les compteurs dans `localStorage` pour qu'en rafraichissant la page, les compteurs précédemment créés restes sur la page
- Permettre de renommer chaque compteur.
- Ajouter une animation quand la valeur change.

## Mini check-list de validation

- Les boutons +, -, reset marchent sur chaque compteur.
- La valeur ne passe jamais sous 0.
- Le compteur actif est bien visible.
- Les fleches haut/bas modifient bien le compteur actif.
- Le bouton "Nouveau compteur" cree un compteur fonctionnel.
