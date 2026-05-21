/**
 * IMPORTS
 */

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 48,
    borderWidth: 1.5,
    borderRadius: 999,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#FFF",
  },

  prefix: {
    fontSize: 14,
    fontWeight: "600",
  },

  input: {
    flex: 1,
    fontSize: 14,
  },
});

/**
 * EXPORTS
 */
export { styles };
