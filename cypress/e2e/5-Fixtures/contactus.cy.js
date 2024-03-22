/// <reference types="cypress" />

import ud from "../../fixtures/contact2.json"
import ue from "../../fixtures/contact3.js"
//object
let myInfo = {
    firstName: 'sonali',
    lastName: 'nimbalkar',
    email: 'sonalinimbalkar12@gmail.com',
    message: 'i am learning js'
}

describe('verify the contact us form', function () {

    let userdata = undefined
    before(function () {
        cy.fixture('contact2').then( (users)=>{
            userdata = users
        })
    })


    it('contact us form in testcase', function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type('sonali')
        cy.get('[name="last_name"').type('nimbalkar')
        cy.get('[name="email"]').type('sonalinimbalkar12@gmail.com')
        cy.get('[name="message"]').type('i am learning js')
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })

    it('contact us form from above define object', function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type(myInfo.firstName)
        cy.get('[name="last_name"').type(myInfo.lastName)
        cy.get('[name="email"]').type(myInfo.email)
        cy.get('[name="message"]').type(myInfo.message)
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')

    })

    it('contact us form from contact', function () {
        cy.fixture('contact').then(function (data) {
            cy.log(data)
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('[name="first_name"]').type(data.firstName)
            cy.get('[name="last_name"').type(data.lastName)
            cy.get('[name="email"]').type(data.email)
            cy.get('[name="message"]').type(data.message)
            cy.get('[type="submit"]').click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')
        })
    })

    it('contact us form with user data one from contact2', function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type(userdata.userdataOne.firstName)
        cy.get('[name="last_name"').type(userdata.userdataOne.lastName)
        cy.get('[name="email"]').type(userdata.userdataOne.email)
        cy.get('[name="message"]').type(userdata.userdataOne.message)
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })

    it('contact us form with user data two from contact2', function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type(userdata.userdataTwo.firstName)
        cy.get('[name="last_name"').type(userdata.userdataTwo.lastName)
        cy.get('[name="email"]').type(userdata.userdataTwo.email)
        cy.get('[name="message"]').type(userdata.userdataTwo.message)
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })

    it('contact us form with user data from import json', function () {
        cy.log(ud)
    })

    it('contact us form with user data from import js', function () {
        cy.log(ue)
    })
})