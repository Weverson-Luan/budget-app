/**
 * IMPORTS
 */

import { IStatusType } from "@/components/status/interface";

interface IHeaderProps {
  title: string;
  onBack?: () => void;
  status?: IStatusType;
}

/**
 * EXPORTS
 */
export type { IHeaderProps };
