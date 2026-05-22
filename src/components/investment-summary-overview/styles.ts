/**
 * IMPORTS
 */

import { StyleSheet } from "react-native";

import { theme } from "@/styles/theme/theme";

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.white,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: theme.colors.gray_200,
    flexDirection: "row",
    gap: 12,
    alignItems: "flex-start",
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: theme.colors.purple_light,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    gap: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rowLabel: {
    fontSize: theme.sizes[14],
    color: theme.colors.gray_700,
  },
  subtotalValue: {
    fontSize: theme.sizes[14],
    color: theme.colors.gray_700,
    textDecorationLine: "line-through",
  },
  discountRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  discountLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  discountBadge: {
    backgroundColor: theme.colors.feedback_success_light,
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  discountBadgeText: {
    fontSize: theme.sizes[12],
    fontWeight: "600",
    color: theme.colors.feedback_success_dark,
  },
  discountValue: {
    fontSize: theme.sizes[14],
    fontWeight: "600",
    color: theme.colors.feedback_success_base,
  },
  divider: {
    height: 1,
    backgroundColor: theme.colors.gray_200,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerLabel: {
    fontSize: theme.sizes[14],
    fontWeight: "700",
    color: theme.colors.gray_700,
  },
  total: {
    fontSize: theme.sizes[18],
    fontWeight: "700",
    color: theme.colors.gray_700,
  },
});

/**
 * EXPORTS
 */
export { styles };
