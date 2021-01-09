describe('Browser Actions', () => {
    it('should load books website', () => {
        cy.visit('http://books.toscrape.com/index.html', {timeout:10000})
        cy.url().should('include', 'index.html')
        cy.log('Before Reload')
        cy.reload()
        cy.log('After Reload')
    })

    it('should click on Travel category', () => {
        cy.get('a').contains('Travel').click()

        cy.get('h1').contains('Travel')
    })

    it('should display correct number of books', ()=> {
        cy.get('.product_pod').its('length').should('eq', 11)
    })

    it('should click on Poetry category', () => {
        cy.get('a').contains('Poetry').click()
        cy.get('h1').contains('Poetry')
    })

    it('should click on Olio book detail', () => {
        cy.get('a').contains('Olio').click()
    })

    it('should display correct price of books', () => {
        cy.get('.price_color').contains('£23.88')
    })
})


// describe('My first simple test with cypress', () => {
//     it('True should be True', () => {
//         expect(true).to.equal(true)
//     })

//     it('5 should be 5', () => {
//         expect(5).to.equal(5)
//     })
// })


// describe('Another describe block', () => {
//     it('False should be false', () => {
//         expect(false).to.equal(false)
//     })
// })

// describe('Browser Actions', () => {
//     it('should load correct url', () => {
//         cy.visit('http://example.com/', { timeout: 10000 } )
//     })

//     it('should check correct url', () => {
//         cy.url().should('include', 'example.com') // corrects the loaded url and checks if the url has example.com / if INCLUDES the EXAMPLE.COM in the url
//     })

//     it('should wait for 3 seconds', () => {
//         cy.wait(3000)
//     })

//     it('should pause the execution', () => {
//         cy.pause()
//     })

//     // checks if something on the page is visible
//     it('should check for correct element on the page', () => {
//         cy.get('h1').should('be.visible')
//     })
// })
