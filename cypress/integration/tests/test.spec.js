/// <reference types="cypress" />

context('Actions', () => {

   it('visits mc and create banner', () => {
      cy.visit("localhost:4000/#/")
     cy.get('[name=username]')
       .type('demo.administrator').should('have.value', 'demo.administrator');

     cy.get('[name=password]')
       .type('demo').should('have.value', 'demo');

     cy.get('#kc-login').click();

      cy.contains("Banners",{timeout:10000}).click()
      const bannerName="Created with cypress";
      cy.get("[data-cy=add]",{timeout:100000}).click()
      cy.get("[data-cy=name]",{timeout:100000}).type(bannerName);
      cy.get("[data-cy=create]",{timeout:100000}).click();
      cy.get("[data-cy=header-name]",{timeout:10000}).should("contain.text",bannerName);
})
 })
