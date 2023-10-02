describe('Retry ability', () => {
  // it('Visit with delay', () => {
  //   cy.visit('/loaddelay', { timeout: 3000 })
  // })

  it('Visit with delay', () => {
    cy.visit('/clientdelay')
    cy.get('#ajaxButton').click()
    cy.get('.bg-success').should(
      'have.text',
      'Data calculated on the client side.',
    )
  })

  it.only('Progress Bar scenario', () => {
    cy.visit('/progressbar')
    cy.get('#startButton').click()
    cy.get('#progressBar').should('have.text', '100%')
  })
})
