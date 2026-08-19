/**
 * IMPORTS
 */

import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import { budgetUseCases } from "@/factories/budget/make-budget-use-cases.factory";

// typings
import { BudgetStorageContextValue } from "./interface";

const BudgetStorageContext = createContext<BudgetStorageContextValue>({
  isReady: false,
  revision: 0,
  notifyChange: () => undefined,
});

function BudgetStorageProvider({ children }: { children: React.ReactNode }) {
  const [isReady, setIsReady] = useState(false);
  const [revision, setRevision] = useState(0);

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

  const notifyChange = useCallback(() => {
    setRevision((current) => current + 1);
  }, []);

  const value = useMemo(
    () => ({ isReady, revision, notifyChange }),
    [isReady, revision, notifyChange],
  );

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
export { BudgetStorageContext, BudgetStorageProvider };
