import react, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image, Text, View } from "react-native";
import Home from "../screens/Home";
import About from "../screens/About";
import Register from "../screens/Register";
import Login from "../screens/Login";
import Profile from "../screens/Profile";

const Stack = createNativeStackNavigator();

const OoredooIcon = () => {
  return (
    <View>
      <Image
        source={require("../assets/images/Ooredoo-logo-red.png")}
        style={{ width: 100, height: 100, resizeMode: "contain" }}
      />
    </View>
  );
};

export default function NavigationStack() {
  const [headerColor, setHeaderColor] = useState("#fff");

  const changeHeaderColor = (color) => {
    setHeaderColor(color);
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: headerColor,
          },
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: (props) => <OoredooIcon {...props} />
          }}
        ></Stack.Screen>
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Register333" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
