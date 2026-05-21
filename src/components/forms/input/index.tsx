/**
 * IMPORTS
 */
import React from "react";

import { TextInput, View } from "react-native";
import { InputProps } from "./interface";
import { styles } from "./styles";

/**
 * Component Input para a interação do usuário com ui.
 */
const Input: React.FC<InputProps> = ({ ...rest }: InputProps) => {
  return (
    <View style={styles.container}>
      <TextInput {...rest} style={styles.input} />
    </View>
  );
};

/**
 * EXPORTS
 */
export { Input };
