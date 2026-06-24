import { Link, Redirect } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { SymbolView } from "expo-symbols";
import { ActivityIndicator, Pressable } from "react-native";

import { useClientOnlyValue } from "@/src/components/useClientOnlyValue";
import { useColorScheme } from "@/src/components/useColorScheme";
import Colors from "@/src/constants/Colors";
import { useAuth } from "@/src/context/useAuth";

export default function DrawerLayout() {
  const colorScheme = useColorScheme();
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <ActivityIndicator
        size="large"
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      />
    );
  }

  if (!user) {
    return <Redirect href="/(auth)" />;
  }

  return (
    <Drawer
      screenOptions={{
        drawerActiveTintColor: Colors[colorScheme].tint,
        headerShown: useClientOnlyValue(false, true),
        drawerStyle: {
          width: "60%",
          backgroundColor: Colors[colorScheme].background,
        },
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          title: "Home",
          drawerIcon: ({ color }) => (
            <SymbolView
              name={{
                ios: "chevron.left.forwardslash.chevron.right",
                android: "home",
                web: "code",
              }}
              tintColor={color}
              size={28}
            />
          ),
          headerRight: () => (
            <Link href="/(modals)/infoModal" asChild>
              <Pressable style={{ marginRight: 15 }}>
                {({ pressed }) => (
                  <SymbolView
                    name={{ ios: "info.circle", android: "info", web: "info" }}
                    size={25}
                    tintColor={Colors[colorScheme].text}
                    style={{ opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Drawer.Screen
        name="two"
        options={{
          title: "City Map",
          drawerIcon: ({ color }) => (
            <SymbolView
              name={{
                ios: "chevron.left.forwardslash.chevron.right",
                android: "explore",
                web: "code",
              }}
              tintColor={color}
              size={28}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="logs"
        options={{
          title: "Captain's Log",
          drawerIcon: ({ color }) => (
            <SymbolView
              name={{
                ios: "chevron.left.forwardslash.chevron.right",
                android: "history_edu",
                web: "code",
              }}
              tintColor={color}
              size={28}
            />
          ),
        }}
      />
    </Drawer>
  );
}
