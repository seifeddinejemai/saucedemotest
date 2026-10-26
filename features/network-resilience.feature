# language: fr

Fonctionnalité: Résilience de l'application face aux erreurs réseau
  En tant que testeur QA
  Je veux simuler des pannes de chargement
  Afin de vérifier que l'application reste stable et utilisable

  Scénario: Échec de chargement des images produits
    Étant donné que je suis sur la page d'inventaire
    Quand je simule une coupure réseau sur les images
    Alors les images doivent être brisées
    Et la page d'inventaire doit rester fonctionnelle