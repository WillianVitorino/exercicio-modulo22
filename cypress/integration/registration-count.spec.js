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
        homePage.mainMenu.then(resp => {
            expect(resp.length).to.eq(5)
            expect(resp[0].textContent).to.contains('Home')
            expect(resp[1].textContent).to.contains('Comprar')
            expect(resp[2].textContent).to.contains('Blog')
            expect(resp[3].textContent).to.contains('Categorias')
            expect(resp[4].textContent).to.contains('Mais vendidos')
    
        });
        myCountPage.setFieldsRegister(dadosRegister.emailRegister+numRandom, dadosRegister.password)
        myCountPage.textMyCount.contains(`A partir do painel de controle de sua conta, você pode ver suas `);
    });
});