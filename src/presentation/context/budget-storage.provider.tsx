/**
 * IMPORTS
 */

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { budgetUseCases } from "@/factories/budget/make-budget-use-cases.factory";

// typings
import { BudgetStorageContextValue } from "./interface";


export const BudgetStorageContext = createContext<BudgetStorageContextValue>({
  isReady: false,
});


function BudgetStorageProvider({ children }: { children: React.ReactNode }) {


  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let mounted = true;

    budgetUseCases.initialize.execute().then(() => {
      if (mounted) {
        setIsReady(true);
      }
    });

    return () => {
      mounted = false;
    };
  }, []);

  const value = useMemo(() => ({ isReady }), [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <BudgetStorageContext.Provider value={value}>
      {children}
    </BudgetStorageContext.Provider>
  );
}


/**
 * EXPORTS
 */
export { BudgetStorageProvider };
