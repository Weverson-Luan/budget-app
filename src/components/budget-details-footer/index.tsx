/**
 * IMPORTS
 */

import React from "react";

import { Feather } from "@expo/vector-icons";
import { Pressable, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// components
import { AppButton } from "@/components/forms/app-button";

// interfaces
import { IBudgetDetailsFooterProps } from "./interface";

// styles
import { theme } from "@/styles/theme/theme";
import { styles } from "./styles";

/**
 * Component BudgetDetailsFooter — ações da tela de detalhes do orçamento.
 */
const BudgetDetailsFooter: React.FC<IBudgetDetailsFooterProps> = ({
  onDelete,
  onCopy,
  onEdit,
  onShare,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        { paddingBottom: Math.max(insets.bottom, 16) },
      ]}
    >
      <View style={styles.actions}>
        <View style={styles.iconGroup}>
          <Pressable
            style={styles.iconButton}
            onPress={onDelete}
            hitSlop={8}
            accessibilityRole="button"
            accessibilityLabel="Excluir"
          >
            <Feather
              name="trash-2"
              size={20}
              color={theme.colors.feedback_danger_base}
            />
          </Pressable>

          <Pressable
            style={styles.iconButton}
            onPress={onCopy}
            hitSlop={8}
            accessibilityRole="button"
            accessibilityLabel="Copiar"
          >
            <Feather name="copy" size={20} color={theme.colors.purple_base} />
          </Pressable>

          <Pressable
            style={styles.iconButton}
            onPress={onEdit}
            hitSlop={8}
            accessibilityRole="button"
            accessibilityLabel="Editar"
          >
            <Feather name="edit-2" size={20} color={theme.colors.purple_base} />
          </Pressable>
        </View>

        <View style={styles.shareWrapper}>
          <AppButton
            label="Compartilhar"
            variant="primary"
            icon={
              <Feather name="send" size={16} color={theme.colors.white} />
            }
            onPress={onShare}
          />
        </View>
      </View>
    </View>
  );
};

/**
 * EXPORTS
 */
export { BudgetDetailsFooter };
