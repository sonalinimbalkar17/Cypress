/// <reference types="cypress" />

describe('verify the api for GET POST PUT DELETE', function () {
    it('verify the total numbner of user per page', function () {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users?page=2"
        })
            .then(function (response) {
                // cy.log(response.per_page)
                // cy.log(response.data.length)
                expect(response.body.data.length).to.equal(response.body.per_page)
            })
    })


    it('verify the user withname goerge', function () {
        let userName = "George"
        let flagUser = false
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users?page=2"
        })
            .then(function (response) {
                response.body.data.forEach(element => {
                    if (element.first_name == userName) {
                        flagUser = true
                        return
                    }
                });
            })
            .then(function () {
                expect(flagUser).to.eq(true)
            })
    })

    it('verify the post request', function () {
        let info = {
            "name": "morpheus",
            "job": "leader"
        }
        cy.request({
            method: "POST",
            url: "https://reqres.in/api/users?page=2",
            body: info
        })
            .then(function (response) {
                cy.log(response.body)
                expect(response.body).to.have.keys(["name", "job", "id", "createdAt"])
                expect(response.body.name).to.eq(info.name)
                expect(response.body.job).to.eq(info.job)
            })

    })

    it('verify user update functionality', function () {
        let a = {
            "name": "sonali",
            "job": "automation testing"
        }
        cy.request({
            method: "PUT",
            url: "https://reqres.in/api/users/2",
            body: a
        })
            .then(function (response) {
                cy.log(response.body.name)
                cy.log(response.status)
                expect(response.status).to.eq(200)
                expect(response.body.job).to.eq(a.job)

            })

    })

    it('verify delete user functionality', function () {
        cy.request({
            method: "DELETE",
            url: "https://reqres.in/api/users?page=2",
        })
            .then(function (response) {
                cy.log(response)
                expect(response.status).to.eq(204)
                expect(response.body).to.eq("")
            })
    })


})
