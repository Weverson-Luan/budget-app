/**
 * IMPORTS
 */

import { IStatusType } from "@/components/status/interface";

interface IBudgetCardItem {
  id: string;
  title: string;
  client: string;
  value: string;
  status: IStatusType;
}

interface IBudgetCardProps {
  item: IBudgetCardItem;
}

/**
 * EXPORTS
 */
export type { IBudgetCardItem, IBudgetCardProps };
