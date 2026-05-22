/**
 * IMPORTS
 */

import { IBudgetCardItem } from "@/components/budget-card/interface";
import { IBudgetOverviewProps } from "@/components/budget-overview/interface";
import { IServiceItem } from "@/components/included-services/interface";
import { IInvestmentSummaryOverviewProps } from "@/components/investment-summary-overview/interface";
import {
  BudgetDetailsMap,
  IBudgetDetail,
} from "@/domain/entities/budget/budget.entity";

const BUDGET_SEED_LIST: IBudgetCardItem[] = [
  {
    id: "1",
    title: "Desenvolvimento de aplicativo de loja online",
    client: "Soluções Tecnológicas Beta",
    value: "R$ 22.300,00",
    status: "approved",
  },
  {
    id: "2",
    title: "Consultoria em marketing digital",
    client: "Marketing Wizards",
    value: "R$ 4.000,00",
    status: "draft",
  },
  {
    id: "3",
    title: "Serviços de SEO",
    client: "SEO Masters",
    value: "R$ 3.500,00",
    status: "sent",
  },
  {
    id: "4",
    title: "Criação de conteúdo",
    client: "Content Creators",
    value: "R$ 2.500,00",
    status: "draft",
  },
  {
    id: "5",
    title: "Gestão de redes sociais",
    client: "Social Experts",
    value: "R$ 1.800,00",
    status: "declined",
  },
  {
    id: "6",
    title: "Design de interface",
    client: "UI/UX Designers",
    value: "R$ 5.200,00",
    status: "approved",
  },
];

const DEFAULT_DATES = {
  createdAt: "22/08/2024",
  updatedAt: "25/08/2024",
};

const DESIGN_OVERVIEW: IBudgetOverviewProps = {
  title: "Desenvolvimento de aplicativo de loja online",
  client: "Soluções Tecnológicas Beta",
  ...DEFAULT_DATES,
};

const DESIGN_SERVICES: IServiceItem[] = [
  {
    id: "1",
    title: "Design de interfaces",
    description: "Criação de wireframes e protótipos de alta fidelidade",
    price: "R$ 3.847,50",
    quantity: 1,
  },
  {
    id: "2",
    title: "Desenvolvimento front-end",
    description: "Criação de interfaces de usuário interativas",
    price: "R$ 3.847,50",
    quantity: 1,
  },
  {
    id: "3",
    title: "Desenvolvimento back-end",
    description: "Implementação de servidor, banco de dados e APIs",
    price: "R$ 3.847,50",
    quantity: 1,
  },
  {
    id: "4",
    title: "Implantação e suporte",
    description: "Publicação nas lojas de aplicativos e suporte técnico",
    price: "R$ 3.847,50",
    quantity: 1,
  },
];

const DESIGN_INVESTMENT: IInvestmentSummaryOverviewProps = {
  subtotal: "R$ 4.050,00",
  discountPercent: 5,
  discountValue: "R$ 200,00",
  total: "R$ 3.847,50",
};

const DEFAULT_SERVICES: IServiceItem[] = [
  {
    id: "1",
    title: "Design de interfaces",
    description: "Criação de wireframes e protótipos navegáveis",
    price: "R$ 3.847,50",
    quantity: 1,
  },
  {
    id: "2",
    title: "Implantação e suporte",
    description: "Publicação nas lojas de aplicativos e treinamento",
    price: "R$ 1.280,00",
    quantity: 1,
  },
];

const DEFAULT_INVESTMENT: IInvestmentSummaryOverviewProps = {
  subtotal: "R$ 4.050,00",
  discountPercent: 5,
  discountValue: "R$ 200,00",
  total: "R$ 3.847,50",
};

function buildOverviewFromCard(item: IBudgetCardItem): IBudgetOverviewProps {
  return {
    title: item.title,
    client: item.client,
    ...DEFAULT_DATES,
  };
}

function buildBudgetDetailsSeed(): BudgetDetailsMap {
  const details: BudgetDetailsMap = {};

  for (const card of BUDGET_SEED_LIST) {
    if (card.id === "1") {
      details[card.id] = {
        id: card.id,
        status: card.status,
        overview: DESIGN_OVERVIEW,
        services: DESIGN_SERVICES,
        investment: DESIGN_INVESTMENT,
      };
      continue;
    }

    details[card.id] = {
      id: card.id,
      status: card.status,
      overview: buildOverviewFromCard(card),
      services: DEFAULT_SERVICES,
      investment: DEFAULT_INVESTMENT,
    };
  }

  return details;
}

const BUDGET_SEED_DETAILS = buildBudgetDetailsSeed();

/**
 * EXPORTS
 */
export { BUDGET_SEED_LIST, BUDGET_SEED_DETAILS };
export type { IBudgetDetail };
