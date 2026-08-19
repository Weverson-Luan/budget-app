/**
 * IMPORTS
 */

import { BudgetFilters } from "@/domain/entities/budget/budget-filters.entity";
import { QuoteDoc } from "@/domain/entities/budget/budget.entity";
import { calculateQuoteTotals } from "@/domain/helpers/calculate-quote-totals";

function toTimestamp(isoDate: string): number {
  const timestamp = new Date(isoDate).getTime();

  return Number.isNaN(timestamp) ? 0 : timestamp;
}

function toTotal(budget: QuoteDoc): number {
  return calculateQuoteTotals(budget.items, budget.discountPct).total;
}

function matchesSearch(budget: QuoteDoc, search: string): boolean {
  const term = search.trim().toLowerCase();

  if (!term) {
    return true;
  }

  return (
    budget.title.toLowerCase().includes(term) ||
    budget.client.toLowerCase().includes(term)
  );
}

/**
 * Aplica filtro por status, busca textual e ordenação
 * sobre a lista de orçamentos.
 */
function applyBudgetFilters(
  budgets: QuoteDoc[],
  filters: BudgetFilters,
  search = "",
): QuoteDoc[] {
  const filtered = budgets.filter((budget) => {
    const matchesStatus =
      filters.statuses.length === 0 ||
      filters.statuses.includes(budget.status);

    return matchesStatus && matchesSearch(budget, search);
  });

  return filtered.sort((a, b) => {
    switch (filters.sortBy) {
      case "oldest":
        return toTimestamp(a.createdAt) - toTimestamp(b.createdAt);
      case "highest_value":
        return toTotal(b) - toTotal(a);
      case "lowest_value":
        return toTotal(a) - toTotal(b);
      case "newest":
      default:
        return toTimestamp(b.createdAt) - toTimestamp(a.createdAt);
    }
  });
}

/**
 * EXPORTS
 */
export { applyBudgetFilters };
