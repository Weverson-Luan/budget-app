/**
 * IMPORTS
 */

import { CacheSerializerContract } from "@/domain/adapters/cache/cache-serializer-contract";
import { AsyncStorageRepositoryContract } from "@/domain/repositories/cache/async-storage-repository-contract";

/**
 * Caso de uso responsável por buscar
 * um valor persistido no cache local via AsyncStorage.
 */
class GetAsyncStorageCacheUseCase {
  constructor(
    private readonly cacheRepository: AsyncStorageRepositoryContract,
    private readonly cacheSerializer: CacheSerializerContract,
  ) {}

  async execute<T>(key: string): Promise<T | null> {
    const rawData = await this.cacheRepository.get(key);

    if (!rawData) {
      return null;
    }

    return this.cacheSerializer.deserialize<T>(rawData);
  }
}

/**
 * EXPORTS
 */
export { GetAsyncStorageCacheUseCase };
