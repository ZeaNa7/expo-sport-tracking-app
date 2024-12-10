import counterStore from "@/store/CounterStore";
import { formatTime } from "@/utils/date-time.utils";
import { observer } from "mobx-react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ActivityBadge = observer(({ onPress }: { onPress: () => void }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.leftBadge}>
        <View style={styles.badge}>
          <Image source={require("@/assets/images/pnj.png")} />
        </View>
        <View>
          <Text style={styles.badgeTitle}>Current jogging</Text>
          <Text style={styles.badgeSubTitle}>{formatTime(counterStore.elapsedTime)}</Text>
        </View>
      </View>
      <View style={styles.rightBadge}>
        <Text style={styles.badgeTitle}>10 km</Text>
        <Text style={styles.badgeSubTitle}>303 kcal</Text>
      </View>
    </TouchableOpacity>
  );
});

export default ActivityBadge;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5D63D1",
    borderRadius: 40,
    height: 70,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginLeft: 10,
  },
  rightBadge: {
    alignItems: "center",
    marginRight: 20,
  },
  badge: {
    borderRadius: 90,
    width: 50,
    height: 50,
    backgroundColor: "#6D73DF",
    justifyContent: "center",
    alignItems: "center",
  },
  badgeTitle: {
    color: "white",
    fontWeight: "bold",
  },
  badgeSubTitle: {
    color: "white",
  },
});
