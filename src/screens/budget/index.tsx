/**
 * IMPORTS
 */

import React, { useMemo, useState } from "react";

import { router } from "expo-router";
import { ScrollView, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { BudgetFooter } from "@/components/budget-footer";
import { GeneralInformation } from "@/components/general-information";
import { IncludedServices } from "@/components/included-services";
import { MOCK_SERVICES } from "@/components/included-services/mock";
import { IServiceItem } from "@/components/included-services/interface";
import { InvestmentSummary } from "@/components/investment-summary";
import { MOCK_INVESTMENT } from "@/components/investment-summary/mock";
import { ServiceBottomSheet } from "@/components/service-bottom-sheet";
import {
  ServiceFormValues,
  ServiceSheetMode,
} from "@/components/service-bottom-sheet/interface";
import { IStatusType } from "@/components/status/interface";
import { StatusSelector } from "@/components/status-selector";
import { BottomSheetMain } from "@/components/teste-sheet";

import { styles } from "./styles";

/**
 * Component Budget para a interação do usuário com ui.
 */
const Budget: React.FC = () => {
  const insets = useSafeAreaInsets();

  const [title, setTitle] = useState("");
  const [client, setClient] = useState("");
  const [status, setStatus] = useState<IStatusType>("draft");
  const [services, setServices] = useState<IServiceItem[]>(MOCK_SERVICES);
  const [sheetMode, setSheetMode] = useState<ServiceSheetMode>("add");
  const [editingServiceId, setEditingServiceId] = useState<string | null>(null);
  const [sheetKey, setSheetKey] = useState(0);

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
            : service
        )
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
      prev.filter((service) => service.id !== editingServiceId)
    );
    closeServiceSheet();
  }

  function handleSave() {
    console.log("Salvar orçamento", { title, client, status, services });
  }

  return (
    <View
      style={[
        styles.wrapper,
        {
          flex: 1,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
      ]}
    >
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
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

        <InvestmentSummary {...MOCK_INVESTMENT} />
      </ScrollView>

      <BudgetFooter
        onCancel={() => router.back()}
        onSave={handleSave}
      />

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
