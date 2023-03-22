describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('http://foass-service.foass.svc.cluster.local') 
 
    cy.contains('Fuck Off As A Service')
  })
})
