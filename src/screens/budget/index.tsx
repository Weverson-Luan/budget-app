/**
 * IMPORTS
 */

import React, { useState } from "react";

import { ScrollView } from "react-native";

import { GeneralInformation } from "@/components/general-information";
import { IncludedServices } from "@/components/included-services";
import { MOCK_SERVICES } from "@/components/included-services/mock";
import { InvestmentSummary } from "@/components/investment-summary";
import { MOCK_INVESTMENT } from "@/components/investment-summary/mock";

import { styles } from "./styles";

/**
 * Component Budget para a interação do usuário com ui.
 */
const Budget: React.FC = () => {
  const [title, setTitle] = useState("");
  const [client, setClient] = useState("");

  function handleEditService(id: string) {
    console.log("Editar serviço:", id);
  }

  function handleAddService() {
    console.log("Adicionar serviço");
  }

  return (
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

      <IncludedServices
        services={MOCK_SERVICES}
        onEditService={handleEditService}
        onAddService={handleAddService}
      />

      <InvestmentSummary {...MOCK_INVESTMENT} />
    </ScrollView>
  );
};

/**
 * EXPORTS
 */
export { Budget };
