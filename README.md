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

## Agentes planejados

Product Manager · Software Architect · UI/UX Designer · Frontend Developer · Backend Developer · QA Engineer · DevOps Engineer · Security Engineer · Database Engineer · Tech Lead · Documentation Writer

## 📌 Fases de Desenvolvimento
- [x] **Fase 0:** Definição da arquitetura de alto nível.
- [x] **Fase 1:** Estrutura inicial de pastas e configuração base (TypeScript, Node.js).
- [ ] **Fase 2:** Lógica inicial de agente (1 agente conversando via API/provedor LLM).
- [ ] **Fase 3:** Orquestração de múltiplos agentes (Planejador, Dev Backend, Revisor).
- [ ] **Fase 4:** Integração completa do fluxo colaborativo e persistência.

## O que aprendemos na Fase 0

- Separação de responsabilidades como princípio central de arquitetura
- Diferença entre orquestração por regras fixas vs. autonomia de agentes, e por que um meio-termo reduz riscos (loops, imprevisibilidade)
- Adapter Pattern como forma de desacoplar o sistema de provedores específicos de IA
- Princípio SOLID de Inversão de Dependência aplicado na prática

## Changelog

- **Fase 0**: definição da arquitetura de alto nível, decisão pelo Adapter Pattern para integração com LLMs, e pela orquestração híbrida (sequência fixa + autonomia por etapa).
- **Fase 1**: estrutura inicial de pastas criada (`src/api`, `src/agents`, `src/orchestration`, `src/domain`, `src/services`, `src/config`, `src/utils`, `tests/`), configuração de TypeScript + Node.js.

## Ferramentas de apoio

O desenvolvimento é assistido por IA via Antigravity, com uso segmentado por modelo:

- **Claude Opus 4.6 (Thinking)** — decisões de arquitetura e revisão de lógica complexa
- **Gemini 3.1 Pro (High)** — segunda opinião em decisões técnicas
- **Gemini 3.6 Flash (Medium/Low)** — geração de código combinado e tarefas repetitivas