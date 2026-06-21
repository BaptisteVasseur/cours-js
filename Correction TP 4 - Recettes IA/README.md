# TP 4 - Recettes IA

Correction volontairement simple pour se concentrer sur l'essentiel du TP.

## But du TP

- gerer une liste d'ingredients
- envoyer cette liste a une API avec `fetch` en `POST`
- lire la reponse JSON
- afficher une recette dans le DOM
- sauvegarder les recettes dans `localStorage`

## Logique generale

1. ajouter ou retirer des ingredients
2. construire un prompt avec la liste
3. appeler l'API OpenAI
4. afficher la recette recue
5. enregistrer la recette dans l'historique local

## Fichiers

- `index.html` contient la structure de base
- `style.css` gere uniquement l'affichage
- `app.js` gere la liste, l'appel reseau et l'historique

## Cle API

La cle OpenAI est placee directement dans `app.js` :

```js
const OPENAI_API_KEY = 'sk-REMPLACE-MOI'
```

Remplace cette valeur par ta vraie cle avant de tester.

## Erreurs frequentes

- oublier `await`
- oublier `JSON.stringify()` dans le body du `POST`
- penser que `fetch` lance toujours une erreur sur un 404 ou 500
- stocker un tableau dans `localStorage` sans `JSON.stringify`
- melanger toute la logique dans une seule fonction

## Validation

- le bouton Ajouter refuse les champs vides
- le bouton Proposer une recette reste desactive si la liste est vide
- une recette apparait apres la requete reseau
- l'historique reapparait apres un rafraichissement
- le bouton Vider supprime bien les recettes sauvegardees
