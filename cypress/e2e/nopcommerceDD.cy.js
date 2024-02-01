/// <reference types="cypress" />
import nopComLogin from "../PageObjects/nopcommercelogin"

describe("LoginDD", () => {

    before(() => {
        cy.visit("/");
    });

    it("nopCommerceLoginDetaDriven", () => {
        cy.fixture("nopcommercelogin.json").then((DDT) => {
            // Log the loaded fixture data for debugging
            console.log("Fixture Data:", DDT);

            DDT.forEach((data) => {
                const NCDTT = new nopComLogin();    // Object Of the "nopComLogin" Class from Pageobjects

                NCDTT.EnterEmail(data.email);
                NCDTT.EnterPassword(data.password);
                NCDTT.ClickLogin();

                if (data.email === "admin@yourstore.com" && data.password === "admin") 
                {
                    NCDTT.EnteringValidData(data.expected);
                    NCDTT.ClickLogout();
                } 
                
                else if (data.email === "admin@yourstore.com" && data.password === "admin12345") 
                {
                    NCDTT.EnteringInvalidPassword(data.expected);
                } 
                
                else if (data.email === "admin@yourstore1.com" && data.password === "admin") 
                {
                    NCDTT.EnteringInvalidEmail(data.expected);
                } 
                
                else 
                {
                    console.log("All Test Cases Pass");
                }               
            });
        });
    });
});
