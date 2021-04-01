/// <reference types="Cypress" />
describe('<Calculationpage /> save result function', () => {
  beforeEach(() => {
    cy.clock()
    cy.visit('/')
    cy.tick(6000)
  })
  it('has a button to open the save form', () => {
    cy.get('[data-testid=save-result-button]')
      .should('have.attr', 'role', 'button')
      .click()
    cy.get('[data-testid=safeResultForm]').should('be.visible')
  })
  it('displays the right values in the save form', () => {
    cy.get('[data-testid=save-result-button]')
      .should('have.attr', 'role', 'button')
      .click()
    cy.get('[data-testid=safeResultForm]').should('be.visible').contains('0€')
    cy.get('.SaveResultForm__AbortButton-sc-10e14d-5').click()
    cy.get(
      '[data-testid=cardcontainer] > :nth-child(1) > [data-testid=buttonBox] > [data-testid=add-button]:first'
    )
      .click()
      .click()
    cy.get('[data-testid=save-result-button]').click()
    cy.get('[data-testid=safeResultForm]').should('be.visible').contains('48€')
  })
})
