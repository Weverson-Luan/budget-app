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
  body: {
    gap: 12,
  },
});

/**
 * EXPORTS
 */
export { styles };
