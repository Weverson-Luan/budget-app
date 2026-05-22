/**
 * IMPORTS
 */

import { createMMKV } from "react-native-mmkv";

const mmkvStorage = createMMKV({
  id: `budget-app-storage`,
  encryptionKey: "hunter2",
  encryptionType: "AES-256",
  mode: "multi-process",
  readOnly: false,
  compareBeforeSet: false,
});

/**
 * EXPORTS
 */
export { mmkvStorage };
