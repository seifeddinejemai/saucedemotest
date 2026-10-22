# language: fr

Fonctionnalité: Tri des produits sur la page d'inventaire
  En tant qu'utilisateur de SauceDemo
  Je veux trier les produits par prix
  Afin de trouver les articles les moins ou les plus chers

  Scénario: Tri des prix du plus bas au plus élevé (utilisateur standard)
    Étant donné que je suis sur la page d'inventaire
    Quand je trie les produits par "Prix (croissant)"
    Alors la liste des prix doit être triée par ordre croissant