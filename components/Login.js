import react, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  ScrollView
} from "react-native";

//two input fields username and password
//submit button

function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Login</Text>
        <Text style={styles.titleSpan}>Please sign in to continue</Text>
      </View>
      
        <ScrollView style={styles.form} contentContainerStyle={{flexGrow: 1}}>
          {/* Title */}
          <View style={styles.formInputs}>
            <TextInput placeholder="USERNAME"  style={styles.formInputsText}/>
          </View>
          {/* Username */}
          <View style={styles.formInputs}>
            <TextInput placeholder="PASSWORD" style={styles.formInputsText} />
          </View>
          {/* Password */}
          <View style={styles.submit}>
            <Text style={styles.submitText}>LOGIN</Text>
          </View>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    width: 300,
    padding: 20,
    marginBottom: 20,
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 30,
  },
  titleSpan: {
    fontWeight: "bold",
    color: "#dedede",
  },
  form: {
    display: "flex",
    gap: 20,
  },
  formInputs: {
    display: "inlineBlock",
    width: 300,
    backgroundColor: "#faf7f0",
    padding: 20,
    borderRadius: 20,
    marginBottom: 20
  },
  formInputsText: {
    width: 400,
    fontSize: 24
  },
  submit: {
    width: 100,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#f5bf42",
    marginTop: 20,
    marginLeft: "auto",
    borderRadius: 20,
  },
  submitText: {
    fontSize: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default Login;
