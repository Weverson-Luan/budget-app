/**
 * IMPORTS
 */

import { IStatusType } from "@/components/status/interface";

interface IStatusBottomSheetProps {
  /**
   * Status atual do orçamento. Também é usado como chave para
   * reiniciar a seleção quando outro orçamento é aberto.
   */
  status: IStatusType;
  title?: string;
  onConfirm: (status: IStatusType) => void;
  onClose?: () => void;
}

/**
 * EXPORTS
 */
export type { IStatusBottomSheetProps };
