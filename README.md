
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
## Relatório

[Link direto para o arquivo html](https://github.com/anaclarasantr/testeQA/tree/master/cypress/reports/html)

[Link direto para o video de report](https://github.com/anaclarasantr/testeQA/tree/master/cypress/videos)
![Captura de Tela 2023-03-04 às 19 35 22](https://user-images.githubusercontent.com/89486335/222931586-0cb48315-ccf9-4d99-852d-76bb31fe377d.png)
