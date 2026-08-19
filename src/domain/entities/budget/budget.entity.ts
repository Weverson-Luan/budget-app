/**
 * IMPORTS
 */

/**
 * Status possíveis de um orçamento.
 */
type QuoteStatus = "draft" | "sent" | "approved" | "declined";

/**
 * Item (serviço) de um orçamento.
 *
 * `description` é o nome do serviço exibido como rótulo principal.
 * `details` é a descrição complementar opcional apresentada no layout.
 */
interface QuoteItem {
  id: string;
  description: string;
  qty: number;
  price: number;
  details?: string;
}

/**
 * Documento de orçamento persistido localmente.
 */
interface QuoteDoc {
  id: string;
  client: string;
  title: string;
  items: QuoteItem[];
  discountPct?: number;
  status: QuoteStatus;
  createdAt: string;
  updatedAt: string;
}

/**
 * Dados aceitos na criação/atualização de um orçamento.
 */
interface SaveQuoteInput {
  id?: string;
  title: string;
  client: string;
  status: QuoteStatus;
  items: QuoteItem[];
  discountPct?: number;
}

/**
 * Totais calculados a partir dos itens do orçamento.
 */
interface QuoteTotals {
  itemCount: number;
  subtotal: number;
  discountPct: number;
  discountValue: number;
  total: number;
}

/**
 * EXPORTS
 */
export type {
  QuoteDoc,
  QuoteItem,
  QuoteStatus,
  QuoteTotals,
  SaveQuoteInput,
};
