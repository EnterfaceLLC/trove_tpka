import { ImageBackground, Text } from "react-native";

const CaptainsLog = () => {
  return (
    <ImageBackground
      source={require("../../assets/images/screens/bgImg.jpg")}
      style={{
        width: "100%",
        height: "100%",
      }}
      resizeMode="cover"
    >
      <Text
        style={{
          color: "white",
          fontSize: 32,
          fontWeight: "500",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          padding: 10,
          margin: 12,
          borderRadius: 10,
        }}
      >
        Your Quests and Logs
      </Text>
    </ImageBackground>
  );
};

export default CaptainsLog;
