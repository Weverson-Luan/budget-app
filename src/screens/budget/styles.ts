/**
 * IMPORTS
 */

import { StyleSheet } from "react-native";

import { theme } from "@/styles/theme/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray_100,
  },
  content: {
    padding: 16,
    gap: 16,
  },
});

/**
 * EXPORTS
 */
export { styles };
