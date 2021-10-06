import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext } from "react";

import { AuthContext } from "../components/context/AuthContext";

const Stack = createStackNavigator();

export function ProtectedRoutes({ component: Component, navigation, ...rest }) {
  const { state } = useContext(AuthContext);
  return (
    <Stack.Screen
      {...rest}
      render={(props) => {
        return !state.isFetching ? (
          <Component {...props} />
        ) : (
          navigation.navigate("LoginScreen")
        );
      }}
    />
  );
}
