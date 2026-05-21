/**
 * IMPORTS
 */
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 44,
    borderRadius: 999,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },

  icon: {
    marginRight: 2,
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
  },

  disabled: {
    opacity: 0.5,
  },

  disabledText: {
    opacity: 0.7,
  },
});

/**
 * EXPORTS
 */
export { styles };
