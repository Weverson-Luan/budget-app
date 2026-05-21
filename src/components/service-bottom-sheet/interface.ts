/**
 * IMPORTS
 */

type ServiceSheetMode = "add" | "edit";

type ServiceFormValues = {
  name: string;
  description: string;
  price: string;
  quantity: number;
};

interface IServiceBottomSheetProps {
  mode: ServiceSheetMode;
  initialValues?: Partial<ServiceFormValues>;
  onClose: () => void;
  onSave: (values: ServiceFormValues) => void;
  onDelete?: () => void;
}

/**
 * EXPORTS
 */
export type {
  IServiceBottomSheetProps,
  ServiceFormValues,
  ServiceSheetMode,
};
