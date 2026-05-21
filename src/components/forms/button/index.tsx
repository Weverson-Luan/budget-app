/**
 * IMPORTS
 */
import React from "react";

import { Text, TouchableOpacity, View } from "react-native";
import { IButtonProps } from "./interface";

// styles
import { styles } from "./styles";

/**
 * Component Button para a interação do usuário com ui.
 */
const Button: React.FC<IButtonProps> = ({ title, ...rest }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity {...rest} activeOpacity={0.7} style={styles.button}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

/**
 * EXPORTS
 */
export { Button };
