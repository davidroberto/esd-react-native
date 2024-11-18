import { useRouter } from "expo-router";
import { Button, Text, View, StyleSheet } from "react-native";

export default function Index() {
  const router = useRouter();

  const handleNavigateToCounter = () => {
    router.push("counter");
  };

  const handleNavigateToCocktails = () => {
    router.push("cocktails");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Bonjour ESD</Text>
      <Button title="Afficher le compteur" onPress={handleNavigateToCounter} />
      <Button title="Afficher les cocktails" onPress={handleNavigateToCocktails} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});
