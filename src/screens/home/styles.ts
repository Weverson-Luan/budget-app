/**
 * IMPORTS
 */

import { theme } from "@/styles/theme/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    padding: 24,
  },

  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: theme.colors.purple_base,
  },

  subtitle: {
    fontSize: 13,
    color: "#6B7280",
    marginTop: 4,
  },

  searchWrapper: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 20,
  },

  searchInput: {
    flex: 1,
    height: 44,
    borderRadius: 999,
    backgroundColor: "#FFF",
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  input: {
    flex: 1,
    fontSize: 14,
  },

  filter: {
    width: 44,
    height: 44,
    borderRadius: 999,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    justifyContent: "center",
    alignItems: "center",
  },

  filterActive: {
    borderColor: theme.colors.purple_base,
    backgroundColor: theme.colors.purple_light,
  },

  filterBadge: {
    position: "absolute",
    top: 6,
    right: 6,
    width: 8,
    height: 8,
    borderRadius: 999,
    backgroundColor: theme.colors.purple_base,
  },

  listLoading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

});

/**
 * EXPORTS
 */
export { styles };
