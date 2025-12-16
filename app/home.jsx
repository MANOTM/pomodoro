import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, StyleSheet } from "react-native";
import HomeHeader from "./components/HomeHeader";

export default function Home() {
  return (
      <View style={styles.container}>
        <HomeHeader/>
        <Text style={styles.title}>Home</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "transparent", // IMPORTANT
  },
  container: {
    flex: 1,
    backgroundColor: "transparent",
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "600",
  },
});
