describe('taking the quiz', () => {
  it('successfully counts checkboxes and displays on result page', () => {
    cy.visit('/test-statements')
    cy.contains('Einzelgespräche').click({ force: true })
    cy.contains('Small Talk').click({ force: true })
    cy.contains('Konflikte').click({ force: true })
    cy.contains('Anrufbeantworter').click({ force: true })
    cy.get('[data-cy=button-result-link]').click({ force: true })
    cy.url().should('include', '/test-result')
    cy.contains('4')
    cy.get('[data-testid=statements-link]').click()
    cy.url().should('include', '/test-statements')
    cy.contains('Einzelgespräche').click({ force: true })
    cy.get('[data-cy=button-result-link]').click({ force: true })
    cy.url().should('include', '/test-result')
    cy.contains('3')
  })
})