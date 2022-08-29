/// <reference types="cypress" />

class HomePage {

    get buttonListMenuSandwich() {return cy.get('#topmenu')};
    get selectMenuSandwich() {return cy.get('.zmdi-menu')}

    goToMyCount = () => {
        this.selectMenuSandwich.click();
        this.buttonListMenuSandwich.contains('Minha conta').click();
    }

}

module.exports = new HomePage();