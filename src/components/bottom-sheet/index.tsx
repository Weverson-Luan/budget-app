/**
 * IMPORTS
 */
import React from "react";
import { TouchableOpacity } from "react-native";

import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";

import { useSafeAreaInsets } from "react-native-safe-area-context";

// typings
import { IBottomSheetMainProps } from "./interface";

// styles
import { theme } from "@/styles/theme/theme";
import { styles } from "./styles";

/**
 * Component BottomSheetMain — sheet animado usado nas telas do app.
 */
const BottomSheetMain: React.FC<IBottomSheetMainProps> = ({
  isOpen,
  toggleSheet,
  duration = 500,
  sheetHeight = 562,
  children,
}) => {
  const insets = useSafeAreaInsets();

  const height = useSharedValue(0);
  const progress = useDerivedValue(() =>
    withTiming(isOpen.value ? 0 : 1, { duration }),
  );

  const sheetStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: progress.value * 2 * height.value,
      },
    ],
  }));

  const backdropStyle = useAnimatedStyle(() => ({
    opacity: 1 - progress.value,
    zIndex: isOpen.value
      ? 1
      : withDelay(duration, withTiming(-1, { duration: 0 })),
  }));

  return (
    <>
      {/* BACKDROP */}
      <Animated.View style={[styles.backdrop, backdropStyle]}>
        <TouchableOpacity
          style={styles.backdropTouchable}
          onPress={toggleSheet}
          activeOpacity={1}
        />
      </Animated.View>

      {/* SHEET */}
      <Animated.View
        onLayout={(event) => {
          height.value = event.nativeEvent.layout.height;
        }}
        style={[
          styles.sheet,
          { height: sheetHeight },
          sheetStyle,
          {
            backgroundColor: theme.colors.white,
            paddingBottom: insets.bottom,
          },
        ]}
      >
        {children}
      </Animated.View>
    </>
  );
};

/**
 * EXPORTS
 */
export { BottomSheetMain };
