/**
 * IMPORTS
 */

import { StyleSheet } from "react-native";

import { theme } from "@/styles/theme/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
    paddingVertical: 32,
  },
  iconWrapper: {
    marginBottom: 4,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    color: theme.colors.gray_500,
    textAlign: "center",
  },
});

/**
 * EXPORTS
 */
export { styles };
