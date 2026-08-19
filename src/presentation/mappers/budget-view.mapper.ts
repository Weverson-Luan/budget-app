/**
 * IMPORTS
 */

import { IBudgetCardItem } from "@/components/budget-card/interface";
import { IBudgetOverviewProps } from "@/components/budget-overview/interface";
import { IServiceItem } from "@/components/included-services/interface";
import { IInvestmentSummaryProps } from "@/components/investment-summary/interface";
import { IInvestmentSummaryOverviewProps } from "@/components/investment-summary-overview/interface";
import { ServiceFormValues } from "@/components/service-bottom-sheet/interface";

import {
  formatCurrency,
  formatCurrencyInput,
  formatDate,
  parseCurrencyInput,
} from "@/common/helpers/format";
import { QuoteDoc, QuoteItem } from "@/domain/entities/budget/budget.entity";
import { calculateQuoteTotals } from "@/domain/helpers/calculate-quote-totals";

/**
 * Converte o documento de orçamento no card exibido na listagem.
 */
function toBudgetCardItem(budget: QuoteDoc): IBudgetCardItem {
  const totals = calculateQuoteTotals(budget.items, budget.discountPct);

  return {
    id: budget.id,
    title: budget.title,
    client: budget.client,
    value: formatCurrency(totals.total),
    status: budget.status,
  };
}

/**
 * Converte os itens do orçamento para os cards de serviço.
 */
function toServiceViewItems(items: QuoteItem[]): IServiceItem[] {
  return items.map((item) => ({
    id: item.id,
    title: item.description,
    description: item.details ?? "",
    price: formatCurrency(item.price),
    quantity: item.qty,
  }));
}

/**
 * Converte o documento no cabeçalho da tela de detalhe.
 */
function toBudgetOverviewProps(budget: QuoteDoc): IBudgetOverviewProps {
  return {
    title: budget.title,
    client: budget.client,
    createdAt: formatDate(budget.createdAt),
    updatedAt: formatDate(budget.updatedAt),
  };
}

/**
 * Converte itens e desconto no resumo de investimento do formulário.
 */
function toInvestmentSummaryProps(
  items: QuoteItem[],
  discountPct?: number,
): IInvestmentSummaryProps {
  const totals = calculateQuoteTotals(items, discountPct);

  return {
    itemCount: totals.itemCount,
    subtotal: formatCurrency(totals.subtotal),
    discountPercent: totals.discountPct,
    discountValue: formatCurrency(totals.discountValue),
    originalTotal: formatCurrency(totals.subtotal),
    total: formatCurrency(totals.total),
  };
}

/**
 * Converte itens e desconto no resumo somente leitura.
 */
function toInvestmentOverviewProps(
  budget: QuoteDoc,
): IInvestmentSummaryOverviewProps {
  const totals = calculateQuoteTotals(budget.items, budget.discountPct);

  return {
    subtotal: formatCurrency(totals.subtotal),
    discountPercent: totals.discountPct,
    discountValue: formatCurrency(totals.discountValue),
    total: formatCurrency(totals.total),
  };
}

/**
 * Converte um item do orçamento nos valores do formulário de serviço.
 */
function toServiceFormValues(item: QuoteItem): ServiceFormValues {
  return {
    name: item.description,
    description: item.details ?? "",
    price: formatCurrencyInput(item.price),
    quantity: item.qty,
  };
}

/**
 * Converte os valores do formulário de serviço em item do orçamento.
 */
function toQuoteItem(values: ServiceFormValues, id: string): QuoteItem {
  return {
    id,
    description: values.name.trim(),
    details: values.description.trim(),
    qty: values.quantity,
    price: parseCurrencyInput(values.price),
  };
}

/**
 * EXPORTS
 */
export {
  toBudgetCardItem,
  toBudgetOverviewProps,
  toInvestmentOverviewProps,
  toInvestmentSummaryProps,
  toQuoteItem,
  toServiceFormValues,
  toServiceViewItems,
};
