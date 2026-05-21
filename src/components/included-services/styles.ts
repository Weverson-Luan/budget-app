/**
 * IMPORTS
 */

import { StyleSheet } from "react-native";

import { theme } from "@/styles/theme/theme";

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.white,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: theme.colors.gray_200,
    gap: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  headerTitle: {
    fontSize: theme.sizes[14],
    fontWeight: "500",
    color: theme.colors.gray_500,
  },
  divider: {
    height: 1,
    backgroundColor: theme.colors.gray_200,
  },
  serviceItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
  },
  serviceInfo: {
    flex: 1,
    gap: 4,
  },
  serviceTitle: {
    fontSize: theme.sizes[14],
    fontWeight: "600",
    color: theme.colors.gray_700,
  },
  serviceDescription: {
    fontSize: theme.sizes[12],
    color: theme.colors.gray_400,
  },
  servicePricing: {
    alignItems: "flex-end",
    gap: 4,
  },
  servicePrice: {
    fontSize: theme.sizes[14],
    fontWeight: "700",
    color: theme.colors.gray_700,
  },
  serviceQuantity: {
    fontSize: theme.sizes[12],
    color: theme.colors.gray_400,
  },
  editButton: {
    alignItems: "center",
    gap: 4,
    paddingTop: 2,
  },
  editLine: {
    width: 12,
    height: 2,
    backgroundColor: theme.colors.purple_base,
    borderRadius: 1,
  },
});

/**
 * EXPORTS
 */
export { styles };
