/**
 * IMPORTS
 */

import { KEYS_STORAGE } from "@/common/constants/keys-storage";
import { BudgetFilters } from "@/domain/entities/budget/budget-filters.entity";
import { LocalCacheUseCases } from "@/factories/cache/make-local-cache.factory";

/**
 * Caso de uso responsável por persistir os filtros
 * selecionados pelo usuário no dispositivo.
 */
class SaveBudgetFiltersUseCase {
  constructor(private readonly cache: LocalCacheUseCases) {}

  async execute(filters: BudgetFilters): Promise<void> {
    await this.cache.set.execute(KEYS_STORAGE.budgets.filters, filters);
  }
}

/**
 * EXPORTS
 */
export { SaveBudgetFiltersUseCase };
