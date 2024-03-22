/// <reference types="cypress" />
describe('verify the intercept calls', function () {
    it('GET comment', function () {
        //wait
        cy.intercept({
            method: 'GET',
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }).as('getComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment').then(function ({ response, request }) {
            expect(response.statusCode).to.eq(200)
            cy.get('.network-comment').should('contain', 'laudantium')
        })
    })
})