/**
 * IMPORTS
 */

interface AsyncStorageRepositoryContract {
  set(key: string, value: string): Promise<void>;

  get(key: string): Promise<string | null>;

  remove(key: string): Promise<void>;

  clear(): Promise<void>;
}

/**
 * EXPORTS
 */
export { AsyncStorageRepositoryContract };
