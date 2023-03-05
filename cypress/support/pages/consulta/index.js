const el = require('./elements').ELEMENTS;
class Consulta{
    acessarConsulta(){
        cy.visit('https://tinnova-teste-qa.vercel.app/') 
        cy.get(el.buttonEntrar).click() // Botão entrar
        cy.get(':nth-child(1) > [style="width: 15%; justify-content: flex-start;"] > :nth-child(2)').click() //Clicando no botão de expansão/pesquisa
        cy.get(el.buttonVoltar).click() //Clicando no botão voltar 
    }

}

export default new Consulta();