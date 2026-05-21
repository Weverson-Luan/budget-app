/**
 * IMPORTS
 */

import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { SafeAreaProvider } from "react-native-safe-area-context";

import { ExampleComponents } from "@/screens/example-components";
import { Home } from "@/screens/home";
import { theme } from "@/styles/theme/theme";

export default function App() {
  return (
    <GestureHandlerRootView>
      <SafeAreaProvider style={styles.container}>
        <Home />
        <StatusBar style="dark" backgroundColor={theme.colors.gray_700} />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
