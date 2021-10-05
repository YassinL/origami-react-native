import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

// Screen
import { HomeScreen } from "../screens/HomeScreen";
import { ProfilScreen } from "../screens/ProfilScreen";
import { SearchScreen } from "../screens/SearchScreen";
import { LogoTitle } from "../components/molecules/LogoTitle";

const Tab = createBottomTabNavigator();

export function MainScreen() {
  const getTabBarVisibility = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === "Profil") {
      return false;
    }
    return true;
  };

  return (
    <Tab.Navigator
      initialRouteName="LoginScreen"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "home";
          }
          if (route.name === "Profil") {
            iconName = "user";
          }
          if (route.name === "Search") {
            iconName = "search";
          }
          return <Feather name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#ffca00",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
      />
      <Tab.Screen
        name="Profil"
        component={ProfilScreen}
        options={({ route }) => ({
          tabBarVisible: getTabBarVisibility(route),
          headerTitle: (props) => <LogoTitle {...props} />,
        })}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
      />
    </Tab.Navigator>
  );
}
