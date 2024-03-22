describe('verify the contact us form', () => {

    beforeEach(function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type('sonali')
        cy.get('input[name="last_name"]').type('nimbalkar')
        cy.get('input[name="email"]').type('sonali12@gmail.com')
        cy.get('textarea[name="message"]').type('i am learning js')
    })

    it('verify the sumbit form', () => {
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })

    it('verify the reset functionality', function () {
        cy.get('input[type= "reset"]').click()
        cy.get('[name = "first_name"]').should('have.text', "")
    })

    afterEach(function(){
        cy.clearAllCookies()
    })
})