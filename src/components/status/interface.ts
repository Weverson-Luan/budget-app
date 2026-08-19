/**
 * IMPORTS
 */

import { QuoteStatus } from "@/domain/entities/budget/budget.entity";

/**
 * Alias de apresentação para o status do domínio.
 */
type IStatusType = QuoteStatus;

interface IStatusProps {
  status: IStatusType;
}

/** * EXPORTS
 */
export type { IStatusProps, IStatusType };
