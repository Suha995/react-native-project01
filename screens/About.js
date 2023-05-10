import React, {useState} from "react";
import { View, StyleSheet, Text, Button, TextInput} from "react-native";

export default function About({ navigation }) { 
  return (
    <View style={styles.wrapper}>
      <Text>About</Text>
      <Button
        title="Back to home page"
        onPress={() => navigation.navigate("Home")}
      />  
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
