/**
 * IMPORTS
 */

import { KEYS_STORAGE } from "@/common/constants/keys-storage";
import { BudgetDetailsMap } from "@/domain/entities/budget/budget.entity";
import { LocalCacheUseCases } from "@/factories/cache/make-local-cache.factory";
import { GetBudgetListUseCase } from "./get-budget-list.use-case";

/**
 * Caso de uso responsável por remover um orçamento do storage local.
 */
class DeleteBudgetUseCase {
  constructor(
    private readonly cache: LocalCacheUseCases,
    private readonly getBudgetList: GetBudgetListUseCase,
  ) {}

  async execute(id: string): Promise<void> {
    const list = await this.getBudgetList.execute();
    const details =
      (await this.cache.get.execute<BudgetDetailsMap>(
        KEYS_STORAGE.budgets.details,
      )) ?? {};

    const { [id]: _removed, ...remainingDetails } = details;

    await this.cache.set.execute(
      KEYS_STORAGE.budgets.list,
      list.filter((item) => item.id !== id),
    );
    await this.cache.set.execute(KEYS_STORAGE.budgets.details, remainingDetails);
  }
}

/**
 * EXPORTS
 */
export { DeleteBudgetUseCase };
