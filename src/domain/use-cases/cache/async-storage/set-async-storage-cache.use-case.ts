/**
 * IMPORTS
 */

import { CacheSerializerContract } from "@/domain/adapters/cache/cache-serializer-contract";
import { AsyncStorageRepositoryContract } from "@/domain/repositories/cache/async-storage-repository-contract";

/**
 * Caso de uso responsável por persistir
 * um valor no cache local via AsyncStorage.
 */
class SetAsyncStorageCacheUseCase {
  constructor(
    private readonly cacheRepository: AsyncStorageRepositoryContract,
    private readonly cacheSerializer: CacheSerializerContract,
  ) {}

  async execute<T>(key: string, value: T): Promise<void> {
    if (value === null || value === undefined) return;

    const dataformattedStorage = this.cacheSerializer.serialize(value);
    await this.cacheRepository.set(key, dataformattedStorage);
  }
}

/**
 * EXPORTS
 */
export { SetAsyncStorageCacheUseCase };
