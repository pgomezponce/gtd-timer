import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import WorkScreen from "./View/WorkScreen/WorkScreen";

const bottomTabNavigator = createBottomTabNavigator();

export default function App() {
  const scheme = useColorScheme();

  return (
    <AppearanceProvider>
      <NavigationContainer
        theme={scheme === "dark" ? DarkTheme : DefaultTheme}
      >
        <bottomTabNavigator.Navigator>
          <bottomTabNavigator.Screen name='Work' component={WorkScreen}/>
        </bottomTabNavigator.Navigator> 

      </NavigationContainer>
    </AppearanceProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
