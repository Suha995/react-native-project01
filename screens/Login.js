import react, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

function Login({navigation}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  const submitHandler = () => {
    if (username === "") {
      setMessage("Your username is empty!");
    } else if (password === "") {
      setMessage("Your password is empty!");
    } else if (username.length < 4) {
      setMessage("Your username should be more than 4 digits");
    } else if (password.length < 6 || !password.length > 16) {
      
      setMessage(
        "Your Password should contain at least 6 digits and at most 16 digits"
      );
    } else if (!regex.test(password)) {
      setMessage(
        "Password should contain at least one number and one special character"
      );
    } else {
      //we need to move to home page
      setMessage("You are logged in successfully");
      //setUsername("");
      //setPassword("");
    }
  };
  return (
    <View style={styles.container}>
      {/* Title */}
      <View style={styles.title}>
        <Text style={styles.titleText}>Login</Text>
        <Text style={styles.titleSpan}>Please sign in to continue</Text>
      </View>
      <ScrollView style={styles.form} contentContainerStyle={{ flexGrow: 1 }}>
        <View>
          <Text style={styles.message}>{message}</Text>
        </View>
        {/* Username */}
        <View style={styles.formInputs}>
          <TextInput
            placeholder="USERNAME"
            style={styles.formInputsText}
            onChange={(val) => setUsername(val)}
          />
        </View>
        {/* Password */}
        <View style={styles.formInputs}>
          <TextInput
            placeholder="PASSWORD"
            style={styles.formInputsText}
            onChange={(val) => setPassword(val)}
            secureTextEntry={true}
          />
        </View>
        {/* Submit Button */}
        <TouchableOpacity onPress={submitHandler}>
          <View style={styles.submit}>
            <Text style={styles.submitText}>LOGIN</Text>
          </View>
        </TouchableOpacity>
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
  message: {
    marginBottom: 20,
    fontWeight: "bold",
    fontSize: 15,
    color: "#f5bf42"
  },
  formInputs: {
    display: "inlineBlock",
    width: 300,
    backgroundColor: "#faf7f0",
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
  },
  formInputsText: {
    width: 400,
    fontSize: 24,
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
