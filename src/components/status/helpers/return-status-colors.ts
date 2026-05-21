/**
 * IMPORTS
 */
import { theme } from "@/styles/theme/theme";

function returnStatusColors(status: string) {
  switch (status) {
    case "sent":
      return {
        bg: theme.colors.info_light,
        text: theme.colors.info_dark,
        dot: theme.colors.info_base,
        label: "Enviado",
      };

    case "draft":
      return {
        bg: theme.colors.gray_200,
        text: theme.colors.gray_600,
        dot: theme.colors.gray_600,
        label: "Rascunho",
      };

    case "approved":
      return {
        bg: theme.colors.feedback_success_light,
        text: theme.colors.feedback_success_dark,
        dot: theme.colors.feedback_success_dark,
        label: "Aprovado",
      };

    case "declined":
      return {
        bg: theme.colors.feedback_danger_light,
        text: theme.colors.feedback_danger_dark,
        dot: theme.colors.feedback_danger_base,
        label: "Recusado",
      };

    default:
      return {
        bg: theme.colors.gray_200,
        text: theme.colors.gray_600,
        dot: theme.colors.gray_600,
        label: "---",
      };
  }
}

/**
 * EXPORTS
 */
export { returnStatusColors };
