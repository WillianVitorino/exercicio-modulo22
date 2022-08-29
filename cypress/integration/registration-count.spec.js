const homePage = require('../support/pages/home-page');
const myCountPage = require('../support/pages/my-count-page');

const numRandom = (Math.ceil(Math.random() *500))
const emailRegister = `qateste${numRandom}@teste.com`
const password = "Qateste123"

describe('Criação de conta - Page Objects', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    it('Cadastrar usuário com sucesso', () => {
        homePage.goToMyCount();
        myCountPage.setFieldsRegister(emailRegister, password)
    });
});