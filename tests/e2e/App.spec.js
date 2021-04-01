/// <reference types="Cypress" />
describe('<App /> component', () => {
  beforeEach(() => {
    cy.clock()
    cy.visit('/')
    cy.tick(6000)
  })
  it('renders landingpage and then the app', () => {
    cy.visit('/')
  })
  it('has a menubutton with a navigation to navigate between sites', () => {
    cy.get('[data-testid="slidemenubutton"]').click()
    cy.contains('a', 'Historie').click()
    cy.get('[data-testid="slidemenubutton"]').click()
    cy.contains('a', 'Kalkulation').click()
  })
  it('has a searchbar, wich searchs for services and displays them', () => {
    cy.get('[data-testid=searchbar]').type('Bohren')
    cy.get('[data-testid=serviceCardWrapper]').contains('Bohren')
    cy.get('[data-testid=serviceCardWrapper]').not('Verspachteln')
    cy.get('[data-testid=serviceCardWrapper]').not('Laminat verlegen')
  })
  it('adds and substrates the values of each card to an endresult and displays it', () => {
    cy.get(
      '[data-testid=cardcontainer] > :nth-child(1) > [data-testid=buttonBox] > [data-testid=add-button]:first'
    )
      .click()
      .click()
      .click()
    cy.get('[data-testid=resultBox] > span').contains('Endpreis: 72 €')
    cy.get(
      '[data-testid=cardcontainer] > :nth-child(1) > [data-testid=buttonBox] > [data-testid=add-button]:first'
    ).click()
    cy.get('[data-testid=resultBox] > span').contains('Endpreis: 96 €')
  })
  it('adds a new service, adds its value and saves it to the history', () => {
    cy.get('[data-testid="new-service"]').click()
    cy.get('[data-testid=new-service-name]').type('Testservice')
    cy.get('[data-testid=costInput]').type('101')
    cy.get('[data-testid=servicenote]').type(
      'Hier steht nur ein Text um die App mit Cypress zu testen'
    )
    cy.get('[data-testid=add-new-service]').click()
    cy.get('[data-testid=serviceCardWrapper] > :nth-child(1)').click()
    cy.get(
      '[data-testid=cardcontainer] > :nth-child(1) > [data-testid=buttonBox] > [data-testid=add-button]:first'
    ).click()
    cy.get('[data-testid="save-result-button"]').click()
    cy.get('[data-testid=saveform-keynote]').type('Mister Cypress')
    cy.get('[data-testid=save-result]').click()
    cy.get('[data-testid="slidemenubutton"]').click()
    cy.contains('a', 'Historie').click()
    cy.get('[data-testid="keynote"]').contains('Mister Cypress')
    cy.get('[data-testid="info-box"]').contains('101€')
    cy.get('[data-testid="image-details"]').click()
    cy.get('[data-testid="saved-images"]').contains('Keine Bilder vorhanden.')
    cy.get('[data-testid="image-details"]').click()
    cy.get('[data-testid="service-details"]').click()
    cy.get('[data-testid="used-services"]').contains('Testservice')
    cy.get('[data-testid="service-details"]').click()
    cy.get('[data-testid="entry-delete"]').click()
    cy.get('[data-testid="abort-delete"]').click()
    cy.get('[data-testid="entry-delete"]').click()
    cy.get('[data-testid="delete-entry"]').click()
    cy.get('[data-testid="slidemenubutton"]').click()
    cy.contains('a', 'Kalkulation').click()
    cy.get('[data-testid="new-service"]').click()
    cy.get('[data-testid=new-service-name]').type('YES!')
    cy.get('[data-testid=costInput]').type('9999')
    cy.get('[data-testid=servicenote]').type(
      'All tests are working, my app is working!'
    )
    cy.get('[data-testid=add-new-service]').click()
    cy.get('[data-testid=serviceCardWrapper] > :nth-child(1)').click()
  })
})
