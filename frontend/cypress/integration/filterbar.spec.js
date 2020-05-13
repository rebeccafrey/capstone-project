describe('searching for something', () => {
  it('successfully finds entries', () => {
    cy.visit('/topics')
    cy.get('input').type('fam').should('have.value', 'fam')
  })

  it('displays the correct result searching for topic', () => {
    cy.visit('/topics')
    cy.get('input').type('fam')
    cy.get('[data-cy=topic]').contains('Familie')
  })

  it('displays the correct result searching for description', () => {
    cy.visit('/topics')
    cy.get('input').type('Ruhe')
    cy.get('[data-cy=topic]').contains('Groß')
  })

  it('displays all when input is cleared', () => {
    cy.get('input').type('fam').clear()
  })
})
