describe('navigating through the app by clicking buttons', () => {
  it('successfully loads', () => {
    cy.visit('/')
    cy.get('[data-testid=statements-link]').click({ multiple: true })
    cy.url().should('include', '/statements')

    cy.visit('/')
    cy.get('[data-testid=result-link]').click({ multiple: true })
    cy.url().should('include', '/result')

    cy.visit('/')
    cy.get('[data-testid=entries-link]').click({ force: true, multiple: true })
    cy.url().should('include', '/entries')

    cy.visit('/')
    cy.get('[data-testid=topics-link]').click({ force: true, multiple: true })
    cy.url().should('include', '/topics')
  })
})
