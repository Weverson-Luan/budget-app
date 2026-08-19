/**
 * IMPORTS
 */

import { useContext } from "react";

import { BudgetStorageContext } from "@/presentation/context/budget-storage.provider";
import { BudgetStorageContextValue } from "@/presentation/context/interface";

/**
 * Acesso ao estado do storage de orçamentos.
 */
function useBudgetStorage(): BudgetStorageContextValue {
  return useContext(BudgetStorageContext);
}

/**
 * EXPORTS
 */
export { useBudgetStorage };
