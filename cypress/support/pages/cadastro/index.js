//ações de interação com a página 
const el = require('./elements').ELEMENTS;
class Cadastro{
    acessarCadastro(){
        cy.visit('https://tinnova-teste-qa.vercel.app/');
        cy.get(el.buttonEntrar).click(); // Botão entrar
    }

    preencherCadastro(){
        cy.get(el.buttonAdicionar).click(); //Botão adicionar 
        cy.get(':nth-child(2) > .sc-iqcoie').should('be.visible').type('Eduardo'); //Preenchendo nome completo
        cy.get(':nth-child(3) > .sc-iqcoie').should('be.visible').type('eduardo@gmail.com'); //Preenchendo email
        cy.get(':nth-child(4) > .sc-iqcoie').should('be.be.visible').type('22222222222'); //Preenchendo cpf 
        cy.get(':nth-child(5) > .sc-iqcoie').should('be.visible').type('22222222222'); //Preenchendo telefone
        cy.get(el.buttonGuardar).click(); //Botão guardar
    }

    preencherCadastroIncompleto(){
        cy.get(el.buttonAdicionar).click(); //Botão adicionar 
        cy.get(':nth-child(2) > .sc-iqcoie').should('be.visible').type('Marina '); //Preenchendo nome completo
        cy.get(':nth-child(3) > .sc-iqcoie').should('be.visible').type('marina@gmail.com'); //Preenchendo email
        cy.get(':nth-child(5) > .sc-iqcoie').should('be.visible').type('22222222222'); //Preenchendo telefone
        cy.get(el.buttonGuardar).click(); //Botão guardar
    }

}

export default new Cadastro();