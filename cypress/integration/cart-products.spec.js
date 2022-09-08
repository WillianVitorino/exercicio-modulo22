/// <reference types="cypress" />

const productPage = require('../support/pages/product-page')
const products = require('../fixtures/products.json')
const dados = require('../fixtures/dados.json')

describe('Validar carrinho de compras - Adicionar, remover e atualizar', () => {

    beforeEach(() => {
        productPage.goToProduct();
    });

    it('Adicionar item no carrinho de compras', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
          });
        cy.intercept({
            url: '/wp-admin/admin-ajax*',
            method: 'POST',                 
        }, req => {
            if(req.headers.cookie.includes("woocommerce_items_in_cart=1")){
                req.reply({
                    statusCode: 200,
                    body: dados.response
                })
            }        
        }).as('admin-ajax') 
    
        cy.intercept({
            method: 'POST',
            url: '/?wc-ajax=get_refreshed_fragments*',         
        }, req => {
                    req.reply({
                    statusCode: 200,
                    body: dados.html
                })
        }).as('fragments')
        
        cy.intercept({
            method: 'POST',
            url: '/product/abominable-hoodie/',         
        },  req => {
            window.sessionStorage.setItem("wc_fragments_a84fb9b97c9e7516ea041e13a46d5c80", dados.html)     
            req.reply(     
             {     
                statusCode: 200,     
                body: htmlResponse
             })     
           }).as('product')

        productPage.addProduct(products[1].produto);
        productPage.selectVariableProduct(products[1].tamanho, products[1].cor)
        productPage.goToCart();
        productPage.validateNameProductCart(products[1].produto);
    
    });
    
});