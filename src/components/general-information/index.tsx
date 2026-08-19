/**
 * IMPORTS
 */

import React, { useRef } from "react";

import { Feather } from "@expo/vector-icons";
import { Text, TextInput, View } from "react-native";

import { InputRadius } from "@/components/forms/input-radius";
import { theme } from "@/styles/theme/theme";

import { IGeneralInformationProps } from "./interface";
import { styles } from "./styles";

/**
 * Component GeneralInformation para a interação do usuário com ui.
 */
const GeneralInformation: React.FC<IGeneralInformationProps> = ({
  title,
  client,
  onChangeTitle,
  onChangeClient,
  titleError = false,
  clientError = false,
}) => {
  const clientInputRef = useRef<TextInput>(null);

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Feather name="home" size={18} color={theme.colors.purple_base} />
        <Text style={styles.headerTitle}>Informações gerais</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.body}>
        <InputRadius
          variant="text"
          placeholder="Título"
          value={title}
          onChangeText={onChangeTitle}
          error={titleError}
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => clientInputRef.current?.focus()}
        />

        <InputRadius
          ref={clientInputRef}
          variant="text"
          placeholder="Cliente"
          value={client}
          onChangeText={onChangeClient}
          error={clientError}
          returnKeyType="done"
          blurOnSubmit
        />
      </View>
    </View>
  );
};

/**
 * EXPORTS
 */
export { GeneralInformation };
