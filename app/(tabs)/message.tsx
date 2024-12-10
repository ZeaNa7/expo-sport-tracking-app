import ParallaxScrollView from "@/components/ParallaxScrollView";
import React from "react";
import { StyleSheet } from "react-native";

export default function MessageScreen() {
  return <ParallaxScrollView headerBackgroundColor={{ light: "#5D63D1", dark: "#5D63D1" }}></ParallaxScrollView>;
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
});
