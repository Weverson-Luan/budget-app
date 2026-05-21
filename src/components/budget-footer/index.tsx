/**
 * IMPORTS
 */

import React from "react";

import { Feather } from "@expo/vector-icons";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { AppButton } from "@/components/forms/app-button";
import { theme } from "@/styles/theme/theme";

import { IBudgetFooterProps } from "./interface";
import { styles } from "./styles";

/**
 * Component BudgetFooter para a interação do usuário com ui.
 */
const BudgetFooter: React.FC<IBudgetFooterProps> = ({
  onCancel,
  onSave,
  saveDisabled = false,
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
        <View style={styles.buttonWrapper}>
          <AppButton
            label="Cancelar"
            variant="secondary"
            onPress={onCancel}
          />
        </View>

        <View style={styles.buttonWrapper}>
          <AppButton
            label="Salvar"
            variant="primary"
            icon={
              <Feather name="check" size={16} color={theme.colors.white} />
            }
            onPress={onSave}
            disabled={saveDisabled}
          />
        </View>
      </View>
    </View>
  );
};

/**
 * EXPORTS
 */
export { BudgetFooter };
