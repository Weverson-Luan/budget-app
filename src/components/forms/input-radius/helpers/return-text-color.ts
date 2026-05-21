/**
 * IMPORTS
 */

import { theme } from "@/styles/theme/theme";

const textColor = (error: boolean, focused: boolean) => {
  if (error) return theme.colors.feedback_danger_base;
  if (focused) return theme.colors.purple_base;
  return theme.colors.gray_700;
};

/**
 * EXPORTS
 */
export { textColor };
