/**
 * IMPORTS
 */

import React from "react";

import { Feather } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

import { Check } from "@/components/check-box";
import { Status } from "@/components/status";
import { IStatusType } from "@/components/status/interface";
import { theme } from "@/styles/theme/theme";

import { IStatusSelectorProps } from "./interface";
import { styles } from "./styles";

const STATUS_OPTIONS: IStatusType[] = [
  "draft",
  "approved",
  "sent",
  "declined",
];

/**
 * Component StatusSelector para a interação do usuário com ui.
 */
const StatusSelector: React.FC<IStatusSelectorProps> = ({
  value,
  onChange,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Feather name="tag" size={18} color={theme.colors.purple_base} />
        <Text style={styles.headerTitle}>Status</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.optionsGrid}>
        {STATUS_OPTIONS.map((status) => (
          <Pressable
            key={status}
            style={styles.option}
            onPress={() => onChange(status)}
          >
            <Check
              type="radio"
              label=""
              selected={value === status}
              hideLabel
              onPress={() => onChange(status)}
            />
            <Status status={status} />
          </Pressable>
        ))}
      </View>
    </View>
  );
};

/**
 * EXPORTS
 */
export { StatusSelector };
