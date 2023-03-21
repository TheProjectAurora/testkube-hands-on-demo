describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('http://foass-service.foass.svc.cluster.local') 

    expect(Cypress.env('testparam')).to.equal('testvalue')

    cy.contains('foass')
  })
})
