/**
 * IMPORTS
 */

import { StyleSheet } from "react-native";

import { theme } from "@/styles/theme/theme";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: theme.colors.gray_100,
  },
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
    gap: 16,
    paddingBottom: 24,
  },
  loading: {
    justifyContent: "center",
    alignItems: "center",
  },
  statusCard: {
    backgroundColor: theme.colors.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: theme.colors.gray_200,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  statusCardLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  statusCardLabel: {
    fontSize: theme.sizes[14],
    fontWeight: "500",
    color: theme.colors.gray_500,
  },
  statusCardRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});

/**
 * EXPORTS
 */
export { styles };
