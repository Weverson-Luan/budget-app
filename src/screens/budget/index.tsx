/**
 * IMPORTS
 */

import React from "react";

import { ScrollView } from "react-native";

import { IncludedServices } from "@/components/included-services";
import { MOCK_SERVICES } from "@/components/included-services/mock";

import { styles } from "./styles";

/**
 * Component Budget para a interação do usuário com ui.
 */
const Budget: React.FC = () => {
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
      <IncludedServices
        services={MOCK_SERVICES}
        onEditService={handleEditService}
        onAddService={handleAddService}
      />
    </ScrollView>
  );
};

/**
 * EXPORTS
 */
export { Budget };
