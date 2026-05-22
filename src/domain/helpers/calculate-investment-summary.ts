/**
 * IMPORTS
 */

import { IInvestmentSummaryProps } from "@/components/investment-summary/interface";
import { IInvestmentSummaryOverviewProps } from "@/components/investment-summary-overview/interface";
import { IServiceItem } from "@/components/included-services/interface";

const DISCOUNT_PERCENT = 8;
const DISCOUNT_CAP = 200;

function parsePrice(price: string): number {
  const cleaned = price.replace(/R\$\s?/g, "").trim();
  const normalized = cleaned.replace(/\./g, "").replace(",", ".");
  return Number.parseFloat(normalized) || 0;
}

function formatCurrency(value: number): string {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function calculateServicesSubtotal(services: IServiceItem[]): number {
  return services.reduce(
    (total, service) => total + parsePrice(service.price) * service.quantity,
    0,
  );
}

function calculateInvestmentSummary(
  services: IServiceItem[],
): IInvestmentSummaryProps {
  const subtotalValue = calculateServicesSubtotal(services);
  const discountValue = Math.min(
    subtotalValue * (DISCOUNT_PERCENT / 100),
    DISCOUNT_CAP,
  );
  const totalValue = Math.max(subtotalValue - discountValue, 0);
  const itemCount = services.reduce(
    (count, service) => count + service.quantity,
    0,
  );

  return {
    itemCount,
    subtotal: formatCurrency(subtotalValue),
    discountPercent: DISCOUNT_PERCENT,
    discountValue: formatCurrency(discountValue),
    originalTotal: formatCurrency(subtotalValue),
    total: formatCurrency(totalValue),
  };
}

function calculateInvestmentOverview(
  services: IServiceItem[],
): IInvestmentSummaryOverviewProps {
  const summary = calculateInvestmentSummary(services);

  return {
    subtotal: summary.originalTotal,
    discountPercent: summary.discountPercent,
    discountValue: summary.discountValue,
    total: summary.total,
  };
}

/**
 * EXPORTS
 */
export {
  calculateInvestmentSummary,
  calculateInvestmentOverview,
  formatCurrency,
  parsePrice,
};
