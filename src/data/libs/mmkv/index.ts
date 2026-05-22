/**
 * IMPORTS
 */

import type { MMKV } from "react-native-mmkv";

let mmkvStorage: MMKV | null = null;
let mmkvAvailable: boolean | null = null;

function isMmkvAvailable(): boolean {
  if (mmkvAvailable !== null) {
    return mmkvAvailable;
  }

  try {
    const { createMMKV } =
      require("react-native-mmkv") as typeof import("react-native-mmkv");

    mmkvStorage = createMMKV({
      id: "budget-app-storage",
    });
    mmkvAvailable = true;
  } catch {
    mmkvAvailable = false;
    mmkvStorage = null;
  }

  return mmkvAvailable;
}

function getMmkvStorage(): MMKV {
  if (!isMmkvAvailable() || !mmkvStorage) {
    throw new Error(
      "MMKV não disponível. Use um development build (expo run:android/ios) em vez do Expo Go.",
    );
  }

  return mmkvStorage;
}

/**
 * EXPORTS
 */
export { getMmkvStorage, isMmkvAvailable };
