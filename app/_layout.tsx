import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Accueil" }} />
      <Stack.Screen name="counter/index" options={{ title: "Compteur" }} />
      <Stack.Screen name="cocktails/index" options={{ title: "Cocktails" }} />
      <Stack.Screen name="cocktails/[id]" options={{ title: "Détails d'un cocktail" }} />
    </Stack>
  );
}
