class Login{

    UserName = "#username";
    Password = "#password";
    LoginButton = "#login";
    Lable = "div[class='col-xl-12 col-lg-12 col-sm-12 colmspadding text-center'] h2"

    enterUserName(UN)
    {
        cy.get(this.UserName).type(UN)
    }

    enterPassword(Pass)
    {
        cy.get(this.Password).type(Pass)
    }

    clickLoginButton()
    {
        cy.get(this.LoginButton).click()
    }

    verifyHomePageTitle()
    {
        cy.get(this.Lable).contains("Welcome To MICA")
    }
}

export default Login;