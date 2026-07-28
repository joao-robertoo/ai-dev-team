# API Layer (`src/api`)

Responsável pela camada de interface externa (REST / WebSockets).

- `controllers/`: Recebe as requisições, faz validação inicial de input e invoca serviços de orquestração.
- `middlewares/`: Trata autenticação, autorização, log de requisições e tratamento global de erros.
- `routes/`: Define as rotas da aplicação.
