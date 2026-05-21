/**
 * IMPORTS
 */
import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useDerivedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";

import { useSafeAreaInsets } from "react-native-safe-area-context";

// styles
import { theme } from "@/styles/theme/theme";

/**
 * Component BottomSheetMain
 */
const BottomSheetMain: React.FC<any> = ({
  isOpen,
  toggleSheet,
  duration = 500,
  children,
}) => {
  const insets = useSafeAreaInsets();

  const height = useSharedValue(0);
  const progress = useDerivedValue(() =>
    withTiming(isOpen.value ? 0 : 1, { duration })
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
      <Animated.View style={[sheetStyles.backdrop, backdropStyle]}>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={toggleSheet}
          activeOpacity={1}
        />
      </Animated.View>

      {/* SHEET */}
      <Animated.View
        onLayout={(e) => {
          height.value = e.nativeEvent.layout.height;
        }}
        style={[
          sheetStyles.sheet,
          sheetStyle,
          {
            backgroundColor: theme.colors.white,
            paddingBottom: insets.bottom, // 👈 SAFE AREA
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

const sheetStyles = StyleSheet.create({
  sheet: {
    height: 562,
    width: "100%",
    position: "absolute",
    bottom: 0,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    zIndex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
});
