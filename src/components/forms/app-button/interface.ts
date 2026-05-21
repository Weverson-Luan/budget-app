/**
 * IMPORTS
 */

type IVariant = "primary" | "secondary" | "danger";

type IAppButtonProps = {
  label: string;
  icon?: React.ReactNode;
  variant?: IVariant;
  onPress?: () => void;
  disabled?: boolean;
};

/**
 * EXPORTS
 */
export type { IAppButtonProps, IVariant };
