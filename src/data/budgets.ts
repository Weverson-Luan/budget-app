/**
 * IMPORTS
 */

import { IBudgetCardItem } from "@/components/budget-card/interface";
import { IBudgetOverviewProps } from "@/components/budget-overview/interface";
import { MOCK_BUDGET_OVERVIEW } from "@/components/budget-overview/mock";
import { IServiceItem } from "@/components/included-services/interface";
import { MOCK_SERVICES } from "@/components/included-services/mock";
import { MOCK_SERVICES_OVERVIEW } from "@/components/included-services-overview/mock";
import { IInvestmentSummaryOverviewProps } from "@/components/investment-summary-overview/interface";
import { MOCK_INVESTMENT_OVERVIEW } from "@/components/investment-summary-overview/mock";
import { IStatusType } from "@/components/status/interface";

interface IBudgetDetail {
  id: string;
  status: IStatusType;
  overview: IBudgetOverviewProps;
  services: IServiceItem[];
  investment: IInvestmentSummaryOverviewProps;
}

const BUDGET_LIST: IBudgetCardItem[] = [
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

const DESIGN_DETAIL: Omit<IBudgetDetail, "id" | "status"> = {
  overview: MOCK_BUDGET_OVERVIEW,
  services: MOCK_SERVICES_OVERVIEW,
  investment: MOCK_INVESTMENT_OVERVIEW,
};

function buildOverviewFromCard(item: IBudgetCardItem): IBudgetOverviewProps {
  return {
    title: item.title,
    client: item.client,
    ...DEFAULT_DATES,
  };
}

function getBudgetDetailById(id: string): IBudgetDetail {
  const card = BUDGET_LIST.find((item) => item.id === id) ?? BUDGET_LIST[0];

  if (id === "1" || !BUDGET_LIST.find((item) => item.id === id)) {
    return {
      id: card.id,
      status: card.status,
      ...DESIGN_DETAIL,
    };
  }

  return {
    id: card.id,
    status: card.status,
    overview: buildOverviewFromCard(card),
    services: MOCK_SERVICES,
    investment: MOCK_INVESTMENT_OVERVIEW,
  };
}

/**
 * EXPORTS
 */
export { BUDGET_LIST, getBudgetDetailById };
export type { IBudgetDetail };
