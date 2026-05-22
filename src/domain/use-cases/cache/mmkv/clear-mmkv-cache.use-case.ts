/**
 * IMPORTS
 */

import { LocalStorageRepositoryContract } from "@/domain/repositories/cache/local-storage-repository-contract";

/**
 * Caso de uso responsável por limpar
 * todo o cache local via MMKV.
 */
class ClearMmkvCacheUseCase {
  constructor(private readonly cacheRepository: LocalStorageRepositoryContract) {}

  async execute(): Promise<void> {
    await this.cacheRepository.clear();
  }
}

/**
 * EXPORTS
 */
export { ClearMmkvCacheUseCase };
