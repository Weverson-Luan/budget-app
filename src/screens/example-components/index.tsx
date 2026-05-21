/**
 * IMPORTS
 */
import React, { useState } from "react";

import { ScrollView, Text, View } from "react-native";

import { AppButton } from "@/components/forms/app-button";
import { InputRadius } from "@/components/forms/input-radius";
import { GeneralInformation } from "@/components/general-information";
import { IncludedServices } from "@/components/included-services";
import { MOCK_SERVICES } from "@/components/included-services/mock";
import { InvestmentSummary } from "@/components/investment-summary";
import { MOCK_INVESTMENT } from "@/components/investment-summary/mock";
import { StatusBar } from "expo-status-bar";

import { MaterialIcons } from "@expo/vector-icons";
import { Status } from "@/components/status";

// styles
import { styles } from "./styles";
import { Check } from "@/components/check-box";

/**
 * Component ExampleComponents para a interação do usuário com ui.
 */
const ExampleComponents: React.FC = () => {
  const [check, setCheck] = useState(false);
  const [radio, setRadio] = useState(true);
  const [title, setTitle] = useState("");
  const [client, setClient] = useState("");

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 16, paddingTop: 40 }}>
      <View style={styles.container}>
        <Text style={{ marginBottom: 24 }}>
          Vejam os componentes que estão disponíveis para uso no app.
        </Text>

        <View
          style={{
            width: "100%",
            marginBottom: 24,
            padding: 16,
            borderWidth: 1,
            borderStyle: "dashed",
          }}
        >
          <GeneralInformation
            title={title}
            client={client}
            onChangeTitle={setTitle}
            onChangeClient={setClient}
          />
        </View>

        <View
          style={{
            width: "100%",
            marginBottom: 24,
            padding: 16,
            borderWidth: 1,
            borderStyle: "dashed",
          }}
        >
          <IncludedServices
            services={MOCK_SERVICES}
            onEditService={(id) => console.log("Editar serviço:", id)}
            onAddService={() => console.log("Adicionar serviço")}
          />
        </View>

        <View
          style={{
            width: "100%",
            marginBottom: 24,
            padding: 16,
            borderWidth: 1,
            borderStyle: "dashed",
          }}
        >
          <InvestmentSummary {...MOCK_INVESTMENT} />
        </View>

        <View style={{ marginBottom: 24, width: "100%" }}>
          <InputRadius />
        </View>
        <View style={{ marginBottom: 24, width: "100%" }}>
          <InputRadius error />
        </View>

        <View style={{ marginBottom: 16, width: "100%" }}>
          <AppButton
            label="Label"
            variant="primary"
            icon={<MaterialIcons name="send" size={16} color="#FFF" />}
            onPress={() => console.log("clicou")}
          />
        </View>

        <View style={{ marginBottom: 16, width: "100%" }}>
          <AppButton
            label="Label"
            variant="secondary"
            icon={<MaterialIcons name="send" size={16} color="#6366F1" />}
          />
        </View>

        <View style={{ marginBottom: 16, width: "100%" }}>
          <AppButton
            label="Label"
            variant="danger"
            icon={<MaterialIcons name="send" size={16} color="#EF4444" />}
          />
        </View>

        <View
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
            gap: 12,
            marginBottom: 24,
            borderWidth: 1,
            borderStyle: "dashed",
          }}
        >
          <Status status="sent" />
          <Status status="draft" />
          <Status status="approved" />
          <Status status="declined" />

          <StatusBar style="auto" />
        </View>

        <View
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            borderWidth: 1,
            borderStyle: "dashed",
          }}
        >
          <Check
            label="Label"
            type="checkbox"
            selected={check}
            onPress={() => setCheck(!check)}
          />

          <Check label="Label" type="checkbox" selected />

          <Check
            label="Label"
            type="radio"
            selected={radio}
            onPress={() => setRadio(!radio)}
          />

          <Check label="Label" type="radio" selected />
        </View>
      </View>
    </ScrollView>
  );
};

/**
 * EXPORTS
 */
export { ExampleComponents };
