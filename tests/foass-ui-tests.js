describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('http://172.17.0.7') 

    expect(Cypress.env('testparam')).to.equal('testvalue')

    cy.contains('foass')
  })
})
