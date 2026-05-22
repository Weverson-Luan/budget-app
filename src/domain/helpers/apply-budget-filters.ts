/**
 * IMPORTS
 */

import { IBudgetCardItem } from "@/components/budget-card/interface";
import { BudgetFilters } from "@/domain/entities/budget/budget-filters.entity";
import { parsePrice } from "@/domain/helpers/calculate-investment-summary";

function applyBudgetFilters(
  budgets: IBudgetCardItem[],
  filters: BudgetFilters,
): IBudgetCardItem[] {
  const filtered =
    filters.statuses.length > 0
      ? budgets.filter((item) => filters.statuses.includes(item.status))
      : [...budgets];

  return filtered.sort((a, b) => {
    switch (filters.sortBy) {
      case "oldest":
        return Number(a.id) - Number(b.id);
      case "highest_value":
        return parsePrice(b.value) - parsePrice(a.value);
      case "lowest_value":
        return parsePrice(a.value) - parsePrice(b.value);
      case "newest":
      default:
        return Number(b.id) - Number(a.id);
    }
  });
}

/**
 * EXPORTS
 */
export { applyBudgetFilters };
