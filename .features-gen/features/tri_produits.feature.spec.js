// Generated from: features/tri_produits.feature
import { test } from "../../fixtures/base.fixture.ts";

test.describe('Tri des produits sur la page d\'inventaire', () => {

  test('Tri des prix du plus bas au plus élevé (utilisateur standard)', async ({ Given, When, Then, inventoryPage }) => { 
    await Given('je suis sur la page d\'inventaire', null, { inventoryPage }); 
    await When('je trie les produits par "Prix (croissant)"', null, { inventoryPage }); 
    await Then('la liste des prix doit être triée par ordre croissant', null, { inventoryPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/tri_produits.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":8,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Étant donné que je suis sur la page d'inventaire","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"Quand je trie les produits par \"Prix (croissant)\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Prix (croissant)\"","children":[{"start":26,"value":"Prix (croissant)","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Alors la liste des prix doit être triée par ordre croissant","stepMatchArguments":[]}]},
]; // bdd-data-end