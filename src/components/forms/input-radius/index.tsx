/**
 * IMPORTS
 */

import React, { forwardRef, useState } from "react";
import { View, TextInput, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

// helpers
import { borderColor } from "./helpers/return-border-color";
import { textColor } from "./helpers/return-text-color";

// types
import { IInputRadiusProps } from "./interface";

// styles
import { styles } from "./styles";
import { theme } from "@/styles/theme/theme";

/**
 * Component InputRadius para a interação do usuário com ui.
 */
const InputRadius = forwardRef<TextInput, IInputRadiusProps>(
  (
    {
      value,
      placeholder = "Placeholder",
      error = false,
      variant = "currency",
      onChangeText,
      ...rest
    },
    ref,
  ) => {
    const [focused, setFocused] = useState(false);
    const isTextareaVariant = variant === "textarea";
    const isCurrencyVariant = variant === "currency";

    return (
      <View
        style={[
          styles.container,
          isTextareaVariant && styles.containerTextarea,
          { borderColor: borderColor(error, focused) },
        ]}
      >
        {isCurrencyVariant && (
          <>
            <MaterialIcons
              name="calendar-month"
              size={18}
              color={textColor(error, focused)}
            />

            <Text
              style={[styles.prefix, { color: textColor(error, focused) }]}
            >
              R$
            </Text>
          </>
        )}

        <TextInput
          ref={ref}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.gray_500}
          style={[
            styles.input,
            isTextareaVariant && styles.inputTextarea,
            { color: textColor(error, focused) },
          ]}
          multiline={isTextareaVariant}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChangeText={onChangeText}
          {...rest}
        />
      </View>
    );
  },
);

InputRadius.displayName = "InputRadius";

/**
 * EXPORTS
 */
export { InputRadius };
