/// <reference types="cypress" />
describe('verify the intercept', function () {
    it('verify the GET comment', function () {
        cy.intercept({
            url: "https://jsonplaceholder.cypress.io/comments/1",
            method: "GET"
        }, {
            body: {
                "postId": 1,
                "id": 1,
                "name": "id labore ex et quam laborum",
                "email": "Eliseo@gardner.biz",
                "body": "sonali"
            }
        }).as("getComment")

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment').then(function ({ response, request }) {
            cy.log(response)
            cy.log(request)
            expect(request.method).eq('GET')
            cy.get('.network-comment').should('have.text', response.body.body)

        })


    })
    it('verify the POST comment', function () {
        cy.intercept({
            method: "POST",
            url: "https://jsonplaceholder.cypress.io/comments"
        }).as('PostComment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains("Post Comment").click()
        cy.wait('@PostComment').then(function ({ response }) {
            //cy.log(response)
            expect(response.statusCode).to.eq(201)
            cy.get('.network-post-comment').should('have.text', "POST successful!")
        })

    })
    it('verify the Update comment', function () {
        cy.intercept({
            method: "PUT",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }).as('UpdateComment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains("Update Comment").click()
        cy.wait('@UpdateComment').then(function ({ response }) {
            //cy.log(response)
            expect(response.statusCode).to.eq(200)

        })
    })
})