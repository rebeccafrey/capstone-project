describe('navigating through the app by clicking the navbar icons', () => {
  it('successfully loads', () => {
    cy.visit('/')
    cy.get('[data-testid=statements-link]').click()
    cy.url().should('include', '/statements')
    cy.get('[data-testid=result-link]').click()
    cy.url().should('include', '/result')
    cy.get('[data-testid=entries-link]').click()
    cy.url().should('include', '/entries')
    cy.get('[data-testid=topics-link]').click({ multiple: true })
    cy.url().should('include', '/topics')
  })

  it('cy.reload() - reload the page', () => {
    cy.reload()
    cy.reload(true)
  })
})
