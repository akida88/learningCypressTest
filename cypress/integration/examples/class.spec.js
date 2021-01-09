class BasePage {
    static LoadHomePage() {
        cy.visit('https://devexpress.github.io/testcafe/example/')
    }

    static wait(number) {
        cy.wait(number)
    }
}

class HomePage extends BasePage {
    static scrollToBottom() {
        cy.get('#submit-button').scrollIntoView()
    }

    static scrollToTop() {
        cy.get('header').scrollIntoView()
    }
}

describe('Abstraction with Classes', () => {
    before(function() {
        // runs before all tests inside describe 
        // setup test data or test context
        // seed or reset the database
        HomePage.LoadHomePage()
    })

    after(function() {
        // runs after all tests inside describe block are done
        // test clean up
        // clean cookies or localStorage
    })

    beforeEach(function() {
        // runs before each it block in the describe
    })

    afterEach(function() {
        // runs after each it block in the describe
    })

    it.only('1st IT', () => {
        // only hook - skips the rest, does not need to write skip to the rest
        // skip hook - skips this one 
        // only for development purposes or debugging, not used in the production tests 
        HomePage.scrollToBottom()
        HomePage.wait(5000)
        HomePage.scrollToTop()
        HomePage.wait(3000)
    })

    it('2nd IT', () => {
        HomePage.scrollToBottom()
        HomePage.wait(5000)
        HomePage.scrollToTop()
        HomePage.wait(3000)
    })
})
