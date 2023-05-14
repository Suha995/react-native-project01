import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Login from "../components/Login";

export default function Home({ navigation }) {
  const data =[{
    name: "Suhair",
    id: "3"
  },
{name: "Rania", id: 4}];

  return (
    <View style={styles.wrapper}>
      <Text>
        If you don't have a account, please register
        <Text onPress={() => navigation.navigate("Register")}> here</Text>
      </Text>
      <Text>
        Login
        <Text onPress={() => navigation.navigate("Login")}> here</Text>
      </Text>
      {
        data.map( item => (
          <Text key={item.id} onPress={() => navigation.navigate("Profile", item)}>{item.name}</Text>
        ))
      }
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
