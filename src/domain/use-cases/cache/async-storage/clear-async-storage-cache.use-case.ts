/**
 * IMPORTS
 */

import { AsyncStorageRepositoryContract } from "@/domain/repositories/cache/async-storage-repository-contract";

/**
 * Caso de uso responsável por limpar
 * todo o cache local via AsyncStorage.
 */
class ClearAsyncStorageCacheUseCase {
  constructor(
    private readonly cacheRepository: AsyncStorageRepositoryContract,
  ) {}

  async execute(): Promise<void> {
    await this.cacheRepository.clear();
  }
}

/**
 * EXPORTS
 */
export { ClearAsyncStorageCacheUseCase };
