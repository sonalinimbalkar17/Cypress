/// <reference types="cypress" />

describe('verify the autosuggestive drop down', function () {
    it('select a specifice value in autosuggestive drop down', function () {
        cy.visit('https://webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html')
        cy.title().should('eq', 'WebDriver | Contact Us')
        cy.get('#myInput').type('A')
        cy.get('#myInputautocomplete-list > div').each(function ($el, index, arr) {
            if ($el.text() == "Apple") {
                $el.trigger('click')
                cy.get('#submit-button').click()
                cy.url().should('include', 'Apple')
            }
        }).then(function(){
            cy.get('#myInput').type('P')
            cy.get('#myInputautocomplete-list > div').each(function($el,index,arr){
                if($el.text()=='Pizza'){
                    $el.trigger('click')
                    cy.get('#submit-button').click()
                    cy.url().should('include','Pizza')
                }

            })
        })
    })


})