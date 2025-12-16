import { Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeHeader() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} activeOpacity={0.85}>
        <Text style={styles.text}>Add new Task</Text>
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.95)",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 999,

    // shadow (iOS + Android)
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOpacity: 0.12,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 6 },
      },
      android: {
        elevation: 5,
      },
    }),
  },
  text: {
    fontSize: 14,
    color: "#111",
    marginRight: 8,
    fontWeight: "500",
  },
  plus: {
    fontSize: 18,
    color: "#111",
    marginTop: -1,
    fontWeight: "500",
  },
});
