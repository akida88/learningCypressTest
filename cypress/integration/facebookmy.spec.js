describe('Sending a Facebook message', () => {
    it('Opening the site', () => {
        cy.visit('http://localhost:4000')
        // cy.get('form').submit() // to click enter if there is some notification
    })

    it('Log in', () => {
        cy.get('#username').type('demo.administrator')
        cy.get('#password').type('demo{enter}')
        cy.contains("Banners",{timeout:10000}).click()
        cy.get('#add').type('This is a new Banner').click('#create')
    })
})