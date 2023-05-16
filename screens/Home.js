import react, { useState, useEffect } from "react";
import { StyleSheet, View, Image, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import { SliderBox } from "react-native-image-slider-box";
import Register from "./Register";


const sliderImages = [
  // require("../assets/images/oredo-01.jpg"),
  require("../assets/images/oredo-02.jpg"),
  require("../assets/images/oredo-03.jpg"),
  require("../assets/images/oredo-04.jpg")
];

export default function Home({ navigation }) {
  return (
    <View style={styles.wrapper}>
       <SliderBox
            images= {sliderImages}
            sliderBoxHeight = {500}
            autoplay = {true}
            dotColor = "red"
            ImageComponentStyle ={flex = 1}
            
            //  paginationBoxVerticalPadding= {250}
            
            />
      <View>
        <Text onPress={() => navigation.navigate("Register")}>Hallo</Text>
      </View>
    </View>
    
  );
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
