/**
 * IMPORTS
 */

import React, { useMemo } from "react";

import { router } from "expo-router";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from "react-native";
import { useSharedValue } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// components
import { BudgetFooter } from "@/components/budget-footer";
import { GeneralInformation } from "@/components/general-information";
import { IncludedServices } from "@/components/included-services";
import { InvestmentSummary } from "@/components/investment-summary";
import { ServiceBottomSheet } from "@/components/service-bottom-sheet";
import { StatusSelector } from "@/components/status-selector";
import { BottomSheetMain } from "@/components/teste-sheet";

// hooksS
import { useBudgetForm } from "@/presentation/hooks/budget/use-budget-form";

// typingsS
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

  const keyboardVerticalOffset = insets.top + 56;

  const {
    title,
    setTitle,
    client,
    setClient,
    status,
    setStatus,
    services,
    setServices,
    investment,
    saving,
    save,
  } = useBudgetForm();

  const [sheetMode, setSheetMode] = React.useState<ServiceSheetMode>("add");
  const [editingServiceId, setEditingServiceId] = React.useState<string | null>(
    null,
  );
  const [sheetKey, setSheetKey] = React.useState(0);

  const isServiceSheetOpen = useSharedValue(false);

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

  const sheetInitialValues = useMemo(() => {
    if (sheetMode !== "edit" || !editingServiceId) {
      return undefined;
    }

    const service = services.find((item) => item.id === editingServiceId);

    if (!service) {
      return undefined;
    }

    return {
      name: service.title,
      description: service.description,
      price: service.price.replace(/^R\$\s?/, ""),
      quantity: service.quantity,
    };
  }, [sheetMode, editingServiceId, services]);

  function openServiceSheet(mode: ServiceSheetMode, serviceId?: string) {
    setSheetMode(mode);
    setEditingServiceId(serviceId ?? null);
    setSheetKey((key) => key + 1);
    isServiceSheetOpen.value = true;
  }

  function formatPrice(price: string) {
    const trimmed = price.trim();
    if (!trimmed) {
      return "R$ 0,00";
    }

    return trimmed.startsWith("R$") ? trimmed : `R$ ${trimmed}`;
  }

  function handleEditService(id: string) {
    openServiceSheet("edit", id);
  }

  function handleAddService() {
    openServiceSheet("add");
  }

  function handleSaveService(values: ServiceFormValues) {
    const formattedPrice = formatPrice(values.price);

    if (sheetMode === "edit" && editingServiceId) {
      setServices((prev) =>
        prev.map((service) =>
          service.id === editingServiceId
            ? {
              ...service,
              title: values.name,
              description: values.description,
              price: formattedPrice,
              quantity: values.quantity,
            }
            : service,
        ),
      );
    } else {
      setServices((prev) => [
        ...prev,
        {
          id: String(Date.now()),
          title: values.name,
          description: values.description,
          price: formattedPrice,
          quantity: values.quantity,
        },
      ]);
    }

    closeServiceSheet();
  }

  function handleDeleteService() {
    if (!editingServiceId) {
      return;
    }

    setServices((prev) =>
      prev.filter((service) => service.id !== editingServiceId),
    );
    closeServiceSheet();
  }

  function resetLocalState() {
    setSheetMode("add");
    setEditingServiceId(null);
    isServiceSheetOpen.value = false;
  }

  async function handleSave() {
    if (!title.trim() || !client.trim()) {
      return;
    }

    await save();
    resetLocalState();
    router.back();
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
          />

          <StatusSelector value={status} onChange={setStatus} />

          <IncludedServices
            services={services}
            onEditService={handleEditService}
            onAddService={handleAddService}
          />

          <InvestmentSummary {...investment} />
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
          onDelete={
            sheetMode === "edit" ? handleDeleteService : undefined
          }
        />
      </BottomSheetMain>
    </View>
  );
};

/**
 * EXPORTS
 */
export { Budget };
