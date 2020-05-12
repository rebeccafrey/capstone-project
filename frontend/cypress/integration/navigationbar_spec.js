describe('navigating through the app by clicking the navbar icons', () => {
  it('successfully loads', () => {
    cy.visit('/')
    cy.get('[data-testid=statements-link]').click()
    cy.url().should('include', '/statements')
    cy.get('[data-testid=result-link]').click()
    cy.url().should('include', '/result')
    cy.get('[data-testid=topics-link]').click()
    cy.url().should('include', '/topics')
  })
})
