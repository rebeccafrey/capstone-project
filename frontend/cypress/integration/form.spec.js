describe('insert new entry', () => {
  it('successfully submit new topic', () => {
    cy.visit('/entries')
    cy.get('[data-cy=submit-button]').should('be.disabled')
    cy.get('[id=topic]').type('test-title')
    cy.get('[id=description]').type('test-description')
    cy.get('[type=checkbox]').click({ force: true, multiple: true })
    cy.get('[data-cy=submit-entry]').submit()
    cy.get('[data-testid=topics-link]').click({ multiple: true })
    cy.get('ul').should('contain', 'test-title')
  })
})
