import react, { useState, useEffect} from "react";
import { StyleSheet, View, Image, Text} from "react-native";
import { SliderBox } from "react-native-image-slider-box";

export default function Home({ navigation}) {
  return (
    <View style={styles.wrapper}>
      <Text onPress={() => {navigation.navigate("Register")}}>Helllo</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    // flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "white",
    // padding: 0,
    // margin: 0
  },
});
