/**
 * IMPORTS
 */

import { QuoteDoc } from "@/domain/entities/budget/budget.entity";

/**
 * Orçamentos de exemplo gravados na primeira execução do app,
 * já no formato `QuoteDoc`.
 */
const BUDGET_SEED_LIST: QuoteDoc[] = [
  {
    id: "seed-1",
    title: "Desenvolvimento de aplicativo de loja online",
    client: "Soluções Tecnológicas Beta",
    status: "approved",
    discountPct: 5,
    createdAt: "2024-08-22T09:00:00.000Z",
    updatedAt: "2024-08-25T14:30:00.000Z",
    items: [
      {
        id: "seed-1-item-1",
        description: "Design de interfaces",
        details: "Criação de wireframes e protótipos de alta fidelidade",
        qty: 1,
        price: 3847.5,
      },
      {
        id: "seed-1-item-2",
        description: "Desenvolvimento front-end",
        details: "Criação de interfaces de usuário interativas",
        qty: 2,
        price: 3847.5,
      },
      {
        id: "seed-1-item-3",
        description: "Desenvolvimento back-end",
        details: "Implementação de servidor, banco de dados e APIs",
        qty: 1,
        price: 3847.5,
      },
      {
        id: "seed-1-item-4",
        description: "Implantação e suporte",
        details: "Publicação nas lojas de aplicativos e suporte técnico",
        qty: 1,
        price: 3847.5,
      },
    ],
  },
  {
    id: "seed-2",
    title: "Consultoria em marketing digital",
    client: "Marketing Wizards",
    status: "draft",
    createdAt: "2024-09-02T10:15:00.000Z",
    updatedAt: "2024-09-02T10:15:00.000Z",
    items: [
      {
        id: "seed-2-item-1",
        description: "Diagnóstico de canais",
        details: "Análise de presença digital e concorrência",
        qty: 1,
        price: 1500,
      },
      {
        id: "seed-2-item-2",
        description: "Plano de mídia",
        details: "Definição de investimento por canal",
        qty: 1,
        price: 2500,
      },
    ],
  },
  {
    id: "seed-3",
    title: "Serviços de SEO",
    client: "SEO Masters",
    status: "sent",
    discountPct: 10,
    createdAt: "2024-09-10T08:40:00.000Z",
    updatedAt: "2024-09-12T16:05:00.000Z",
    items: [
      {
        id: "seed-3-item-1",
        description: "Auditoria técnica",
        details: "Correção de indexação e performance",
        qty: 1,
        price: 1900,
      },
      {
        id: "seed-3-item-2",
        description: "Otimização de conteúdo",
        details: "Revisão de páginas e palavras-chave",
        qty: 2,
        price: 900,
      },
    ],
  },
  {
    id: "seed-4",
    title: "Criação de conteúdo",
    client: "Content Creators",
    status: "draft",
    createdAt: "2024-09-18T11:20:00.000Z",
    updatedAt: "2024-09-18T11:20:00.000Z",
    items: [
      {
        id: "seed-4-item-1",
        description: "Artigos para blog",
        details: "Produção de 5 artigos otimizados",
        qty: 5,
        price: 320,
      },
      {
        id: "seed-4-item-2",
        description: "Roteiro de vídeo",
        details: "Roteiro e storyboard para institucional",
        qty: 1,
        price: 900,
      },
    ],
  },
  {
    id: "seed-5",
    title: "Gestão de redes sociais",
    client: "Social Experts",
    status: "declined",
    createdAt: "2024-09-25T13:00:00.000Z",
    updatedAt: "2024-09-27T09:45:00.000Z",
    items: [
      {
        id: "seed-5-item-1",
        description: "Calendário editorial",
        details: "Planejamento mensal de publicações",
        qty: 1,
        price: 800,
      },
      {
        id: "seed-5-item-2",
        description: "Criação de posts",
        details: "Peças gráficas e legendas",
        qty: 10,
        price: 100,
      },
    ],
  },
  {
    id: "seed-6",
    title: "Design de interface",
    client: "UI/UX Designers",
    status: "approved",
    discountPct: 8,
    createdAt: "2024-10-03T15:30:00.000Z",
    updatedAt: "2024-10-05T10:10:00.000Z",
    items: [
      {
        id: "seed-6-item-1",
        description: "Design system",
        details: "Tokens, componentes e documentação",
        qty: 1,
        price: 3200,
      },
      {
        id: "seed-6-item-2",
        description: "Protótipo navegável",
        details: "Fluxos principais em alta fidelidade",
        qty: 1,
        price: 2400,
      },
    ],
  },
];

/**
 * EXPORTS
 */
export { BUDGET_SEED_LIST };
