describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/classattr')
  })
  it('how to find an element by its text', () => {
    cy.xpath(`//*[text()='Correct variant is']`).should(
      'contain.text',
      'Correct',
    )
  })
})
