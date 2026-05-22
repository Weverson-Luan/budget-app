/**
 * IMPORTS
 */

import {
  DeleteBudgetUseCase,
  GetBudgetByIdUseCase,
  GetBudgetListUseCase,
  InitializeBudgetStorageUseCase,
  SaveBudgetUseCase,
} from "@/domain/use-cases/budget";

import { localCache } from "@/factories/cache/make-local-cache.factory";

function makeBudgetUseCasesFactory() {
  const getList = new GetBudgetListUseCase(localCache);

  return {
    initialize: new InitializeBudgetStorageUseCase(localCache),
    getList,
    getById: new GetBudgetByIdUseCase(localCache, getList),
    save: new SaveBudgetUseCase(localCache, getList),
    delete: new DeleteBudgetUseCase(localCache, getList),
  };
}

const budgetUseCases = makeBudgetUseCasesFactory();

/**
 * EXPORTS
 */
export { budgetUseCases, makeBudgetUseCasesFactory };
