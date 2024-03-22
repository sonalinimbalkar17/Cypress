/// <reference types="Cypress" />

describe('assertion in cypress', () => {

    it('Implicit assertion', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        //// should 
        //cy.url().should('include', 'orangehrmlive.com')
        //cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //cy.url().should('contain', 'orangehrm')

        ////avoid multiple time cy.url()
        // cy.url().should('include', 'orangehrmlive.com')
        //     .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //     .should('contain', 'orangehrm')

        ////should and
        // cy.url().should('include', 'orangehrmlive.com')
        //     .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //     .and('contain', 'orangehrm')
        //     .and('not.contain', 'greenhrm')

        ////title
        // cy.title().should('include', 'Orange')
        // .and('eq', 'OrangeHRM')
        // .and('eql', 'OrangeHRM')
        // .and('contain', 'HRM')

        ////logo visible---should
        //  cy.get('.orangehrm-login-branding > img').should('exist')
        //  cy.get('.orangehrm-login-branding > img').should('be.visible')

        ////logo visible---should and
        // cy.get('.orangehrm-login-branding > img').should('exist')
        // .and('be.visible')

        ////no of links
        //cy.xpath("//a").should('have.length', '5')

        ////provide a value into input box
        // cy.get('[name="username"]').type('Admin')
        // cy.get('[name="username"]').should('have.value', 'Admin')

        // cy.get('[name="password"]').type('admin123')
        // cy.get('[name="password"]').should('have.value', 'admin123')

        // cy.get('[type="submit"]').click()
    })

    it.only('Explicit assertion', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')


        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('[type="submit"]').click()

        let expName = 'Suryap Prasath S'
        cy.get('[class="oxd-userdropdown-tab"]').then((el) => {
            cy.log(el.text())


            //// BDD style
            let actName = el.text()
            expect(actName).to.equal(expName)
            expect(actName).to.not.equal(expName)


            //// TDD Style
            assert.equal(actName, expName)
            assert.notEqual(actName, expName)
        })
    })
})