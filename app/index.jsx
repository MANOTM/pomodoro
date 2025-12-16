import React, { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";

import { Image } from "expo-image";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
  Easing,
  withRepeat,
  withSequence,
} from "react-native-reanimated";

export default function Index() {
  // Entrance animations
  const titleY = useSharedValue(18);
  const titleOpacity = useSharedValue(0);

  const subY = useSharedValue(14);
  const subOpacity = useSharedValue(0);

  const flowerScale = useSharedValue(1);
  const flowerOpacity = useSharedValue(0);
  const router = useRouter();
  const bottomY = useSharedValue(18);
  const bottomOpacity = useSharedValue(0);

  useEffect(() => {
    titleY.value = withTiming(0, { duration: 650, easing: Easing.out(Easing.cubic) });
    titleOpacity.value = withTiming(1, { duration: 650 });

    subY.value = withDelay(120, withTiming(0, { duration: 650, easing: Easing.out(Easing.cubic) }));
    subOpacity.value = withDelay(120, withTiming(1, { duration: 650 }));

    flowerOpacity.value = withDelay(220, withTiming(1, { duration: 700 }));
    flowerScale.value = withDelay(
      220,
      withRepeat(
        withSequence(
          withTiming(1.03, { duration: 1400, easing: Easing.inOut(Easing.quad) }),
          withTiming(1.0, { duration: 1400, easing: Easing.inOut(Easing.quad) })
        ),
        -1,
        true
      )
    );

    bottomY.value = withDelay(260, withTiming(0, { duration: 650, easing: Easing.out(Easing.cubic) }));
    bottomOpacity.value = withDelay(260, withTiming(1, { duration: 650 }));
  }, []);

  const titleAnim = useAnimatedStyle(() => ({
    transform: [{ translateY: titleY.value }],
    opacity: titleOpacity.value,
  }));

  const subAnim = useAnimatedStyle(() => ({
    transform: [{ translateY: subY.value }],
    opacity: subOpacity.value,
  }));



  const bottomAnim = useAnimatedStyle(() => ({
    transform: [{ translateY: bottomY.value }],
    opacity: bottomOpacity.value,
  }));

  return (
    <View style={styles.container}>
      <View>
        <Animated.View style={titleAnim}>
          <Text style={styles.title}>Read a</Text>
          <Text style={styles.title}>Book</Text>
        </Animated.View>

        <Animated.Text style={[styles.text, subAnim]}>
          2 Pomodoros done today
        </Animated.Text>

        <View style={styles.center}>
          <Image
            source={require("../assets/images/flowers.png")}
            style={styles.flower}
            contentFit="contain"
          />
        </View>

        <Animated.Text
          style={[styles.text, { textAlign: "center", fontSize: 30 }, subAnim]}
        >
          25 minutes left
        </Animated.Text>
      </View>

      <Animated.View style={bottomAnim}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.85}
          onPress={() => router.replace("/home")}
        >
          <Text style={styles.buttonText}>Start Pomodoro</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "transparent",
    paddingTop: 70,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 55,
    color: "#fff",
    // If you're using Inter, prefer fontFamily instead of fontWeight:
    // fontFamily: "Inter_300Light",
    fontWeight: "300",
  },
  text: {
    fontSize: 20,
    color: "#fff",
    marginTop: 13,
    // fontFamily: "Inter_400Regular",
  },
  center: {
    alignItems: "center",
  },
  flower: {
    width: 300,
    height: 300,
    opacity: 0.22, // watermark feel like the design
  },
  button: {
    backgroundColor: "#000",
    paddingVertical: 15,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
  },
});
