/**
 * IMPORTS
 */

import React from "react";
import { View, Text } from "react-native";

// helpers
import { returnStatusColors } from "./helpers/return-status-colors";

// types
import { IStatusProps } from "./interface";

// styles
import { styles } from "./styles";

/**
 * Component Status para exibição de estado.
 */
const Status: React.FC<IStatusProps> = ({ status }: IStatusProps) => {
  const colors = returnStatusColors(status);

  return (
    <View style={[styles.container, { backgroundColor: colors.bg }]}>
      <View style={[styles.dot, { backgroundColor: colors.dot }]} />

      <Text style={[styles.label, { color: colors.text }]}>{colors.label}</Text>
    </View>
  );
};

/**
 * EXPORTS
 */
export { Status };
