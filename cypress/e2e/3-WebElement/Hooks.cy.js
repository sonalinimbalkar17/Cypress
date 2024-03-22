//before
//beforeEach
//test case 1
//afterEach
//beforeEach
//test casr 2
//afterEach
//after

before(function () {
    cy.log('i will run at the first')
})

after(function () {
    cy.log('i will run at the last')
})

beforeEach(function () {
    cy.log("i will run before each testcase")
})

afterEach(function () {
    cy.log("i will run after every testcases")
})
it('test case one', function () {
    cy.log("Test case one pass ")
})

it('test case two', function () {
    cy.log('test case two pass')
})