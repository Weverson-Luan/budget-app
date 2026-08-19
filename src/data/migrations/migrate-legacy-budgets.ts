/**
 * IMPORTS
 */

import { parseCurrencyInput } from "@/common/helpers/format";
import {
  QuoteDoc,
  QuoteItem,
  QuoteStatus,
} from "@/domain/entities/budget/budget.entity";

/**
 * Formatos persistidos por versões anteriores do app,
 * onde a lista e o detalhe eram gravados separadamente e
 * os valores monetários eram strings já formatadas.
 */
interface LegacyBudgetCard {
  id: string;
  title: string;
  client: string;
  value: string;
  status: QuoteStatus;
}

interface LegacyServiceItem {
  id: string;
  title: string;
  description: string;
  price: string;
  quantity: number;
}

interface LegacyBudgetDetail {
  id: string;
  status: QuoteStatus;
  overview: {
    title: string;
    client: string;
    createdAt: string;
    updatedAt: string;
  };
  services: LegacyServiceItem[];
  investment: {
    subtotal: string;
    discountPercent: number;
    discountValue: string;
    total: string;
  };
}

type LegacyBudgetDetailsMap = Record<string, LegacyBudgetDetail>;

/**
 * Converte data no formato brasileiro (dd/mm/aaaa) para ISO.
 *
 * Retorna a data atual quando o valor não é reconhecido.
 */
function legacyDateToIso(value?: string): string {
  const fallback = new Date().toISOString();

  if (!value) {
    return fallback;
  }

  const match = value.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);

  if (!match) {
    const parsed = new Date(value);

    return Number.isNaN(parsed.getTime()) ? fallback : parsed.toISOString();
  }

  const [, day, month, year] = match;
  const parsed = new Date(Number(year), Number(month) - 1, Number(day));

  return Number.isNaN(parsed.getTime()) ? fallback : parsed.toISOString();
}

function legacyServiceToItem(service: LegacyServiceItem): QuoteItem {
  return {
    id: service.id,
    description: service.title,
    details: service.description,
    qty: service.quantity ?? 1,
    price: parseCurrencyInput(service.price),
  };
}

/**
 * Identifica se o valor lido do storage está no formato antigo
 * (cards com `value` em string e sem a lista de `items`).
 */
function isLegacyBudgetList(value: unknown): value is LegacyBudgetCard[] {
  if (!Array.isArray(value) || value.length === 0) {
    return false;
  }

  return value.some(
    (item) =>
      item &&
      typeof item === "object" &&
      !Array.isArray((item as { items?: unknown }).items),
  );
}

/**
 * Converte os dados do formato antigo para `QuoteDoc[]`,
 * unindo card e detalhe em um único documento.
 */
function migrateLegacyBudgets(
  list: LegacyBudgetCard[],
  details: LegacyBudgetDetailsMap | null,
): QuoteDoc[] {
  return list.map((card) => {
    const detail = details?.[card.id];
    const items = (detail?.services ?? []).map(legacyServiceToItem);

    return {
      id: card.id,
      title: detail?.overview.title ?? card.title,
      client: detail?.overview.client ?? card.client,
      status: detail?.status ?? card.status,
      items,
      discountPct: detail?.investment.discountPercent ?? 0,
      createdAt: legacyDateToIso(detail?.overview.createdAt),
      updatedAt: legacyDateToIso(detail?.overview.updatedAt),
    };
  });
}

/**
 * EXPORTS
 */
export { isLegacyBudgetList, migrateLegacyBudgets };
export type { LegacyBudgetCard, LegacyBudgetDetailsMap };
