/**
 * IMPORTS
 */

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 6,
    paddingHorizontal: 12,
    height: 28,
    alignSelf: "flex-start",
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 999,
    marginRight: 8,
  },

  label: {
    fontSize: 12,
    fontWeight: "600",
  },
});

/**
 * EXPORTS
 */
export { styles };
