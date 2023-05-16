import react, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import { SliderBox } from "react-native-image-slider-box";
import Register from "./Register";
import { resizeMode } from "deprecated-react-native-prop-types/DeprecatedImagePropType";

const sliderImages = [
  // require("../assets/images/oredo-01.jpg"),
  require("../assets/images/oredo-02.jpg"),
  require("../assets/images/oredo-03.jpg"),
  require("../assets/images/oredo-04.jpg"),
];

const list = [
  { name: "Hadeel", id: 1 },
  { name: "Khaled", id: 2 },
  { name: "Mayaseen", id: 3 },
  { name: "Abeer", id: 4 },
  { name: "saif", id: 5 },
];
export default function Home({ navigation }) {
  return (
    <ScrollView
      style={styles.wrapper}
      contentContainerStyle={{ flexGrow: 1 }}
      nestedScrollEnabled={true}
      overScrollMode = "never"
    >
      <SliderBox
        images={sliderImages}
        sliderBoxHeight={500}
        autoplay={true}
        dotColor="red"
        ImageComponentStyle={(flex = 1)}
        paginationBoxVerticalPadding={110}
        dotStyle={{ marginHorizontal: -5 }}
      />
      <ScrollView
        style={styles.content}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        {list.map((item) => (
          <Text key={item.id} style={styles.text}>
            {item.name}
          </Text>
        ))}
      </ScrollView>
      <View style={{flex: 1, position: "relative", marginTop: 600, borderTopWidth: 2, borderTopColor: "white"}}>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#fff",
    overScrollMode: "never"
    

  },
  content: {// style the view that wraps the scrollView under the hood
    padding: 5,
    backgroundColor: "white",
    borderRadius: 15,
    position: "absolute",
    top: 400,
    left: 30,
    right: 30,
    borderWidth: 1,
    borderColor: "#ddd"

  },
  text: {
    padding: 50,
    color: "black",
    fontSize: 25,
    // borderBottomWidth: 2,
    // borderBottomColor: "#000",
  },
});
