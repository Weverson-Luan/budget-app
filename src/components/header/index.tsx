/**
 * IMPORTS
 */

import React from "react";

import { Feather } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Status } from "@/components/status";
import { theme } from "@/styles/theme/theme";

import { IHeaderProps } from "./interface";
import { styles } from "./styles";

/**
 * Component Header para telas com navegação visível.
 */
const Header: React.FC<IHeaderProps> = ({ title, onBack, status }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.safeArea, { paddingTop: insets.top }]}>
      <View style={styles.container}>
        <View style={styles.left}>
          <Pressable
            style={styles.backButton}
            onPress={onBack}
            hitSlop={8}
            accessibilityRole="button"
            accessibilityLabel="Voltar"
          >
            <Feather
              name="chevron-left"
              size={24}
              color={theme.colors.gray_700}
            />
          </Pressable>

          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
        </View>

        <View>
          {status ? <Status status={status} /> : null}
        </View>
      </View>
    </View>
  );
};

/**
 * EXPORTS
 */
export { Header };
