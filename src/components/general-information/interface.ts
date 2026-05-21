/**
 * IMPORTS
 */

interface IGeneralInformationProps {
  title: string;
  client: string;
  onChangeTitle: (text: string) => void;
  onChangeClient: (text: string) => void;
  titleError?: boolean;
  clientError?: boolean;
}

/**
 * EXPORTS
 */
export type { IGeneralInformationProps };
