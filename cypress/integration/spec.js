describe('Simple testing Google with Cypress', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Test is running', () => {
    expect(1).toEqual(1)
  })
})
