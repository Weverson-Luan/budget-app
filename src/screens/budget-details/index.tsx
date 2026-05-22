/**
 * IMPORTS
 */

import React from "react";

import { router, useLocalSearchParams } from "expo-router";
import { ScrollView, View } from "react-native";

import { BudgetDetailsFooter } from "@/components/budget-details-footer";
import { BudgetOverview } from "@/components/budget-overview";
import { IncludedServicesOverview } from "@/components/included-services-overview";
import { InvestmentSummaryOverview } from "@/components/investment-summary-overview";
import { getBudgetDetailById } from "@/data/budgets";

import { styles } from "./styles";

/**
 * Screen BudgetDetails — visualização do orçamento.
 */
const BudgetDetails: React.FC = () => {
  const { id = "1" } = useLocalSearchParams<{ id: string }>();
  const detail = getBudgetDetailById(id);

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
        onDelete={() => console.log("Excluir", id)}
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
