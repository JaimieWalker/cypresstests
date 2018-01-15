describe('Test no inputs in search', function () {
    it('Nothing should happen if both title and location are empty', function () {
        cy.visit("http://degree-not-required.herokuapp.com")
        cy.contains("search").click()
        cy.url().should('include', '')
        cy.clearLocalStorage()

    })
})

// With angular you have to wait a bit for the application to load, because when a script runs an application, it is a lot faster so a wait needs to be added
describe('Test with only a job entered', function(){
    it("Should be able to search" , function(){
        cy.visit("http://degree-not-required.herokuapp.com")
        cy.wait(1000)
        cy.get('[name = "query"]').type("Sales").should("have.value" , "Sales")
        cy.contains("search").click()
        cy.url().should('include', 'jobs')
        cy.clearLocalStorage()

    })
})

describe('Test with only a location entered', function () {
    it("Should not be able to search", function () {
        cy.visit("http://degree-not-required.herokuapp.com")
        cy.wait(1000)

        cy.get('[name = "location"]').type("11023").should("have.value", "11023")
        cy.contains("search").click()
        cy.url().should('include', '')
        cy.clearLocalStorage()

    })
})

describe('Test with both a location and job title entered', function () {
    it("Should not be able to search", function () {
        cy.visit("http://degree-not-required.herokuapp.com")
        cy.wait(1000)
        cy.get('[name = "query"]').type("Sales").should("have.value", "Sales")
        cy.get('[name = "location"]').type("11023").should("have.value", "11023")
        cy.contains("search").click()
        cy.url().should('include', 'jobs')
        cy.clearLocalStorage()

    })
})

describe('Clicking on logo brings you back to main page', function () {
    it("Should be on the home page", function () {
        cy.visit("http://degree-not-required.herokuapp.com")
        cy.wait(1000)
        cy.get('#logo').click()
        cy.url().should('include', '')

    })
})

describe('Previous values entered are kept in the field', function () {
    it("Should have previous values in field", function () {
        cy.visit("http://degree-not-required.herokuapp.com")
        cy.wait(5000)
        cy.get('[name = "query"]').type("Sales").should("have.value", "Sales")
        cy.get('[name = "location"]').type("11023").should("have.value", "11023")
        cy.contains("search").click()
        cy.url().should('include', 'jobs')
        cy.get('[name = "query"]').should("have.value", "Sales")
        cy.get('[name = "location"]').should("have.value", "11023")

    })
})

describe('Clicking on logo on job page sends you back to main page', function () {
    it("Should be on the home page", function () {
        cy.visit("http://degree-not-required.herokuapp.com")
        cy.wait(1000)
        cy.get('[name = "query"]').type("Sales").should("have.value", "Sales")
        cy.get('[name = "location"]').type("11023").should("have.value", "11023")
        cy.contains("search").click()
        cy.url().should('include', 'jobs')
        cy.get('[name = "query"]').should("have.value", "Sales")
        cy.get('[name = "location"]').should("have.value", "11023")
        cy.get('#logo').click()
    })
})

describe('Text Fields have previously entered data', function () {
    it("Should have previously entered values in text fields", function () {
        cy.wait(5000)
        cy.url().should('include', '')
        cy.get('[name = "query"]').should("have.value", "Sales")
        cy.get('[name = "location"]').should("have.value", "11023")
        cy.clearLocalStorage()
    })
})