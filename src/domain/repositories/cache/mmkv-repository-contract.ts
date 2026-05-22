/**
 * IMPORTS
 */

interface MmkvRepositoryContract {
  set<T>(key: string, value: T): Promise<void>;

  get<T>(key: string): Promise<T | null>;

  remove(key: string): Promise<void>;

  clear(): Promise<void>;
}

/**
 * EXPORTS
 */
export { MmkvRepositoryContract };
