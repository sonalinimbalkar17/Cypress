/// <reference types="cypress" />
describe('verify the calender', function () {
    it('verify the date picker', () => {
        //current date--6/1/2024
        // let date = new Date()
        // cy.log(date.getFullYear())//2024
        // cy.log(date.getMonth())//1
        // cy.log(date.getDate())//6


        let date = new Date()
        date.setDate(date.getDate() + 40)

        let d = date.getDate()
        let m = date.toLocaleString('default', { month: 'long' })
        let y = date.getFullYear()
        cy.log(d)//17
        cy.log(m)//march
        cy.log(y)//2024

        cy.visit('https://webdriveruniversity.com/Datepicker/index.html')
        cy.get('#datepicker').click()

        function getYearMonth() {
            cy.get('.datepicker-switch').first().then(el => {
                cy.log(el.text())
                if (!el.text().includes(y)) {
                    cy.get('.next').first().click()
                    getYearMonth()
                }
            })
            cy.get('.datepicker-switch').first().then(el => {
                cy.log(el.text)
                if (!el.text().includes(m)) {
                    cy.get('.next').first().click()
                    getYearMonth()
                }
            })
        }
        getYearMonth()


        function getDate() {
            cy.contains(d).click()
        }
        getDate()
    })
})