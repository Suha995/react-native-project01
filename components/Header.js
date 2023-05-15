import react, { useState, useEffect} from "react";
import { StyleSheet, View, Image, Text} from "react-native";
import { SliderBox } from "react-native-image-slider-box";


const sliderImages = [
    require("../assets/images/ooredoo-slider-01.jpg"),
    require("../assets/images/ooredoo-slider-02.jpg"),
    require("../assets/images/ooredoo-slider-03.jpg")
  ];

export default function Header (){
    
    return(
        <View style={styles.header}>
           <SliderBox images= {sliderImages}/>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: 100,
        height: 100
     
        
    }
})