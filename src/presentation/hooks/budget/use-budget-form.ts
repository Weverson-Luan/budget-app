/**
 * IMPORTS
 */

import { useCallback, useMemo, useState } from "react";

import { IServiceItem } from "@/components/included-services/interface";
import { IStatusType } from "@/components/status/interface";
import { calculateInvestmentSummary } from "@/domain/helpers/calculate-investment-summary";
import { budgetUseCases } from "@/factories/budget/make-budget-use-cases.factory";

function useBudgetForm() {
  const [title, setTitle] = useState("");
  const [client, setClient] = useState("");
  const [status, setStatus] = useState<IStatusType>("draft");
  const [services, setServices] = useState<IServiceItem[]>([]);
  const [saving, setSaving] = useState(false);

  const investment = useMemo(
    () => calculateInvestmentSummary(services),
    [services],
  );

  const reset = useCallback(() => {
    setTitle("");
    setClient("");
    setStatus("draft");
    setServices([]);
  }, []);

  const save = useCallback(async () => {
    setSaving(true);

    try {
      await budgetUseCases.save.execute({
        title,
        client,
        status,
        services,
      });

      reset();
    } finally {
      setSaving(false);
    }
  }, [title, client, status, services, reset]);

  return {
    title,
    setTitle,
    client,
    setClient,
    status,
    setStatus,
    services,
    setServices,
    investment,
    saving,
    save,
    reset,
  };
}

/**
 * EXPORTS
 */
export { useBudgetForm };
