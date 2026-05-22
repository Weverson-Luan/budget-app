/**
 * IMPORTS
 */

interface CacheSerializerContract {
  serialize<T>(value: T): string;

  deserialize<T>(raw: string): T | null;
}

/**
 * EXPORTS
 */
export { CacheSerializerContract };
