/// <reference types="cypress" />
describe('API testing for go rest api--E2E ', function () {
    //token= client id  secret Id ------> API call -----> token -----> other calls 
    let token = `6827e7caade17f5b3f23a51b175ffe05dd42117716296108c6080011d841975d`

    it('create a user,retrive,update,delete', function () {
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                Authorization: `Bearer ${token}`

            },
            body: {
                "name": "Tenali Ramakrishna",
                "email": `sonali${Math.floor(Math.random() * 1000)}@gmail.com`,
                "gender": "male",
                "status": "active"
            }
        })
            .then(function (response) {
                //cy.log(response)
                expect(response.status).to.equal(201)
                return response.body.id
            })
            .then(function (id) {
                cy.request({
                    url: `https://gorest.co.in/public/v2/users/${id}`,
                    method: 'PUT',
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                    body: {
                        "name": "Tenali Ramakrishna",
                        "email": `sonali${Math.floor(Math.random() * 1000)}@gmail.com`,
                        "status": "active"

                    }
                }).then(function (response) {
                    //cy.log(response)
                    expect(response.status).to.eq(200)
                    expect(response.body).to.have.keys(['email', 'id', 'name', 'status', 'gender'])
                    return
                })
                    .then(function () {
                        cy.request({
                            url: `https://gorest.co.in/public/v2/users/${id}`,
                            method: 'DELETE',
                            headers: {
                                Authorization: `Bearer ${token}`
                            }
                        })
                            .then(function (response) {
                                cy.log(response)
                                expect(response.status).to.eq(204)
                            })
                    })
            })
    })
})