import { View, Text, StyleSheet } from "react-native";

export default function CoktailsScreen() {
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

  return (
    <View style={styles.container}>
      <Text>Liste des cocktails</Text>

      {cocktailsList.map((cocktail) => (
        <View key={cocktail.id}>
          <Text>{cocktail.title}</Text>
          <Text>{cocktail.description}</Text>
          <Text>Ingrédients: {cocktail.ingredients.join(", ")}</Text>
        </View>
      ))}
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
