import React, {useState} from "react";
import { View, StyleSheet, Text, Button, TextInput} from "react-native";

export default function About({ navigation, route}) { 

  const {name, id} = route.params;
  return (
    <View style={styles.wrapper}>
      <Text>About</Text>
      <Button
        title="Back to home page"
        onPress={() => navigation.navigate("Home")}
      />  
      <Text>{name}</Text>
      <Button title="Go Back" onPress={() => {navigation.goBack()}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});
