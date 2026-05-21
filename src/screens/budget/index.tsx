/**
 * IMPORTS
 */

import React, { useState } from "react";

import { router } from "expo-router";
import { ScrollView, View } from "react-native";

import { BudgetFooter } from "@/components/budget-footer";
import { GeneralInformation } from "@/components/general-information";
import { IncludedServices } from "@/components/included-services";
import { MOCK_SERVICES } from "@/components/included-services/mock";
import { InvestmentSummary } from "@/components/investment-summary";
import { MOCK_INVESTMENT } from "@/components/investment-summary/mock";
import { IStatusType } from "@/components/status/interface";
import { StatusSelector } from "@/components/status-selector";

import { styles } from "./styles";

/**
 * Component Budget para a interação do usuário com ui.
 */
const Budget: React.FC = () => {
  const [title, setTitle] = useState("");
  const [client, setClient] = useState("");
  const [status, setStatus] = useState<IStatusType>("draft");

  function handleEditService(id: string) {
    console.log("Editar serviço:", id);
  }

  function handleAddService() {
    console.log("Adicionar serviço");
  }

  function handleSave() {
    console.log("Salvar orçamento", { title, client, status });
  }

  return (
    <View style={styles.wrapper}>
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
          services={MOCK_SERVICES}
          onEditService={handleEditService}
          onAddService={handleAddService}
        />

        <InvestmentSummary {...MOCK_INVESTMENT} />
      </ScrollView>

      <BudgetFooter
        onCancel={() => router.back()}
        onSave={handleSave}
      />
    </View>
  );
};

/**
 * EXPORTS
 */
export { Budget };
