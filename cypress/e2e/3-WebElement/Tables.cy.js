/// <reference types="cypress" />

describe('table automation', function () {

    function getTableTotal(id, expectedSum) {
        let sum = 0;
        cy.get(`#t0${id}`).find('tr').each(function (row, index) {
            if (index != 0) {
                let age = row.find('td').last().text()
                sum = sum + Number(age)
            }
        }).then(function () {
            expect(sum).to.eq(expectedSum)
        })
    }

    it('verify table one', function () {
        //tr--row
        //td--column
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        let sum = 0
        cy.get('#t01').find('tr').each(function (row, index) {
            if (index != 0) {
                let age = row.find('td').last().text()
                sum = sum + Number(age)

            }
        }).then(function () {
            expect(sum).to.eq(159)
        })
    })

    it("verify table two", function () {
        cy.visit("https://webdriveruniversity.com/Data-Table/index.html")
        let sum = 0
        cy.get('#t02').find('tr').each(function (row, index) {
            if (index != 0) {
                let age = row.find('td').last().text()
                sum = sum + Number(age)
            }
        }).then(function () {
            expect(sum).to.eq(163)
        })
    })

    it('common utility', function () {
        cy.visit("https://webdriveruniversity.com/Data-Table/index.html")
        getTableTotal(1, 159)
        getTableTotal(2, 163)

    })

})