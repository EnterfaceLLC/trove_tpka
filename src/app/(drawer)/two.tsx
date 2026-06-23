import { Camera, Map, Marker } from "@maplibre/maplibre-react-native";
import { StyleSheet, Text, View } from "react-native";

// Data for multiple locations
const locations = [
  {
    id: "noto",
    name: "NOTO Arts District",
    coordinate: [-95.66631098672957, 39.068310669645875],
    color: "#FF3B30",
  },
  {
    id: "capitol",
    name: "Kansas State Capitol",
    coordinate: [-95.6761, 39.0484],
    color: "#007AFF",
  },
  {
    id: "zoo",
    name: "Topeka Zoo",
    coordinate: [-95.7105, 39.0528],
    color: "#34C759",
  },
];

export default function App() {
  const handleMarkerPress = (event: { nativeEvent: { id: string } }) => {
    console.log(`Marker ${event.nativeEvent.id} pressed`);
  };

  return (
    <View style={{ flex: 1 }}>
      <Map
        style={{ flex: 1 }}
        mapStyle={"https://tiles.openfreemap.org/styles/fiord"}
      >
        <Camera
          initialViewState={{
            center: [-95.6757, 39.0536],
            zoom: 12,
          }}
        />

        {locations.map((location) => (
          <Marker
            key={location.id}
            id={location.id}
            lngLat={location.coordinate as [number, number]}
            anchor="bottom"
            onPress={handleMarkerPress}
          >
            <View style={styles.markerWrapper}>
              <View
                style={[styles.markerDot, { backgroundColor: location.color }]}
              />
              <Text style={styles.markerLabel}>{location.name}</Text>
            </View>
          </Marker>
        ))}
      </Map>
    </View>
  );
}

const styles = StyleSheet.create({
  markerWrapper: {
    alignItems: "center",
  },
  markerDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  markerLabel: {
    marginTop: 4,
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: "rgba(0,0,0,0.7)",
    color: "#FFFFFF",
    fontSize: 10,
    borderRadius: 4,
    fontWeight: "bold",
  },
});
