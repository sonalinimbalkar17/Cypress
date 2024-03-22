/// <reference types="cypress" />

// test scenario ----->  verify the contact us form 
// testcase  1 -- validate with valid data 
// testcase  2 -- validate the reset button functionality
// test case 3 --validate with in valid data 

describe('Verify the contact us form',function(){

    //1st test case
    it('Verify the contact us form with valid data',function(){
    //arrangement
    cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
    //action
    cy.get('input[name="first_name"]').type('sonali')
    cy.get('input[name="last_name"]').type('nimbalkar')
    cy.get('input[name="email"]').type('sonalinimbalkar17@gmail.com')
    cy.get('textarea[name="message"]').type('i am learning javascript')
    cy.get('input[type="submit"]').click()
    //assertion
    cy.get('h1').should('be.visible')
    cy.get('h1').should('have.text','Thank You for your Message!')
    })

    //2nd test case
    it('Verify the funcationality of reset button',function(){
    //arrangement
    cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
    //action
    cy.get('input[name="first_name"]').type('sonali')
    cy.get('input[name="last_name"]').type('nimbalkar')
    cy.get('input[name="email"]').type('sonalinimbalkar17@gmail.com')
    cy.get('textarea[name="message"]').type('i am learning javascript')
    cy.get('input[type="reset"]').click()
    // Assertion
    cy.get('input[name="first_name"]').should('have.text',"")
    cy.get('input[name="last_name"]').should('have.text','')
    cy.get('input[name="email"]').should('have.text','')
    cy.get('textarea[name="message"]').should('have.text','')
    })

    //3rd test case
    it('verify the functionality of contact us form with invalid data',function(){
    //arrangement
    cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
    //action
    cy.get('input[name="first_name"]').type('sonali')
    cy.get('input[name="last_name"]').type('nimbalkar')
    cy.get('input[name="email"]').type('sonalinimbalkar17gmail.com')
    cy.get('textarea[name="message"]').type('i am learning javascript')
    cy.get('input[type="submit"]').click()
    // Assertion
     cy.get('body').should('contain','Error: Invalid email address')
     })

})