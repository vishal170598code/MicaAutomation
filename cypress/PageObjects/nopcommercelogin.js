/// <reference types="cypress" />
class nopComLogin {

    Email = "#Email"
    Password = "#Password"
    LoginClick = "button[type='submit']"
    ValidLoginMess = "div[class='content-header'] h1"
    InvalidEmailMess = ".message-error.validation-summary-errors"
    InvalidPassMess = ".message-error.validation-summary-errors"
    LogoutClick = "[href='/logout']"


    EnterEmail(EE)
    {
        cy.get(this.Email).clear().type(EE)
    }

    EnterPassword(EP)
    {
        cy.get(this.Password).clear().type(EP)
    }

    ClickLogin()
    {
        cy.get(this.LoginClick).click()
    }

    EnteringValidData(EVD)
    {
        cy.get(this.ValidLoginMess).contains(EVD)
    }

    EnteringInvalidEmail(EIE)
    {
        cy.get(this.InvalidEmailMess).contains(EIE)
    }

    EnteringInvalidPassword(EIP)
    {
        cy.get(this.InvalidPassMess).contains(EIP)
    }

    ClickLogout()
    {
        cy.get(this.LogoutClick).click()
    }
}

export default nopComLogin;
