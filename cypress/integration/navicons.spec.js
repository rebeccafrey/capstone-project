describe('navigating through the app by clicking buttons', () => {
  it('should successfully load', () => {
    cy.visit('/')
    cy.get('[data-testid=statements-link]').click({
      force: true,
      multiple: true,
    })
    cy.url().should('include', '/test-statements')

    cy.visit('/')
    cy.get('[data-testid=result-link]').click({ force: true, multiple: true })
    cy.url().should('include', '/test-result')

    cy.visit('/')
    cy.get('[data-testid=entries-link]').click({ force: true, multiple: true })
    cy.url().should('include', '/add-topics')

    cy.visit('/')
    cy.get('[data-testid=topics-link]').click({ force: true, multiple: true })
    cy.url().should('include', '/topics-all')
  })
})
