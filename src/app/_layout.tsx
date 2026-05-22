/**
 * IMPORTS
 */

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { BudgetStackHeader } from "@/presentation/components/budget-stack-header";
import { BudgetStorageProvider } from "@/presentation/providers/budget-storage.provider";

import { theme } from "@/styles/theme/theme";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={styles.root}>
      <SafeAreaProvider>
        <BudgetStorageProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen
              name="budget/[id]"
              options={({ route }) => {
                const { id = "1" } = route?.params as { id?: string };

                return {
                  title: "Orçamento",
                  headerShown: true,
                  header: () => (
                    <BudgetStackHeader
                      id={id}
                      title={`Orçamento #${id}`}
                    />
                  ),
                };
              }}
            />
          </Stack>
          <StatusBar style="auto" backgroundColor={theme.colors.gray_700} />
        </BudgetStorageProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

/**
 * EXPORTS
 */
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
