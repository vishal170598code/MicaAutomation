// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="cypress" />


// Login Command

Cypress.Commands.add("Login" , (Username , Password) => {
    cy.visit("/")
    cy.get("#username").clear().type(Username)
    cy.get("#password").clear().type(Password)
    cy.get("#login").click()
})

// Hover and clicks command.

Cypress.Commands.add("SystemMasterDropdownHoverAndClick", (targetId) => {
    cy.get("#system_master").trigger("mouseover");
    cy.get(targetId).click()
});

Cypress.Commands.add("MasterDropdownHoverAndClick", (targetId) => {
    cy.get("#master").trigger("mouseover");
    cy.get(targetId).click()
});

// Toaster Message.
// Cypress.Commands.add("ToasterMessage" , () => {
//     cy.get(".toast-body").should("be.visible").invoke("text").then((text) => {
//         cy.log("Text of the visible element :-" , text)
//     })
// })

Cypress.Commands.add("ToasterMessage" , (Message) => {
    cy.get(".toast-body").should("include.text" , Message)
})
