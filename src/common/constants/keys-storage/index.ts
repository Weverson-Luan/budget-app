/**
 * IMPORTS
 */

const KEYS_STORAGE = {
  budgets: {
    list: "@app/budgets/list",
    filters: "@app/budgets/filters",
    initialized: "@app/budgets/initialized",
  },
  auth: {
    access_token: "@app/auth/access_token",
  },
  user: {
    profile_data: "@app/user/profile_data",
  },
} as const;

/**
 * Chaves de versões anteriores mantidas apenas para migração.
 */
const LEGACY_KEYS_STORAGE = {
  budgets: {
    details: "@app/budgets/details",
  },
} as const;

type StorageKey =
  | (typeof KEYS_STORAGE)["budgets"][keyof (typeof KEYS_STORAGE)["budgets"]]
  | (typeof KEYS_STORAGE)["auth"][keyof (typeof KEYS_STORAGE)["auth"]]
  | (typeof KEYS_STORAGE)["user"][keyof (typeof KEYS_STORAGE)["user"]];

/**
 * EXPORTS
 */
export { KEYS_STORAGE, LEGACY_KEYS_STORAGE };
export type { StorageKey };
