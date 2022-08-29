/// <reference types="cypress" />

class MyCount {

    get fieldEmailRegister() {return cy.get('#reg_email')};
    get fieldPasswordRegister() {return cy.get('#reg_password')};
    get buttonRegister() {return cy.get('[name=register]')};
    get textMyCount() {return cy.get('.woocommerce-MyAccount-content')}

    setFieldsRegister = (email, password) => {
        this.fieldEmailRegister.type(email);
        this.fieldPasswordRegister.type(password);
        this.buttonRegister.click();
        this.textMyCount.contains(`A partir do painel de controle de sua conta, você pode ver suas `)
    }
}

module.exports = new MyCount();