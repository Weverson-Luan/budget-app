/**
 * IMPORTS
 */
import React, { useMemo, useState } from "react";

import {
  ActivityIndicator,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { Feather, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useSharedValue } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// components
import { BottomSheetMain } from "@/components/bottom-sheet";
import { BudgetCard } from "@/components/budget-card";
import { FilterBottomSheet } from "@/components/filter-bottom-sheet";
import { AppButton } from "@/components/forms/app-button";
import { NotFound } from "@/components/not-found";
import { StatusBottomSheet } from "@/components/status-bottom-sheet";

// typings
import { QuoteStatus } from "@/domain/entities/budget/budget.entity";

// hooks
import { useBudgetActions } from "@/presentation/hooks/budget/use-budget-actions";
import { useBudgetFilters } from "@/presentation/hooks/budget/use-budget-filters";
import { useBudgetList } from "@/presentation/hooks/budget/use-budget-list";

// mappers
import { toBudgetCardItem } from "@/presentation/mappers/budget-view.mapper";

// styles
import { theme } from "@/styles/theme/theme";
import { styles } from "./styles";

/**
 * Screen Home para a interação do usuário com ui.
 */
const Home: React.FC = () => {
  const insets = useSafeAreaInsets();

  const { budgets, loading } = useBudgetList();
  const { changeStatus } = useBudgetActions();
  const {
    draftFilters,
    filteredBudgets,
    hasActiveFilters,
    hydrated,
    search,
    setSearch,
    openFilters,
    toggleDraftStatus,
    setDraftSortBy,
    applyFilters,
    resetFilters,
  } = useBudgetFilters(budgets);

  const [statusBudgetId, setStatusBudgetId] = useState<string | null>(null);

  const isFilterOpen = useSharedValue(false);
  const isStatusOpen = useSharedValue(false);

  const cards = useMemo(
    () => filteredBudgets.map(toBudgetCardItem),
    [filteredBudgets],
  );

  const draftCount = useMemo(
    () => budgets.filter((item) => item.status === "draft").length,
    [budgets],
  );

  const statusBudget = useMemo(
    () => budgets.find((item) => item.id === statusBudgetId) ?? null,
    [budgets, statusBudgetId],
  );

  const subtitleLabel =
    budgets.length === 0
      ? "Nenhum orçamento cadastrado"
      : draftCount === 1
        ? "Você tem 1 item em rascunho"
        : `Você tem ${draftCount} itens em rascunho`;

  const emptyListText =
    budgets.length === 0 ? "Sem orçamentos" : "Nenhum orçamento encontrado";

  function toggleFilterSheet() {
    const willOpen = !isFilterOpen.value;

    if (willOpen) {
      openFilters();
    }

    isFilterOpen.value = willOpen;
  }

  function closeStatusSheet() {
    isStatusOpen.value = false;
    setStatusBudgetId(null);
  }

  function toggleStatusSheet() {
    if (isStatusOpen.value) {
      closeStatusSheet();
      return;
    }

    isStatusOpen.value = true;
  }

  function handleLongPressCard(id: string) {
    setStatusBudgetId(id);
    isStatusOpen.value = true;
  }

  async function handleConfirmStatus(status: QuoteStatus) {
    if (!statusBudgetId) {
      return;
    }

    await changeStatus(statusBudgetId, status);
    closeStatusSheet();
  }

  return (
    <>
      <View
        style={[
          styles.container,
          {
            flex: 1,
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
          },
        ]}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Todos orçamentos</Text>
            <Text style={styles.subtitle}>{subtitleLabel}</Text>
          </View>

          <AppButton
            label="Novo"
            icon={<Feather name="plus" size={16} color="#FFF" />}
            onPress={() => router.push("/new-budget")}
          />
        </View>

        {/* SEARCH */}
        <View style={styles.searchWrapper}>
          <View style={styles.searchInput}>
            <Feather name="search" size={18} color="#9CA3AF" />
            <TextInput
              placeholder="Título ou cliente"
              placeholderTextColor="#9CA3AF"
              style={styles.input}
              value={search}
              onChangeText={setSearch}
              returnKeyType="search"
              autoCorrect={false}
            />

            {search.length > 0 && (
              <TouchableOpacity
                onPress={() => setSearch("")}
                hitSlop={8}
                accessibilityRole="button"
                accessibilityLabel="Limpar busca"
              >
                <Feather name="x" size={16} color="#9CA3AF" />
              </TouchableOpacity>
            )}
          </View>

          <TouchableOpacity
            style={[styles.filter, hasActiveFilters && styles.filterActive]}
            onPress={toggleFilterSheet}
            accessibilityRole="button"
            accessibilityLabel="Filtrar e ordenar"
          >
            <MaterialIcons
              name="tune"
              size={18}
              color={theme.colors.purple_base}
            />

            {hasActiveFilters && <View style={styles.filterBadge} />}
          </TouchableOpacity>
        </View>

        {/* LIST */}
        {loading || !hydrated ? (
          <View style={styles.listLoading}>
            <ActivityIndicator size="large" color={theme.colors.purple_base} />
          </View>
        ) : (
          <FlatList
            data={cards}
            keyExtractor={(item) => item.id}
            contentContainerStyle={[
              { gap: 12 },
              cards.length === 0 && { flexGrow: 1 },
            ]}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            renderItem={({ item }) => (
              <BudgetCard item={item} onLongPress={handleLongPressCard} />
            )}
            ListEmptyComponent={
              <NotFound
                icon={
                  <Feather
                    name="file-text"
                    size={48}
                    color={theme.colors.gray_400}
                  />
                }
                text={emptyListText}
              />
            }
          />
        )}
      </View>

      {/* FILTROS */}
      <BottomSheetMain isOpen={isFilterOpen} toggleSheet={toggleFilterSheet}>
        <FilterBottomSheet
          filters={draftFilters}
          onToggleStatus={toggleDraftStatus}
          onSortChange={setDraftSortBy}
          onApply={applyFilters}
          onReset={resetFilters}
          handleOnClosed={toggleFilterSheet}
        />
      </BottomSheetMain>

      {/* STATUS */}
      <BottomSheetMain
        isOpen={isStatusOpen}
        toggleSheet={toggleStatusSheet}
        sheetHeight={360}
      >
        <StatusBottomSheet
          key={statusBudgetId ?? "empty"}
          status={statusBudget?.status ?? "draft"}
          onConfirm={handleConfirmStatus}
          onClose={closeStatusSheet}
        />
      </BottomSheetMain>
    </>
  );
};

/**
 * EXPORTS
 */
export { Home };
