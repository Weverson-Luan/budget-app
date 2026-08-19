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
  onPress?: (id: string) => void;
  onLongPress?: (id: string) => void;
}

/**
 * EXPORTS
 */
export type { IBudgetCardItem, IBudgetCardProps };
