# AI Dev Team

Plataforma SaaS onde múltiplos agentes de Inteligência Artificial atuam como um time de desenvolvimento completo. O usuário cria um projeto, descreve sua ideia e escolhe um ou mais modelos de IA; a plataforma conduz o projeto por um fluxo de agentes especializados (Product Manager, Arquiteto, Frontend, Backend, QA, DevOps, Segurança, Banco de Dados, Tech Lead e Documentação), entregando ao final planejamento, arquitetura, código, testes e relatório completo.

Este projeto está sendo construído em fases públicas, como um estudo de caso de arquitetura de software e engenharia de IA.

## Status atual

**Fase 0 — Fundamentos e Arquitetura Geral** (em andamento)

Nesta fase ainda não há código. O objetivo é definir a espinha dorsal do sistema antes de qualquer implementação.

## Visão de arquitetura (alto nível)

O sistema é dividido em três fronteiras principais:

```
[ Usuário ]
     │
     ▼
[ Interface (Frontend) ]
     │
     ▼
[ Orquestrador de Agentes ]
     │
     ▼
[ Camada de Integração com LLMs ]
     │
     ▼
[ Provedor de IA escolhido ]
```

### 1. Orquestrador de Agentes

Segue uma sequência fixa de etapas (Product Manager → Architect → Frontend/Backend → QA → DevOps → Documentação), mas cada agente tem autonomia total para decidir *como* executar sua própria etapa. A sequência geral é previsível (evita loops e facilita depuração); a execução dentro de cada etapa é flexível.

### 2. Camada de Integração com LLMs (Adapter Pattern)

Nenhum agente conversa diretamente com a API de um provedor específico (Gemini, Claude, Groq, OpenAI, Kimi). Todos passam por uma interface única e genérica. Um adaptador por provedor é responsável por traduzir essa chamada genérica para o formato específico de cada IA.

```
[ Agente ]
     │
     ▼
[ Interface: ProvedorDeIA ]
     │
 ┌───┼────┬──────┐
 ▼   ▼    ▼      ▼
Gemini Claude Groq OpenAI/Kimi...
```

Vantagem principal: trocar ou adicionar um provedor de IA exige mexer em um único lugar (o adaptador correspondente), não em cada agente individualmente. Isso segue o princípio SOLID de Inversão de Dependência.

## Stack planejada

- Next.js, React, TypeScript, Tailwind CSS
- Supabase + Supabase Auth
- n8n
- GitHub + Vercel
- Priorizando tecnologias gratuitas sempre que possível

## Agentes planejados

Product Manager · Software Architect · UI/UX Designer · Frontend Developer · Backend Developer · QA Engineer · DevOps Engineer · Security Engineer · Database Engineer · Tech Lead · Documentation Writer

## O que aprendemos na Fase 0

- Separação de responsabilidades como princípio central de arquitetura
- Diferença entre orquestração por regras fixas vs. autonomia de agentes, e por que um meio-termo reduz riscos (loops, imprevisibilidade)
- Adapter Pattern como forma de desacoplar o sistema de provedores específicos de IA
- Princípio SOLID de Inversão de Dependência aplicado na prática

## O que falta

- Estruturar o repositório e as pastas refletindo essas três fronteiras
- Detalhar o modelo de dados (Fase futura)
- Definir o contrato exato da interface `ProvedorDeIA`
- Iniciar a Fase 1 (estrutura inicial do projeto)

## Changelog

- **Fase 0**: definição da arquitetura de alto nível, decisão pelo Adapter Pattern para integração com LLMs, e pela orquestração híbrida (sequência fixa + autonomia por etapa).
