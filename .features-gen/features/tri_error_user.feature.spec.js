// Generated from: features/tri_error_user.feature
import { test } from "../../fixtures/base.fixture.ts";

test.describe('Tri des produits (bug connu error_user)', () => {

  test('Le tri par prix croissant est défectueux pour error_user', { tag: ['@error-user'] }, async ({ Given, When, Then, inventoryPage }) => { 
    await Given('je suis sur la page d\'inventaire', null, { inventoryPage }); 
    await When('je trie les produits par "Prix (croissant)"', null, { inventoryPage }); 
    await Then('les prix ne doivent pas être triés par ordre croissant', null, { inventoryPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/tri_error_user.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":9,"tags":["@error-user"],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Étant donné que je suis sur la page d'inventaire","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"Quand je trie les produits par \"Prix (croissant)\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Prix (croissant)\"","children":[{"start":26,"value":"Prix (croissant)","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Alors les prix ne doivent pas être triés par ordre croissant","stepMatchArguments":[]}]},
]; // bdd-data-end