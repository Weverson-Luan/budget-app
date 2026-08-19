/**
 * IMPORTS
 */

import { useCallback } from "react";
import { Alert } from "react-native";

import { QuoteDoc, QuoteStatus } from "@/domain/entities/budget/budget.entity";
import { budgetUseCases } from "@/factories/budget/make-budget-use-cases.factory";
import { useBudgetStorage } from "./index";

interface ConfirmRemoveOptions {
  title?: string;
  onRemoved?: () => void;
}

/**
 * Ações de orçamento compartilhadas entre as telas:
 * remoção com confirmação, duplicação e alteração de status.
 */
function useBudgetActions() {
  const { notifyChange } = useBudgetStorage();

  const remove = useCallback(
    async (id: string) => {
      await budgetUseCases.delete.execute(id);
      notifyChange();
    },
    [notifyChange],
  );

  /**
   * Exibe o alerta de confirmação antes de remover o orçamento.
   */
  const confirmRemove = useCallback(
    (id: string, options?: ConfirmRemoveOptions) => {
      const name = options?.title ? `"${options.title}"` : "este orçamento";

      Alert.alert(
        "Remover orçamento",
        `Tem certeza que deseja remover ${name}? Essa ação não pode ser desfeita.`,
        [
          { text: "Cancelar", style: "cancel" },
          {
            text: "Remover",
            style: "destructive",
            onPress: async () => {
              await remove(id);
              options?.onRemoved?.();
            },
          },
        ],
      );
    },
    [remove],
  );

  const duplicate = useCallback(
    async (id: string): Promise<QuoteDoc | null> => {
      const copy = await budgetUseCases.duplicate.execute(id);
      notifyChange();

      return copy;
    },
    [notifyChange],
  );

  const changeStatus = useCallback(
    async (id: string, status: QuoteStatus) => {
      await budgetUseCases.updateStatus.execute(id, status);
      notifyChange();
    },
    [notifyChange],
  );

  return { changeStatus, confirmRemove, duplicate, remove };
}

/**
 * EXPORTS
 */
export { useBudgetActions };
