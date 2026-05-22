/**
 * IMPORTS
 */

import React from "react";

import { router, useLocalSearchParams } from "expo-router";
import { ActivityIndicator, ScrollView, View } from "react-native";

import { BudgetDetailsFooter } from "@/components/budget-details-footer";
import { BudgetOverview } from "@/components/budget-overview";
import { IncludedServicesOverview } from "@/components/included-services-overview";
import { InvestmentSummaryOverview } from "@/components/investment-summary-overview";
import { budgetUseCases } from "@/factories/budget/make-budget-use-cases.factory";
import { useBudgetDetail } from "@/presentation/hooks/budget/use-budget-detail";

import { styles } from "./styles";

/**
 * Screen BudgetDetails — visualização do orçamento.
 */
const BudgetDetails: React.FC = () => {
  const { id = "1" } = useLocalSearchParams<{ id: string }>();
  const { detail, loading } = useBudgetDetail(id);

  async function handleDelete() {
    await budgetUseCases.delete.execute(id);
    router.back();
  }

  if (loading || !detail) {
    return (
      <View style={[styles.wrapper, styles.loading]}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <BudgetOverview {...detail.overview} />

        <IncludedServicesOverview services={detail.services} />

        <InvestmentSummaryOverview {...detail.investment} />
      </ScrollView>

      <BudgetDetailsFooter
        onDelete={handleDelete}
        onCopy={() => console.log("Copiar", id)}
        onEdit={() => router.push("/new-budget")}
        onShare={() => console.log("Compartilhar", id)}
      />
    </View>
  );
};

/**
 * EXPORTS
 */
export { BudgetDetails };
export default BudgetDetails;
