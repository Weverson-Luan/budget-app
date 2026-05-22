/**
 * IMPORTS
 */

import { MmkvRepositoryContract } from "@/domain/repositories/cache/mmkv-repository-contract";

/**
 * Caso de uso responsável por limpar
 * todo o cache local via MMKV.
 */
class ClearMmkvCacheUseCase {
  constructor(private readonly cacheRepository: MmkvRepositoryContract) {}

  async execute(): Promise<void> {
    await this.cacheRepository.clear();
  }
}

/**
 * EXPORTS
 */
export { ClearMmkvCacheUseCase };
