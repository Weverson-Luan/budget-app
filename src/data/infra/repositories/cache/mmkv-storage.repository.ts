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
  async set<T>(key: string, value: T): Promise<void> {
    mmkvStorage.set(key, JSON.stringify(value));
  }

  async get<T>(key: string): Promise<T | null> {
    const data = mmkvStorage.getString(key);

    if (!data) {
      return null;
    }

    return JSON.parse(data);
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
