/**
 * IMPORTS
 */

import React from "react";

import { Feather } from "@expo/vector-icons";
import { Text, TextInput, View } from "react-native";

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
  discountInput,
  onChangeDiscount,
}) => {
  const isEditable = typeof onChangeDiscount === "function";
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

      {(isEditable || hasDiscount) && (
        <View style={styles.row}>
          <Text style={styles.rowLabel}>Desconto</Text>
          <View style={styles.rowCenter}>
            {isEditable ? (
              <View style={styles.discountInputWrapper}>
                <TextInput
                  style={styles.discountInput}
                  value={discountInput}
                  onChangeText={onChangeDiscount}
                  keyboardType="numeric"
                  placeholder="0"
                  placeholderTextColor={theme.colors.gray_400}
                  maxLength={5}
                  accessibilityLabel="Percentual de desconto"
                />
                <Text style={styles.discountBadgeText}>%</Text>
              </View>
            ) : (
              <View style={styles.discountBadge}>
                <Text style={styles.discountBadgeText}>
                  {discountPercent} %
                </Text>
              </View>
            )}

            <Text style={styles.discountValue}>- {discountValue}</Text>
          </View>
        </View>
      )}

      <View style={styles.divider} />

      <View style={styles.footer}>
        <Text style={styles.footerLabel}>Valor total</Text>
        <View style={styles.footerValues}>
          {hasDiscount && (
            <Text style={styles.originalTotal}>{originalTotal}</Text>
          )}
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
