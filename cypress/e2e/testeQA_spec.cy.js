context('Desafio Tinnova', () => {
  before(() => {
    cy.visit('https://tinnova-teste-qa.vercel.app/')
  });

  it('Realizar cadastro de usuário', () => {
    cy.get('.sc-bczRLJ').click() // Botão entrar
    cy.get('.sc-hKMtZM > :nth-child(3)').click() //Botão adicionar 
    cy.get(':nth-child(2) > .sc-iqcoie').should('be.visible').type('Eduardo') //Preenchendo nome completo
    cy.get(':nth-child(3) > .sc-iqcoie').should('be.visible').type('eduardo@gmail.com') //Preenchendo email
    cy.get(':nth-child(4) > .sc-iqcoie').should('be.be.visible').type('22222222222') //Preenchendo cpf 
    cy.get(':nth-child(5) > .sc-iqcoie').should('be.visible').type('22222222222') //Preenchendo telefone
    cy.get('.sc-bczRLJ').click() //Botão guardar

  });
  it('Realizar cadastro de usuário sem sucesso', () => {
    cy.visit('https://tinnova-teste-qa.vercel.app/')
    cy.get('.sc-bczRLJ').click() // Botão entrar
    cy.get('.sc-hKMtZM > :nth-child(3)').click() //Botão adicionar 
    cy.get(':nth-child(2) > .sc-iqcoie').should('be.visible').type('Marina ') //Preenchendo nome completo
    cy.get(':nth-child(3) > .sc-iqcoie').should('be.visible').type('marina@gmail.com') //Preenchendo email
    cy.get(':nth-child(5) > .sc-iqcoie').should('be.visible').type('22222222222') //Preenchendo telefone
    cy.get('.sc-bczRLJ').click() //Botão guardar
    cy.get('.swal-text').should('be.visible').should('have.text', 'Todos os campos devem ser preenchidos')
    //cy.get('.has-error > .help-block').should('have.text', 'Todos os campos devem ser preenchidos');
    

  });
  it('Realizar consulta de usuário', () => {
    cy.visit('https://tinnova-teste-qa.vercel.app/')
    cy.get('.sc-bczRLJ').click() // Botão entrar
    cy.get(':nth-child(1) > [style="width: 15%; justify-content: flex-start;"] > :nth-child(2)').click() //Clicando no botão de expansão/pesquisa
    cy.get('.sc-bczRLJ').click() //Clicando no botão voltar 
    /*
      Nessa aplicação só existe a função de expansão dos dados do usuário cadastrado. O sistema exibe uma nova tela com os mesmos
      dados que vemos no formato de lista antes da expansão.
      Ponto de melhoria: Adicionar um botão de busca por nome/email, que traga como retorno somente a célula do usuário referente a pesquisa
      e que mantenha as funcionalidades no box de ações caso seja um desejo do cliente
    */
  })
  it('Realizar edição de usuário', () => {
    cy.visit('https://tinnova-teste-qa.vercel.app/')
    cy.get('.sc-bczRLJ').click() // Botão entrar
    cy.get(':nth-child(1) > [style="width: 15%; justify-content: flex-start;"] > :nth-child(3)').click() //Clicando no botão de edição
    cy.get(':nth-child(2) > .sc-iqcoie').clear().should('be.be.visible').type('João Pedro') //trocando nome para "João Pedro"
    cy.get(':nth-child(5) > .sc-iqcoie').clear().should('be.be.visible').type('11111111111')//trocando telefone
    cy.get('.sc-bczRLJ').click() //clicando no botão atualizar 

  })
  it('Deletar usuário', () => {
    cy.visit('https://tinnova-teste-qa.vercel.app/')
    cy.get('.sc-bczRLJ').click() // Botão entrar
    cy.get(':nth-child(1) > [style="width: 15%; justify-content: flex-start;"] > :nth-child(4) > svg').click() //Clicando no botão de delete
    cy.get(':nth-child(2) > .swal-button').click()//clicando no botão SIM para deletar
  })
  it('Deletar usuário - cancelar processo', () => {
    cy.visit('https://tinnova-teste-qa.vercel.app/')
    cy.get('.sc-bczRLJ').click() // Botão entrar
    cy.get(':nth-child(1) > [style="width: 15%; justify-content: flex-start;"] > :nth-child(4) > svg').click() //Clicando no botão de delete
    cy.get(':nth-child(1) > .swal-button').click()//clicando no botão NÃO para cancelar a deleção
  })
  it('Pesquisar usuário com informação faltando no cadastro', () => {
    cy.visit('https://tinnova-teste-qa.vercel.app/')
    cy.get('.sc-bczRLJ').click() // Botão entrar
    cy.get('.sc-hKMtZM > :nth-child(3)').click() //Botão adicionar 
    cy.get(':nth-child(2) > .sc-iqcoie').should('be.visible').type('Ma') //Preenchendo nome completo
    cy.get('.sc-bczRLJ').click() //Botão guardar
    cy.get('.swal-button').click() //Clicar em "OK" no alerta de que todas os campos devem ser preenchidos
    cy.get(':nth-child(4) > [style="width: 15%; justify-content: flex-start;"] > :nth-child(2)').click() //pesquisando usuário incompleto
  })
});
