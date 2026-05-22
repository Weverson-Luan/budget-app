/**
 * IMPORTS
 */

// contracts
import { AsyncStorageRepositoryContract } from "@/domain/repositories/cache/async-storage-repository-contract";

// data libs
import { AsyncStorage } from "@/data/libs/@react-native-assync-storage";

/**
 * Repositório responsável por realizar operações
 * de persistência local utilizando AsyncStorage.
 *
 * Responsabilidades:
 *
 * - Salvar dados localmente
 * - Buscar dados persistidos
 * - Remover registros
 * - Limpar armazenamento local
 *
 * Características:
 *
 * - Persistência assíncrona
 * - Compatibilidade com diversas bibliotecas
 * - Armazenamento simples baseado em chave/valor
 *
 * Este repositório implementa o contrato
 * `AsyncStorageRepositoryContract`,
 * permitindo desacoplamento da tecnologia utilizada.
 *
 * Dessa forma, é possível substituir futuramente:
 *
 * - AsyncStorage
 * - MMKV
 * - SecureStore
 * - Realm
 * - SQLite
 *
 * sem impactar as regras de negócio da aplicação.
 */
class AsyncStorageRepository implements AsyncStorageRepositoryContract {
  async set<T>(key: string, value: T): Promise<void> {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  }

  async get<T>(key: string): Promise<T | null> {
    const data = await AsyncStorage.getItem(key);

    if (!data) {
      return null;
    }

    return JSON.parse(data);
  }

  async remove(key: string): Promise<void> {
    await AsyncStorage.removeItem(key);
  }

  async clear(): Promise<void> {
    await AsyncStorage.clear();
  }
}

/**
 * EXPORTS
 */
export { AsyncStorageRepository };
