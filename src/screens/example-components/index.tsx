/**
 * IMPORTS
 */
import React, { useState } from "react";

import { Text, View } from "react-native";

import { AppButton } from "@/components/forms/app-button";
import { InputRadius } from "@/components/forms/input-radius";
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

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={{ marginBottom: 24 }}>
          Open up App.tsx to start working on your app!
        </Text>

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
    </View>
  );
};

/**
 * EXPORTS
 */
export { ExampleComponents };
