/**
 * IMPORTS
 */

import { CacheSerializerContract } from "@/domain/adapters/cache/cache-serializer-contract";
import { LocalStorageRepositoryContract } from "@/domain/repositories/cache/local-storage-repository-contract";

/**
 * Caso de uso responsável por buscar
 * um valor persistido no cache local via MMKV.
 */
class GetMmkvCacheUseCase {
  constructor(
    private readonly cacheRepository: LocalStorageRepositoryContract,
    private readonly cacheSerializer: CacheSerializerContract,
  ) {}

  async execute<T>(key: string): Promise<T | null> {
    const raw = await this.cacheRepository.get(key);

    if (!raw) {
      return null;
    }

    return this.cacheSerializer.deserialize<T>(raw);
  }
}

/**
 * EXPORTS
 */
export { GetMmkvCacheUseCase };
