/**
 * IMPORTS
 */

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { theme } from "@/styles/theme/theme";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={styles.root}>
      <SafeAreaProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="budget/index"
            options={{ title: "Orçamento", headerShown: true }}
          />
        </Stack>
        <StatusBar style="auto" backgroundColor={theme.colors.gray_700} />
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
