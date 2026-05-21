/**
 * IMPORTS
 */

import { StyleSheet } from "react-native";

import { theme } from "@/styles/theme/theme";

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    flex: 1,
    justifyContent: "space-between",
  },

  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: theme.colors.gray_300,
    padding: 24,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: theme.colors.gray_700,
  },

  body: {
    flex: 1,
    width: "100%",
    gap: 12,
    paddingHorizontal: 24,
    paddingTop: 16,
  },

  row: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    marginTop: 24,
  },

  priceInput: {
    flex: 1,
  },

  footer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    borderTopWidth: 1,
    borderColor: theme.colors.gray_300,
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 24,
  },

  deleteButton: {
    width: 44,
    height: 44,
    borderRadius: 999,
    borderWidth: 1.5,
    borderColor: theme.colors.feedback_danger_base,
    backgroundColor: theme.colors.white,
    alignItems: "center",
    justifyContent: "center",
  },

  saveButtonWrapper: {
    flex: 1,
  },
});

/**
 * EXPORTS
 */
export { styles };
