import { Link } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { SymbolView } from "expo-symbols";
import { Pressable } from "react-native";

import { useClientOnlyValue } from "@/src/components/useClientOnlyValue";
import { useColorScheme } from "@/src/components/useColorScheme";
import Colors from "@/src/constants/Colors";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Drawer
      screenOptions={{
        drawerActiveTintColor: Colors[colorScheme].tint,
        headerShown: useClientOnlyValue(false, true),
        drawerStyle: { width: "60%" },
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
            <Link href="../" asChild>
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
