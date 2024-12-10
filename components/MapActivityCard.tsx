import counterStore from "@/store/CounterStore";
import { observer } from "mobx-react";
import React, { useEffect } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Button from "./Button";

interface MapActivityCardProps {
  isTracking: boolean;
  elapsedTime: string;
  isRunning: boolean;
  onStartStopCounter: () => void;
}

const MapActivityCard: React.FC<MapActivityCardProps> = ({ elapsedTime, isRunning, onStartStopCounter }) => {
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (counterStore.isRunning) {
      interval = setInterval(() => {
        counterStore.incrementCounter();
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [counterStore.isRunning]);

  return (
    <View style={styles.card}>
      <Text style={[styles.title, { color: "grey" }]}>Running time</Text>
      <View style={styles.titleContainer}>
        <Text style={[styles.title, { color: "black" }]}>{elapsedTime}</Text>
        <Button onPress={onStartStopCounter} iconName={isRunning ? "stop" : "play"} color="black" />
      </View>
    </View>
  );
};

export default observer(MapActivityCard);

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 16,
    margin: 8,
    width: width - 32,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  map: {
    height: 200,
    marginVertical: 16,
  },
});
