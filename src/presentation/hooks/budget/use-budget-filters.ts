/**
 * IMPORTS
 */

import { useCallback, useMemo, useState } from "react";

import { IBudgetCardItem } from "@/components/budget-card/interface";
import { IStatusType } from "@/components/status/interface";
import {
  BudgetFilters,
  BudgetSortOrder,
  DEFAULT_BUDGET_FILTERS,
} from "@/domain/entities/budget/budget-filters.entity";
import { applyBudgetFilters } from "@/domain/helpers/apply-budget-filters";

function useBudgetFilters(budgets: IBudgetCardItem[]) {
  const [appliedFilters, setAppliedFilters] =
    useState<BudgetFilters>(DEFAULT_BUDGET_FILTERS);
  const [draftFilters, setDraftFilters] =
    useState<BudgetFilters>(DEFAULT_BUDGET_FILTERS);

  const filteredBudgets = useMemo(
    () => applyBudgetFilters(budgets, appliedFilters),
    [budgets, appliedFilters],
  );

  const openFilters = useCallback(() => {
    setDraftFilters(appliedFilters);
  }, [appliedFilters]);

  const toggleDraftStatus = useCallback((status: IStatusType) => {
    setDraftFilters((prev) => {
      const isSelected = prev.statuses.includes(status);

      return {
        ...prev,
        statuses: isSelected
          ? prev.statuses.filter((item) => item !== status)
          : [...prev.statuses, status],
      };
    });
  }, []);

  const setDraftSortBy = useCallback((sortBy: BudgetSortOrder) => {
    setDraftFilters((prev) => ({ ...prev, sortBy }));
  }, []);

  const applyFilters = useCallback(() => {
    setAppliedFilters(draftFilters);
  }, [draftFilters]);

  const resetFilters = useCallback(() => {
    setAppliedFilters(DEFAULT_BUDGET_FILTERS);
    setDraftFilters(DEFAULT_BUDGET_FILTERS);
  }, []);

  return {
    appliedFilters,
    draftFilters,
    filteredBudgets,
    openFilters,
    toggleDraftStatus,
    setDraftSortBy,
    applyFilters,
    resetFilters,
  };
}

/**
 * EXPORTS
 */
export { useBudgetFilters };
