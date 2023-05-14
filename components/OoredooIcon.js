import { StyleSheet, View, Text, Image} from "react-native";
import imagesPath from "../constants/imagesPath";


export default function OoredooIcon() {
  <View style={styles.container}>
    <Image source={imagesPath.iconOoredoo} style={styles.logo}/>
    <Text>dgkhdkhk</Text>
  </View>
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100
  },
  logo: {
    width: 50,
    height: 50
  }
});
