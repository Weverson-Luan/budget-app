/**
 * IMPORTS
 */
import React from "react";

import { Text, View } from "react-native";

// styles
import { styles } from "./styles";

/**
 * Component ExampleComponent para a interação do usuário com ui.
 */
const Budget: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to the Index Page</Text>
    </View>
  );
};

/**
 * EXPORTS
 */
export { Budget };
