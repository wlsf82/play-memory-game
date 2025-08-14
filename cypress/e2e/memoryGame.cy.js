describe('The Walking Dead Memory Game', () => {
  it('wins the game', () => {
    cy.visit('https://dead-memory-match.lovable.app')
    cy.get('#lovable-badge-close').click()

    cy.get('.ease-in-out').should('have.length', 16)
    cy.get('.ease-in-out.rotate-y-180').should('have.length', 2)
    cy.get('.ease-in-out:not(.rotate-y-180)').should('have.length', 14)

    cy.contains('h3', 'The Walking Dead Memory').should('be.visible')
    cy.contains('p', 'Score').next().should('contain', '100').and('be.visible')
    cy.contains('p', 'Moves').next().should('contain', '0').and('be.visible')
    cy.contains('p', 'Pairs Found').next().should('contain', '1 / 8').and('be.visible')

    cy.findPair('Michonne')
    cy.findPair('Negan')
    cy.findPair('Maggie Greene')
    cy.findPair('Glenn Rhee')
    cy.findPair('Daryl Dixon')
    cy.findPair('Carol Peletier')
    cy.findPair('Abraham Ford')

    cy.contains('h3', '🎉 You Won!').should('be.visible')
    cy.contains('p', 'Score').next().should('contain', '800').and('be.visible')
    cy.contains('p', 'Moves').next().should('contain', '7').and('be.visible')
    cy.contains('p', 'Pairs Found').next().should('contain', '8 / 8').and('be.visible')
    cy.contains('p.text-game-card-matched', 'Completed in 7 moves!').should('be.visible')
  })
})