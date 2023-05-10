import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import ListOfNames from "../components/ListOfNames";
import Login from "../components/Login";

export default function Home({ navigation }) {
  //Naviagtion is a prop
  return (
    <View style={styles.wrapper}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("About")
        }>
          <Text>About</Text>
        </TouchableOpacity>
      </View>
      <Login />
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
