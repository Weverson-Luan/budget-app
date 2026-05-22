/**
 * IMPORTS
 */

import { router, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

// components
import { Header } from "@/components/header";

// styles
import { theme } from "@/styles/theme/theme";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={styles.root}>
      <SafeAreaProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="budget/index"
            options={{
              title: "Orçamento", headerShown: true,
              header: () => <Header
                title="Orçamento #12345"
                status="draft"
                onBack={() => router.back()}
              />
            }}
          />
          <Stack.Screen
            name="budget/[id]"
            options={({ route }) => {
              const { id } = route?.params as { id?: string };

              return {
                title: "Detalhes do Orçamento",
                headerShown: true,
                header: () => (
                  <Header
                    title={`Detalhe Orçamento #${id ?? "0"}`}
                    status="draft"
                    onBack={() => router.back()}
                  />
                ),
              };
            }}
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
