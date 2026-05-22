/**
 * IMPORTS
 */

import React from "react";

import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { styles } from "./styles";

/**
 * Screen BudgetDetails — scaffold em branco para detalhes do orçamento.
 */
const BudgetDetails: React.FC = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.wrapper,
        {
          paddingBottom: insets.bottom,
        },
      ]}
    >
      <View style={styles.container} />
    </View>
  );
};

/**
 * EXPORTS
 */
export { BudgetDetails };
