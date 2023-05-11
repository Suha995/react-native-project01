import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Login from "../components/Login";
import Register from "../components/Register";

export default function Home({ navigation }) {
  //Naviagtion is a prop
  return (
    <View style={styles.wrapper}>
    <Register />
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
