/**
 * IMPORTS
 */

import React from "react";

import { MaterialIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";

import { theme } from "@/styles/theme/theme";

import { IBudgetOverviewProps } from "./interface";
import { styles } from "./styles";

/**
 * Component BudgetOverview — card de resumo do orçamento (somente leitura).
 */
const BudgetOverview: React.FC<IBudgetOverviewProps> = ({
  title,
  client,
  createdAt,
  updatedAt,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.iconWrapper}>
          <MaterialIcons
            name="storefront"
            size={20}
            color={theme.colors.purple_base}
          />
        </View>

        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.field}>
        <Text style={styles.label}>Cliente</Text>
        <Text style={styles.value}>{client}</Text>
      </View>

      <View style={styles.datesRow}>
        <View style={styles.dateColumn}>
          <Text style={styles.label}>Criado em</Text>
          <Text style={styles.value}>{createdAt}</Text>
        </View>

        <View style={styles.dateColumn}>
          <Text style={styles.label}>Atualizado em</Text>
          <Text style={styles.value}>{updatedAt}</Text>
        </View>
      </View>
    </View>
  );
};

/**
 * EXPORTS
 */
export { BudgetOverview };
