import React, {useState} from "react";
import { View, StyleSheet, Text, Button, TextInput} from "react-native";

export default function Profile({ navigation, route}) { 

  const {name, id} = route.params;
  return (
    <View style={styles.wrapper}>
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
