/**
 * IMPORTS
 */

import {
  KEYS_STORAGE,
  LEGACY_KEYS_STORAGE,
} from "@/common/constants/keys-storage";
import {
  isLegacyBudgetList,
  LegacyBudgetDetailsMap,
  migrateLegacyBudgets,
} from "@/data/migrations/migrate-legacy-budgets";
import { BUDGET_SEED_LIST } from "@/data/seeds/budgets.seed";
import { QuoteDoc } from "@/domain/entities/budget/budget.entity";
import { LocalCacheUseCases } from "@/factories/cache/make-local-cache.factory";

/**
 * Caso de uso responsável por preparar o storage local:
 *
 * - semeia os orçamentos de exemplo na primeira execução;
 * - migra dados gravados no formato antigo para `QuoteDoc`.
 */
class InitializeBudgetStorageUseCase {
  constructor(private readonly cache: LocalCacheUseCases) {}

  async execute(): Promise<void> {
    const storedList = await this.cache.get.execute<unknown>(
      KEYS_STORAGE.budgets.list,
    );

    if (isLegacyBudgetList(storedList)) {
      const legacyDetails =
        await this.cache.get.execute<LegacyBudgetDetailsMap>(
          LEGACY_KEYS_STORAGE.budgets.details,
        );

      const migrated = migrateLegacyBudgets(storedList, legacyDetails);

      await this.cache.set.execute(KEYS_STORAGE.budgets.list, migrated);
      await this.cache.remove.execute(LEGACY_KEYS_STORAGE.budgets.details);
      await this.cache.set.execute(KEYS_STORAGE.budgets.initialized, true);

      return;
    }

    if (Array.isArray(storedList)) {
      await this.cache.set.execute(KEYS_STORAGE.budgets.initialized, true);

      return;
    }

    const seed: QuoteDoc[] = BUDGET_SEED_LIST;

    await this.cache.set.execute(KEYS_STORAGE.budgets.list, seed);
    await this.cache.set.execute(KEYS_STORAGE.budgets.initialized, true);
  }
}

/**
 * EXPORTS
 */
export { InitializeBudgetStorageUseCase };
