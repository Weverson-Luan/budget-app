/**
 * IMPORTS
 */

import { MmkvRepositoryContract } from "@/domain/repositories/cache/mmkv-repository-contract";

/**
 * Caso de uso responsável por remover
 * um valor do cache local via MMKV.
 */
class RemoveMmkvCacheUseCase {
  constructor(private readonly cacheRepository: MmkvRepositoryContract) {}

  async execute(key: string): Promise<void> {
    await this.cacheRepository.remove(key);
  }
}

/**
 * EXPORTS
 */
export { RemoveMmkvCacheUseCase };
