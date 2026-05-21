/**
 * IMPORTS
 */

type IStatusType = "sent" | "draft" | "approved" | "declined";

interface IStatusProps {
  status: IStatusType;
}

/** * EXPORTS
 */
export type { IStatusProps, IStatusType };
