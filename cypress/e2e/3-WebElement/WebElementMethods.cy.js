/// <reference types="cypress" />

describe('methods of webElements', function () {

    //1.click()
    it('click on a function', function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type('sonali')
        cy.get('[name="last_name"]').type('nimbalkar')
        cy.get('[name="email"]').type('sonali@gmail.com')
        cy.get('[name="message"]').type('i am learning js')
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
        cy.get('h1').should('exist')

    })

    //2.type
    it('type on input element', function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type("shweta")
        cy.get('[name="last_name"]').type("gorse")
        cy.get('[name="email"]').type("shweta@gmail.com")
        cy.get('[name="message"]').type("I am learning cypress")
        cy.get('[type="submit"]').click()
        cy.get('h1').should('exist')
    })

    //3.clear()

    it(' clearing the element', function () {
        // arrangement
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        // action
        cy.get('[name= "first_name"]').as("firstName")
        cy.get('@firstName').type('sonali')
        cy.get('@firstName').clear()
        // assertion
        cy.get('@firstName').should('have.text', '')

    })

    //4.getAttribute()
    // <h2 name="contactme" class="section_header">CONTACT US</h2>

    it('getting attribute and verifying attribute', function () {
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('h2').should('have.attr', 'class')
        cy.get('h2').should('have.attr', 'name')
        cy.get('h2').should('have.attr', 'class', 'section_header')
        cy.get('h2').should('have.attr', 'name', 'contactme')

        cy.get('h2').invoke('attr', 'class').then(function (text) {
            cy.log(text)
        })
        cy.get('h2').invoke('attr', 'name').then(function (text) {
            cy.log(text)
        })

    })

    //5.getText()
    it('getting text and verifying the text of element', function () {
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('h2').should('have.text', 'CONTACT US')
        cy.get('h2').invoke('text').then(function (txt) {
            cy.log(txt)
        })
        // element visible or not
        cy.get('h2').should('be.visible')
    })

    //6.isSelected()
    it('element is selected', function () {
        cy.visit('https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('[value="pumpkin"]').should('be.checked')
    })

    //7.isEnabled()
    it('elemnet is enabled', function () {
        cy.visit('https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('[value="cabbage"]').should('be.disabled')
    })

})