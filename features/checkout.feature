# language: fr

Fonctionnalité: Parcours d'achat (Checkout)
  En tant que client de SauceDemo
  Je veux pouvoir finaliser ma commande
  Afin de recevoir mes articles

  Scénario: Réussir un achat complet
    Étant donné que je suis sur la page d'inventaire
    Quand j'ajoute "Sauce Labs Backpack" au panier
    Et je navigue vers le panier
    Et je passe à la caisse
    Et je remplis mes informations de livraison avec "Jean" "Dupont" "75000"
    Et je valide ma commande
    Alors un message de confirmation doit être affiché