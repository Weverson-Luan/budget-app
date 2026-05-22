/**
 * IMPORTS
 */

import {
  SetMmkvCacheUseCase,
  GetMmkvCacheUseCase,
  RemoveMmkvCacheUseCase,
  ClearMmkvCacheUseCase,
} from "@/domain/use-cases/cache/mmkv";

import { MMKVStorageRepository } from "@/data/infra/repositories/cache/mmkv-storage.repository";
import { CacheSerializer } from "@/domain/adapters/cache";

// type MmkvCacheUseCases = {
//   set: SetMmkvCacheUseCase;
//   get: GetMmkvCacheUseCase;
//   remove: RemoveMmkvCacheUseCase;
//   clear: ClearMmkvCacheUseCase;
// };

/**
 * Factory responsável por montar os casos de uso
 * de cache MMKV com suas dependências.
 */
function makeMmkvCacheUseCasesFactory() {
  const repository = new MMKVStorageRepository();
  const serializer = new CacheSerializer();

  return {
    set: new SetMmkvCacheUseCase(repository, serializer),
    get: new GetMmkvCacheUseCase(repository, serializer),
    remove: new RemoveMmkvCacheUseCase(repository),
    clear: new ClearMmkvCacheUseCase(repository),
  };
}

/**
 * EXPORTS
 */
export { makeMmkvCacheUseCasesFactory };
