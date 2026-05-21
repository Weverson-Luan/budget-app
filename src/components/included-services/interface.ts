/**
 * IMPORTS
 */

interface IServiceItem {
  id: string;
  title: string;
  description: string;
  price: string;
  quantity: number;
}

interface IIncludedServicesProps {
  services: IServiceItem[];
  onEditService?: (id: string) => void;
  onAddService?: () => void;
}

/**
 * EXPORTS
 */
export type { IServiceItem, IIncludedServicesProps };
