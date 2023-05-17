import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  FlatList,
  StatusBar,
  Platform,
  Dimensions,
} from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import react, { useState } from "react";
const sliderImages = [
  require("../assets/images/ooredoo01.png"),
  require("../assets/images/ooredoo02.png"),
  require("../assets/images/ooredoo03.png"),
];

const list = [
  { name: "Hadeel", id: 1 },
  { name: "Khaled", id: 2 },
  { name: "Mayaseen", id: 3 },
  { name: "Abeer", id: 4 },
  { name: "saif", id: 5 },
];


//
//
//#FFD300 yellow
//#84C8BD green blue
const windowWidth = Dimensions.get("window").width;

export default function Home({ navigation }) {
  const [yHeight, setYHeight] = useState(0);
  const [bgColor, setBgcolor]=  useState("#2FDCC0");



  const changebackgroundColor = (index) => {
  
    index === 0 ? setBgcolor("#2FDCC0") : index === 1 ? setBgcolor("#FFD300"): setBgcolor("#84C8BD") ;
 
  
  }

  const Header = ({ bgColor }) => {
    return (
      <View
        style={  [yHeight > 0?{ backgroundColor: bgColor} : null,styles.header ]  }
 
      >
        {console.log(bgColor,yHeight)}
        <Image
          source={require("../assets/images/Ooredoo-logo-red.png")}
          style={{ width: 100, height: 50, resizeMode: "contain" }}
        />
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Header bgColor= {bgColor}/> 
      <ScrollView
        onScroll={(e) => {
          setYHeight(e.nativeEvent.contentOffset.y);
          console.log(e.nativeEvent.contentOffset.y);
        }}
        style={styles.wrapper}
        contentContainerStyle={{ flexGrow: 1 }}
        nestedScrollEnabled={true}
      >
        {/* to remove the white space when i scroll */}
        <View
          style={{
            position: "absolute",
            top: -1000,
            backgroundColor: bgColor,
            height: 1000,
            left: 0,
            right: 0,
            width: "100%",
          }}
        ></View>
        {/* to solve the problem of transparent header bar in android */}
        <StatusBar backgroundColor={"transparent"} translucent />
        <View style={{ flex: 1, width: 600, backgroundColor: bgColor }}>
          <SliderBox
            images={sliderImages}
            sliderBoxHeight={600}
            autoplay={false}
            dotColor="red"
            dotStyle={{ width: 7, height: 7,margin: 1 }}
            ImageComponentStyle={{
              flex: 1,
              width: "100%",
              resizeMode: "contain",
            }}
            paginationBoxVerticalPadding={270}
            paginationBoxStyle={{ position: "absolute", left: 170 }}
            currentImageEmitter={(index) => {changebackgroundColor(index)}}
            activeOpacity = {1}

          />
        </View>
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
  header:{
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: windowWidth,
      paddingTop: 20,
      position: "sticky",
  },
  content: {
    // style the view that wraps the scrollView under the hood
    padding: 5,
    backgroundColor: "white",
    borderRadius: 15,
    position: "relative",
    zIndex: 3,
    top: -250,
    left: 30,
    right: 30,
    width: "85%",
    borderWidth: 1,
    borderColor: "#ddd",
  },

  text: {
    padding: 50,
    color: "black",
    fontSize: 25,
  },
});
