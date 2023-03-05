import cadastro from "../support/pages/cadastro";
import consulta from "../support/pages/consulta";

context('Desafio Tinnova', () => {
  before(() => {
    cy.visit('https://tinnova-teste-qa.vercel.app/');
  });

  it('Realizar cadastro de usuário', () => {
    cadastro.acessarCadastro();
    cadastro.preencherCadastro();
  });

  it('Realizar cadastro de usuário sem sucesso', () => {
    cadastro.acessarCadastro();
    cadastro.preencherCadastroIncompleto();
    cy.get('.swal-text').should('be.visible').should('have.text', 'Todos os campos devem ser preenchidos'); //verificando alerta
  });

  it('Realizar consulta de usuário', () => {
    consulta.acessarConsulta();
  })

  it('Pesquisar usuário com informação faltando no cadastro', () => {
    cadastro.acessarCadastro();
    cadastro.preencherCadastroIncompleto();
    consulta.acessarConsulta();
    cy.get(':nth-child(3) > [style="width: 15%; justify-content: flex-start;"] > :nth-child(2)').click() //pesquisando usuário incompleto
  })
  
  it('Realizar edição de usuário', () => {
    cadastro.acessarCadastro();
    cy.get(':nth-child(1) > [style="width: 15%; justify-content: flex-start;"] > :nth-child(3)').click(); //Clicando no botão de edição
    cy.get(':nth-child(2) > .sc-iqcoie').clear().should('be.be.visible').type('João Pedro'); //trocando nome para "João Pedro"
    cy.get(':nth-child(5) > .sc-iqcoie').clear().should('be.be.visible').type('11111111111');//trocando telefone
    cy.get('.sc-bczRLJ').click(); //clicando no botão atualizar 

  })
  it('Deletar usuário', () => {
    cadastro.acessarCadastro();
    cy.get(':nth-child(1) > [style="width: 15%; justify-content: flex-start;"] > :nth-child(4) > svg').click(); //Clicando no botão de delete
    cy.get(':nth-child(2) > .swal-button').click();//clicando no botão SIM para deletar
  })
  it('Deletar usuário - cancelar processo', () => {
    cadastro.acessarCadastro();
    cy.get(':nth-child(1) > [style="width: 15%; justify-content: flex-start;"] > :nth-child(4) > svg').click(); //Clicando no botão de delete
    cy.get(':nth-child(1) > .swal-button').click();//clicando no botão NÃO para cancelar a deleção
  })
  
});
