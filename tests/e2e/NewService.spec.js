/// <reference types="Cypress" />
describe('<NewService /> component', () => {
  beforeEach(() => {
    cy.clock()
    cy.visit('/')
    cy.tick(6000)
  })
  it('has a button to open a form where you can add a new service with defaults', () => {
    cy.get('[data-testid=new-service]')
      .should('have.attr', 'role', 'button')
      .click()
    cy.get('[data-testid=newServiceForm]').should('be.visible')
    cy.get('[data-testid=newServiceForm]').contains('Name der Dienstleistung:')
    cy.get('[data-testid=new-service-name]').should(
      'have.attr',
      'placeholder',
      'z.B. Verspachteln'
    )
    cy.get('[data-testid=newServiceForm]').contains('Stundensatz:')
    cy.get('[data-testid=costInput]').should(
      'have.attr',
      'placeholder',
      'z.B. 1€/1.50€, default: 50€'
    )
    cy.get('[data-testid=newServiceForm]').contains('Notiz(Optional):')
    cy.get('[data-testid=servicenote]').should(
      'have.attr',
      'placeholder',
      'Für Notizen zur Dienstleistung.'
    )
  })
  it('accepts given values and adds it as a new service', () => {
    cy.get('[data-testid=new-service]')
      .should('have.attr', 'role', 'button')
      .click()
    cy.get('[data-testid=new-service-name]').type('Cypress Test Name')
    cy.get('[data-testid=costInput]').type('1000')
    cy.get('[data-testid=servicenote]').type('Test Note for cypress test')
    cy.get('[data-testid=add-new-service]').click()
    cy.get('[data-testid=serviceCardWrapper] > :nth-child(1)').contains(
      'Cypress Test Name'
    )
  })
})
