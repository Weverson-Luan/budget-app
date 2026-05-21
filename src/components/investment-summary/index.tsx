/**
 * IMPORTS
 */

import React from "react";

import { Feather } from "@expo/vector-icons";
import { Text, View } from "react-native";

// typings
import { IInvestmentSummaryProps } from "./interface";

// styles
import { theme } from "@/styles/theme/theme";
import { styles } from "./styles";

/**
 * Component InvestmentSummary para a interação do usuário com ui.
 */
const InvestmentSummary: React.FC<IInvestmentSummaryProps> = ({
  itemCount,
  subtotal,
  discountPercent,
  discountValue,
  originalTotal,
  total,
}) => {
  const hasDiscount = discountPercent > 0;
  const itemLabel = itemCount === 1 ? "1 item" : `${itemCount} itens`;

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Feather
          name="credit-card"
          size={18}
          color={theme.colors.purple_base}
        />
        <Text style={styles.headerTitle}>Investimento</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.row}>
        <Text style={styles.rowLabel}>Subtotal</Text>
        <View style={styles.rowCenter}>
          <Text style={styles.itemCount}>{itemLabel}</Text>
          <Text style={styles.rowValue}>{subtotal}</Text>
        </View>
      </View>

      {hasDiscount && (
        <View style={styles.row}>
          <Text style={styles.rowLabel}>Desconto</Text>
          <View style={styles.rowCenter}>
            <View style={styles.discountBadge}>
              <Text style={styles.discountBadgeText}>
                {discountPercent} %
              </Text>
            </View>
            <Text style={styles.discountValue}>- {discountValue}</Text>
          </View>
        </View>
      )}

      <View style={styles.divider} />

      <View style={styles.footer}>
        <Text style={styles.footerLabel}>Valor total</Text>
        <View style={styles.footerValues}>
          <Text style={styles.originalTotal}>{originalTotal}</Text>
          <Text style={styles.total}>{total}</Text>
        </View>
      </View>
    </View>
  );
};

/**
 * EXPORTS
 */
export { InvestmentSummary };
