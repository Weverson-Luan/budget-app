/**
 * IMPORTS
 */
import React from "react";

import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

// components
import { Status } from "../status";

// styles
import { styles } from "./styles";
import { IBudgetCardProps } from "./interface";

/**
 * Component BudgetCard para a interação do usuário com ui.
 */
const BudgetCard: React.FC<IBudgetCardProps> = ({ item }) => {
  return (
    <Pressable
      style={styles.card}
      onPress={() =>
        router.push({
          pathname: "/budget/[id]",
          params: { id: item?.id ?? "0" },
        })
      }
      accessibilityRole="button"
      accessibilityLabel={`Orçamento ${item.title}`}
    >
      <View style={styles.cardTop}>
        <View style={{ flex: 1 }}>
          <Text style={styles.cardTitle}>{item.title}</Text>

          <Text style={styles.cardClient}>{item.client}</Text>
        </View>

        <Status status={item.status} />
      </View>

      <Text style={styles.cardValue}>{item.value}</Text>
    </Pressable>
  );
};

/**
 * EXPORTS
 */
export { BudgetCard };
