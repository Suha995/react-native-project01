import react, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image, Text, ScrollView, View} from "react-native";
import Home from "../screens/Home";
import About from "../screens/About";
import Register from "../screens/Register";
import Login from "../screens/Login";
import Profile from "../screens/Profile";
import Header from "../components/Header";


const Stack = createNativeStackNavigator();

const OoredooIcon = () => {
  return (
    <View style= {{ flexDirection: "row", justifyContent: "center", alignItems: "center", width: "95%",paddingHorizontal: 5}}>
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
          headerTransparent: true,
          headerShown: true,
          
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options = {({ navigation, route}) => ({ 
            headerBackTitleVisible: false,
            headerTitle: false,
            headerTransparent: true,
            headerShown: true,
            headerTranslucent : true,
            headerTitle: (props) => <OoredooIcon {...props} />,
            headerTranslucent: "true",
           
          })}
        />

        <Stack.Screen
          name="About"
          component={About}
          options={{ headerTitle: (props) => <OoredooIcon {...props} /> }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerTitle: (props) => <OoredooIcon {...props} /> }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerTitle: (props) => <OoredooIcon {...props} /> }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
