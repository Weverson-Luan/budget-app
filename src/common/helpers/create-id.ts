/**
 * IMPORTS
 */

/**
 * Gera um identificador único local.
 *
 * Combina timestamp com sufixo aleatório para evitar colisão
 * quando dois registros são criados no mesmo milissegundo
 * (ex.: duplicar um orçamento em sequência).
 */
function createId(): string {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).slice(2, 8);

  return `${timestamp}-${random}`;
}

/**
 * EXPORTS
 */
export { createId };
