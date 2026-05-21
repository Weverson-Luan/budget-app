/**
 * IMPORTS
 */
import React from "react";

import { TouchableOpacity, View } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

// typings
import { IButtonProps } from "./interface";

// styles
import { styles } from "./styles";

/**
 * Component ButtonIcon para a interação do usuário com ui.
 */
const ButtonIcon: React.FC<IButtonProps> = ({
  icon,
  colorIcon,
  sizeIcon,
  ...rest
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity {...rest} activeOpacity={0.7} style={styles.button}>
        {icon && (
          <MaterialIcons
            name={icon ?? "arrow-back"}
            size={sizeIcon ?? 24}
            color={colorIcon ?? "#000"}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

/**
 * EXPORTS
 */
export { ButtonIcon };
