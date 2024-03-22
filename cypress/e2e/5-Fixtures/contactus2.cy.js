/// <reference types="cypress" />
import ud from "../../fixtures/contact4.js"

describe('verify the testcase with multiple set of data', function () {
    it('verify the contactus with separate data', function () {
        //cy.log(ud)
        ud.forEach(function(el){
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('[name="first_name"]').type(el.firstName)
            cy.get('[name="last_name"').type(el.lastName)
            cy.get('[name="email"]').type(el.email)
            cy.get('[name="message"]').type(el.message)
            cy.get('[type="submit"]').click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')
        })
    })
    
    ud.forEach(function (el, index) {
        it(`verify the contactus with  dataset-${index + 1}`, function () {
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('[name= "first_name"]').type(el.firstName)
            cy.get('[name= "last_name"]').type(el.lastName)
            cy.get('[name= "email"]').type(el.email)
            cy.get('[name= "message"]').type(el.message)
            cy.get('[type= "submit"]').click()
            cy.get('h1').should('have.text', "Thank You for your Message!")

        })

    })
})