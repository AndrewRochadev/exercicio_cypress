/// <reference types="cypress" />

describe('Testes de adição de contato, alteração e remoção', () => {
    beforeEach(() =>{
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    it('Deve adicionar um contato', () => {
        cy.get('[type="text"]').type('Andrew Rocha')
        cy.get('[type="email"]').type('andrew.pablo66@gmail.com')
        cy.get('[type="tel"]').type('81 9 9999-4444')
        cy.get('.adicionar').click()
    })
    
    it('Deve alterar um contato', () => {
        cy.get(':nth-child(4) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').clear()
        cy.get('[type="text"]').type('Andrew Pablo')
        cy.get('[type="email"]').clear()
        cy.get('[type="email"]').type('andrewq.pablo@gmail.com')
        cy.get('[type="tel"]').clear()
        cy.get('[type="tel"]').type('81 9 9999-9999')
        cy.get('.alterar').click()
    })

    it('Deve remover um contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()
    })
})