describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('http://10.244.0.120') 

    expect(Cypress.env('testparam')).to.equal('testvalue')

    cy.contains('foass')
  })
})
