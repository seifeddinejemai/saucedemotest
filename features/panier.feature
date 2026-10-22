# language: fr

Fonctionnalité: Gestion du panier
  En tant qu'utilisateur de SauceDemo
  Je veux gérer mon panier d'achat
  Afin de pouvoir commander les articles sélectionnés

  Scénario: Ajouter un article au panier
    Étant donné que je suis sur la page d'inventaire
    Quand j'ajoute "Sauce Labs Backpack" au panier
    Alors le badge du panier doit afficher 1

  Scénario: Ajouter plusieurs articles au panier
    Étant donné que je suis sur la page d'inventaire
    Quand j'ajoute "Sauce Labs Backpack" au panier
    Et j'ajoute "Sauce Labs Bike Light" au panier
    Alors le badge du panier doit afficher 2

  Scénario: Consulter le contenu du panier
    Étant donné que je suis sur la page d'inventaire
    Quand j'ajoute "Sauce Labs Backpack" au panier
    Et je navigue vers le panier
    Alors le panier doit contenir "Sauce Labs Backpack"
    Et la quantité de "Sauce Labs Backpack" doit être 1

  Scénario: Retirer un article du panier
    Étant donné que je suis sur la page d'inventaire
    Quand j'ajoute "Sauce Labs Backpack" au panier
    Et je navigue vers le panier
    Et je retire "Sauce Labs Backpack" du panier
    Alors le badge du panier doit afficher 0
    Et le panier doit être vide