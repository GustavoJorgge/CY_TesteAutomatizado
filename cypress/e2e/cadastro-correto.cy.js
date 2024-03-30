//describe é o titulo do teste
describe('Pagina de Cadastro', () => {
  it('Preencher os campos do formulario corretamente para cadastrar um novo usuario', () => {
    cy.visit('http://localhost:4200/#/home')
    cy.contains('a', 'Register now').click();
    cy.get('[data-test="email"]').type('gustavojorge@email.com.br')
    cy.get('[data-test="fullName"]').type('Gustavo Jorge Completo')
    cy.get('[data-test="registerUserName"]').type('gustavojorge')
    cy.get('[data-test="registerPassword"]').type('Senha@123')
    cy.contains('button', 'Register').click();
  })
})