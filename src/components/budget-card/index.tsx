/**
 * IMPORTS
 */
import React from "react";

import { Text, View } from "react-native";

// components
import { Status } from "../status";

// styles
import { styles } from "./styles";

/**
 * Component BudgetCard para a interação do usuário com ui.
 */
const BudgetCard: React.FC<any> = ({ item }: any) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardTop}>
        <View style={{ flex: 1 }}>
          <Text style={styles.cardTitle}>{item.title}</Text>

          <Text style={styles.cardClient}>{item.client}</Text>
        </View>

        <Status status={item.status} />
      </View>

      <Text style={styles.cardValue}>{item.value}</Text>
    </View>
  );
};

/**
 * EXPORTS
 */
export { BudgetCard };
