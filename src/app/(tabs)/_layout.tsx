/**
 * IMPORTS
 */

import { Feather } from "@expo/vector-icons";
import { router, Tabs } from "expo-router";

import { Header } from "@/components/header";
import { theme } from "@/styles/theme/theme";


export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.purple_base,
        tabBarInactiveTintColor: theme.colors.gray_400,
        tabBarStyle: {
          backgroundColor: theme.colors.white,
          borderTopColor: theme.colors.gray_200,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color, size }) => (
            <Feather name="file-text" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="new-budget"
        options={{
          title: "Novo orçamento",
          headerShown: true,
          header: () => (
            <Header
              title="Orçamento"
              onBack={() => router.navigate("/")}
            />
          ),
          tabBarIcon: ({ color, size }) => (
            <Feather name="plus" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
