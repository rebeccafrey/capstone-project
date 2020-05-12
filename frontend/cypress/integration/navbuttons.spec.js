describe('navigating through the app by clicking buttons', () => {
  it('successfully loads', () => {
    cy.visit('/')
    cy.get('[data-testid=button-statements-link]').click()
    cy.url().should('include', '/statements')
    cy.get('[data-cy=button-result-link]').click()
    cy.url().should('include', '/result')
    cy.get('[data-testid=home-link]').click()
    cy.contains('Willkommen')
    cy.get('[data-testid=button-form-link]').click()
    cy.url().should('include', '/topics')
  })
})
