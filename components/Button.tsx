import { SymbolViewProps } from "expo-symbols";
import { OpaqueColorValue, StyleSheet, Text, TouchableOpacity } from "react-native";
import { IconSymbol } from "./ui/IconSymbol";

export default function Button({ onPress, title, iconName, color }: { onPress: () => void; title?: string; iconName: SymbolViewProps["name"]; color: string | OpaqueColorValue }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <IconSymbol size={28} name={iconName} color={color} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 40,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
  },
});
