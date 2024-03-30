describe('Página de cadastro', () => {
    it('Verificar mensagem de campos obrigatorios', () => {
      cy.visit('http://localhost:4200/#/home');
      cy.get('[data-test="loginUserName"]').type('gustavojorge');
      cy.get('[data-test="loginPassword"]').type('Senha@123');
      cy.contains('button', 'login').click();
    });
  });