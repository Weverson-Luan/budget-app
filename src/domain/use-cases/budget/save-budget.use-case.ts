/**
 * IMPORTS
 */

import { KEYS_STORAGE } from "@/common/constants/keys-storage";
import { createId } from "@/common/helpers/create-id";
import { QuoteDoc, SaveQuoteInput } from "@/domain/entities/budget/budget.entity";
import { LocalCacheUseCases } from "@/factories/cache/make-local-cache.factory";
import { GetBudgetListUseCase } from "./get-budget-list.use-case";

/**
 * Caso de uso responsável por criar ou atualizar um orçamento.
 */
class SaveBudgetUseCase {
  constructor(
    private readonly cache: LocalCacheUseCases,
    private readonly getBudgetList: GetBudgetListUseCase,
  ) {}

  async execute(input: SaveQuoteInput): Promise<QuoteDoc> {
    const list = await this.getBudgetList.execute();

    const id = input.id ?? createId();
    const existing = list.find((budget) => budget.id === id);
    const now = new Date().toISOString();

    const budget: QuoteDoc = {
      id,
      title: input.title.trim(),
      client: input.client.trim(),
      status: input.status,
      items: input.items,
      discountPct: input.discountPct ?? 0,
      createdAt: existing?.createdAt ?? now,
      updatedAt: now,
    };

    const nextList = existing
      ? list.map((item) => (item.id === id ? budget : item))
      : [budget, ...list];

    await this.cache.set.execute(KEYS_STORAGE.budgets.list, nextList);

    return budget;
  }
}

/**
 * EXPORTS
 */
export { SaveBudgetUseCase };
