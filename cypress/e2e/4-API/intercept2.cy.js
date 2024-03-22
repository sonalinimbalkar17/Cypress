/// <reference types="cypress" />
describe('intercept', function () {
    it('verify the intercept request', function () {
        cy.intercept({
            //request
            method: 'GET',
            url: 'https://jsonplaceholder.cypress.io/comments/1',
        }, {
            //response
            body: {
                "postId": 1,
                "id": 1,
                "name": "id labore ex et quam laborum",
                "email": "sonalinimbalkar12@gmail,com",
                "body": "sonali"
            }
        })
            .as('getComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment').then(function ({ request, response }) {
            //cy.log(request)
            // cy.log(response.body.body)
            cy.get('.network-comment').should('have.text', response.body.body)
        })
    })
})