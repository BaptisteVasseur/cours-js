# TP 3 - Pokelist avec Tyradex

Correction volontairement simple pour se concentrer sur l'essentiel du TP.

## But du TP

- recuperer des donnees avec `fetch`
- verifier `response.ok`
- lire le JSON avec `response.json()`
- afficher les Pokemon dans le DOM
- montrer un message en cas d'erreur

## Logique generale

1. lire la generation choisie
2. appeler l'API
3. recuperer le tableau de Pokemon
4. creer une carte pour chaque Pokemon
5. afficher le resultat dans la page

## Fichiers

- `index.html` contient la structure de base
- `style.css` gere uniquement l'affichage
- `app.js` gere le chargement et l'insertion des cartes

## Erreurs frequentes

- oublier `await`
- oublier de tester `response.ok`
- ne pas vider l'ancienne liste avant un nouveau chargement
- melanger toute la logique dans une seule fonction

## Validation

- la generation 1 se charge au demarrage
- changer la generation recharge la liste
- le bouton "Charger" fonctionne
- une erreur s'affiche si l'API repond mal
