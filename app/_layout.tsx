import { Stack } from "expo-router";
import AppBackground from "./components/AppBackground";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <AppBackground>
        <SafeAreaView style={{ flex: 1 }}>
          <Stack
            screenOptions={{
              headerTransparent: true,
              headerShadowVisible: false,
              headerTitleStyle: { color: "#fff" },
              headerTintColor: "#fff",
              contentStyle: { backgroundColor: "transparent" },
            }}
          >
            {/* No header on index */}
            <Stack.Screen
              name="index"
              options={{ headerShown: false }}
            />

            {/* Header on home */}
            <Stack.Screen
              name="home"
              options={{
                headerTitle: "",
                headerBackVisible: false,
                headerLeft: () => null,
                // gestureEnabled: false,   // 🚫 disable swipe back (iOS)
              }}
            />

          </Stack>
        </SafeAreaView>
      </AppBackground>
    </SafeAreaProvider>
  );
}
