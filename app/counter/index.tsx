import { useState } from "react";
import { View, Text, Button } from "react-native";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleAddCocktail = () => {
    setCount(count + 1);
  };

  const handleRemoveCocktail = () => {
    setCount(count - 1);
  };

  return (
    <View>
      <Text>Compteur de cocktails</Text>
      <Text>{count}</Text>
      <Button title="Ajouter un cocktail" onPress={handleAddCocktail} />
      <Button title="Supprimer un cocktail" onPress={handleRemoveCocktail} />
    </View>
  );
}
