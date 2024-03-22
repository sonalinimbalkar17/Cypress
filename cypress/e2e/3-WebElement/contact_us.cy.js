/// <reference types="cypress" />

describe('working with webelements', function () {

    it('visit the webpage', function () {
      //visiting the url
      cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
  
      //1.type()---->type into the input element
      cy.get('input[name="first_name"]').type("sonali")
      cy.get('input[name="last_name"]').type("nimbalkar")
      cy.get('input[name="email"]').type("sonalinimbalkar17@gmail.com")
      cy.get('textarea[name="message"]').type("i am learning cypress")
  
      //2.click()
      //cy.get('input[type="submit"]').click()
      //or
      //3.submit()
      //cy.get('#contact_form').submit()
  
      //4.clear()
      cy.get('input[name= "first_name"]').clear()
  
      //5. getAttribute()
      cy.get('input[name= "first_name"]').should('have.attr', 'name', 'first_name')
  
      //retrive value with  property()
      //<input name="first_name" type="text" class="feedback-input" placeholder="First Name">
      cy.get('input[name= "first_name"]').then(function (el) {
        cy.log(el.prop('name'))
        cy.log(el.prop('type'))
        cy.log(el.prop('class'))
        cy.log(el.prop('placeholder'))
      })
  
      //invoke
      //retrive value in attribute
      cy.get('input[name= "first_name"]').invoke('attr', 'name').then(function (str) {
        cy.log(str)
      })
      //retrive value in property
      cy.get('input[name= "first_name"]').invoke('prop', 'name').then(function (str) {
        cy.log(str)
      })

  
    })
  })