/// <reference types="cypress"/>

describe('first shop test', () => {
    it('verify logo is visible', function () {
      cy.visit('/');
      cy.get('.logo').should('be.visible')
    })
  })