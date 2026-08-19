/**
 * IMPORTS
 */

import React from "react";

import { Feather } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  Share,
  Text,
  View,
} from "react-native";
import { useSharedValue } from "react-native-reanimated";

// components
import { BottomSheetMain } from "@/components/bottom-sheet";
import { BudgetDetailsFooter } from "@/components/budget-details-footer";
import { BudgetOverview } from "@/components/budget-overview";
import { IncludedServicesOverview } from "@/components/included-services-overview";
import { InvestmentSummaryOverview } from "@/components/investment-summary-overview";
import { NotFound } from "@/components/not-found";
import { Status } from "@/components/status";
import { StatusBottomSheet } from "@/components/status-bottom-sheet";

// hooks
import { useBudgetActions } from "@/presentation/hooks/budget/use-budget-actions";
import { useBudgetDetail } from "@/presentation/hooks/budget/use-budget-detail";

// helpers
import { formatCurrency } from "@/common/helpers/format";
import { QuoteStatus } from "@/domain/entities/budget/budget.entity";
import { calculateQuoteTotals } from "@/domain/helpers/calculate-quote-totals";
import {
  toBudgetOverviewProps,
  toInvestmentOverviewProps,
  toServiceViewItems,
} from "@/presentation/mappers/budget-view.mapper";

// styles
import { theme } from "@/styles/theme/theme";
import { styles } from "./styles";

/**
 * Screen BudgetDetails — visualização do orçamento.
 */
const BudgetDetails: React.FC = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { budget, loading } = useBudgetDetail(id);
  const { changeStatus, confirmRemove, duplicate } = useBudgetActions();

  const isStatusOpen = useSharedValue(false);

  function toggleStatusSheet() {
    isStatusOpen.value = !isStatusOpen.value;
  }

  function closeStatusSheet() {
    isStatusOpen.value = false;
  }

  async function handleConfirmStatus(status: QuoteStatus) {
    await changeStatus(id, status);
    closeStatusSheet();
  }

  function handleDelete() {
    confirmRemove(id, {
      title: budget?.title,
      onRemoved: () => router.back(),
    });
  }

  async function handleDuplicate() {
    const copy = await duplicate(id);

    if (copy) {
      router.replace({ pathname: "/budget/[id]", params: { id: copy.id } });
    }
  }

  async function handleShare() {
    if (!budget) {
      return;
    }

    const totals = calculateQuoteTotals(budget.items, budget.discountPct);

    await Share.share({
      message: [
        budget.title,
        `Cliente: ${budget.client}`,
        `Itens: ${totals.itemCount}`,
        `Total: ${formatCurrency(totals.total)}`,
      ].join("\n"),
    });
  }

  if (loading) {
    return (
      <View style={[styles.wrapper, styles.loading]}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!budget) {
    return (
      <View style={[styles.wrapper, styles.loading]}>
        <NotFound
          icon={
            <Feather
              name="file-text"
              size={48}
              color={theme.colors.gray_400}
            />
          }
          text="Orçamento não encontrado"
        />
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
        <BudgetOverview {...toBudgetOverviewProps(budget)} />

        <Pressable
          style={styles.statusCard}
          onPress={toggleStatusSheet}
          accessibilityRole="button"
          accessibilityLabel="Alterar status do orçamento"
        >
          <View style={styles.statusCardLeft}>
            <Feather name="tag" size={18} color={theme.colors.purple_base} />
            <Text style={styles.statusCardLabel}>Status</Text>
          </View>

          <View style={styles.statusCardRight}>
            <Status status={budget.status} />
            <Feather
              name="chevron-right"
              size={18}
              color={theme.colors.gray_400}
            />
          </View>
        </Pressable>

        <IncludedServicesOverview services={toServiceViewItems(budget.items)} />

        <InvestmentSummaryOverview {...toInvestmentOverviewProps(budget)} />
      </ScrollView>

      <BudgetDetailsFooter
        onDelete={handleDelete}
        onCopy={handleDuplicate}
        onEdit={() =>
          router.push({
            pathname: "/budget/edit/[id]",
            params: { id: budget.id },
          })
        }
        onShare={handleShare}
      />

      <BottomSheetMain
        isOpen={isStatusOpen}
        toggleSheet={toggleStatusSheet}
        sheetHeight={360}
      >
        <StatusBottomSheet
          status={budget.status}
          onConfirm={handleConfirmStatus}
          onClose={closeStatusSheet}
        />
      </BottomSheetMain>
    </View>
  );
};

/**
 * EXPORTS
 */
export { BudgetDetails };
export default BudgetDetails;
