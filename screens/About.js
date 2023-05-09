
import {View, StyleSheet, Text, Button} from "react-native";

export default function About({navigation}){
    return(
        <View style={styles.wrapper}>
           <Text>About</Text>
           <Button title="Go to home page" onPress={() => navigation.navigate("Home")}/>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
  
});