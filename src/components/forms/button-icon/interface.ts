/**
 * IMPORTS
 */

import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";

type IButtonProps = TouchableOpacityProps & {
  icon?: keyof typeof MaterialIcons.glyphMap | null;
  colorIcon?: string;
  sizeIcon?: number;
};

/** * EXPORTS
 */
export type { IButtonProps };
