import react, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { SliderBox } from "react-native-image-slider-box";

export default function Home({ navigation}) {
  const sliderImages = [
    require("../assets/images/ooredoo-slider-01.jpg"),
    require("../assets/images/ooredoo-slider-02.jpg"),
    require("../assets/images/ooredoo-slider-03.jpg"),
  ];

  const changeColor = (index) => {
    if(index === 0){
     
      return;
    }
    
  }
  return (
    <View style={styles.wrapper}>
      <SliderBox
        images={sliderImages}
        dotColor="red"
        sliderBoxHeight={600}
        autoplay={true}
        resizeMode="cover"
        currentImageEmitter={(index) => changeColor(index)}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "white",
  },
});
