/**
 * IMPORTS
 */
import React, { useRef } from "react";

import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { Feather, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

import BottomSheet from "@gorhom/bottom-sheet";

// components
import { AppButton } from "@/components/forms/app-button";
import { BudgetCard } from "@/components/budget-card";
import { FilterBottomSheet } from "@/components/filter-bottom-sheet";

// styles
import { styles } from "./styles";
import { theme } from "@/styles/theme/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BottomSheetMain } from "@/components/teste-sheet";
import { useSharedValue } from "react-native-reanimated";

const DATA = [
  {
    id: "1",
    title: "Desenvolvimento de aplicativo de loja online",
    client: "Soluções Tecnológicas Beta",
    value: "R$ 22.300,00",
    status: "approved",
  },
  {
    id: "2",
    title: "Consultoria em marketing digital",
    client: "Marketing Wizards",
    value: "R$ 4.000,00",
    status: "draft",
  },
  {
    id: "3",
    title: "Serviços de SEO",
    client: "SEO Masters",
    value: "R$ 3.500,00",
    status: "sent",
  },
  {
    id: "4",
    title: "Criação de conteúdo",
    client: "Content Creators",
    value: "R$ 2.500,00",
    status: "draft",
  },
  {
    id: "5",
    title: "Gestão de redes sociais",
    client: "Social Experts",
    value: "R$ 1.800,00",
    status: "declined",
  },
  {
    id: "6",
    title: "Design de interface",
    client: "UI/UX Designers",
    value: "R$ 5.200,00",
    status: "approved",
  },
];

/**
 * Screen Home para a interação do usuário com ui.
 */
const Home: React.FC = () => {
  const insets = useSafeAreaInsets();
  const sheetRef = useRef<BottomSheet>(null);

  function handleOpenFilter() {
    sheetRef.current?.snapToIndex(0);
  }

  const isOpen = useSharedValue(false);

  const toggleSheet = () => {
    isOpen.value = !isOpen.value;
  };
  return (
    <>
      <View
        style={[
          styles.container,
          {
            flex: 1,
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
          },
        ]}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Todos orçamentos</Text>
            <Text style={styles.subtitle}>Você tem 1 item em rascunho</Text>
          </View>

          <AppButton
            label="Novo"
            icon={<Feather name="plus" size={16} color="#FFF" />}
            onPress={() => router.push("/budget")}
          />
        </View>

        {/* SEARCH */}
        <View style={styles.searchWrapper}>
          <View style={styles.searchInput}>
            <Feather name="search" size={18} color="#9CA3AF" />
            <TextInput placeholder="Título ou cliente" style={styles.input} />
          </View>

          <TouchableOpacity style={styles.filter} onPress={toggleSheet}>
            <MaterialIcons
              name="tune"
              size={18}
              color={theme.colors.purple_base}
            />
          </TouchableOpacity>
        </View>

        {/* LIST */}
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ gap: 12 }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <BudgetCard item={item as any} />}
        />
      </View>

      {/* BOTTOM SHEET */}
      <BottomSheetMain isOpen={isOpen} toggleSheet={toggleSheet}>
        <FilterBottomSheet handleOnClosed={toggleSheet} />
      </BottomSheetMain>
    </>
  );
};

/**
 * EXPORTS
 */
export { Home };
