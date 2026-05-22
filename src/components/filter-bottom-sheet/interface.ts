/**
 * IMPORTS
 */

import { IStatusType } from "@/components/status/interface";
import {
  BudgetFilters,
  BudgetSortOrder,
} from "@/domain/entities/budget/budget-filters.entity";

interface IFilterBottomSheetProps {
  filters: BudgetFilters;
  onToggleStatus: (status: IStatusType) => void;
  onSortChange: (sortBy: BudgetSortOrder) => void;
  onApply: () => void;
  onReset: () => void;
  handleOnClosed?: () => void;
}

/**
 * EXPORTS
 */
export type { IFilterBottomSheetProps };
