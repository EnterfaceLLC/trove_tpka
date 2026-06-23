import { Camera, Map, Marker } from "@maplibre/maplibre-react-native";
import { useRef } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const cameraRef = useRef(null);

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonTxt}>Vault</Text>
      </View>
      <Map mapStyle="https://tiles.openfreemap.org/styles/fiord">
        <Camera
          ref={cameraRef}
          initialViewState={{
            center: [-95.66655133275346, 39.06791717813706],
            zoom: 14,
          }}
        />

        <Marker
          lngLat={[-95.66622337485877, 39.0686517587069]}
          anchor="bottom" // Anchor the marker at its bottom center
          onPress={(event) => alert("Marker pressed: " + event.nativeEvent.id)}
        >
          <View style={styles.markerContainer}>
            <View style={styles.markerPin} />
            <View style={styles.markerPulse} />
          </View>
        </Marker>
      </Map>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  markerContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  markerPin: {
    width: 20,
    height: 20,
    backgroundColor: "#FF3B30",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  markerPulse: {
    position: "absolute",
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255, 59, 48, 0.2)",
    // Add animation for pulsing effect if desired
  },
  buttonContainer: {
    position: "absolute",
    top: 20,
    left: 20,
    minWidth: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3C4350",
    padding: 10,
    borderRadius: 12,
    zIndex: 999, // Ensure the button is above the map
  },
  buttonTxt: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});
