/**
 * IMPORTS
 */

import { createId } from "@/common/helpers/create-id";
import { QuoteDoc } from "@/domain/entities/budget/budget.entity";
import { GetBudgetByIdUseCase } from "./get-budget-by-id.use-case";
import { SaveBudgetUseCase } from "./save-budget.use-case";

const COPY_SUFFIX = "(cópia)";

/**
 * Caso de uso responsável por duplicar um orçamento.
 *
 * A cópia recebe novo id (inclusive nos itens), volta para
 * o status de rascunho e tem suas datas reiniciadas.
 */
class DuplicateBudgetUseCase {
  constructor(
    private readonly getBudgetById: GetBudgetByIdUseCase,
    private readonly saveBudget: SaveBudgetUseCase,
  ) {}

  async execute(id: string): Promise<QuoteDoc | null> {
    const budget = await this.getBudgetById.execute(id);

    if (!budget) {
      return null;
    }

    const title = budget.title.endsWith(COPY_SUFFIX)
      ? budget.title
      : `${budget.title} ${COPY_SUFFIX}`;

    return this.saveBudget.execute({
      title,
      client: budget.client,
      status: "draft",
      discountPct: budget.discountPct,
      items: budget.items.map((item) => ({ ...item, id: createId() })),
    });
  }
}

/**
 * EXPORTS
 */
export { DuplicateBudgetUseCase };
