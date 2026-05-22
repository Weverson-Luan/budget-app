/**
 * IMPORTS
 */

import { LocalCacheUseCasesContract } from "@/domain/use-cases/cache/local-cache-use-cases.contract";
import { isMmkvAvailable } from "@/data/libs/mmkv";

import { makeAsyncStorageCacheUseCasesFactory } from "./make-async-storage-cache-use-cases.factory";

type LocalCacheUseCases = LocalCacheUseCasesContract;

function createLocalCache(): LocalCacheUseCasesContract {
  if (isMmkvAvailable()) {
    const { makeMmkvCacheUseCasesFactory } =
      require("./make-mmkv-cache-use-cases.factory") as typeof import("./make-mmkv-cache-use-cases.factory");

    return makeMmkvCacheUseCasesFactory();
  }

  if (__DEV__) {
    console.warn(
      "[localCache] MMKV indisponível (Expo Go). Usando AsyncStorage. Para MMKV, rode: npx expo run:android",
    );
  }

  return makeAsyncStorageCacheUseCasesFactory();
}

const localCache = createLocalCache();

/**
 * EXPORTS
 */
export { localCache, createLocalCache };
export type { LocalCacheUseCases };
