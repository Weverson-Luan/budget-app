/**
 * IMPORTS
 */

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  sheet: {
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
  backdropTouchable: {
    flex: 1,
  },
});

/**
 * EXPORTS
 */
export { styles };
