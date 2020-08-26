context('automation practice', () => {
  beforeEach(() => {
    cy.visit('http://automationpractice.com/index.php')
  })
  // BE CAREFUL of adding unnecessary wait times.
  // https://on.cypress.io/best-practices#Unnecessary-Waiting

  // https://on.cypress.io/wait
  it('Login and then logout', () => {
    cy.get("[test-id= ]")


    // Click Sign In Button
    cy.get(".login").click()

    // enter creds and signing
    cy.get("#email").type("someone@example.com")
    cy.get("#passwd").type("Password123")
    cy.get("#SubmitLogin").click()

    // assert that I have logged
    cy.get('.account > span').should("contain", "Some One")

    // then I sign out
    cy.get(".logout").click()
  })
})
