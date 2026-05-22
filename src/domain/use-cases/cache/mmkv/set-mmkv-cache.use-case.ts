/**
 * IMPORTS
 */

import { CacheSerializerContract } from "@/domain/adapters/cache/cache-serializer-contract";
import { LocalStorageRepositoryContract } from "@/domain/repositories/cache/local-storage-repository-contract";

/**
 * Caso de uso responsável por persistir
 * um valor no cache local via MMKV.
 */
class SetMmkvCacheUseCase {
  constructor(
    private readonly cacheRepository: LocalStorageRepositoryContract,
    private readonly cacheSerializer: CacheSerializerContract,
  ) {}

  async execute<T>(key: string, value: T): Promise<void> {
    const serialized = this.cacheSerializer.serialize(value);
    await this.cacheRepository.set(key, serialized);
  }
}

/**
 * EXPORTS
 */
export { SetMmkvCacheUseCase };
