import "react-native-gesture-handler";
import React, { useEffect, useReducer } from "react";

import { NavigationContainer, useNavigation } from "@react-navigation/native";

import { MainScreen } from "./app/navigation/MainScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "./app/screens/LoginScreen";
import { RegisterScreen } from "./app/screens/RegisterScreen";
import { reducer } from "./app/reducer/AuthReducer";

import api from "./app/utils/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "./app/components/context/AuthContext";
import { navigate, navigationRef } from "./app/navigation/RootNavigation";

const Stack = createStackNavigator();

const initialState = {
  isAuthenticated: false,
  token: null,
  xsrfToken: null,
  isFetching: true,
};

export default function App() {
  // authentification
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchUser = async () => {
      const token = await AsyncStorage.getItem("accessToken");
      const xsrfToken = await AsyncStorage.getItem("xsrfToken");

      console.log("TOKEN APP ==>", token);
      console.log("XSRFTOKEN ===>", xsrfToken);

      if (token) {
        try {
          const result = await api.get(`/auth/me`, {
            headers: {
              Authorization: `Bearer ${token}`,
              "x-xsrf-token": `${xsrfToken}`,
            },
          });
          console.log("result ===>", result.data);
          if (result.status === 200) {
            dispatch({
              type: "LOAD_USER",
              payload: result,
              token,
            });
          }
        } catch (error) {
          console.log("ERROR", error);
          dispatch({
            type: "LOGOUT",
          });
        }
      } else {
        dispatch({
          type: "NO_USER",
        });
      }
    };
    fetchUser();
  }, []);

  // const navigation = useNavigation();

  return (
    <NavigationContainer>
      <AuthContext.Provider value={{ state, dispatch }}>
        <Stack.Navigator
          initialRouteName="LoginScreen"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="MainScreen" component={MainScreen} />
          {/* {!state.isFetching ? (
            <Stack.Screen name="MainScreen" component={MainScreen} />
          ) : (
            navigate("LoginScreen") */}
          {/* // <Stack.Screen name="LoginScreen" component={LoginScreen} />
          )} */}
        </Stack.Navigator>
      </AuthContext.Provider>
    </NavigationContainer>
  );
}
