import {StyleSheet, View } from "react-native";
import OoredooIcon from "../components/OoredooIcon";

export default function Home({ navigation }) {
  return (
    <View style={styles.wrapper}>
      <OoredooIcon/>
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
});
