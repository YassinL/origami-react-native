import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ProfilScreen } from "../screens/ProfilScreen";

// Screens
const Stack = createStackNavigator();

export function ProfilStackScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProfilScreen" component={ProfilScreen} />
    </Stack.Navigator>
  );
}
