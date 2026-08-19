/**
 * IMPORTS
 */

import {
  DeleteBudgetUseCase,
  DuplicateBudgetUseCase,
  GetBudgetByIdUseCase,
  GetBudgetFiltersUseCase,
  GetBudgetListUseCase,
  InitializeBudgetStorageUseCase,
  SaveBudgetFiltersUseCase,
  SaveBudgetUseCase,
  UpdateBudgetStatusUseCase,
} from "@/domain/use-cases/budget";

import { localCache } from "@/factories/cache/make-local-cache.factory";

function makeBudgetUseCasesFactory() {
  const getList = new GetBudgetListUseCase(localCache);
  const getById = new GetBudgetByIdUseCase(getList);
  const save = new SaveBudgetUseCase(localCache, getList);

  return {
    initialize: new InitializeBudgetStorageUseCase(localCache),
    getList,
    getById,
    save,
    delete: new DeleteBudgetUseCase(localCache, getList),
    duplicate: new DuplicateBudgetUseCase(getById, save),
    updateStatus: new UpdateBudgetStatusUseCase(localCache, getList),
    getFilters: new GetBudgetFiltersUseCase(localCache),
    saveFilters: new SaveBudgetFiltersUseCase(localCache),
  };
}

const budgetUseCases = makeBudgetUseCasesFactory();

/**
 * EXPORTS
 */
export { budgetUseCases, makeBudgetUseCasesFactory };
