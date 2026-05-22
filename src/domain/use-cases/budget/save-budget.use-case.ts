/**
 * IMPORTS
 */

import { KEYS_STORAGE } from "@/common/constants/keys-storage";
import {
  BudgetDetailsMap,
  IBudgetCardItem,
  IBudgetDetail,
  SaveBudgetInput,
} from "@/domain/entities/budget/budget.entity";
import { calculateInvestmentOverview } from "@/domain/helpers/calculate-investment-summary";
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

  async execute(input: SaveBudgetInput): Promise<IBudgetDetail> {
    const list = await this.getBudgetList.execute();
    const details =
      (await this.cache.get.execute<BudgetDetailsMap>(
        KEYS_STORAGE.budgets.details,
      )) ?? {};

    const investment = calculateInvestmentOverview(input.services);
    const id = input.id ?? String(Date.now());
    const now = new Date().toLocaleDateString("pt-BR");

    const detail: IBudgetDetail = {
      id,
      status: input.status,
      overview: {
        title: input.title,
        client: input.client,
        createdAt: details[id]?.overview.createdAt ?? now,
        updatedAt: now,
      },
      services: input.services,
      investment,
    };

    const card: IBudgetCardItem = {
      id,
      title: input.title,
      client: input.client,
      value: investment.total,
      status: input.status,
    };

    const existingIndex = list.findIndex((item) => item.id === id);
    const nextList =
      existingIndex >= 0
        ? list.map((item, index) => (index === existingIndex ? card : item))
        : [card, ...list];

    await this.cache.set.execute(KEYS_STORAGE.budgets.list, nextList);
    await this.cache.set.execute(KEYS_STORAGE.budgets.details, {
      ...details,
      [id]: detail,
    });

    return detail;
  }
}

/**
 * EXPORTS
 */
export { SaveBudgetUseCase };
