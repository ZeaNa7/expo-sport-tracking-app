import MapActivityCard from "@/components/MapActivityCard";
import MapHeader from "@/components/headers/MapHeader";
import counterStore from "@/store/CounterStore";
import { formatTime } from "@/utils/date-time.utils";
import * as Location from "expo-location";
import { LocationObjectCoords } from "expo-location";
import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";

const MapScreen: React.FC = () => {
  const [location, setLocation] = useState<LocationObjectCoords | null>(null);
  const [initialRegion, setInitialRegion] = useState({
    latitude: 47.478419,
    longitude: -0.563166,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [hasGpsSignal, setHasGpsSignal] = useState(false);
  const [isTracking, setIsTracking] = useState(false);
  const [locations, setLocations] = useState<LocationObjectCoords[]>([]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        setHasGpsSignal(false);
        return;
      }

      try {
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location.coords);
        setInitialRegion({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
        setHasGpsSignal(true);
      } catch (error) {
        console.log("Error getting location:", error);
        setHasGpsSignal(false);
      }
    })();
  }, []);

  useEffect(() => {
    let locationSubscription: any;

    if (isTracking) {
      locationSubscription = Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          timeInterval: 1000,
          distanceInterval: 1,
        },
        (location) => {
          const { latitude, longitude } = location.coords;
          setLocation(location.coords);
          setLocations((prevLocations) => [...prevLocations, { latitude, longitude }]);
        }
      );
    }

    return () => {
      if (locationSubscription) {
        locationSubscription.then((sub: any) => sub.remove());
      }
    };
  }, [isTracking]);

  const handleStartStopCounter = () => {
    setIsTracking((prev) => {
      if (prev) {
        counterStore.stopCounter();
        counterStore.resetCounter();
      } else {
        setLocations([]);
        counterStore.startCounter();
      }
      return !prev;
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <MapHeader hasSignal={hasGpsSignal} />
      </View>
      <MapView style={styles.map} initialRegion={initialRegion}>
        {location && (
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title={"I'm here"}
          />
        )}
        <Polyline coordinates={locations} strokeColor="purple" strokeWidth={4} />
      </MapView>
      <View style={styles.footerCard}>
        <MapActivityCard isTracking={isTracking} elapsedTime={formatTime(counterStore.elapsedTime)} isRunning={counterStore.isRunning} onStartStopCounter={handleStartStopCounter} />
      </View>
    </View>
  );
};

export default observer(MapScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  headerContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "transparent",
    zIndex: 1,
  },
  footerCard: {
    bottom: 50,
    zIndex: 1,
    right: 10,
    position: "absolute",
  },
});
