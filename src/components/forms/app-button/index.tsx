/**
 * IMPORTS
 */

import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

// helpers
import { getVariantStyles } from "./helpers/get-variant-styles";

// typings
import { IAppButtonProps } from "./interface";

// styles
import { styles } from "./styles";

/**
 * Component AppButton para a interação do usuário com ui.
 */
const AppButton: React.FC<IAppButtonProps> = ({
  label,
  icon,
  variant = "primary",
  onPress,
  disabled = false,
}: IAppButtonProps) => {
  const stylesByVariant = getVariantStyles(variant);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        styles.container,
        stylesByVariant.container,
        disabled && styles.disabled,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      {icon && <View style={styles.icon}>{icon}</View>}

      <Text
        style={[
          styles.label,
          stylesByVariant.label,
          disabled && styles.disabledText,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

/**
 * EXPORTS
 */
export { AppButton };
