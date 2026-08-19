/**
 * IMPORTS
 */

import { useCallback, useEffect, useMemo, useState } from "react";

import { ServiceFormValues } from "@/components/service-bottom-sheet/interface";

import { createId } from "@/common/helpers/create-id";
import { parsePercentInput } from "@/common/helpers/format";
import { QuoteItem, QuoteStatus } from "@/domain/entities/budget/budget.entity";
import { budgetUseCases } from "@/factories/budget/make-budget-use-cases.factory";
import {
  toInvestmentSummaryProps,
  toQuoteItem,
  toServiceFormValues,
  toServiceViewItems,
} from "@/presentation/mappers/budget-view.mapper";
import { useBudgetStorage } from "./index";

/**
 * Gerencia o formulário de criação e edição de orçamento.
 *
 * Quando `budgetId` é informado, carrega o orçamento existente
 * e o salvamento atualiza o mesmo registro.
 */
function useBudgetForm(budgetId?: string) {
  const { isReady, notifyChange } = useBudgetStorage();

  const [title, setTitle] = useState("");
  const [client, setClient] = useState("");
  const [status, setStatus] = useState<QuoteStatus>("draft");
  const [items, setItems] = useState<QuoteItem[]>([]);
  const [discountInput, setDiscountInput] = useState("");
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(Boolean(budgetId));
  const [showErrors, setShowErrors] = useState(false);

  const isEditing = Boolean(budgetId);

  useEffect(() => {
    if (!isReady || !budgetId) {
      return;
    }

    let mounted = true;
    setLoading(true);

    budgetUseCases.getById.execute(budgetId).then((budget) => {
      if (!mounted) {
        return;
      }

      if (budget) {
        setTitle(budget.title);
        setClient(budget.client);
        setStatus(budget.status);
        setItems(budget.items);
        setDiscountInput(
          budget.discountPct ? String(budget.discountPct) : "",
        );
      }

      setLoading(false);
    });

    return () => {
      mounted = false;
    };
  }, [isReady, budgetId]);

  const discountPct = useMemo(
    () => parsePercentInput(discountInput),
    [discountInput],
  );

  const investment = useMemo(
    () => toInvestmentSummaryProps(items, discountPct),
    [items, discountPct],
  );

  const serviceViewItems = useMemo(() => toServiceViewItems(items), [items]);

  const titleError = showErrors && !title.trim();
  const clientError = showErrors && !client.trim();
  const isValid = Boolean(title.trim() && client.trim());

  const addItem = useCallback((values: ServiceFormValues) => {
    setItems((prev) => [...prev, toQuoteItem(values, createId())]);
  }, []);

  const updateItem = useCallback((id: string, values: ServiceFormValues) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? toQuoteItem(values, id) : item)),
    );
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const getItemFormValues = useCallback(
    (id: string): ServiceFormValues | undefined => {
      const item = items.find((current) => current.id === id);

      return item ? toServiceFormValues(item) : undefined;
    },
    [items],
  );

  const reset = useCallback(() => {
    setTitle("");
    setClient("");
    setStatus("draft");
    setItems([]);
    setDiscountInput("");
    setShowErrors(false);
  }, []);

  /**
   * Salva o orçamento. Retorna `false` quando o formulário é inválido,
   * exibindo os erros nos campos obrigatórios.
   */
  const save = useCallback(async (): Promise<boolean> => {
    if (!isValid) {
      setShowErrors(true);
      return false;
    }

    setSaving(true);

    try {
      await budgetUseCases.save.execute({
        id: budgetId,
        title,
        client,
        status,
        items,
        discountPct,
      });

      notifyChange();

      if (!isEditing) {
        reset();
      }

      return true;
    } finally {
      setSaving(false);
    }
  }, [
    isValid,
    budgetId,
    title,
    client,
    status,
    items,
    discountPct,
    isEditing,
    notifyChange,
    reset,
  ]);

  return {
    title,
    setTitle,
    client,
    setClient,
    status,
    setStatus,
    items,
    serviceViewItems,
    discountInput,
    setDiscountInput,
    investment,
    titleError,
    clientError,
    isValid,
    isEditing,
    loading,
    saving,
    addItem,
    updateItem,
    removeItem,
    getItemFormValues,
    save,
    reset,
  };
}

/**
 * EXPORTS
 */
export { useBudgetForm };
