# language: fr

@error-user
Fonctionnalité: Tri des produits (bug connu error_user)
  En tant que testeur QA
  Je veux caractériser le bug de tri pour error_user
  Afin de prévenir toute régression future

  Scénario: Le tri par prix croissant est défectueux pour error_user
    Étant donné que je suis sur la page d'inventaire
    Quand je trie les produits par "Prix (croissant)"
    Alors les prix ne doivent pas être triés par ordre croissant