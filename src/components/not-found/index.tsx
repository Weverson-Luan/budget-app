/**
 * IMPORTS
 */

import React from "react";

import { Text, View } from "react-native";

import { INotFoundProps } from "./interface";
import { styles } from "./styles";

/**
 * Component NotFound para exibir estado vazio com ícone e mensagem.
 */
const NotFound: React.FC<INotFoundProps> = ({ icon, text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>{icon}</View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

/**
 * EXPORTS
 */
export { NotFound };
