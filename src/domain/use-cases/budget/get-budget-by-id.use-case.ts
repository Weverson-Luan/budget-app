/**
 * IMPORTS
 */

import { QuoteDoc } from "@/domain/entities/budget/budget.entity";
import { GetBudgetListUseCase } from "./get-budget-list.use-case";

/**
 * Caso de uso responsável por buscar um orçamento por id.
 */
class GetBudgetByIdUseCase {
  constructor(private readonly getBudgetList: GetBudgetListUseCase) {}

  async execute(id: string): Promise<QuoteDoc | null> {
    if (!id) {
      return null;
    }

    const list = await this.getBudgetList.execute();

    return list.find((budget) => budget.id === id) ?? null;
  }
}

/**
 * EXPORTS
 */
export { GetBudgetByIdUseCase };
