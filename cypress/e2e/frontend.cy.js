describe('login', () => {
    it('login with env', () => {
        cy.visit('https://amap.amalitech-dev.net/login')
        cy.get('#email').type(Cypress.env('email'))
        cy.get('#password').type(Cypress.env('password'))
        cy.get('#custom-button').click();
    })
})
