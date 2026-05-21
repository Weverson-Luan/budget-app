/**
 * IMPORTS
 */
import React from "react";

import { Text } from "react-native";

// typings
import { ITypographyProps } from "./interface";

// styles
import { styles } from "./styles";

/**
 * Component Typography para a interação do usuário com ui.
 */
const Typography: React.FC<ITypographyProps> = ({ children, ...rest }) => {
  return (
    <Text style={styles.text} {...rest}>
      {children}
    </Text>
  );
};

/**
 * EXPORTS
 */
export { Typography };
