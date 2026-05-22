/**
 * IMPORTS
 */

import React from "react";

import { router } from "expo-router";

import { Header } from "@/components/header";
import { IStatusType } from "@/components/status/interface";
import { useBudgetDetail } from "@/presentation/hooks/budget/use-budget-detail";

function BudgetStackHeader({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  const { detail } = useBudgetDetail(id);
  const status: IStatusType = detail?.status ?? "draft";

  return (
    <Header title={title} status={status} onBack={() => router.back()} />
  );
}

/**
 * EXPORTS
 */
export { BudgetStackHeader };
