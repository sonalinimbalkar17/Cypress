/// <reference types="cypress" />

describe('DropDown, CheckBoxes and  Radio Buttons',function(){

    it('should select a option from drop down',function(){
        //arragement
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        //action
        cy.get('#dropdowm-menu-1').select('JAVA')
        //assertion
        cy.get('#dropdowm-menu-1').should('have.value','java')

        cy.get('#dropdowm-menu-2').select('TestNG')
        cy.get('#dropdowm-menu-2').should('have.value','testng')

    })

    it('should select a check box',function(){
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[value="option-4"]').click()//click
        cy.get('input[value="option-4"]').should('be.checked')

        cy.get('input[value="option-2"]').check()
        cy.get('input[value="option-2"]').should('be.checked')
        cy.get('input[value="option-2"]').uncheck()
        cy.get('input[value="option-2"]').should('not.be.checked')
  
    })
    it('should select radio button',function(){
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[value="purple"]').check().should('be.checked')
        cy.get('input[value="orange"]').should('not.be.checked')





    })
})