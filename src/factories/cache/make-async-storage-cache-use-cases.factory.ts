/**
 * IMPORTS
 */

import {
  SetAsyncStorageCacheUseCase,
  GetAsyncStorageCacheUseCase,
  RemoveAsyncStorageCacheUseCase,
  ClearAsyncStorageCacheUseCase,
} from "@/domain/use-cases/cache/async-storage";

import { AsyncStorageRepository } from "@/data/infra/repositories/cache/async-storage.repository";
import { CacheSerializer } from "@/domain/adapters/cache";

/**
 * Factory responsável por montar os casos de uso
 * de cache AsyncStorage com suas dependências.
 */
function makeAsyncStorageCacheUseCasesFactory() {
  const repository = new AsyncStorageRepository();
  const serializer = new CacheSerializer();

  return {
    set: new SetAsyncStorageCacheUseCase(repository, serializer),
    get: new GetAsyncStorageCacheUseCase(repository, serializer),
    remove: new RemoveAsyncStorageCacheUseCase(repository),
    clear: new ClearAsyncStorageCacheUseCase(repository),
  };
}

/**
 * EXPORTS
 */
export { makeAsyncStorageCacheUseCasesFactory };
