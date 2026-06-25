import { router } from "expo-router";
import { Pressable, StyleSheet } from "react-native";

import { Text, View } from "@/src/components/Themed";

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.grabber} />
      <Text style={styles.title}>About Trove TPKA</Text>
      <Text style={styles.body}>
        This is your info modal. On Android, it opens with a slide-up transition
        and can be dismissed by tapping outside or using the back button.
      </Text>

      <Pressable style={styles.closeButton} onPress={() => router.back()}>
        <Text style={styles.closeButtonText}>Close</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1B26",
    padding: 16,
  },
  grabber: {
    alignSelf: "center",
    width: 44,
    height: 5,
    borderRadius: 2,
    backgroundColor: "#73685C",
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#f4f4f5",
    marginBottom: 8,
  },
  body: {
    fontSize: 15,
    lineHeight: 22,
    color: "#d4d4d8",
    marginBottom: 20,
  },
  closeButton: {
    alignSelf: "flex-start",
    backgroundColor: "#60524B",
    borderRadius: 999,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  closeButtonText: {
    color: "#f4f4f5",
    fontSize: 14,
    fontWeight: "600",
  },
});
