/**
 * IMPORTS
 */

interface IInvestmentSummaryProps {
  itemCount: number;
  subtotal: string;
  discountPercent: number;
  discountValue: string;
  originalTotal: string;
  total: string;
  /**
   * Texto do campo de desconto. Quando `onChangeDiscount`
   * é informado, o percentual passa a ser editável.
   */
  discountInput?: string;
  onChangeDiscount?: (text: string) => void;
}

/**
 * EXPORTS
 */
export type { IInvestmentSummaryProps };
