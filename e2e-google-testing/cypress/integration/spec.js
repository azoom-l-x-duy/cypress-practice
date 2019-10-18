describe('Simple testing Google with Cypress', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  // TODO: seperate fill to search field action, click search button to utils

  it('Google page contains Google Search button', () => {
    cy.get('div center').find('input[name="btnK"]')
      .invoke('val')
      .then(value => {
        expect(value).toContain('Google')
      })
  })

  it('Process exact query "AZoom JP"', () => {
    cy.get('input[name="q"]').focus().type('AZoom JP').blur()
    cy.get('#searchform').click('right')
    cy.get('form[role="search"]')
      .find('input[name="btnK"]')
      .last()
      .click()
    cy.url().should('contain', '=AZoom+JP&')
  })

  it('Process search action by "enter" after filled input in search field', () => {
    cy.get('input[name="q"]').focus().type('AZoom JP{enter}').then(() => {
      cy.url().should('contain', '=AZoom+JP&')
    })
  })

  it('Search result for keyword "AZoom JP"', () => {
    cy.get('input[name="q"]').focus().type('AZoom JP').blur()
    cy.get('#searchform').click('right')
    cy.get('form[role="search"]')
      .find('input[name="btnK"]')
      .last()
      .click()
    cy.contains('不動産テックの株式会社アズーム').should('be.visible')
  })

  it('Click Google img after searched to go to Google Home', () => {
    cy.get('input[name="q"]').focus().type('AZoom JP').blur()
    cy.get('#searchform').click('right')
    cy.get('form[role="search"]')
      .find('input[name="btnK"]')
      .last()
      .click()
    cy.get('#searchform').click(50, 25)
    cy.url().should('include', '/webhp')
  })

  it('Cannot search without query', () => {
    cy.get('form[role="search"]')
      .find('input[name="btnK"]')
      .last()
      .click()
    cy.url().should('not.include', '/search')
  })
})
