/**
 * IMPORTS
 */

// contracts
import { MmkvRepositoryContract } from "@/domain/repositories/cache/mmkv-repository-contract";

// data libs
import { mmkvStorage } from "@/data/libs/mmkv";

/**
 * Repositório responsável por realizar operações
 * de persistência local utilizando MMKV.
 *
 * Responsabilidades:
 *
 * - Salvar dados localmente
 * - Buscar dados persistidos
 * - Remover registros
 * - Limpar armazenamento local
 *
 * Benefícios:
 *
 * - Alta performance
 * - Persistência síncrona via JSI
 * - Baixo overhead comparado ao AsyncStorage 1000x mais rápido
 *
 * Este repositório implementa o contrato
 * `MmkvRepositoryContract`, permitindo
 * desacoplamento da tecnologia utilizada.
 *
 * Dessa forma, é possível trocar futuramente:
 *
 * - MMKV
 * - AsyncStorage
 * - SecureStore
 * - Realm
 * - SQLite
 *
 * sem impactar as regras de negócio da aplicação.
 */
class MMKVStorageRepository implements MmkvRepositoryContract {
  async set(key: string, value: string): Promise<void> {
    mmkvStorage.set(key, value);
  }

  async get(key: string): Promise<string | null> {
    return mmkvStorage.getString(key) ?? null;
  }

  async remove(key: string): Promise<void> {
    mmkvStorage.remove(key);
  }

  async clear(): Promise<void> {
    mmkvStorage.clearAll();
  }
}

/**
 * EXPORTS
 */
export { MMKVStorageRepository };
