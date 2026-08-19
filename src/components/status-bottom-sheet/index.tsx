/**
 * IMPORTS
 */

import React, { useEffect, useState } from "react";

import { Feather } from "@expo/vector-icons";
import { View } from "react-native";

// components
import { AppButton } from "@/components/forms/app-button";
import { ButtonIcon } from "@/components/forms/button-icon";
import { StatusSelector } from "@/components/status-selector";
import { Typography } from "@/components/typography";

// typings
import { IStatusType } from "@/components/status/interface";
import { IStatusBottomSheetProps } from "./interface";

// styles
import { theme } from "@/styles/theme/theme";
import { styles } from "./styles";

/**
 * Component StatusBottomSheet — alteração de status de um orçamento.
 */
const StatusBottomSheet: React.FC<IStatusBottomSheetProps> = ({
  status,
  title = "Alterar status",
  onConfirm,
  onClose,
}) => {
  const [selected, setSelected] = useState<IStatusType>(status);

  useEffect(() => {
    setSelected(status);
  }, [status]);

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Typography style={styles.headerTitle}>{title}</Typography>

        <ButtonIcon
          icon="close"
          colorIcon={theme.colors.gray_600}
          sizeIcon={24}
          onPress={onClose}
        />
      </View>

      <View style={styles.body}>
        <StatusSelector value={selected} onChange={setSelected} />
      </View>

      <View style={styles.footer}>
        <View style={styles.footerButton}>
          <AppButton label="Cancelar" variant="secondary" onPress={onClose} />
        </View>

        <View style={styles.footerButton}>
          <AppButton
            label="Salvar"
            icon={<Feather name="check" size={16} color={theme.colors.white} />}
            onPress={() => onConfirm(selected)}
          />
        </View>
      </View>
    </View>
  );
};

/**
 * EXPORTS
 */
export { StatusBottomSheet };
