const homePage = require('../support/pages/home-page');
const myCountPage = require('../support/pages/my-count-page');
const dadosRegister = require('../fixtures/dados-registration.json')

const numRandom = (Math.ceil(Math.random() *500))

describe('Criação de conta - Page Objects', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    it('Cadastrar usuário com sucesso', () => {
        homePage.goToMyCount();
        myCountPage.setFieldsRegister(dadosRegister.emailRegister+numRandom, dadosRegister.password)
    });
});