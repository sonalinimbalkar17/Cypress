/// <reference types="cypress" />

describe('locating elements', function () {

    it('find a single element', function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').should('exist')
    })

    it('find multiple elements', function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[type="text"]').should('have.length', 3)
        cy.get('input[type="submit"]').should('have.length.greaterThan', 0)
    })

    it('find element by id', function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('#contact_form').should('exist')
    })

    it('find element by class', function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').should('exist')
    })

    it('find element by tagName', function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('h2').should('exist').should('have.text', 'CONTACT US')

    })

    it('find element by className', function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('.text-center').should('have.length', 2)
    })

    it('find element by css Selector', function () {
        // input[attribute = "value"]
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('h2[name="contactme"]').should('have.text', 'CONTACT US')
    })

    it('verify the element by linkText', function () {
        cy.visit('https://webdriveruniversity.com/')
        cy.contains('Cypress with Cucumber BDD - Beginner to Expert in 9 Hours!').should('be.visible')
    })

    it('find element by link text', function () {
        cy.visit('https://webdriveruniversity.com/')
        cy.contains(`Cypress with Cucumber BDD`).should('exist')
    })


})