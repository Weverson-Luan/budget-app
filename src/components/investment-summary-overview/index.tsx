/**
 * IMPORTS
 */

import React from "react";

import { Feather } from "@expo/vector-icons";
import { Text, View } from "react-native";

import { theme } from "@/styles/theme/theme";

import { IInvestmentSummaryOverviewProps } from "./interface";
import { styles } from "./styles";

/**
 * Component InvestmentSummaryOverview — resumo de investimento somente leitura.
 */
const InvestmentSummaryOverview: React.FC<IInvestmentSummaryOverviewProps> = ({
  subtotal,
  discountPercent,
  discountValue,
  total,
}) => {
  const hasDiscount = discountPercent > 0;

  return (
    <View style={styles.card}>
      <View style={styles.iconWrapper}>
        <Feather
          name="credit-card"
          size={20}
          color={theme.colors.purple_base}
        />
      </View>

      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.rowLabel}>Subtotal</Text>
          <Text style={styles.subtotalValue}>{subtotal}</Text>
        </View>

        {hasDiscount && (
          <View style={styles.discountRow}>
            <View style={styles.discountLeft}>
              <Text style={styles.rowLabel}>Desconto</Text>
              <View style={styles.discountBadge}>
                <Text style={styles.discountBadgeText}>
                  {discountPercent}% off
                </Text>
              </View>
            </View>
            <Text style={styles.discountValue}>- {discountValue}</Text>
          </View>
        )}

        <View style={styles.divider} />

        <View style={styles.footer}>
          <Text style={styles.footerLabel}>Investimento total</Text>
          <Text style={styles.total}>{total}</Text>
        </View>
      </View>
    </View>
  );
};

/**
 * EXPORTS
 */
export { InvestmentSummaryOverview };
