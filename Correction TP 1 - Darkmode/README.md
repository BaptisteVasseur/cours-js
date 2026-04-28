# TP 1 — Dark mode

Ce README donne la methode et la logique du TP.
Les explications ligne par ligne sont deja dans `app.js`.

## Ce qu'il faut comprendre

Un dark mode, c'est juste un changement d'etat:

- etat normal (theme clair/ligth mode)
- etat sombre (dark mode)

Le JavaScript sert a changer cet etat.
Le CSS sert a changer le look quand l'etat change.

## Logique de conception

La bonne logique pour implémenter ce genre de fonctionnalité :

1. Choisir ou stocker l'etat (ici une classe sur `body`).
2. Faire une action utilisateur (clic sur le bouton).
3. Changer l'etat quand l'utilisateur clique.
4. Laisser le CSS adapter automatiquement les couleurs.
5. Mettre un texte clair sur le bouton pour guider l'utilisateur.

## Pourquoi cette approche est bonne

- C'est simple a comprendre.
- C'est facile a maintenir.
- Le JavaScript ne gere pas les couleurs (il gere seulement l'etat).
- Le CSS fait son travail de style.

## Erreurs frequentes à éviter

- Mettre trop de logique de style dans le JavaScript.
- Oublier `defer` et lancer le script trop tot.
- Ne pas mettre a jour le texte du bouton (UX confuse).
- Modifier plusieurs elements un par un au lieu de poser une classe globale.

## Pistes d'amelioration

- Sauvegarder le choix du theme dans `localStorage`.
- Lire le theme prefere du systeme (`prefers-color-scheme`).
- Ajouter une icone soleil/lune.
- Ajouter `aria-pressed` pour l'accessibilite.

## Mini check-list de validation

- Le clic change bien le theme.
- Le texte du bouton est toujours coherent.
- Le style s'applique a toute la page.
- Le retour au theme clair fonctionne aussi.
