class ProductPages {

    get listProduct() {return cy.get('.products > .row')};
    get sizeProduct() {return cy.get('[aria-label="Size"]')};
    get colorProduct() {return cy.get('[aria-label="Color"]')};
    get buttonPurchase() {return cy.get('.single_add_to_cart_button')};
    get buttonsSize() {return cy.get('.button-variable-item-')}
    get buttonCart() {return cy.get('.tbay-topcart .view-cart')};
    get textCart() {return cy.get('.cart_item > .product-name')};
    get buttonBasket() {return cy.get('.dropdown-toggle > .text-skin > .icon-basket')};
    get labelProductDetails() {return cy.get('.product-details > .product-name')};

    goToProduct() {
        cy.visit('/produtos')
    }

    addProduct(product) {
        this.listProduct.contains(product).click();
    }

    selectVariableProduct(size, color){
        this.sizeProduct.contains('li', size).click()
        this.colorProduct.contains('li', color).click();
        this.buttonPurchase.should('not.be.disabled').click();
    }

    goToCart(){
        this.buttonCart.click();
    }

    validateNameProductCart(text){
        this.textCart.contains(text)
    }

    clickButtonBasket() {
        this.buttonBasket.click()
    }
}

module.exports = new ProductPages();