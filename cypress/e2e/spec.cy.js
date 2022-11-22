describe('E2E', () => {
  it('Should load and then display the landing', () => {
    cy.visit('/')
    cy.get("[id=loader]").as('loader')
    expect('loader').to.exist
    cy.wait(2000)
    cy.get("div[id=backgroundImage]").as('bgImage')
    cy.get("[id=navLogo]").as('navLogo')
    cy.get("div[id=navMenu]").as('navMenu')
    cy.get("h1[id=heroText]").as('heroText')
    expect('bgImage').to.exist
    expect('navLogo').to.exist
    expect('navMenu').to.exist
    expect('heroText').to.exist
  })
})