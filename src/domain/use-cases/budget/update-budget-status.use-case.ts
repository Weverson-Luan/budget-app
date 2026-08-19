/**
 * IMPORTS
 */

import { KEYS_STORAGE } from "@/common/constants/keys-storage";
import { QuoteDoc, QuoteStatus } from "@/domain/entities/budget/budget.entity";
import { LocalCacheUseCases } from "@/factories/cache/make-local-cache.factory";
import { GetBudgetListUseCase } from "./get-budget-list.use-case";

/**
 * Caso de uso responsável por alterar apenas o status
 * de um orçamento já existente.
 */
class UpdateBudgetStatusUseCase {
  constructor(
    private readonly cache: LocalCacheUseCases,
    private readonly getBudgetList: GetBudgetListUseCase,
  ) {}

  async execute(id: string, status: QuoteStatus): Promise<QuoteDoc | null> {
    const list = await this.getBudgetList.execute();
    const current = list.find((budget) => budget.id === id);

    if (!current) {
      return null;
    }

    const updated: QuoteDoc = {
      ...current,
      status,
      updatedAt: new Date().toISOString(),
    };

    await this.cache.set.execute(
      KEYS_STORAGE.budgets.list,
      list.map((budget) => (budget.id === id ? updated : budget)),
    );

    return updated;
  }
}

/**
 * EXPORTS
 */
export { UpdateBudgetStatusUseCase };
