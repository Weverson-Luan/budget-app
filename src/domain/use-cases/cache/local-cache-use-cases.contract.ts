/**
 * Contrato dos casos de uso genéricos de cache local.
 */
interface LocalCacheUseCasesContract {
  set: { execute<T>(key: string, value: T): Promise<void> };
  get: { execute<T>(key: string): Promise<T | null> };
  remove: { execute(key: string): Promise<void> };
  clear: { execute(): Promise<void> };
}

/**
 * EXPORTS
 */
export type { LocalCacheUseCasesContract };
