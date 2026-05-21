/**
 * IMPORTS
 */

import React, { useEffect, useState } from "react";

import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";

import { AppButton } from "@/components/forms/app-button";
import { ButtonIcon } from "@/components/forms/button-icon";
import { InputRadius } from "@/components/forms/input-radius";
import { QuantityStepper } from "@/components/quantity-stepper";
import { Typography } from "@/components/typography";
import { theme } from "@/styles/theme/theme";

import {
  IServiceBottomSheetProps,
  ServiceFormValues,
} from "./interface";
import { styles } from "./styles";

const EMPTY_FORM: ServiceFormValues = {
  name: "",
  description: "",
  price: "",
  quantity: 1,
};

/**
 * Component ServiceBottomSheet para a interação do usuário com ui.
 */
const ServiceBottomSheet: React.FC<IServiceBottomSheetProps> = ({
  mode,
  initialValues,
  onClose,
  onSave,
  onDelete,
}) => {
  const [form, setForm] = useState<ServiceFormValues>(EMPTY_FORM);

  useEffect(() => {
    if (mode === "edit" && initialValues) {
      setForm({
        name: initialValues.name ?? "",
        description: initialValues.description ?? "",
        price: initialValues.price ?? "",
        quantity: initialValues.quantity ?? 1,
      });
      return;
    }

    setForm(EMPTY_FORM);
  }, [mode, initialValues?.name, initialValues?.description, initialValues?.price, initialValues?.quantity]);

  function updateField<K extends keyof ServiceFormValues>(
    field: K,
    value: ServiceFormValues[K]
  ) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSave() {
    onSave(form);
  }

  const isEditMode = mode === "edit";

  return (
    <View style={styles.wrapper}>
      <View>
        <View style={styles.header}>
          <Typography style={styles.headerTitle}>Serviço</Typography>

          <ButtonIcon
            icon="close"
            colorIcon={theme.colors.gray_600}
            sizeIcon={24}
            onPress={onClose}
          />
        </View>

        <View style={styles.body}>
          <InputRadius
            variant="text"
            placeholder="Nome do serviço"
            value={form.name}
            onChangeText={(text) => updateField("name", text)}
          />

          <InputRadius
            variant="textarea"
            placeholder="Descrição"
            value={form.description}
            onChangeText={(text) => updateField("description", text)}
          />

          <View style={styles.row}>
            <View style={styles.priceInput}>
              <InputRadius
                variant="currency"
                placeholder="0,00"
                value={form.price}
                onChangeText={(text) => updateField("price", text)}
                keyboardType="numeric"
              />
            </View>

            <QuantityStepper
              value={form.quantity}
              onChange={(quantity) => updateField("quantity", quantity)}
            />
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        {isEditMode && onDelete && (
          <TouchableOpacity
            style={styles.deleteButton}
            activeOpacity={0.7}
            onPress={onDelete}
          >
            <MaterialIcons
              name="delete-outline"
              size={22}
              color={theme.colors.feedback_danger_base}
            />
          </TouchableOpacity>
        )}

        <View style={isEditMode ? styles.saveButtonWrapper : { flex: 1 }}>
          <AppButton
            label="Salvar"
            icon={
              <Feather name="check" size={16} color={theme.colors.white} />
            }
            onPress={handleSave}
          />
        </View>
      </View>
    </View>
  );
};

/**
 * EXPORTS
 */
export { ServiceBottomSheet };
