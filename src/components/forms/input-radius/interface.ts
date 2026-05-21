/**
 * IMPORTS
 */

import { TextInputProps } from "react-native";

type InputRadiusVariant = "currency" | "text";

interface IInputRadiusProps extends TextInputProps {
  error?: boolean;
  variant?: InputRadiusVariant;
}

/**
 * EXPORTS
 */
export type { IInputRadiusProps, InputRadiusVariant };
