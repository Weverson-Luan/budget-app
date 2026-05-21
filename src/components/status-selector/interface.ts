/**
 * IMPORTS
 */

import { IStatusType } from "@/components/status/interface";

interface IStatusSelectorProps {
  value: IStatusType;
  onChange: (status: IStatusType) => void;
}

/**
 * EXPORTS
 */
export type { IStatusSelectorProps };
