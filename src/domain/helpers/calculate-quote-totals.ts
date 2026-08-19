/**
 * IMPORTS
 */

import { QuoteItem, QuoteTotals } from "@/domain/entities/budget/budget.entity";

/**
 * Calcula subtotal, desconto e total de um orçamento.
 *
 * O percentual de desconto vem do próprio orçamento
 * (`QuoteDoc.discountPct`) e não de uma regra fixa.
 */
function calculateQuoteTotals(
  items: QuoteItem[],
  discountPct?: number,
): QuoteTotals {
  const safeItems = Array.isArray(items) ? items : [];

  const subtotal = safeItems.reduce(
    (total, item) => total + item.price * item.qty,
    0,
  );

  const itemCount = safeItems.reduce((count, item) => count + item.qty, 0);

  const normalizedDiscountPct = Math.min(Math.max(discountPct ?? 0, 0), 100);
  const discountValue = subtotal * (normalizedDiscountPct / 100);
  const total = Math.max(subtotal - discountValue, 0);

  return {
    itemCount,
    subtotal,
    discountPct: normalizedDiscountPct,
    discountValue,
    total,
  };
}

/**
 * EXPORTS
 */
export { calculateQuoteTotals };
