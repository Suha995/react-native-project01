import react, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image, Text, View } from "react-native";
import Home from "../screens/Home";
import About from "../screens/About";
import Register from "../screens/Register";
import Login from "../screens/Login";
import Profile from "../screens/Profile";
import { SliderBox } from "react-native-image-slider-box";
import Header from "../components/Header";

const Stack = createNativeStackNavigator();

const OoredooIcon = () => {
  return (
    <View>
      <Image
        source={require("../assets/images/Ooredoo-logo-red.png")}
        style={{ width: 100, height: 50, resizeMode: "contain" }}
      />
    </View>
  );
};

export default function NavigationStack() {
  
  return (
 
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            flexDirection: "row",
            justifyContent: "center",
          },
          headerShadowVisible: false,
         
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerTitle: (props) => <Header {...props} /> }}
        />

        <Stack.Screen name="About" component={About}
         options={{ headerTitle: (props) => <OoredooIcon {...props} /> }} />
        <Stack.Screen name="Register" component={Register} 
         options={{ headerTitle: (props) => <OoredooIcon {...props} /> }}/>
        <Stack.Screen name="Login" component={Login}
         options={{ headerTitle: (props) => <OoredooIcon {...props} /> }} />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
 
  );
}
