/**
 * IMPORTS
 */

import { AsyncStorageRepositoryContract } from "@/domain/repositories/cache/async-storage-repository-contract";

/**
 * Caso de uso responsável por remover
 * um valor do cache local via AsyncStorage.
 */
class RemoveAsyncStorageCacheUseCase {
  constructor(
    private readonly cacheRepository: AsyncStorageRepositoryContract,
  ) {}

  async execute(key: string): Promise<void> {
    await this.cacheRepository.remove(key);
  }
}

/**
 * EXPORTS
 */
export { RemoveAsyncStorageCacheUseCase };
