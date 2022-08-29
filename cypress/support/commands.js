Cypress.Commands.add('login', (user, pass) => {
    const formData = new FormData()

    formData.append('log', user)
    formData.append('pwd', pass)
    formData.append('wp-submit', 'Acessar')
    formData.append('redirect_to', `/wp-admin`)
    formData.append('testcookie', 1)

    cy.request({
        url: '/wp-login.php',
        method: "POST",
        body: formData
    }).then((resp) => {
        resp.headers['set-cookie'].forEach(cookie => {
            const firstPart = cookie.split(';')[0]
            const separator = firstPart.indexOf('=')
            const name = firstPart.substring(0, separator)
            const value = firstPart.substring(separator + 1)
            cy.setCookie(name, value)
        })
    })
    
    cy.visit("/checkout/")
})

Cypress.Commands.add('validateCkeckoutPage', () => {
    cy.get('#main').should('contain.text', 'Checkout');
    cy.get('#main > .woocommerce').should('be.visible');
})