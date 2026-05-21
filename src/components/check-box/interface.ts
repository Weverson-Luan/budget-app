/**
 * IMPORTS
 */
type ICheckType = "checkbox" | "radio";

interface ICheckProps {
  label: string;
  type?: ICheckType;
  selected?: boolean;
  onPress?: () => void;
}

/**
 * EXPORTS
 */
export type { ICheckProps, ICheckType };
