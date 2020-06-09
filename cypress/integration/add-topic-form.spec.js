describe('insert new entry', () => {
  it('should successfully submit new topic', () => {
    cy.visit('/add-topics')
    cy.get('[data-cy=submit-button]').should('be.disabled')
    cy.get('[id=topic]').type('test-title')
    cy.get('[id=description]').type('test-description', { force: true })
    cy.get('[type=checkbox]').click({ force: true, multiple: true })
    cy.get('[data-cy=submit-entry]').submit()
    cy.contains('Dein Thema wurde hinzugefügt!')
    cy.get('[data-testid=topics-link]').click({ force: true, multiple: true })
    cy.get('ul').should('contain', 'test-title')
  })
})
