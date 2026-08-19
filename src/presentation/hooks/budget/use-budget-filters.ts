/**
 * IMPORTS
 */

import { useCallback, useEffect, useMemo, useState } from "react";

import {
  BudgetFilters,
  BudgetSortOrder,
  DEFAULT_BUDGET_FILTERS,
} from "@/domain/entities/budget/budget-filters.entity";
import { QuoteDoc, QuoteStatus } from "@/domain/entities/budget/budget.entity";
import { applyBudgetFilters } from "@/domain/helpers/apply-budget-filters";
import { budgetUseCases } from "@/factories/budget/make-budget-use-cases.factory";
import { useBudgetStorage } from "./index";

/**
 * Gerencia os filtros da listagem de orçamentos.
 *
 * Os filtros aplicados são persistidos no dispositivo e
 * recuperados na abertura do app. A busca textual é transitória.
 */
function useBudgetFilters(budgets: QuoteDoc[]) {
  const { isReady } = useBudgetStorage();

  const [appliedFilters, setAppliedFilters] =
    useState<BudgetFilters>(DEFAULT_BUDGET_FILTERS);
  const [draftFilters, setDraftFilters] =
    useState<BudgetFilters>(DEFAULT_BUDGET_FILTERS);
  const [search, setSearch] = useState("");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    if (!isReady) {
      return;
    }

    let mounted = true;

    budgetUseCases.getFilters.execute().then((stored) => {
      if (!mounted) {
        return;
      }

      setAppliedFilters(stored);
      setDraftFilters(stored);
      setHydrated(true);
    });

    return () => {
      mounted = false;
    };
  }, [isReady]);

  const filteredBudgets = useMemo(
    () => applyBudgetFilters(budgets, appliedFilters, search),
    [budgets, appliedFilters, search],
  );

  const hasActiveFilters = useMemo(
    () =>
      appliedFilters.statuses.length > 0 ||
      appliedFilters.sortBy !== DEFAULT_BUDGET_FILTERS.sortBy,
    [appliedFilters],
  );

  const openFilters = useCallback(() => {
    setDraftFilters(appliedFilters);
  }, [appliedFilters]);

  const toggleDraftStatus = useCallback((status: QuoteStatus) => {
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
    budgetUseCases.saveFilters.execute(draftFilters);
  }, [draftFilters]);

  const resetFilters = useCallback(() => {
    setAppliedFilters(DEFAULT_BUDGET_FILTERS);
    setDraftFilters(DEFAULT_BUDGET_FILTERS);
    budgetUseCases.saveFilters.execute(DEFAULT_BUDGET_FILTERS);
  }, []);

  return {
    draftFilters,
    filteredBudgets,
    hasActiveFilters,
    hydrated,
    search,
    setSearch,
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
