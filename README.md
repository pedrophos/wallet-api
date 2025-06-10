# NestJS User Service with Prisma

Este projeto é um serviço de gerenciamento de usuários construído com [NestJS](https://nestjs.com/), utilizando [Prisma ORM](https://www.prisma.io/) para comunicação com banco de dados PostgreSQL e testes unitários com [Jest](https://jestjs.io/).

## ✨ Tecnologias

- [NestJS](https://nestjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Jest](https://jestjs.io/)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [Docker](https://www.docker.com/)
- [TypeScript](https://www.typescriptlang.org)

## 📁 Estrutura do Projeto
```plaintext
src/
├── config/ # Serviços de configuração (ex: PrismaService)
├── users/ # Módulo de usuários
│ ├── dto/ # Data Transfer Objects (validação e tipagem)
│ ├── user.controller.ts
│ ├── user.service.ts
│ ├── user.module.ts
│ └── user.service.spec.ts # Testes unitários
├── app.module.ts

```

## 🚀 Instalação e execução


# Clone o projeto
git clone https://github.com/seu-usuario/seu-projeto.git
cd seu-projeto

# Instale as dependências
npm install

# Configure o Prisma
npx prisma init

# Crie o schema do banco (ajuste o arquivo .env com sua URL do Postgres)
npx prisma migrate dev --name init

# Execute a aplicação
npm run start:dev

# Execute os testes com Jest
npm run test

🔒 Segurança
As senhas são armazenadas com hash via bcryptjs

O DTO protege o serviço validando os dados de entrada

Nenhuma senha é retornada nas respostas da API


