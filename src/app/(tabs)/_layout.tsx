/**
 * IMPORTS
 */

import { Feather } from "@expo/vector-icons";
import { Tabs } from "expo-router";

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
        name="playground"
        options={{
          title: "Componentes",
          tabBarIcon: ({ color, size }) => (
            <Feather name="layers" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
