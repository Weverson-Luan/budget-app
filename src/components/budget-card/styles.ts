/**
 * IMPORTS
 */

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 16,
    gap: 10,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  cardTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 12,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111827",
  },
  cardClient: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 4,
  },

  cardValue: {
    fontSize: 14,
    fontWeight: "700",
    color: "#111827",
  },
});

/**
 * EXPORTS
 */
export { styles };
