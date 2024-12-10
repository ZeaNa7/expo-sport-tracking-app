import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Button from "./Button";

export default function GoalCard({ onPress }: { onPress: () => void }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <View style={styles.titleContainer}>
        <Text style={[styles.title, { color: "black" }]}>Week goal</Text>
        <Text style={[styles.title, { color: "purple" }]}> 50 Km</Text>
        <Button onPress={() => console.log("clock")} iconName="arrow.forward" color="black" />
      </View>
      <View style={styles.stepContainer}>
        <Text style={styles.step}>1. Create a new project</Text>
        <Text style={styles.step}>2. Add a new feature</Text>
        <Text style={styles.step}>3. Submit a PR</Text>
      </View>
    </TouchableOpacity>
  );
}

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 16,
    margin: 8,
    width: width - 40,
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
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  step: {
    fontSize: 16,
  },
});
