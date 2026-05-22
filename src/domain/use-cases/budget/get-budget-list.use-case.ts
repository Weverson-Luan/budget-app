/**
 * IMPORTS
 */

import { KEYS_STORAGE } from "@/common/constants/keys-storage";
import { IBudgetCardItem } from "@/domain/entities/budget/budget.entity";
import { LocalCacheUseCases } from "@/factories/cache/make-local-cache.factory";

/**
 * Caso de uso responsável por buscar a lista de orçamentos persistida.
 */
class GetBudgetListUseCase {
  constructor(private readonly cache: LocalCacheUseCases) {}

  async execute(): Promise<IBudgetCardItem[]> {
    const list = await this.cache.get.execute<IBudgetCardItem[]>(
      KEYS_STORAGE.budgets.list,
    );

    return list ?? [];
  }
}

/**
 * EXPORTS
 */
export { GetBudgetListUseCase };
