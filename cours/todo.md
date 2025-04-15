# TODO :

# Cours 1 : Compteur

## Partie 1 :

- Récupérer les 2 boutons pour incrément/décrementer le compteur 
- Modifier le HTML du compteur en fonction de la valeur du compteur

## Partie 2 :

- Ecouter le clavier pour incrément/décrémenter/reset le compteur
- Empecher le compteur de descendre en dessous de 0
- Changer la couleur du compter :
  > Si compteur > 60 -> Afficher le compteur en orange
  > Si compteur > 120 -> Afficher le compteur en rouge

## Partie 3 (avancée) :

- Avoir plusieurs compteurs sur la page (getElementById -> querySelector)
- Pouvoir ajouter des compteurs directement en Javascript
- Pouvoir selectionner/supprimer des compteurs 
- Pouvoir sauvegarder ces compteurs dans le navigateur


# Cours 2 : Liste de course  

## Partie 1 :

- Récupérer le nom de l'ingrédient et la quantité lors du click sur le bouton "Ajouter"
- Ajouter l'ingrédient et la quantité à la liste de course
- Modifier l'affichage en conséquence
- Faire le bouton pour supprimer un ingrédient de la liste de course
- Supprimer un ingrédient spécifique en cliquant sur le bouton supprimer de l'ingrédient
- Modifier l'affichage en conséquence

## Partie 2 :

- Sauvegarder les ingrédients dans le localStorage pour garder les ingrédients après un refresh de la page
- Récupérer les ingrédients du localStorage pour les afficher lors du chargement de la page

## Partie 3 (avancée, optionnelle pour l'instant) :

- Filtrer les ingrédients (cocher/décocher) pour les afficher ou non
- Générer une liste de course à partir du nom d'une recette (en utilisant une API d'intelligence artificielle)


# Cours 3 : Ajouter des recettes / Les afficher sur la page d'accueil

- Rendre la création des ingrédients dynamique sur la page (comme pour la liste de course)
- Rendre la création des étapes dynamiques sur la page (comme pour la liste de course)

- Écouter le click sur le bouton pour créer la recette et récupérer toutes les valeurs 
et stocker tout ça dans un object JS qui sera ensuite transformé en JSON
- Sauvegarder le json créé dans le localStorage

```json
{ 
  "nom": "Nom de la recette",
  "photo": "URL de la photo",
  "categorie": "Catégorie",
  "ingredients": [
    {
      "nom": "Nom de l'ingrédient",
      "quantite": "Quantité"
    },
    {
      "nom": "Nom de l'ingrédient",
      "quantite": "Quantité"
    }
  ],
  "etapes": [
    "Etape 1",
    "Etape 2",
    "Etape 3"
  ]
}
```


> Une recette doit être sauvegardée sous le format json (avec un objet)

- Afficher les recettes sur la page d'accueil 


# Cours 4 : Générer une recette avec l'IA

// TODO
