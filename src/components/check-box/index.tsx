/**
 * IMPORTS
 */

import React from "react";
import { Text, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

// helpers
import { returnCheckConfig } from "./helpers/return-check-config";

// types
import { ICheckProps } from "./interface";

// styles
import { styles } from "./styles";

/**
 * Component Check (Checkbox / Radio)
 */
const Check: React.FC<ICheckProps> = ({
  label,
  type = "checkbox",
  selected = false,
  onPress,
}: ICheckProps) => {
  const config = returnCheckConfig(type, selected);

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <MaterialIcons name={config.icon as any} size={22} color={config.color} />

      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

/**
 * EXPORTS
 */
export { Check };
