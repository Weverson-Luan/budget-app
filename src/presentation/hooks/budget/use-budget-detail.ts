/**
 * IMPORTS
 */

import { useCallback, useEffect, useState } from "react";

import { IBudgetDetail } from "@/domain/entities/budget/budget.entity";
import { budgetUseCases } from "@/factories/budget/make-budget-use-cases.factory";
import { useBudgetStorageReady } from "@/presentation/providers/budget-storage.provider";

function useBudgetDetail(id: string) {
  const isReady = useBudgetStorageReady();
  const [detail, setDetail] = useState<IBudgetDetail | null>(null);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    if (!id) {
      setDetail(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    const result = await budgetUseCases.getById.execute(id);
    setDetail(result);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    if (!isReady) {
      return;
    }

    refresh();
  }, [isReady, refresh]);

  return { detail, loading, refresh };
}

/**
 * EXPORTS
 */
export { useBudgetDetail };
