# TODO :

# Cours 1 : Compteur

## Partie 1 :

- Récupérer les 2 boutons pour incrément/décrementer le compteur
- Modifier le HTML du compteur en fonction de la valeur du compteur

## Partie 2 :

- Ecouter le clavier pour incrément/décrémenter/reset le compteur
- Empecher le compteur de descendre en dessous de 0
- Changer la couleur du compter :
  > Si compteur > 10 -> Afficher le compteur en orange
  > Si compteur > 20 -> Afficher le compteur en rouge

## Partie 3 (avancée) :

- Avoir plusieurs compteurs sur la page (getElementById -> querySelector)
- Pouvoir ajouter des compteurs directement en Javascript
- Pouvoir supprimer des compteurs
- Pouvoir sauvegarder ces compteurs dans le navigateur


# Cours 2 : Liste de course

## Partie 1 :

- Récupérer le nom de l'ingrédient et la quantité lors du click sur le bouton "Ajouter"
- Ajouter l'ingrédient et la quantité à la liste de course
- Modifier l'affichage en conséquence
- Faire le bouton pour supprimer tous les ingrédients de la liste de course
- Supprimer un ingrédient spécifique en cliquant sur le bouton supprimer de l'ingrédient
- Modifier l'affichage en conséquence

## Partie 2 :

- Sauvegarder les ingrédients dans le localStorage pour garder les ingrédients après un refresh de la page
- Récupérer les ingrédients du localStorage pour les afficher lors du chargement de la page
- Quand je charge la page, si la liste est vide, je veux par défaut les ingrédients suivants : "Pates" (quantité : 500g), Badoit (quantité : 2 bouteilles)

## Partie 3 (avancée, optionnelle pour l'instant) :

- Filtrer les ingrédients (cocher/décocher) pour les afficher ou non
- Générer une liste de course à partir du nom d'une recette (en utilisant une API d'intelligence artificielle)


# Cours 3 : Ajouter des ingrédients

## Partie 1 :

- Créer un compte sur ChatGPT, ajouter du crédit, créer une clé API et l'enregistrer dans un endroit sécurisé.
- Récupérer le nom, la photo, la catégorie, les ingrédients (nom et quantité), les étapes de la recette et les sauvegarder dans un objet JSON dans le local storage

```json
{ 
  "nom": "Nom de la recette",
  "photo": "URL de la photo",
  "categorie": "Catégorie de la recette",
  "ingredients": [
    {
      "nom": "Nom de l'ingrédient",
      "quantite": "Quantité de l'ingrédient"
    }
  ],
  "etapes": [
    "Etape 1",
    "Etape 2",
    "Etape 3"
  ]
}
```
