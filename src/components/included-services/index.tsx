/**
 * IMPORTS
 */

import React from "react";

import { Feather } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

import { AppButton } from "@/components/forms/app-button";
import { theme } from "@/styles/theme/theme";

import { IIncludedServicesProps } from "./interface";
import { styles } from "./styles";

/**
 * Component IncludedServices para a interação do usuário com ui.
 */
const IncludedServices: React.FC<IIncludedServicesProps> = ({
  services,
  onEditService,
  onAddService,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Feather name="file-text" size={18} color={theme.colors.purple_base} />
        <Text style={styles.headerTitle}>Serviços inclusos</Text>
      </View>

      <View style={styles.divider} />

      {services.map((service) => (
        <View key={service.id} style={styles.serviceItem}>
          <View style={styles.serviceInfo}>
            <Text style={styles.serviceTitle}>{service.title}</Text>
            <Text style={styles.serviceDescription} numberOfLines={1}>
              {service.description}
            </Text>
          </View>

          <View style={styles.servicePricing}>
            <Text style={styles.servicePrice}>{service.price}</Text>
            <Text style={styles.serviceQuantity}>Qt: {service.quantity}</Text>
          </View>

          <TouchableOpacity
            style={styles.editButton}
            activeOpacity={0.7}
            onPress={() => onEditService?.(service.id)}
          >
            <Feather name="edit-2" size={18} color={theme.colors.purple_base} />
            <View style={styles.editLine} />
          </TouchableOpacity>
        </View>
      ))}

      <AppButton
        label="Adicionar serviço"
        variant="secondary"
        icon={
          <Feather name="plus" size={16} color={theme.colors.purple_base} />
        }
        onPress={onAddService}
      />
    </View>
  );
};

/**
 * EXPORTS
 */
export { IncludedServices };
