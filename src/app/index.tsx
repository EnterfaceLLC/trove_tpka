import { Redirect } from "expo-router";
import { Text, View } from "react-native";
import { useAuth } from "../context/useAuth";

const Index = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Loading...</Text>
      </View>
    );
  }

  if (!user) {
    return <Redirect href="/(auth)" />;
  }

  if (user) {
    return <Redirect href="/(drawer)" />;
  }
};

export default Index;
