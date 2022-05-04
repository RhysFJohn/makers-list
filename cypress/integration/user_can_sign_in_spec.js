// user_can_sign_in_spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe("Authentication", () => {
  it("A user signs in and is redirected to /listings", () => {
    // sign up
    cy.signUp()

    // sign in
    cy.logIn()

    cy.url().should("include", "/listings");
    cy.contains("a", "New Listing");
  });
});