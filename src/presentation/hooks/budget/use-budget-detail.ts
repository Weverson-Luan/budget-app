/**
 * IMPORTS
 */

import { useCallback, useEffect, useState } from "react";

import { QuoteDoc } from "@/domain/entities/budget/budget.entity";
import { budgetUseCases } from "@/factories/budget/make-budget-use-cases.factory";
import { useBudgetStorage } from "./index";

function useBudgetDetail(id: string) {
  const { isReady, revision } = useBudgetStorage();
  const [budget, setBudget] = useState<QuoteDoc | null>(null);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    if (!id) {
      setBudget(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    const result = await budgetUseCases.getById.execute(id);
    setBudget(result);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    if (!isReady) {
      return;
    }

    refresh();
  }, [isReady, revision, refresh]);

  return { budget, loading, refresh };
}

/**
 * EXPORTS
 */
export { useBudgetDetail };
