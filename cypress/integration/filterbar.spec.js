describe('searching in all topics', () => {
  it('displays all when input is cleared', () => {
    cy.visit('/topics-all')
    cy.get('input').type('fam').clear()
  })

  it('updates the value of the input if a user types into the input', () => {
    cy.visit('/topics-all')
    cy.get('input').type('fam').should('have.value', 'fam')
  })

  it('successfully finds entries', () => {
    cy.visit('/topics-all')
    cy.get('input').type('fam').should('have.value', 'fam')
  })

  it('displays the correct result searching for topic', () => {
    cy.visit('/topics-all')
    cy.get('input').type('fam')
    cy.get('[data-cy=topic]').contains('Familie')
  })

  it('displays the correct result searching for description', () => {
    cy.visit('/topics-all')
    cy.get('input').type('Ruhe')
    cy.get('[data-cy=topic]').contains('Groß')
  })
})

describe('searching for something in all bookmarked topics', () => {
  it('displays all when input is cleared', () => {
    cy.visit('/topics-for-discussion')
    cy.get('input').type('fam').clear()
  })

  it('updates the value of the input if a user types into the input', () => {
    cy.visit('/topics-for-discussion')
    cy.get('input').type('fam').should('have.value', 'fam')
  })

  it('successfully finds entries', () => {
    cy.visit('/topics-for-discussion')
    cy.get('input').type('fam').should('have.value', 'fam')
  })

  it('displays the correct result searching for topic', () => {
    cy.visit('/topics-for-discussion')
    cy.get('input').type('fam')
    cy.get('[data-cy=topic]').contains('Familie')
  })

  it('displays the correct result searching for description', () => {
    cy.visit('/topics-for-discussion')
    cy.get('input').type('Ruhe')
    cy.get('[data-cy=topic]').contains('Groß')
  })
})
