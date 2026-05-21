/**
 * IMPORTS
 */
import { theme } from "@/styles/theme/theme";

export function returnCheckConfig(
  type: "checkbox" | "radio",
  selected: boolean
) {
  if (type === "checkbox") {
    return {
      icon: selected ? "check-box" : "check-box-outline-blank",
      color: selected ? theme.colors.purple_base : theme.colors.gray_400,
    };
  }

  return {
    icon: selected ? "radio-button-checked" : "radio-button-unchecked",
    color: selected ? theme.colors.purple_base : theme.colors.gray_400,
  };
}
