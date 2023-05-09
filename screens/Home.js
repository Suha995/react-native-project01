import {View, StyleSheet, Button, Text} from "react-native";


export default function Home({navigation}){
    return(
        <View style={styles.wrapper}>
           <Text>Hello, World</Text>
           <Button title="Go to home page" onPress={() => navigation.navigate("About")}/>
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