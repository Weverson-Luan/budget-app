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

  containerTextarea: {
    height: 88,
    borderRadius: 16,
    alignItems: "flex-start",
    paddingVertical: 12,
  },

  prefix: {
    fontSize: 14,
    fontWeight: "600",
  },

  input: {
    flex: 1,
    fontSize: 14,
  },

  inputTextarea: {
    height: "100%",
    textAlignVertical: "top",
  },
});

/**
 * EXPORTS
 */
export { styles };
