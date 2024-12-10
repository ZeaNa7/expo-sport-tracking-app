import ActivityBadge from "@/components/ActivityBadge";
import GoalCard from "@/components/GoalCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import HomeHeader from "@/components/headers/HomeHeader";
import { router } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function HomeScreen() {
  const handlePress = () => {
    router.navigate("/map");
  };

  return (
    <ParallaxScrollView header={<HomeHeader />}>
      <View style={{ zIndex: 1 }}>
        <GoalCard onPress={() => console.log("click")} />
      </View>
      <ActivityBadge onPress={handlePress} />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({});
