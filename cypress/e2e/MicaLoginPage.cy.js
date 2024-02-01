/// <reference types="cypress" />
import Login from "../PageObjects/MicaLoginPage"


describe("TestMicaLogin" , () => {

    before(() => {
        cy.visit("/")
    })

    it("TestLoginWithValidData" , () => {
        cy.fixture("MicaLoginPage.json").then((data) => {
            
            const ln = new Login(); // Object Of Login class
            ln.enterUserName(data.UserName)
            ln.enterPassword(data.Password)
            ln.clickLoginButton()
            ln.verifyHomePageTitle(data.Label)

        })
    })
})
