# AI Dev Team 🚀

Uma plataforma SaaS onde agentes de Inteligência Artificial colaboram como um time de desenvolvimento de software de alta performance (Planejamento, Código, Revisão).

## 🛠️ Stack Tecnológica (Backend)
- **Runtime:** Node.js
- **Linguagem:** TypeScript
- **Ferramenta de Dev:** `tsx` (TypeScript Execution)

## 📁 Estrutura do Projeto

```text
ai-dev-team/
├── src/
│   ├── api/             # Controllers, middlewares e rotas (HTTP/Sockets)
│   ├── agents/          # Definições, prompts e ferramentas (tools) dos agentes de IA
│   ├── orchestration/   # Motor de coordenação de fluxos e gerenciamento de estado
│   ├── domain/          # Entidades e interfaces de negócio do SaaS
│   ├── services/        # Provedores de LLM, manipulação de arquivos e projetos
│   ├── config/          # Variáveis de ambiente e configurações globais
│   └── utils/           # Logger, tratamento de exceções e helpers gerais
└── tests/               # Testes unitários e de integração
```

## 🚀 Como Executar

### 1. Instalar Dependências
```bash
npm install
```

### 2. Modo Desenvolvimento
```bash
npm run dev
```

### 3. Compilar para Produção
```bash
npm run build
```

### 4. Executar Versão Compilada
```bash
npm start
```

## 📌 Fases de Desenvolvimento
- [x] **Fase 1:** Estrutura inicial de pastas e configuração base (TypeScript, Node.js).
- [ ] **Fase 2:** Lógica inicial de agente (1 agente conversando via API/provedor LLM).
- [ ] **Fase 3:** Orquestração de múltiplos agentes (Planejador, Dev Backend, Revisor).
- [ ] **Fase 4:** Integração completa do fluxo colaborativo e persistência.
