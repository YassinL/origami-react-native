import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SearchScreen } from "../screens/SearchScreen";

// Screens
const Stack = createStackNavigator();

export function SearchStackScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
    </Stack.Navigator>
  );
}
