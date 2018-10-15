# Servidor da API

## Requisitos

- Node v8 ou acima

## Rodando o projeto

### Clonando projeto e instalando dependências

Clone esse repositório e acesse o diretório criado. Instale as dependências utilizando:

```
npm install
```

ou

```
yarn
```

### Inicializando o servidor

Para utilizá-lo, rode o comando:

```
npm run start:api
```

ou

```
yarn start:api
```

Um servidor será inicializado na porta `9000`.

> __Importante:__ Esse servidor simula um banco de dados e resetará os dados cada vez que for reiniciado.

### Interagindo com o servidor

O servidor expõe quatro rotas:

#### Index

Retorna todos os eventos do banco de dados.

- URL: http://localhost:9000/events/
- Verb: GET
- Response:

  - Type: JSON
  - Example:

    ```js
    // GET => http://localhost:9000/events/
    [
      {
        id: 1,
        created_at: 1538587923916,
        updated_at: 1538587923916,
        title: 'background',
        date: '2018-08-30T22:56:01.306Z',
        start_time: '16:21',
        end_time: '16:51'
      },

      // ...

      {
        id: 20,
        created_at: 1538587923917,
        updated_at: 1538587923917,
        title: 'transitional',
        date: '2018-08-29T15:17:05.798Z',
        start_time: '08:59',
        end_time: '09:29'
      }
    ];
    ```

#### Create

Cria um novo evento e retorna os dados do banco de dados.

- URL: http://localhost:9000/events/
- Verb: POST
- Type: JSON
- Body:
  - title: `required`
  - date: `required` | `date` | `dateFormat: YYYY-MM-DD`
  - start_time: `required` | `timeFormat: HH:mm`
  - end_time: `required` | `timeFormat: HH:mm`
- Example:

  ```js
  // POST => http://localhost:9000/events/
  {
    "title": "My event",
    "date": "2018-10-03",
    "start_time": "16:21",
    "end_time": "16:51"
  }
  ```

- Response:

  - Type: JSON

  ```js
  // POST => http://localhost:9000/events/
  {
    "id": 21,
    "created_at": 1538588053744,
    "updated_at": 1538588053744,
    "title": "My event",
    "date": "2018-10-03T00:00:00.000Z",
    "start_time": "16:21",
    "end_time": "16:51"
  }
  ```

#### Show

Retorna o evento com um id específico.

- URL: http://localhost:9000/events/{id}
- Verb: GET
- Type: JSON

- Response:

  - Type: JSON

  ```js
  // GET => http://localhost:9000/events/2
  {
    "id": 2,
    "created_at": 1538587923916,
    "updated_at": 1538587923916,
    "title": "grid-enabled",
    "date": "2018-08-28T06:14:20.538Z",
    "start_time": "17:07",
    "end_time": "17:37"
  }
  ```

#### Update

Atualiza um evento com um id específico.

- URL: http://localhost:9000/events/{id}
- Verb: PUT/PATCH
- Type: JSON
- Body:

  - title: `required`
  - date: `required` | `date` | `dateFormat: YYYY-MM-DD`
  - start_time: `required` | `timeFormat: HH:mm`
  - end_time: `required` | `timeFormat: HH:mm`

- Example:

  ```js
  // PATCH => http://localhost:9000/events/21
  {
    "title": "My updated event",
    "date": "2018-10-03",
    "start_time": "16:21",
    "end_time": "16:51"
  }
  ```

- Response:

  - Type: JSON

  ```js
  // PATCH => http://localhost:9000/events/21
  {
    "id": 21,
    "created_at": 1538588053744,
    "updated_at": 1538588149868,
    "title": "My updated event",
    "date": "2018-10-03",
    "start_time": "16:21",
    "end_time": "16:51"
  }
  ```

#### Delete

Retorna o evento com um id específico.

- URL: http://localhost:9000/events/{id}
- Verb: DELETE
- Type: JSON

- Response:
  ```js
  // DELETE => http://localhost:9000/events/2
  true;
  ```
