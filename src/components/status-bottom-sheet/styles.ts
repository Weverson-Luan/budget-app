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
    fontSize: theme.sizes[18],
    fontWeight: "700",
    color: theme.colors.gray_700,
  },
  body: {
    padding: 16,
    gap: 12,
  },
  footer: {
    flexDirection: "row",
    gap: 12,
    borderTopWidth: 1,
    borderColor: theme.colors.gray_300,
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  footerButton: {
    flex: 1,
  },
});

/**
 * EXPORTS
 */
export { styles };
