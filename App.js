import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from './views/home';
import Login from './views/login';
import { StatusBar } from "expo-status-bar";

export default function App() {

  const Stack = createStackNavigator();

  return (
      <NavigationContainer>
        <StatusBar
        animated={true}
        backgroundColor="#D3D3D3"
      />
        <Stack.Navigator
        screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};