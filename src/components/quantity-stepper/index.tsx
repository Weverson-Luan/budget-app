/**
 * IMPORTS
 */

import React from "react";

import { Feather } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

import { theme } from "@/styles/theme/theme";

import { IQuantityStepperProps } from "./interface";
import { styles } from "./styles";

/**
 * Component QuantityStepper para a interação do usuário com ui.
 */
const QuantityStepper: React.FC<IQuantityStepperProps> = ({
  value,
  onChange,
  min = 1,
}) => {
  function handleDecrement() {
    if (value > min) {
      onChange(value - 1);
    }
  }

  function handleIncrement() {
    onChange(value + 1);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={handleDecrement}
        disabled={value <= min}
      >
        <Feather name="minus" size={18} color={theme.colors.purple_base} />
      </TouchableOpacity>

      <Text style={styles.value}>{value}</Text>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={handleIncrement}
      >
        <Feather name="plus" size={18} color={theme.colors.purple_base} />
      </TouchableOpacity>
    </View>
  );
};

/**
 * EXPORTS
 */
export { QuantityStepper };
