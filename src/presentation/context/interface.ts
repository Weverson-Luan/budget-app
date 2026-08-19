interface BudgetStorageContextValue {
  /**
   * Indica que a inicialização/migração do storage terminou.
   */
  isReady: boolean;
  /**
   * Contador incrementado a cada escrita no storage.
   *
   * As telas e o header observam esse valor para recarregar
   * os dados após criar, duplicar, remover ou alterar status.
   */
  revision: number;
  notifyChange: () => void;
}

export type { BudgetStorageContextValue };
