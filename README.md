# 🧪 SauceDemo QA Automation

Framework de test automatisé pour [SauceDemo](https://www.saucedemo.com/), construit avec **Playwright + TypeScript + BDD (Gherkin)**.

[![Playwright Tests](https://github.com/seifeddinejemai/saucedemo-qa-automation/actions/workflows/playwright.yml/badge.svg)](https://github.com/seifeddinejemai/saucedemo-qa-automation/actions/workflows/playwright.yml)
## 🎯 Objectifs

- Tester le parcours utilisateur (login, tri, panier)
- Démontrer une architecture de test maintenable et scalable
- Documenter un bug fonctionnel via un test de caractérisation

## 🏗️ Architecture

| Couche | Rôle | Dossier |
|---|---|---|
| **Features** | Spécifications BDD en français | `features/*.feature` |
| **Steps** | Liaison Gherkin ↔ code | `features/steps/*.ts` |
| **Fixtures** | Injection de dépendances | `fixtures/base.fixture.ts` |
| **Pages** | Page Object Model | `pages/*.ts` |
| **Components** | Composants transverses (header) | `components/*.ts` |
| **Setup** | Authentification persistante | `auth.setup.ts`, `auth.error.setup.ts` |

## 🔐 Isolation des sessions

Deux utilisateurs SauceDemo testés en parallèle grâce à **`storageState`** :

- `standard_user` → `.auth/user.json` → projet `chromium`
- `error_user` → `.auth/error-user.json` → projet `error-user-tests`

Chaque scénario BDD est routé vers la bonne session via des **tags Gherkin** (`@error-user`) et les options `grep` / `grepInvert`.

## 🐛 Bug documenté

Le scénario `@error-user` documente un **bug intentionnel** de SauceDemo : le tri par prix est défectueux pour `error_user`. C'est un **test de caractérisation** — il passera tant que le bug existe et échouera s'il est corrigé, alertant l'équipe.

## 🚀 Installation

\`\`\`bash
npm install
npx playwright install chromium
npm test
\`\`\`

## 📋 Commandes

| Commande | Description |
|---|---|
| `npm test` | Génère + lance tous les tests |
| `npm run bddgen` | Régénère les specs BDD |
| `npm run test:ui` | Mode UI interactif |
| `npm run test:headed` | Mode visible (navigateur) |
| `npx playwright show-report` | Affiche le rapport HTML |

## 🧩 Choix techniques

- **BDD (Gherkin)** : documentation vivante, lisible par le PO
- **Page Object Model** : locators centralisés
- **Component Object** : le header panier est partagé, donc extrait
- **Fixtures personnalisées** : injection propre, pas de `new` dans les tests
- **StorageState** : login effectué une seule fois, gain de ~70% de temps
- **Localisation Gherkin `fr`** : scénarios en français métier

## 📊 Couverture

- ✅ Authentification (2 rôles)
- ✅ Tri de produits (croissant)
- ✅ Gestion panier (ajout, multi-ajout, consultation, retrait)
- ✅ Bug documenté (tri `error_user`)