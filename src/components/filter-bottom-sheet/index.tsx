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
import { IFilterBottomSheetProps } from "./interface";

// styles
import { theme } from "@/styles/theme/theme";

/**
 * Component FilterBottomSheet para a interação do usuário com ui.
 */
const FilterBottomSheet = forwardRef<BottomSheet, IFilterBottomSheetProps>(
  ({ handleOnClosed }, ref) => {
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

          <View style={{ flexDirection: "row", gap: 12 }}>
            <Check label="" />
            <Status status="draft" />
          </View>

          <View style={{ flexDirection: "row", gap: 12 }}>
            <Check label="" />
            <Status status="sent" />
          </View>

          <View style={{ flexDirection: "row", gap: 12 }}>
            <Check label="" />
            <Status status="approved" />
          </View>

          <View style={{ flexDirection: "row", gap: 12 }}>
            <Check label="" />
            <Status status="declined" />
          </View>
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
          <Check type="radio" label="Mais recente" selected />
          <Check type="radio" label="Mais antigo" />
          <Check type="radio" label="Maior valor" />
          <Check type="radio" label="Menor valor" />
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
          }}
        >
          <AppButton label="Resetar filtros" variant="secondary" />
          <AppButton
            label="Aplicar"
            icon={<Feather name="check" size={16} color={theme.colors.white} />}
          />
        </View>
      </View>
    );
  }
);

/**
 * EXPORTS
 */
export { FilterBottomSheet };
