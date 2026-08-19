/**
 * IMPORTS
 */

import { QuoteStatus } from "./budget.entity";

type BudgetSortOrder = "newest" | "oldest" | "highest_value" | "lowest_value";

interface BudgetFilters {
  statuses: QuoteStatus[];
  sortBy: BudgetSortOrder;
}

const DEFAULT_BUDGET_FILTERS: BudgetFilters = {
  statuses: [],
  sortBy: "newest",
};

const BUDGET_SORT_ORDERS: BudgetSortOrder[] = [
  "newest",
  "oldest",
  "highest_value",
  "lowest_value",
];

const BUDGET_STATUSES: QuoteStatus[] = [
  "draft",
  "sent",
  "approved",
  "declined",
];

/**
 * Garante que o valor lido do storage é um filtro válido.
 *
 * Protege a aplicação de dados corrompidos ou de versões
 * anteriores do app, caindo no filtro padrão quando necessário.
 */
function normalizeBudgetFilters(value: unknown): BudgetFilters {
  if (!value || typeof value !== "object") {
    return DEFAULT_BUDGET_FILTERS;
  }

  const candidate = value as Partial<BudgetFilters>;

  const statuses = Array.isArray(candidate.statuses)
    ? candidate.statuses.filter((status) => BUDGET_STATUSES.includes(status))
    : [];

  const sortBy =
    candidate.sortBy && BUDGET_SORT_ORDERS.includes(candidate.sortBy)
      ? candidate.sortBy
      : DEFAULT_BUDGET_FILTERS.sortBy;

  return { statuses, sortBy };
}

/**
 * EXPORTS
 */
export type { BudgetFilters, BudgetSortOrder };
export {
  BUDGET_SORT_ORDERS,
  BUDGET_STATUSES,
  DEFAULT_BUDGET_FILTERS,
  normalizeBudgetFilters,
};
