/**
 * IMPORTS
 */

import React from "react";

import { Feather } from "@expo/vector-icons";
import { Text, View } from "react-native";

import { theme } from "@/styles/theme/theme";

import { IIncludedServicesOverviewProps } from "./interface";
import { styles } from "./styles";

/**
 * Component IncludedServicesOverview — lista de serviços somente leitura.
 */
const IncludedServicesOverview: React.FC<IIncludedServicesOverviewProps> = ({
  services,
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
            <Text style={styles.serviceDescription}>{service.description}</Text>
          </View>

          <View style={styles.servicePricing}>
            <Text style={styles.servicePrice}>{service.price}</Text>
            <Text style={styles.serviceQuantity}>Qt: {service.quantity}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

/**
 * EXPORTS
 */
export { IncludedServicesOverview };
