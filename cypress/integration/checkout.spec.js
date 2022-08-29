const user = 'gerente'
const password = 'GD*peToHNJ1#c$sgk08EaYJQ'

describe('Checkout utilizando App Action', () => {
    it('Página checkout', () => {
        cy.login(user,password);
        cy.validateCkeckoutPage();
    });
});