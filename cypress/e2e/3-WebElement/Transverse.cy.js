/// <reference types="cypress" />
describe('transverse methods in cypress', () => {

    //children()
    it('To get children of DOM elements, use the .children() command.', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children().should('have.length', 11)
    })

    //next()
    it('To get the next sibling DOM element within elements, use the .next() command.', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#coffee').next().should('have.text', 'Tea')
    })

    //prev()
    it('To get the previous sibling DOM element within elements, use the .prev() command.', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#espresso').prev().should('have.attr', 'id', 'milk')

    })

    //prevAll()
    it('To get all previous sibling DOM elements within elements, use the .prevAll() command.', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#espresso').prevAll().should('have.length', 3)
    })

    //nextAll()
    it('To get all of the next sibling DOM elements within elements, use the .nextAll() command.', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#fruits').nextAll().should('have.length', 10)
    })

    //siblings()
    it('To get all sibling DOM elements of elements, use the .siblings() command.', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#milk').siblings().should('have.length', 4)
    })

    //prevUntil()
    it('To get all previous sibling DOM elements within elements until other element, use the .prevUntil() command.', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').prevUntil('#fruits').should('have.length', 5)

    })

    //nextUntil()
    it('To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command.', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#coffee').nextUntil('#sugar').should('have.length', 3)

    })

    //first()
    it('To get the first DOM element within elements, use the .first() command.', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().first().should('have.text', 'Coffee')
    })

    //next()
    it('To get the last DOM element within elements, use the .last() command.', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().last().should('have.text', 'Sugar')
    })

    //eq()----passed index 
    it.only('To get a DOM element at a specific index, use the .eq() command.', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().eq(2).should('have.text', 'Milk')
    })


    //parent()
    it('To get parent DOM element of elements, use the .parent() command.', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#milk').parent().should('have.attr','class','traversal-drinks-list')

    })







})