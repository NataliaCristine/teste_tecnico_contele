# Introdução

Uma aplicação em que cadastra um usuário podendo atualizar e deletar seus dados. Assim como listar todos os usuários ou um usuário específico.

# Ambiente

## Dependências

- Ambiente Linux ou Windows (WSL2) + docker
- - NVM versão utilizada no projeto v16.13.1

## Construindo o Ambiente

Antes de executar as instalações é importante ter o linux atualizado. Podendo utilizar o comando abaixo:

> sudo apt update && upgrade

Depois instale o Docker e docker-compose:
Instale o docker conforme documentação do site oficial:
[Instalação do docker via repositório](http://docs.docker.com/engine/install/ubuntu/#install-using-the-repository)

# Executar o Projeto

### Esse passo é baixar o projeto

https://github.com/NataliaCristine/teste_tecnico_contele.git

Se tiver ssh configurada utilize:
git@github.com:NataliaCristine/teste_tecnico_contele.git

## Rodar o Projeto

Para rodar o projeto deve utilizar o comando:

> docker-compose up

### Utilização

Para utilizar deve utilizar um API Client como Insomnia. No http://localhost:3000

Documentação no http://localhost:3000/api-documentation/#/
