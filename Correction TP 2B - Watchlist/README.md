# TP 2b — Watchlist

Ce README explique la logique globale du TP.
Les details ligne par ligne sont dans `app.js`, `index.html` et `style.css`.

## But du TP

Construire une petite application ou l'utilisateur peut:

- ajouter un media a regarder
- choisir sa categorie
- voir la liste se mettre a jour
- retirer un media de la liste

## Idee importante a retenir

Le code suit un flux tres simple:

1. lire la saisie
2. verifier qu'elle est correcte
3. creer une ligne HTML
4. ajouter cette ligne dans la liste
5. brancher le bouton "Retirer"

Si tu gardes ce schema en tete, le TP devient facile a organiser.

## Pourquoi on utilise `data-categorie`

On stocke la categorie dans `data-categorie` sur chaque ligne (`li`).
Ensuite le CSS lit cette valeur pour choisir une couleur differente à afficher en fonction de la catégorie. (voir le CSS pour voir comment ça fonctionne)

Donc:

- JavaScript met la donnee (`film`, `serie`, ...)
- CSS applique le style visuel selon cette donnee

C'est une tres bonne separation des roles.

## Methode simple pour implementer ce type de feature

1. Faire d'abord un ajout minimal (juste le titre).
2. Ajouter la categorie.
3. Ajouter le bouton retirer.
4. Ajouter le raccourci clavier Entrer.
5. Ajouter le style par categorie.

## Erreurs frequentes

- Accepter un titre vide (ou rempli d'espaces).
- Oublier d'initialiser le bouton "Retirer" sur les lignes existantes.
- Mettre trop de logique de style dans le JavaScript.
- Dupliquer du code au lieu de faire de petites fonctions.

## Pistes d'amelioration

- Eviter les doublons de titre.
- Ajouter un filtre par categorie.
- Ajouter un statut "deja vu / a voir".
- Sauvegarder la liste dans `localStorage`.

## Mini check-list de validation

- Ajouter un media fonctionne.
- Entrer dans le champ titre ajoute aussi le media.
- Le bouton retirer fonctionne sur les anciennes et nouvelles lignes.
- La couleur du bord gauche change selon la categorie.
