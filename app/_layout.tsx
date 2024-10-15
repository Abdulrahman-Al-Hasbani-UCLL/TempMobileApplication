import { Stack } from "expo-router";

//ENTERY point 

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}
