import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, StyleSheet, View } from "react-native";

const { width } = Dimensions.get("window");

export default function AppBackground({ children }) {
  return (
    <View style={styles.root}>
      {/* Full-screen gradient background */}
      <LinearGradient
        colors={["#7C9EA0", "#C9C2B8"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={StyleSheet.absoluteFill}
      />

      {/* Rounded “phone card” container like the image */}
      <View style={styles.card}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1, 
    backgroundColor: "#000", // not visible; gradient covers
    justifyContent: "center",
  },
  card: {
    flex: 1, 
    overflow: "hidden",
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.25)",
    // optional subtle shadow
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 6,
  },
});
