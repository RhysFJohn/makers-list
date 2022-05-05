// home_page_spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test


describe("Home Page", () => {
  it("has a title", () => {
    cy.visit("/");
    cy.get(".title").should("contain", "Makers' List")
  })

  it("Shows 'Log in' and 'Sign up' in nav bar if user is logged out", () => {
    cy.visit("/");

    cy.contains("input", "Sign Up")
    cy.contains("input", "Log In")
  });

  it("Shows 'Log out' in nav bar if user is logged in", () => {
    cy.visit("/");
    // sign up
    cy.signUp();
    // log in
    cy.logIn();
  
    cy.get(".loggedInNav").contains("input", "Log Out")
  });
})