/**
 * IMPORTS
 */

import { ReactNode } from "react";

interface IBottomSheetMainProps {
  /**
   * Shared value do reanimated que controla a abertura do sheet.
   */
  isOpen: { value: boolean };
  toggleSheet: () => void;
  duration?: number;
  sheetHeight?: number;
  children: ReactNode;
}

/**
 * EXPORTS
 */
export type { IBottomSheetMainProps };
