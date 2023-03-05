
# DesafioTinnova-
Repositório para armazenamento e envio do desafio de Quality Assurance - Tinnova 


## 💻 Sobre o projeto
Este projeto utiliza **Cypress** para criação de uma suite de testes  da interface do site  https://tinnova-teste-qa.vercel.app/
Nesse projeto, as fases abaixo utilizaram o browser google chrome.

---

**Desafio Nível 1**

  • Cadastro de usuário

  • Consulta de usuário

**Desafio Nível 2**

  • Edição de usuário 

  • Deletar usuário

**Desafio Nível 3**

  • Cenários Exploratórios

  • Cenários Negativos

  • Automação de cenários e sugestões de Melhorias

  • Relatório(formato e conteúdo de informações livres)
  
---

## BDD 
Neste arquivo, estão descritos os cenários que guiaram o desenvolvimento do scrip de testes.

[Link direto para o arquivo: ](https://github.com/anaclarasantr/testeQA/blob/master/BDD%20-%20TINNOVA.pdf)

---
## Sugestão de melhorias do sistema

**- Cadastro de usuário**

Dentro da funcionalidade de cadastro de usuário, podemos travar o "Salvar" caso todos os campos não estejam preenchidos. Da forma como está estruturado atualmente, o sistema mostra um alerta informando que todos os campos precisam ser preenchidos mas é possível cadastrar mesmo assim. 

**- Consulta de usuário**

Nessa aplicação só existe a função de expansão dos dados do usuário cadastrado. O sistema exibe uma nova tela com os mesmos dados que vemos no formato de lista antes da expansão. O ponto de melhori nessa funcionalidade seria adicionar um botão de busca por nome/email, que traga como retorno somente a célula do usuário referente a pesquisa e que mantenha as funcionalidades no box de ações caso seja um desejo do cliente. Quando pensamos em um sistema com mais de 100 usuários cadastrados, fica inviável buscar o nome visualmente pela lista para então expandir os dados.

**- Edição de usuário**
Atualmente podemos editar todos os campos, uma atualização pertinente seria travar a edição do CPF, que é um valor imutável e pode ser a chave primária de outras funções do sistema.

**OBS:** Alguns testes negativos como os casos de cadastro e consulta não foram executados devido a forma como o sistema foi desenvolvido. Como não temos a trava de campos, não conseguimos obter um resultado negativo de busca ou cadastro por exemplo.

---
## Comandos para execução 

**Ambiente de desenvolvimento**

Nodejs (node): https://nodejs.org/en/

IDE VSCode (code): https://code.visualstudio.com/ 

JDK (java): https://www.oracle.com/java/technologies/javase-downloads.html

Maven (mvn) https://maven.apache.org

**Instalação - Cypress**

Instalação do cypress via linha de comando. Abra o terminal e digite
```
npm install cypress
```


Caso não queira utilizar o cypress pelo NPM, pode fazer o download direto do site: https://www.cypress.io/
[Link para download direto:](https://download.cypress.io/desktop)

Basta baixar, extrair, executar o Cypress.exe e apontar para o diretório do projeto desejado na interface do cypress. Utilize a IDE para editar o código.

**Comandos úteis cypress**

Criar o diretório inicial e indicar para o node que o diretório é um projeto
```
npm init
```

Baixar as dependencias do projeto (caso já tenha baixado o código do git)
 
 ```
npm install
```

Abrir cypress pela linha de comando:
 ```
  ./node_modules/.bin/cypress open
```

Rodar specs por linha de comando:
  ```
 ./node_modules/.bin/cypress run --spec 'cypress/e2e/**/'
```

Para gerar um report HTML, siga os 4 passos abaixo:

1. Adicionando as dependências necessárias para gerar o reporte de testes:
```
npm i --save-dev cypress-mochawesome-reporter
```
	
2. Modificar o arquivo cypress.config.js:

![Captura de Tela 2023-03-04 às 21 03 57](https://user-images.githubusercontent.com/89486335/222934484-8f2de63a-b813-4f5b-8a46-f4a48574f169.png)


3. Adicionar em cypress/support/e2e.js:

```
import 'cypress-mochawesome-reporter/register';
```

4. Rodar specs pela linha de comando:
```
./node_modules/.bin/cypress run --spec 'cypress/e2e/**/'
```


## Relatório

[Link direto para o arquivo html](https://github.com/anaclarasantr/testeQA/tree/master/cypress/reports/html)

[Link direto para o video de report](https://github.com/anaclarasantr/testeQA/tree/master/cypress/videos)
![Captura de Tela 2023-03-04 às 19 35 22](https://user-images.githubusercontent.com/89486335/222931586-0cb48315-ccf9-4d99-852d-76bb31fe377d.png)
