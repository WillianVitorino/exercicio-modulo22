const dadosLogin = require('../fixtures/dados-login.json')

describe('Checkout utilizando App Action', () => {
    it('Página checkout', () => {
        cy.login(dadosLogin.user,dadosLogin.password);
        cy.validateCkeckoutPage();
    });
});