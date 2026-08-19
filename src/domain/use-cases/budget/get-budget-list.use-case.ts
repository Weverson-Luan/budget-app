/**
 * IMPORTS
 */

import { KEYS_STORAGE } from "@/common/constants/keys-storage";
import { QuoteDoc } from "@/domain/entities/budget/budget.entity";
import { LocalCacheUseCases } from "@/factories/cache/make-local-cache.factory";

/**
 * Caso de uso responsável por buscar a lista de orçamentos persistida.
 */
class GetBudgetListUseCase {
  constructor(private readonly cache: LocalCacheUseCases) {}

  async execute(): Promise<QuoteDoc[]> {
    const list = await this.cache.get.execute<QuoteDoc[]>(
      KEYS_STORAGE.budgets.list,
    );

    return Array.isArray(list) ? list : [];
  }
}

/**
 * EXPORTS
 */
export { GetBudgetListUseCase };
