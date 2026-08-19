/**
 * IMPORTS
 */

import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";

import { QuoteDoc } from "@/domain/entities/budget/budget.entity";
import { budgetUseCases } from "@/factories/budget/make-budget-use-cases.factory";
import { useBudgetStorage } from "./index";

function useBudgetList() {
  const { isReady, revision } = useBudgetStorage();
  const [budgets, setBudgets] = useState<QuoteDoc[]>([]);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    setLoading(true);
    const list = await budgetUseCases.getList.execute();
    setBudgets(list);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!isReady) {
      return;
    }

    refresh();
  }, [isReady, revision, refresh]);

  useFocusEffect(
    useCallback(() => {
      if (!isReady) {
        return;
      }

      refresh();
    }, [isReady, refresh]),
  );

  return { budgets, loading, refresh };
}

/**
 * EXPORTS
 */
export { useBudgetList };
