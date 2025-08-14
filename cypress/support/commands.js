Cypress.Commands.add('findPair', character => {
  cy.get(`img[alt="${character}"]`).first().parent().parent().click()
  cy.get(`img[alt="${character}"]`).last().parent().parent().click()
})
