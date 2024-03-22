/// <reference types="cypress" />

describe('Alerts in cypress', function () {

    it('verify the alert ', function () {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        //event listener 
        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am a JS Alert')
            return true
        })
        cy.contains('Click for JS Alert').click()
        cy.get('#result').should('have.text', 'You successfully clicked an alert')
    })


    it('verify the Confirm with ok', function () {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('I am a JS Confirm')
            return true
        })
        cy.contains('Click for JS Confirm').click()
        cy.get('#result').should('have.text', 'You clicked: Ok')
    })

    it('verify the confirm with cancel',function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.on('window:confirm',(str)=>{
            expect(str).to.equal('I am a JS Confirm')
            return false
        })
        cy.contains('Click for JS Confirm').click()
        cy.get('#result').should('have.text','You clicked: Cancel')
    })


    it('verify the prompt with ok',function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('I am learning js')
            cy.contains('Click for JS Prompt').click()
        })
        cy.get('#result').should('have.text', "You entered: I am learning js")

    })

})

