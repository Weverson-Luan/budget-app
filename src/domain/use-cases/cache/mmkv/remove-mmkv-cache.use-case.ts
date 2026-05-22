/**
 * IMPORTS
 */

import { LocalStorageRepositoryContract } from "@/domain/repositories/cache/local-storage-repository-contract";

/**
 * Caso de uso responsável por remover
 * um valor do cache local via MMKV.
 */
class RemoveMmkvCacheUseCase {
  constructor(private readonly cacheRepository: LocalStorageRepositoryContract) {}

  async execute(key: string): Promise<void> {
    await this.cacheRepository.remove(key);
  }
}

/**
 * EXPORTS
 */
export { RemoveMmkvCacheUseCase };
