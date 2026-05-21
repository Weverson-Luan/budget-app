/**
 * IMPORTS
 */
import { theme } from "@/styles/theme/theme";

// typings
import { IVariant } from "../interface";

const getVariantStyles = (variant: IVariant) => {
  switch (variant) {
    case "secondary":
      return {
        container: {
          backgroundColor: theme.colors.white,
          borderWidth: 1.5,
          borderColor: theme.colors.gray_300,
        },
        label: {
          color: theme.colors.purple_base,
        },
      };

    case "danger":
      return {
        container: {
          backgroundColor: theme.colors.white,
          borderWidth: 1.5,
          borderColor: theme.colors.gray_300,
        },
        label: {
          color: theme.colors.feedback_danger_base,
        },
      };

    default:
      return {
        container: {
          backgroundColor: theme.colors.purple_base,
        },
        label: {
          color: theme.colors.white,
        },
      };
  }
};

/**
 * EXPORTS
 */
export { getVariantStyles };
