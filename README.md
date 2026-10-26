# 🧪 SauceDemo QA Automation

[![Playwright Tests](https://github.com/seifeddinejemai/saucedemotest/actions/workflows/playwright.yml/badge.svg)](https://github.com/seifeddinejemai/saucedemotest/actions/workflows/playwright.yml)
[![Playwright](https://img.shields.io/badge/Playwright-2EAD33?logo=playwright&logoColor=white)](https://playwright.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![BDD](https://img.shields.io/badge/BDD-Gherkin-23D96C)](https://cucumber.io/docs/gherkin/)
[![Node.js](https://img.shields.io/badge/Node.js-20-339933?logo=node.js&logoColor=white)](https://nodejs.org/)

Framework de test automatisé pour [SauceDemo](https://www.saucedemo.com/), construit avec **Playwright**, **TypeScript** et l'approche **BDD (Gherkin)**.

## 🎯 Objectifs

- Tester le parcours utilisateur (authentification, tri, panier).
- Démontrer une architecture de test maintenable et scalable.
- Documenter un bug fonctionnel via un **test de caractérisation** (scénario `@error-user`).

## 🏗️ Architecture

| Couche | Rôle | Dossier / Fichier |
| :--- | :--- | :--- |
| **Features** | Spécifications BDD en français | `features/*.feature` |
| **Steps** | Liaison Gherkin ↔ code | `features/steps/*.ts` |
| **Fixtures** | Injection de dépendances | `fixtures/base.fixture.ts` |
| **Pages** | Page Object Model | `pages/*.ts` |
| **Components** | Composants transverses (ex: Header) | `components/*.ts` |
| **Setup** | Authentification persistante | `auth.setup.ts`, `auth.error.setup.ts` |

## 🔐 Isolation des sessions

Deux utilisateurs SauceDemo sont testés en parallèle grâce au **`storageState`** de Playwright :

- `standard_user` → `.auth/user.json` → Projet `chromium`
- `error_user` → `.auth/error-user.json` → Projet `error-user-tests`

Chaque scénario BDD est routé vers la bonne session via des **tags Gherkin** (`@error-user`) et les options `grep` / `grepInvert` de Playwright.

## 🐛 Bug documenté (Test de caractérisation)

Le scénario tagué `@error-user` documente un **bug intentionnel** de SauceDemo : le tri par prix est défectueux pour cet utilisateur. Le test vérifie que le tri *échoue* (assertion inversée). Il passera tant que le bug existe et échouera s'il est un jour corrigé, alertant l'équipe QA.

## 🚀 Installation & Exécution

```bash
# 1. Installer les dépendances
npm install

# 2. Installer le navigateur Chromium
npx playwright install chromium

# 3. Lancer la suite de tests (génère le BDD + exécute)
npm test