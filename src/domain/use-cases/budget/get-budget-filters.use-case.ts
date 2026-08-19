/**
 * IMPORTS
 */

import { KEYS_STORAGE } from "@/common/constants/keys-storage";
import {
  BudgetFilters,
  normalizeBudgetFilters,
} from "@/domain/entities/budget/budget-filters.entity";
import { LocalCacheUseCases } from "@/factories/cache/make-local-cache.factory";

/**
 * Caso de uso responsável por recuperar os filtros
 * selecionados pelo usuário na última sessão.
 */
class GetBudgetFiltersUseCase {
  constructor(private readonly cache: LocalCacheUseCases) {}

  async execute(): Promise<BudgetFilters> {
    const stored = await this.cache.get.execute<unknown>(
      KEYS_STORAGE.budgets.filters,
    );

    return normalizeBudgetFilters(stored);
  }
}

/**
 * EXPORTS
 */
export { GetBudgetFiltersUseCase };
