describe('navigating through the app by clicking the navbar icons', () => {
  it('successfully loads', () => {
    cy.visit('/')
    cy.get('[data-testid=statements-link]').click({ multiple: true })
    cy.url().should('include', '/test-statements')
    cy.get('[data-testid=result-link]').click({ multiple: true })
    cy.url().should('include', '/test-result')
    cy.get('[data-testid=entries-link]').click({ multiple: true })
    cy.url().should('include', '/add-topics')
    cy.get('[data-testid=topics-link]').click({ force: true, multiple: true })
    cy.url().should('include', '/topics-all')
  })

  it('cy.reload() - reload the page', () => {
    cy.reload()
    cy.reload(true)
  })
})
