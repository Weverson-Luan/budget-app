/**
 * IMPORTS
 */

import { CacheSerializerContract } from "@/domain/adapters/cache/cache-serializer-contract";

/**
 * Adapter responsável por serializar
 * e desserializar valores persistidos
 * no cache local.
 */
class CacheSerializer implements CacheSerializerContract {
  /**
   * Serializa um valor para string JSON.
   */
  serialize<T>(value: T): string {
    return JSON.stringify(value);
  }

  /**
   * Desserializa um valor JSON.
   *
   * @returns Valor convertido ou null caso ocorra erro no parse.
   */
  deserialize<T>(raw: string): T | null {
    try {
      return JSON.parse(raw) as T;
    } catch (error) {
      console.log("[CacheSerializer] erro ao converter valor", error);

      return null;
    }
  }
}

/**
 * EXPORTS
 */
export { CacheSerializer };
