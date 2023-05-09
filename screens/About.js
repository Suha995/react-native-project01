
import {View, StyleSheet, Text} from "react-native";

export default function About({navigation}){
    return(
        <View style={styles.wrapper}>
           <Text>About</Text>
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