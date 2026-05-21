/**
 * IMPORTS
 */

import { theme } from "@/styles/theme/theme";

const borderColor = (error: boolean, focused: boolean) => {
  if (error && focused) return "#EF4444";
  if (error) return theme.colors.feedback_base;
  if (focused) return theme.colors.purple_base;
  return theme.colors.gray_300;
};

/**
 * EXPORTS
 */
export { borderColor };
