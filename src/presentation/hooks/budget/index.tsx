/**
 * IMPORTS
 */

import { useContext } from "react";


import { BudgetStorageContext } from "@/presentation/context/budget-storage.provider";


function useBudgetStorageReady() {
  return useContext(BudgetStorageContext).isReady;
}


/**
 * EXPORTS
 */
export { useBudgetStorageReady };
