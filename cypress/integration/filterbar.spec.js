describe('searching in all topics', () => {
  it('should displays all when input is cleared', () => {
    cy.visit('/topics-all')
    cy.get('input').type('fam').clear()
  })

  it('should update the value of the input if a user types into the input', () => {
    cy.visit('/topics-all')
    cy.get('input').type('fam').should('have.value', 'fam')
  })

  it('should successfully find entries', () => {
    cy.visit('/topics-all')
    cy.get('input').type('fam').should('have.value', 'fam')
  })

  it('should display the correct result searching for topic', () => {
    cy.visit('/topics-all')
    cy.get('input').type('fam')
    cy.get('[data-cy=topic]').contains('Familie')
  })

  it('should display the correct result searching for description', () => {
    cy.visit('/topics-all')
    cy.get('input').type('Ruhe')
    cy.get('[data-cy=topic]').contains('Groß')
  })
})

describe('should search for something in all bookmarked topics', () => {
  it('displays all when input is cleared', () => {
    cy.visit('/topics-for-discussion')
    cy.get('input').type('fam').clear()
  })

  it('should update the value of the input if a user types into the input', () => {
    cy.visit('/topics-for-discussion')
    cy.get('input').type('fam').should('have.value', 'fam')
  })

  it('should successfully find entries', () => {
    cy.visit('/topics-for-discussion')
    cy.get('input').type('fam').should('have.value', 'fam')
  })

  it('should display text if no search match', () => {
    cy.visit('/topics-for-discussion')
    cy.get('input').type('hdhdh')
    cy.contains('keine offenen Themen')
  })
})
