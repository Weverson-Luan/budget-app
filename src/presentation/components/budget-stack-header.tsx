/**
 * IMPORTS
 */

import React from "react";

import { router } from "expo-router";

import { Header } from "@/components/header";
import { useBudgetDetail } from "@/presentation/hooks/budget/use-budget-detail";

/**
 * Header da stack de detalhe do orçamento.
 *
 * Exibe o título e o status atuais, acompanhando as alterações
 * feitas na tela (mudança de status, edição, duplicação).
 */
function BudgetStackHeader({
  id,
  fallbackTitle = "Orçamento",
}: {
  id: string;
  fallbackTitle?: string;
}) {
  const { budget } = useBudgetDetail(id);

  return (
    <Header
      title={budget?.title ?? fallbackTitle}
      status={budget?.status}
      onBack={() => router.back()}
    />
  );
}

/**
 * EXPORTS
 */
export { BudgetStackHeader };
