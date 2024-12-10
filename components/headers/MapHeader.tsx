import { useNavigation } from "expo-router";
import { SymbolView } from "expo-symbols";
import { StyleSheet, Text, View } from "react-native";
import Button from "../Button";

export default function MapHeader({ hasSignal }: { hasSignal: boolean }) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <Button onPress={handleGoBack} iconName="arrow.backward.to.line" color="white" />
      <Text style={styles.title}>Current jogging</Text>
      <View style={styles.badge}>
        <Text>GPS</Text>
        {hasSignal === true ? <SymbolView name="location.fill" tintColor="green" size={20} /> : <SymbolView name="location.slash" tintColor="red" size={20} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: "100%",
    marginTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: "center",
    alignContent: "center",
    flexDirection: "row",
    backgroundColor: "transparent",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "bold",
    color: "white",
    paddingTop: 15,
  },
  badge: {
    backgroundColor: "white",
    marginTop: 15,
    borderRadius: 10,
    padding: 5,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
});
