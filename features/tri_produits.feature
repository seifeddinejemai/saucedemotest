# language: fr

Fonctionnalité: Tri des produits sur la page d'inventaire
  En tant qu'utilisateur de SauceDemo
  Je veux trier les produits
  Afin de trouver les articles selon mes préférences

  Plan du Scénario: Tri des produits par <option> en ordre <ordre>
    Étant donné que je suis sur la page d'inventaire
    Quand je trie les produits par "<option>"
    Alors les "<critere>" doivent être triés par ordre "<ordre>"

    Exemples:
      | option             | critere | ordre       |
      | Prix (croissant)   | prix    | croissant   |
      | Prix (décroissant) | prix    | décroissant |
      | Nom (A à Z)        | nom     | croissant   |
      | Nom (Z à A)        | nom     | décroissant |