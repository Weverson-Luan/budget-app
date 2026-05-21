/**
 * IMPORTS
 */

import { StyleSheet } from "react-native";

import { theme } from "@/styles/theme/theme";

const styles = StyleSheet.create({
  container: {
    height: 48,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1.5,
    borderColor: theme.colors.gray_300,
    borderRadius: 999,
    paddingHorizontal: 8,
    backgroundColor: theme.colors.white,
  },

  button: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
  },

  value: {
    fontSize: 14,
    fontWeight: "600",
    color: theme.colors.gray_700,
    minWidth: 24,
    textAlign: "center",
  },
});

/**
 * EXPORTS
 */
export { styles };
