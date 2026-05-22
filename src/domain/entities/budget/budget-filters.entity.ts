/**
 * IMPORTS
 */

import { IStatusType } from "@/components/status/interface";

type BudgetSortOrder = "newest" | "oldest" | "highest_value" | "lowest_value";

interface BudgetFilters {
  statuses: IStatusType[];
  sortBy: BudgetSortOrder;
}

const DEFAULT_BUDGET_FILTERS: BudgetFilters = {
  statuses: [],
  sortBy: "newest",
};

/**
 * EXPORTS
 */
export type { BudgetFilters, BudgetSortOrder };
export { DEFAULT_BUDGET_FILTERS };
