import react, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  FlatList,
  StatusBar,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import { SliderBox } from "react-native-image-slider-box";
import Register from "./Register";

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
    <View style={{ flex: 1 }}>
      <ScrollView
        style={styles.wrapper}
        contentContainerStyle={{ flexGrow: 1 }}
        nestedScrollEnabled={true}
      > 
      {/* to romove the white space when i scroll */}
        <View
          style={{
            position: "absolute",
            top: -1000,
            backgroundColor: "#000",
            height: 1000,
            left: 0,
            right: 0
          }}
        ></View>
        {/* to solve the problem of not transparent header bar in android */}
        <StatusBar backgroundColor={"transparent"} translucent />
        <SliderBox
          images={sliderImages}
          sliderBoxHeight={500}
          autoplay={false}
          dotColor="red"
          ImageComponentStyle={(flex = 1)}
          paginationBoxVerticalPadding={110}
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
        {/* <View
          style={{
            flex: 1,
            position: "relative",
            marginTop: 600,
            borderTopWidth: 2,
            borderTopColor: "white",
          }}
        ></View> */}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
   width: "100%",
    backgroundColor: "#fff",
    overScrollMode: "never",
  },
  content: {
    // style the view that wraps the scrollView under the hood
    padding: 5,
    backgroundColor: "white",
    borderRadius: 15,
    position: "absolute",
    top: 400,
    left: 30,
    right: 30,
    // bottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 30
  },
  text: {
    padding: 50,
    color: "black",
    fontSize: 25,
    // borderBottomWidth: 2,
    // borderBottomColor: "#000",
  },
});
