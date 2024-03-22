// <reference types="cypress" />
describe('Amazon Search', () => {
    it('verify the amazon website', () => {
        // Visit Amazon
        cy.visit('https://www.amazon.in/')
        // Type a search query
        cy.get('#twotabsearchtextbox').type('laptop')
        // Click the search button
        cy.get('#nav-search-submit-button').click()
        // Wait for the search results
        cy.get('.s-search-results').should('be.visible');
    })
})