/**
 * IMPORTS
 */
import React from "react";

import { View } from "react-native";

// styles
import { IHeaderProps } from "./interface";
import { styles } from "./styles";

/**
 * Component Header para a interação do usuário com ui.
 */
const Header: React.FC<IHeaderProps> = ({ children }: IHeaderProps) => {
  return <View style={styles.container}>{children}</View>;
};

/**
 * EXPORTS
 */
export { Header };
