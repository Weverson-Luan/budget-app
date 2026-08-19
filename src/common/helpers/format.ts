/**
 * IMPORTS
 */

/**
 * Formata um valor numérico como moeda brasileira.
 *
 * Implementação manual (sem `Intl`) para garantir o mesmo
 * resultado em qualquer engine JS do React Native.
 */
function formatCurrency(value: number): string {
  const safeValue = Number.isFinite(value) ? value : 0;
  const [integerPart, decimalPart] = Math.abs(safeValue)
    .toFixed(2)
    .split(".");

  const withThousands = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  const signal = safeValue < 0 ? "-" : "";

  return `${signal}R$ ${withThousands},${decimalPart}`;
}

/**
 * Formata um valor numérico para exibição em input de preço,
 * sem o prefixo "R$" (o input já possui o prefixo).
 */
function formatCurrencyInput(value: number): string {
  return formatCurrency(value).replace("R$ ", "");
}

/**
 * Converte o texto digitado pelo usuário em número.
 *
 * Aceita os formatos "3.847,50", "3847,50", "3847.50" e "3847".
 */
function parseCurrencyInput(text: string): number {
  const cleaned = String(text ?? "").replace(/[^\d,.]/g, "");

  if (!cleaned) {
    return 0;
  }

  const separatorIndex = Math.max(
    cleaned.lastIndexOf(","),
    cleaned.lastIndexOf("."),
  );

  let normalized = cleaned;

  if (separatorIndex >= 0) {
    const decimalDigits = cleaned.length - separatorIndex - 1;

    normalized =
      decimalDigits > 0 && decimalDigits <= 2
        ? `${cleaned.slice(0, separatorIndex).replace(/[.,]/g, "")}.${cleaned.slice(
            separatorIndex + 1,
          )}`
        : cleaned.replace(/[.,]/g, "");
  }

  const parsed = Number.parseFloat(normalized);

  return Number.isFinite(parsed) ? parsed : 0;
}

/**
 * Converte uma porcentagem digitada pelo usuário em número
 * limitado ao intervalo de 0 a 100.
 */
function parsePercentInput(text: string): number {
  const parsed = parseCurrencyInput(text);

  return Math.min(Math.max(parsed, 0), 100);
}

/**
 * Formata uma data ISO para o padrão brasileiro (dd/mm/aaaa).
 */
function formatDate(isoDate: string): string {
  const date = new Date(isoDate);

  if (Number.isNaN(date.getTime())) {
    return "--/--/----";
  }

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");

  return `${day}/${month}/${date.getFullYear()}`;
}

/**
 * EXPORTS
 */
export {
  formatCurrency,
  formatCurrencyInput,
  formatDate,
  parseCurrencyInput,
  parsePercentInput,
};
