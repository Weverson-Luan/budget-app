/**
 * IMPORTS
 */

import { IBudgetCardItem } from "@/components/budget-card/interface";
import { IBudgetOverviewProps } from "@/components/budget-overview/interface";
import { IServiceItem } from "@/components/included-services/interface";
import { IInvestmentSummaryOverviewProps } from "@/components/investment-summary-overview/interface";
import { IStatusType } from "@/components/status/interface";

interface IBudgetDetail {
  id: string;
  status: IStatusType;
  overview: IBudgetOverviewProps;
  services: IServiceItem[];
  investment: IInvestmentSummaryOverviewProps;
}

type BudgetDetailsMap = Record<string, IBudgetDetail>;

interface SaveBudgetInput {
  id?: string;
  title: string;
  client: string;
  status: IStatusType;
  services: IServiceItem[];
}

/**
 * EXPORTS
 */
export type {
  IBudgetCardItem,
  IBudgetDetail,
  BudgetDetailsMap,
  SaveBudgetInput,
};
