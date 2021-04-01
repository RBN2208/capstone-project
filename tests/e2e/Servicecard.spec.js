/// <reference types="Cypress" />
describe('<Servicecard /> component', () => {
  beforeEach(() => {
    cy.clock()
    cy.visit('/')
    cy.tick(6000)
  })
  it('has a default card with text "Bohren" and two buttons to add and substrate values', () => {
    cy.get('[data-testid=serviceCardWrapper] > :nth-child(1)').contains(
      'Bohren'
    )
    cy.get('[data-testid=minus-button]').contains('-').should('be.disabled')
    cy.get('[data-testid=add-button]').contains('+').should('not.be.disabled')
    cy.get(
      '[data-testid=cardcontainer] > :nth-child(1) > [data-testid=buttonBox] > [data-testid=add-button]:first'
    )
      .click()
      .click()
    cy.get('[data-testid=minus-button]').contains('-').should('not.be.disabled')
    cy.get('[data-testid=resultBox] > span').contains('Endpreis: 48 €')
    cy.get(
      '[data-testid=cardcontainer] > :nth-child(1) > [data-testid=buttonBox] > [data-testid=minus-button]:first'
    )
      .click()
      .click()
    cy.get('[data-testid=resultBox] > span').contains('Endpreis: 0 €')
  })
  it('opens a new infobox when the card is clicked', () => {
    cy.get('[data-testid=serviceCardWrapper] > :nth-child(1)').click()
    cy.get('[data-testid=cardInfo]').should('be.visible')
  })
  it('opens a new infobox with default values, wich can be changed', () => {
    cy.get('[data-testid=serviceCardWrapper] > :nth-child(1)').click()
    cy.get('[data-testid=cardInfo]').should('be.visible')
    cy.get('[data-testid=cardInfo]').contains('Zeit: 0 Stunden')
    cy.get('[data-testid=cardInfo]').contains('Stundensatz:')
    cy.get('[data-testid=cardInfo]').contains('Helfertätigkeit')
    cy.get('[data-testid=costInput]').should('have.attr', 'placeholder', '24€')
    cy.get('[data-testid=costInput]').type('44')
    cy.get('[data-testid=setNewCosts]').click()
    cy.get('[data-testid=costInput]').should('have.attr', 'placeholder', '44€')
  })
  it('can be deleted', () => {
    cy.get('[data-testid=serviceCardWrapper] > :nth-child(1)').click()
    cy.get('[data-testid=cardInfo]').should('be.visible')
    cy.get('[data-testid=deleteEntryButton]').click()
    cy.get('[data-testid=delete-entry]').click()
    cy.get('[data-testid=serviceCardWrapper]').should(
      'not.contain.text',
      'Bohren'
    )
  })
})
