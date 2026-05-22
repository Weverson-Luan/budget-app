/**
 * IMPORTS
 */

import { KEYS_STORAGE } from "@/common/constants/keys-storage";
import {
  BudgetDetailsMap,
  IBudgetCardItem,
} from "@/domain/entities/budget/budget.entity";
import { LocalCacheUseCases } from "@/factories/cache/make-local-cache.factory";

/**
 * Caso de uso responsável por inicializar o storage local
 * na primeira execução com lista e detalhes vazios.
 */
class InitializeBudgetStorageUseCase {
  constructor(private readonly cache: LocalCacheUseCases) {}

  async execute(): Promise<void> {
    const initialized = await this.cache.get.execute<boolean>(
      KEYS_STORAGE.budgets.initialized,
    );

    if (initialized) {
      return;
    }

    const emptyList: IBudgetCardItem[] = [];
    const emptyDetails: BudgetDetailsMap = {};

    await this.cache.set.execute(KEYS_STORAGE.budgets.list, emptyList);
    await this.cache.set.execute(KEYS_STORAGE.budgets.details, emptyDetails);
    await this.cache.set.execute(KEYS_STORAGE.budgets.initialized, true);
  }
}

/**
 * EXPORTS
 */
export { InitializeBudgetStorageUseCase };
