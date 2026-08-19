/**
 * IMPORTS
 */

import React, { useState } from "react";

import { router, useLocalSearchParams } from "expo-router";
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from "react-native";
import { useSharedValue } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// components
import { BottomSheetMain } from "@/components/bottom-sheet";
import { BudgetFooter } from "@/components/budget-footer";
import { GeneralInformation } from "@/components/general-information";
import { IncludedServices } from "@/components/included-services";
import { InvestmentSummary } from "@/components/investment-summary";
import { ServiceBottomSheet } from "@/components/service-bottom-sheet";
import { StatusSelector } from "@/components/status-selector";

// hooks
import { useBudgetForm } from "@/presentation/hooks/budget/use-budget-form";

// typings
import {
  ServiceFormValues,
  ServiceSheetMode,
} from "@/components/service-bottom-sheet/interface";

// styles
import { styles } from "./styles";

const FOOTER_HEIGHT = 88;

/**
 * Component Budget para a interação do usuário com ui.
 */
const Budget: React.FC = () => {
  const insets = useSafeAreaInsets();
  const { id } = useLocalSearchParams<{ id?: string }>();

  const keyboardVerticalOffset = insets.top + 56;

  const {
    title,
    setTitle,
    client,
    setClient,
    status,
    setStatus,
    serviceViewItems,
    discountInput,
    setDiscountInput,
    investment,
    titleError,
    clientError,
    loading,
    saving,
    addItem,
    updateItem,
    removeItem,
    getItemFormValues,
    save,
  } = useBudgetForm(id);

  const [sheetMode, setSheetMode] = useState<ServiceSheetMode>("add");
  const [editingServiceId, setEditingServiceId] = useState<string | null>(null);
  const [sheetKey, setSheetKey] = useState(0);

  const isServiceSheetOpen = useSharedValue(false);

  const sheetInitialValues =
    sheetMode === "edit" && editingServiceId
      ? getItemFormValues(editingServiceId)
      : undefined;

  function closeServiceSheet() {
    isServiceSheetOpen.value = false;
    setEditingServiceId(null);
  }

  function toggleServiceSheet() {
    if (isServiceSheetOpen.value) {
      closeServiceSheet();
      return;
    }

    isServiceSheetOpen.value = true;
  }

  function openServiceSheet(mode: ServiceSheetMode, serviceId?: string) {
    setSheetMode(mode);
    setEditingServiceId(serviceId ?? null);
    setSheetKey((key) => key + 1);
    isServiceSheetOpen.value = true;
  }

  function handleSaveService(values: ServiceFormValues) {
    if (!values.name.trim()) {
      Alert.alert("Serviço inválido", "Informe o nome do serviço.");
      return;
    }

    if (sheetMode === "edit" && editingServiceId) {
      updateItem(editingServiceId, values);
    } else {
      addItem(values);
    }

    closeServiceSheet();
  }

  function handleDeleteService() {
    if (!editingServiceId) {
      return;
    }

    const serviceId = editingServiceId;

    Alert.alert(
      "Remover serviço",
      "Tem certeza que deseja remover este serviço do orçamento?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Remover",
          style: "destructive",
          onPress: () => {
            removeItem(serviceId);
            closeServiceSheet();
          },
        },
      ],
    );
  }

  async function handleSave() {
    const saved = await save();

    if (!saved) {
      return;
    }

    closeServiceSheet();
    router.back();
  }

  if (loading) {
    return (
      <View style={[styles.wrapper, styles.loading]}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={keyboardVerticalOffset}
      >
        <ScrollView
          style={styles.container}
          contentContainerStyle={[
            styles.content,
            { paddingBottom: FOOTER_HEIGHT + insets.bottom + 24 },
          ]}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="on-drag"
          automaticallyAdjustKeyboardInsets={Platform.OS === "ios"}
        >
          <GeneralInformation
            title={title}
            client={client}
            onChangeTitle={setTitle}
            onChangeClient={setClient}
            titleError={titleError}
            clientError={clientError}
          />

          <StatusSelector value={status} onChange={setStatus} />

          <IncludedServices
            services={serviceViewItems}
            onEditService={(serviceId) => openServiceSheet("edit", serviceId)}
            onAddService={() => openServiceSheet("add")}
          />

          <InvestmentSummary
            {...investment}
            discountInput={discountInput}
            onChangeDiscount={setDiscountInput}
          />
        </ScrollView>

        <BudgetFooter
          onCancel={() => router.back()}
          onSave={handleSave}
          saveDisabled={saving}
        />
      </KeyboardAvoidingView>

      <BottomSheetMain
        isOpen={isServiceSheetOpen}
        toggleSheet={toggleServiceSheet}
        sheetHeight={464}
      >
        <ServiceBottomSheet
          key={sheetKey}
          mode={sheetMode}
          initialValues={sheetInitialValues}
          onClose={closeServiceSheet}
          onSave={handleSaveService}
          onDelete={sheetMode === "edit" ? handleDeleteService : undefined}
        />
      </BottomSheetMain>
    </View>
  );
};

/**
 * EXPORTS
 */
export { Budget };
