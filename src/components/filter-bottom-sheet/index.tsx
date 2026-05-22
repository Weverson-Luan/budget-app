/**
 * IMPORTS
 */
import React, { forwardRef } from "react";
import { Text, View } from "react-native";

import BottomSheet from "@gorhom/bottom-sheet";

import { Feather } from "@expo/vector-icons";

// components
import { AppButton } from "../forms/app-button";
import { ButtonIcon } from "../forms/button-icon";
import { Check } from "../check-box";
import { Status } from "../status";
import { Typography } from "../typography";

// typings
import { IStatusType } from "@/components/status/interface";
import { IFilterBottomSheetProps } from "./interface";

// styles
import { theme } from "@/styles/theme/theme";

const STATUS_OPTIONS: IStatusType[] = [
  "draft",
  "sent",
  "approved",
  "declined",
];

const SORT_OPTIONS: { value: IFilterBottomSheetProps["filters"]["sortBy"]; label: string }[] =
  [
    { value: "newest", label: "Mais recente" },
    { value: "oldest", label: "Mais antigo" },
    { value: "highest_value", label: "Maior valor" },
    { value: "lowest_value", label: "Menor valor" },
  ];

/**
 * Component FilterBottomSheet para a interação do usuário com ui.
 */
const FilterBottomSheet = forwardRef<BottomSheet, IFilterBottomSheetProps>(
  (
    {
      filters,
      onToggleStatus,
      onSortChange,
      onApply,
      onReset,
      handleOnClosed,
    },
    ref,
  ) => {
    function handleApply() {
      onApply();
      handleOnClosed?.();
    }

    function handleReset() {
      onReset();
      handleOnClosed?.();
    }

    return (
      <View style={{ width: "100%", gap: 20 }}>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "center",
            borderBottomWidth: 1,
            borderColor: theme.colors.gray_300,
            padding: 24,
          }}
        >
          <Typography
            style={{
              fontSize: 18,
              fontWeight: "700",
              color: theme.colors.gray_700,
            }}
          >
            Filtrar e ordenar
          </Typography>

          <ButtonIcon
            icon={"close"}
            colorIcon={theme.colors.gray_600}
            sizeIcon={24}
            onPress={handleOnClosed}
          />
        </View>

        {/* STATUS */}
        <View
          style={{ width: "100%", gap: 12, paddingLeft: 16, paddingRight: 16 }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "400",
              color: theme.colors.gray_500,
            }}
          >
            Status
          </Text>

          {STATUS_OPTIONS.map((status) => (
            <View key={status} style={{ flexDirection: "row", gap: 12 }}>
              <Check
                label=""
                hideLabel
                selected={filters.statuses.includes(status)}
                onPress={() => onToggleStatus(status)}
              />
              <Status status={status} />
            </View>
          ))}
        </View>

        {/* ORDER */}
        <View
          style={{ width: "100%", gap: 12, paddingLeft: 16, paddingRight: 16 }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "400",
              color: theme.colors.gray_500,
            }}
          >
            Ordenação
          </Text>
          {SORT_OPTIONS.map((option) => (
            <Check
              key={option.value}
              type="radio"
              label={option.label}
              selected={filters.sortBy === option.value}
              onPress={() => onSortChange(option.value)}
            />
          ))}
        </View>

        {/* ACTIONS */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 12,
            borderTopWidth: 1,
            borderColor: theme.colors.gray_300,
            paddingTop: 16,
            paddingHorizontal: 16,
            paddingBottom: 16,
          }}
        >
          <AppButton
            label="Resetar filtros"
            variant="secondary"
            onPress={handleReset}
          />
          <AppButton
            label="Aplicar"
            icon={
              <Feather name="check" size={16} color={theme.colors.white} />
            }
            onPress={handleApply}
          />
        </View>
      </View>
    );
  },
);

/**
 * EXPORTS
 */
export { FilterBottomSheet };
