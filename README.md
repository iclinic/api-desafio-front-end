# Desafio Front-End iClinic

## Qual o desafio?

Criar uma implementação simplificada de um calendário de eventos, similar ao Google Calendar e a própria Agenda do sistema da iClinic utilizando **React** e **Redux**.

### Agenda

![p_20180525_151503](https://user-images.githubusercontent.com/679481/40561018-0f93df4c-6032-11e8-8dd6-7664f01df308.png)

- O calendário deve ter **7 colunas fixas**
- Cada coluna representa **um dia da semana** (de domingo até sábado)
- Ao carregar a aplicação o calendário **deve exibir a semana atual**
- No topo de cada coluna deve estar escrito o **dia da semana** junto com o **dia do mês** (ex: Domingo 20 de Maio)
- Deve haver uma **navegação na agenda** com as opções:
    - **Semana anterior** | **Essa Semana** | **Próxima Semana**
- Deve haver **um botão** que ao ser clicado exibe o **formulário de cadastrar eventos** 
- O evento deve aparecer **como um bloco** na coluna correspondente

### Formulário de cadastrar eventos

![p_20180525_151521](https://user-images.githubusercontent.com/679481/40561028-147f82ea-6032-11e8-9bbf-6690c7fa91cc.png)

- O Formulário de cadastro de evento deve ter os seguintes campos:
    - Título do evento
    - Data (ex: 21/06/2018)
    - Hora de Início (ex: 10:00) (data em formato 24h)
    - Hora de fim (ex: 10:30) (data em formato 24h)

- Deve haver um botão que ao ser clicado salve as informações do evento

### Formulário de editar eventos

![p_20180525_152435](https://user-images.githubusercontent.com/679481/40561022-12ecdfa4-6032-11e8-985b-60ffed876501.png)

- O formulário de edição do evento deve ter os mesmos campos do formulário de cadastrar eventos
- Deve haver um botão que ao ser clicado **exclua o evento**
- Deve haver um botão que ao ser clicado salve as alterações do evento


### Interação entre o formulário e o calendário

- Ao cadastrar um evento ele deve ser exibido na coluna correspondente ao seu dia da semana
- Os eventos devem estar ordenados na coluna por **Hora de início**
- Ao **clicar em um evento no calendário** deve abrir o formulário para editar as informações (título, data, hora de início e hora de fim)

### Design da aplicação

Embora tenhamos fornecido os protótipos de papel acima, não é necessário seguir a risca. Fique livre para nos mostrar sua criatividade no layout.

### Client JavaScript

Esse repositório contém um servidor mock para você interagir e desenvolver seu sistema. [Clique aqui](/Server.md) para acessar a documentação do servidor.

## Requisitos Técnicos
### Mínimo
- Utilizar React e Redux
- Você pode usar outras libraries para ajudar a construir a aplicação
- NÃO utilizar boilerplates de React (Ex: create-react-app, next.js, etc...)
- Utilizar **ES6/ESNext**.
- Organizar a aplicação em **módulos**.
- Use **Sass** para escrever o CSS.
- Hospede o código em um **repositório no Github**
- Utilize o **Github Pages** para criar uma demo da aplicação

### Bônus
- Implementar **testes unitários**.
- Utilizar **Webpack**. 
- Fazer o build da aplicação utilizando **NPM Scripts**. 