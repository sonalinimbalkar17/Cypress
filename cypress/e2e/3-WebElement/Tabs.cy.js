
// <reference types="cypress" />
describe('Handle tabs', () => {
    it('Child tab -approach 1', () => {
        cy.visit('https://the-internet.herokuapp.com/windows')//parent tab/window
        cy.get('.example>a').invoke('removeAttr', 'target').click()//clicking on link
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')

        //operations
        cy.go('back')//back to parent tab
        cy.wait(3000)
        // cy.go('forward')
        cy.get('.example> h3').should('have.text', 'Opening a new window')
    })

    it.only('Child tab -approach 2', () => {
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example > a').then((el) => {
            let newUrl = el.prop('href') // prop return property of the element 
            // cy.log(newUrl)
            cy.visit(newUrl)

            cy.get('.example> h3').should('have.text', 'New Window')
            cy.url().should('include', 'new')
            cy.go('back') // back to parent tab
            cy.get('.example> h3').should('have.text', 'Opening a new window')
        })
    })

})