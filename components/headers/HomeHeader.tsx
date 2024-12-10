import { SymbolView } from "expo-symbols";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

export default function HomeHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftHeader}>
          <View style={styles.badge}>
            <Image source={require("@/assets/images/Avatar.png")} />
          </View>
          <View>
            <Text style={styles.badgeText}>Hello, Andrew</Text>
            <Text style={styles.badgeText}>Beginner</Text>
          </View>
        </View>
        <View style={styles.rightHeader}>
          <SymbolView name="gear" tintColor="white" size={30} />
        </View>
      </View>
    </View>
  );
}

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    height: height / 3,
    overflow: "hidden",
    borderRadius: 30,
    backgroundColor: "#5D63D1",
    alignItems: "center",
    zIndex: 1,
  },
  header: {
    top: 70,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    width: width,
  },
  leftHeader: {
    flexDirection: "row",
    gap: 6,
    marginLeft: 10,
    height: 50,
    alignItems: "center",
  },
  badge: {
    borderRadius: 90,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "white",
  },
  rightHeader: {
    justifyContent: "center",
    alignItems: "center",
  },
});
