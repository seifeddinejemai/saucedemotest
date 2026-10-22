// Generated from: features/panier.feature
import { test } from "../../fixtures/base.fixture.ts";

test.describe('Gestion du panier', () => {

  test('Ajouter un article au panier', async ({ Given, When, Then, header, inventoryPage }) => { 
    await Given('je suis sur la page d\'inventaire', null, { inventoryPage }); 
    await When('j\'ajoute "Sauce Labs Backpack" au panier', null, { inventoryPage }); 
    await Then('le badge du panier doit afficher 1', null, { header }); 
  });

  test('Ajouter plusieurs articles au panier', async ({ Given, When, Then, And, header, inventoryPage }) => { 
    await Given('je suis sur la page d\'inventaire', null, { inventoryPage }); 
    await When('j\'ajoute "Sauce Labs Backpack" au panier', null, { inventoryPage }); 
    await And('j\'ajoute "Sauce Labs Bike Light" au panier', null, { inventoryPage }); 
    await Then('le badge du panier doit afficher 2', null, { header }); 
  });

  test('Consulter le contenu du panier', async ({ Given, When, Then, And, cartPage, header, inventoryPage }) => { 
    await Given('je suis sur la page d\'inventaire', null, { inventoryPage }); 
    await When('j\'ajoute "Sauce Labs Backpack" au panier', null, { inventoryPage }); 
    await And('je navigue vers le panier', null, { header }); 
    await Then('le panier doit contenir "Sauce Labs Backpack"', null, { cartPage }); 
    await And('la quantité de "Sauce Labs Backpack" doit être 1', null, { cartPage }); 
  });

  test('Retirer un article du panier', async ({ Given, When, Then, And, cartPage, header, inventoryPage }) => { 
    await Given('je suis sur la page d\'inventaire', null, { inventoryPage }); 
    await When('j\'ajoute "Sauce Labs Backpack" au panier', null, { inventoryPage }); 
    await And('je navigue vers le panier', null, { header }); 
    await And('je retire "Sauce Labs Backpack" du panier', null, { cartPage }); 
    await Then('le badge du panier doit afficher 0', null, { header }); 
    await And('le panier doit être vide', null, { cartPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/panier.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":8,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Étant donné que je suis sur la page d'inventaire","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"Quand j'ajoute \"Sauce Labs Backpack\" au panier","stepMatchArguments":[{"group":{"start":9,"value":"\"Sauce Labs Backpack\"","children":[{"start":10,"value":"Sauce Labs Backpack","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Alors le badge du panier doit afficher 1","stepMatchArguments":[{"group":{"start":33,"value":"1"},"parameterTypeName":"int"}]}]},
  {"pwTestLine":12,"pickleLine":13,"tags":[],"steps":[{"pwStepLine":13,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"Étant donné que je suis sur la page d'inventaire","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"Quand j'ajoute \"Sauce Labs Backpack\" au panier","stepMatchArguments":[{"group":{"start":9,"value":"\"Sauce Labs Backpack\"","children":[{"start":10,"value":"Sauce Labs Backpack","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"Et j'ajoute \"Sauce Labs Bike Light\" au panier","stepMatchArguments":[{"group":{"start":9,"value":"\"Sauce Labs Bike Light\"","children":[{"start":10,"value":"Sauce Labs Bike Light","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Alors le badge du panier doit afficher 2","stepMatchArguments":[{"group":{"start":33,"value":"2"},"parameterTypeName":"int"}]}]},
  {"pwTestLine":19,"pickleLine":19,"tags":[],"steps":[{"pwStepLine":20,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"Étant donné que je suis sur la page d'inventaire","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"Quand j'ajoute \"Sauce Labs Backpack\" au panier","stepMatchArguments":[{"group":{"start":9,"value":"\"Sauce Labs Backpack\"","children":[{"start":10,"value":"Sauce Labs Backpack","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":22,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"Et je navigue vers le panier","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Alors le panier doit contenir \"Sauce Labs Backpack\"","stepMatchArguments":[{"group":{"start":24,"value":"\"Sauce Labs Backpack\"","children":[{"start":25,"value":"Sauce Labs Backpack","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":24,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Et la quantité de \"Sauce Labs Backpack\" doit être 1","stepMatchArguments":[{"group":{"start":15,"value":"\"Sauce Labs Backpack\"","children":[{"start":16,"value":"Sauce Labs Backpack","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":47,"value":"1"},"parameterTypeName":"int"}]}]},
  {"pwTestLine":27,"pickleLine":26,"tags":[],"steps":[{"pwStepLine":28,"gherkinStepLine":27,"keywordType":"Context","textWithKeyword":"Étant donné que je suis sur la page d'inventaire","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"Quand j'ajoute \"Sauce Labs Backpack\" au panier","stepMatchArguments":[{"group":{"start":9,"value":"\"Sauce Labs Backpack\"","children":[{"start":10,"value":"Sauce Labs Backpack","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":30,"gherkinStepLine":29,"keywordType":"Action","textWithKeyword":"Et je navigue vers le panier","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"Et je retire \"Sauce Labs Backpack\" du panier","stepMatchArguments":[{"group":{"start":10,"value":"\"Sauce Labs Backpack\"","children":[{"start":11,"value":"Sauce Labs Backpack","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":32,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"Alors le badge du panier doit afficher 0","stepMatchArguments":[{"group":{"start":33,"value":"0"},"parameterTypeName":"int"}]},{"pwStepLine":33,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Et le panier doit être vide","stepMatchArguments":[]}]},
]; // bdd-data-end