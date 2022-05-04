// user_can_sign_up_spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe("Registration", () => {
  it("A user signs up and is redirected to sign in", () => {
    // sign up
    cy.signUp();

    cy.url().should("include", "/sessions/new");
  });

  it("A user tries to sign up without an email", () => {
    // sign up
    cy.visit("/users/new");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    cy.url().should("include", "/users/new");
  });

  it("A user tries to sign up without a password", () => {
    // sign up
    cy.visit("/users/new");
    cy.get("#email").type("someone@example.com");
    cy.get("#submit").click();
    cy.url().should("include", "/users/new");
  });
});