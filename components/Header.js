import { resizeMode, width } from "deprecated-react-native-prop-types/DeprecatedImagePropType";
import react, { useState, useEffect} from "react";
import { StyleSheet, View, Image, Text, Platform} from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const sliderImages = [
    require("../assets/images/oredo-01.jpg"),
    require("../assets/images/oredo-02.jpg"),
    require("../assets/images/oredo-03.jpg"),
    require("../assets/images/oredo-04.jpg")
  ];

  
export default function Header (){
    
    return(
           <SliderBox
            images= {sliderImages}
            sliderBoxHeight = {500}
            autoplay = {true}
            dotColor = "red"
            ImageComponentStyle ={flex = 1}
            // paginationBoxVerticalPadding= {250}
            />
    )
}

const styles = StyleSheet.create({
   
})