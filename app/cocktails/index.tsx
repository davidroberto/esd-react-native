import { useRouter } from "expo-router";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";

export default function CoktailsScreen() {
  const router = useRouter();

  const cocktailsList = [
    {
      id: 1,
      title: "Mojito",
      ingredients: ["Rhum", "Menthe", "Citron vert", "Eau gazeuse", "Sucre"],
      description: "Cocktail cubain à base de rhum, de citron vert et de menthe fraîche.",
    },
    {
      id: 2,
      title: "Pina Colada",
      ingredients: ["Rhum", "Lait de coco", "Jus d'ananas"],
      description: "Cocktail à base de rhum, de lait de coco et de jus d'ananas.",
    },
    {
      id: 3,
      title: "Margarita",
      ingredients: ["Tequila", "Triple sec", "Jus de citron vert"],
      description: "Cocktail à base de tequila, de triple sec et de jus de citron vert.",
    },
  ];

  const handleNavigateToCocktailDetails = () => {
    router.push("cocktails/1");
  };

  return (
    <View style={styles.container}>
      <Text>Liste des cocktails</Text>

      <FlatList
        data={cocktailsList}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Button title="voir le cocktail" onPress={handleNavigateToCocktailDetails} />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
