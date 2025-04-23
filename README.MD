# Sistema de Restaurante - FoodFlex

Este é um sistema completo para gerenciamento de restaurantes, pedidos e entregas. O projeto é dividido em frontend (React) e backend (Node.js).

## 🚀 Tecnologias

- Frontend: React, Material-UI
- Backend: Node.js, Express, Sequelize
- Banco de dados: MySQL (via Docker)
- Outros: Docker, Docker Compose

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- Docker e Docker Compose
- Git

## 🔧 Instalação e Configuração

### 1. Clonando o Repositório

```bash
git clone [URL_DO_REPOSITORIO]
cd sistema-restaurante
```

### 2. Configurando o Backend

```bash
cd backend

# Instalando dependências
npm install

# Copiando arquivo de ambiente
cp exemple.env .env
```

### 3. Configurando o Docker

```bash
# Na pasta backend, inicie os containers do MySQL e phpMyAdmin
docker-compose up -d
```

Após iniciar os containers, você terá acesso a:
- MySQL na porta 3306
- phpMyAdmin em http://localhost:8080
  - Login: root
  - Senha: root

### 4. Configurando o Banco de Dados

```bash
# Na pasta backend, execute as migrations
npx sequelize-cli db:migrate
```

### 5. Configurando o Frontend

```bash
# Volte para a raiz do projeto e entre na pasta frontend
cd ../frontend

# Instalando dependências
npm install

# Copiando arquivo de ambiente
cp .env.example .env
```

## 🚀 Iniciando o Sistema

### 1. Iniciando o Backend

```bash
cd backend
npm run dev
```

O backend estará disponível em http://localhost:3000

### 2. Iniciando o Frontend

```bash
cd frontend
npm start
```

O frontend estará disponível em http://localhost:3001

## 👥 Tipos de Usuário

O sistema possui dois tipos de usuário:

1. **Cliente (C)**
   - Pode visualizar restaurantes
   - Fazer pedidos
   - Acompanhar status dos pedidos

2. **Restaurante (R)**
   - Gerenciar produtos
   - Receber pedidos
   - Atualizar status dos pedidos

## 📱 Funcionalidades Principais

### Para Clientes

1. **Cadastro e Login**
   - Acesse a página inicial
   - Clique em "Cadastrar" para criar uma conta
   - Use email e senha para login

2. **Fazendo Pedidos**
   - Navegue pela lista de restaurantes
   - Selecione produtos
   - Adicione ao carrinho
   - Finalize o pedido

### Para Restaurantes

1. **Cadastro e Login**
   - Selecione "Sou Restaurante" no cadastro
   - Complete o perfil do restaurante
   - Faça login com suas credenciais

2. **Gerenciando Produtos**
   - Adicione novos produtos
   - Atualize preços e disponibilidade
   - Gerencie pedidos recebidos

## 🗃️ Estrutura do Banco de Dados

O sistema utiliza as seguintes tabelas principais:
- usuarios
- restaurantes
- produtos
- pedidos
- pedidos_produtos

## 🔒 Variáveis de Ambiente

### Backend (.env)
```env
DB_USER=root
DB_PASSWORD=root
DB_DATABASE=foodflex
DB_HOST=mysql
DB_PORT=3306

JWT_KEY=sua_chave_jwt_secreta

PORT=3000
```

### Frontend (.env)
```env
REACT_APP_HOST_API=http://localhost:3000
```

## 🐛 Solução de Problemas Comuns

1. **Erro de conexão com o banco de dados**
   - Verifique se os containers Docker estão rodando
   - Confirme as credenciais no arquivo .env
   - Verifique se o banco de dados foi criado

2. **Erro nas migrations**
   - Certifique-se de que o MySQL está rodando
   - Verifique se as credenciais estão corretas
   - Tente recriar o banco de dados

3. **Erro de CORS**
   - Verifique se as URLs no frontend e backend estão corretas
   - Confirme se o backend está rodando

## 📦 Comandos Docker Úteis

```bash
# Verificar status dos containers
docker-compose ps

# Parar os containers
docker-compose down

# Reconstruir os containers
docker-compose up -d --build

# Logs dos containers
docker-compose logs
```

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## ✨ Agradecimentos

Agradecemos a todos os contribuidores e à comunidade open source pelos recursos utilizados neste projeto.
