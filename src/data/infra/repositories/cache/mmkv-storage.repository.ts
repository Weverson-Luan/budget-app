/**
 * IMPORTS
 */

// contracts
import { MmkvRepositoryContract } from "@/domain/repositories/cache/mmkv-repository-contract";

// data libs
import { getMmkvStorage } from "@/data/libs/mmkv";

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
    getMmkvStorage().set(key, value);
  }

  async get(key: string): Promise<string | null> {
    return getMmkvStorage().getString(key) ?? null;
  }

  async remove(key: string): Promise<void> {
    getMmkvStorage().remove(key);
  }

  async clear(): Promise<void> {
    getMmkvStorage().clearAll();
  }
}

/**
 * EXPORTS
 */
export { MMKVStorageRepository };
