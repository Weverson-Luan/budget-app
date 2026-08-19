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
    gap: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  headerTitle: {
    fontSize: theme.sizes[14],
    fontWeight: "500",
    color: theme.colors.gray_500,
  },
  divider: {
    height: 1,
    backgroundColor: theme.colors.gray_200,
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
  rowCenter: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    flex: 1,
    justifyContent: "flex-end",
    marginHorizontal: 8,
  },
  itemCount: {
    fontSize: theme.sizes[12],
    color: theme.colors.gray_400,
  },
  rowValue: {
    fontSize: theme.sizes[14],
    color: theme.colors.gray_700,
  },
  discountBadge: {
    backgroundColor: theme.colors.gray_100,
    borderWidth: 1,
    borderColor: theme.colors.gray_300,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  discountBadgeText: {
    fontSize: theme.sizes[12],
    fontWeight: "600",
    color: theme.colors.gray_700,
  },
  discountInputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.gray_300,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  discountInput: {
    minWidth: 32,
    padding: 0,
    textAlign: "right",
    fontSize: theme.sizes[12],
    fontWeight: "600",
    color: theme.colors.gray_700,
  },
  discountValue: {
    fontSize: theme.sizes[14],
    color: theme.colors.feedback_danger_base,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  footerLabel: {
    fontSize: theme.sizes[14],
    fontWeight: "700",
    color: theme.colors.gray_700,
  },
  footerValues: {
    alignItems: "flex-end",
    gap: 4,
  },
  originalTotal: {
    fontSize: theme.sizes[12],
    color: theme.colors.gray_400,
    textDecorationLine: "line-through",
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
