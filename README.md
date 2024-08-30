# API Hamburgueria

Uma API simples para gerenciar pedidos de uma hamburgueria, desenvolvida utilizando Node.js e Express. Este projeto serve como um exemplo inicial para a criação de uma API RESTful, utilizando um array em memória para armazenar os dados dos pedidos. Em um cenário de produção, o armazenamento de dados seria feito em um banco de dados.

## Sumário

- [Descrição](#descrição)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Uso](#uso)
- [Rotas da API](#rotas-da-api)
  - [Criar pedido](#post-order-criar-pedido)
  - [Listar todos os pedidos](#get-order-listar-todos-os-pedidos)
  - [Atualizar pedido](#put-orderid-atualizar-pedido)
  - [Deletar pedido](#delete-orderid-deletar-pedido)
  - [Consultar pedido específico](#get-orderid-consultar-pedido-específico)
  - [Alterar status do pedido](#patch-orderid-alterar-status-do-pedido)

## Descrição

Este projeto utiliza Node.js e Express para criar uma API que gerencia pedidos de uma hamburgueria. A API permite criar, listar, atualizar, deletar e alterar o status de pedidos. No momento, os dados são armazenados em um array em memória, mas o correto seria usar um banco de dados para armazenamento persistente.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no servidor.
- **Express**: Framework web rápido e minimalista para Node.js.

## Instalação

1. **Clone o repositório para sua máquina local:**

    ```bash
    git clone https://github.com/seu-usuario/api-hamburgueria.git
    ```

2. **Navegue até o diretório do projeto:**

    ```bash
    cd api-hamburgueria
    ```

3. **Instale as dependências:**

    ```bash
    npm install
    ```

4. **Inicie o servidor:**

    ```bash
    node app.js
    ```

   O servidor será iniciado em `http://localhost:3000`.

## Uso

Utilize ferramentas como Postman ou Insomnia para testar as rotas da API, ou utilize o comando `curl` no terminal para fazer requisições HTTP.

## Rotas da API

### POST /order: Criar Pedido

- **Descrição**: Cria um novo pedido.
- **Exemplo de Requisição**:

    ```json
    {
        "order": "Hamburguer com bacon",
        "clientName": "João Silva",
        "price": 25.50
    }
    ```

- **Resposta**:

    ```json
    {
        "id": 1,
        "order": "Hamburguer com bacon",
        "clientName": "João Silva",
        "price": 25.50,
        "status": "Em preparo"
    }
    ```

### GET /order: Listar Todos os Pedidos

- **Descrição**: Retorna uma lista com todos os pedidos.
- **Resposta**:

    ```json
    [
        {
            "id": 1,
            "order": "Hamburguer com bacon",
            "clientName": "João Silva",
            "price": 25.50,
            "status": "Em preparo"
        },
        {
            "id": 2,
            "order": "Hamburguer vegetariano",
            "clientName": "Maria Souza",
            "price": 20.00,
            "status": "Em preparo"
        }
    ]
    ```

### PUT /order/:id: Atualizar pedido

- **Descrição**: Atualiza um pedido existente com base no `id`.
- **Exemplo de requisição**:

    ```json
    {
        "order": "Hamburguer duplo com queijo",
        "clientName": "João Silva",
        "price": 30.00
    }
    ```

- **Resposta**:

    ```json
    {
        "id": 1,
        "order": "Hamburguer duplo com queijo",
        "clientName": "João Silva",
        "price": 30.00,
        "status": "Em preparo"
    }
    ```

### DELETE /order/:id: Deletar pedido

- **Descrição**: Deleta um pedido com base no `id`.
- **Resposta**:

    ```json
    {
        "message": "Order deleted successfully"
    }
    ```

### GET /order/:id: Consultar pedido específico

- **Descrição**: Retorna um pedido específico com base no `id`.
- **Resposta**:

    ```json
    {
        "id": 1,
        "order": "Hamburguer com bacon",
        "clientName": "João Silva",
        "price": 25.50,
        "status": "Em preparo"
    }
    ```

### PATCH /order/:id: Alterar status do pedido

- **Descrição**: Altera o status de um pedido para "Pronto".
- **Resposta**:

    ```json
    {
        "id": 1,
        "order": "Hamburguer com bacon",
        "clientName": "João Silva",
        "price": 25.50,
        "status": "Pronto"
    }
    ```
