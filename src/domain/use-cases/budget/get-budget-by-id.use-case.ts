/**
 * IMPORTS
 */

import { KEYS_STORAGE } from "@/common/constants/keys-storage";
import {
  BudgetDetailsMap,
  IBudgetDetail,
} from "@/domain/entities/budget/budget.entity";
import { LocalCacheUseCases } from "@/factories/cache/make-local-cache.factory";
import { GetBudgetListUseCase } from "./get-budget-list.use-case";

/**
 * Caso de uso responsável por buscar o detalhe de um orçamento por id.
 */
class GetBudgetByIdUseCase {
  constructor(
    private readonly cache: LocalCacheUseCases,
    private readonly getBudgetList: GetBudgetListUseCase,
  ) {}

  async execute(id: string): Promise<IBudgetDetail | null> {
    const details =
      (await this.cache.get.execute<BudgetDetailsMap>(
        KEYS_STORAGE.budgets.details,
      )) ?? {};

    if (details[id]) {
      return details[id];
    }

    const list = await this.getBudgetList.execute();
    const fallback = list.find((item) => item.id === id) ?? list[0];

    if (!fallback) {
      return null;
    }

    return (
      details[fallback.id] ?? {
        id: fallback.id,
        status: fallback.status,
        overview: {
          title: fallback.title,
          client: fallback.client,
          createdAt: new Date().toLocaleDateString("pt-BR"),
          updatedAt: new Date().toLocaleDateString("pt-BR"),
        },
        services: [],
        investment: {
          subtotal: fallback.value,
          discountPercent: 0,
          discountValue: "R$ 0,00",
          total: fallback.value,
        },
      }
    );
  }
}

/**
 * EXPORTS
 */
export { GetBudgetByIdUseCase };
