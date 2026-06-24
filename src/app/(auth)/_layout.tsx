import { useAuth } from "@/src/context/useAuth";
import { Redirect, Stack } from "expo-router";
import { ActivityIndicator } from "react-native";

export default function AuthLayout() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <ActivityIndicator
        size="large"
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      />
    );
  }

  if (user) {
    return <Redirect href="/(drawer)" />;
  }

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: true, title: "Sign In" }}
      />
    </Stack>
  );
}
