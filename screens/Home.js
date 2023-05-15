import react, { useState, useEffect } from "react";
import { StyleSheet, View, Image, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View>
        <Text>Hallo</Text>
      </View>
    </SafeAreaView>
    
  );
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#ddd",
    marginTop: 500
  },
});
