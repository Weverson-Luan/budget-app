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
    gap: 12,
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: theme.colors.purple_light,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    flex: 1,
    fontSize: theme.sizes[16],
    fontWeight: "600",
    color: theme.colors.gray_700,
  },
  divider: {
    height: 1,
    backgroundColor: theme.colors.gray_200,
  },
  field: {
    gap: 4,
  },
  label: {
    fontSize: theme.sizes[12],
    color: theme.colors.gray_500,
  },
  value: {
    fontSize: theme.sizes[14],
    fontWeight: "600",
    color: theme.colors.gray_700,
  },
  datesRow: {
    flexDirection: "row",
    gap: 16,
  },
  dateColumn: {
    flex: 1,
    gap: 4,
  },
});

/**
 * EXPORTS
 */
export { styles };
