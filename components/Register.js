import react, { useState } from "react";
import DropDown from "./DropDown";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";


function Register() {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [message, setMessage] = useState("");
  const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  const countries = [{id: 1,name:"Palestine"}, {id: 2, name: "Egypt"}, {id: 3, name: "Canada"}, {id: 3, name: "Australia"}, {id: 4, name:"Ireland"}];
  const [selectedCountry, setSelectedCountry] = useState(null); //object
 
  const onSelect = (item) => {
    setSelectedCountry(item);
  }

  //The problem was with the else statements and absence of return
  const submitHandler = () => {
    if (fullName === "") {
      setMessage("Your full name is empty");
      return;
    }
    
    if (selectedCountry === null) {
      setMessage("You should select a country");
      return;
    }

    if (username === "") {
      setMessage("Your username is empty!");
      return;
    } else if (username.length < 4) {
      setMessage("Your username should be more than 4 digits");
      return;
    }

    if (password1.length === 0) {
      setMessage("Your password is empty!");
      return;
    } else if (password1.length < 6 || !password1.length > 16) {
      setMessage(
        "Your Password should contain at least 6 digits and at most 16 digits"
      );
      return;
    } else if (password1 !== password2) {
      setMessage("The two passwords are not identical");
      return;
    }

    if (password2.length === 0) {
      setMessage("You should repeat the password");
      return;
    } else if (password2.length < 6 || !password2.length > 16) {
      setMessage(
        "Your Confirm Password should contain at least 6 digits and at most 16 digits"
      );
      return;
    } else if (password1 !== password2) {
      setMessage("The two passwords are not identical");
      return;
    } else {
      setMessage("You are logged in successfully");
      return;
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
       <View style={styles.container}>
      {/* Title */}
      <View style={styles.title}>
        <Text style={styles.titleText}>Register</Text>
        <Text style={styles.titleSpan}>Please register to continue</Text>
      </View>
      <ScrollView style={styles.form} contentContainerStyle={{ flexGrow: 1 }}>
        <View>
          <Text style={styles.message}>{message}</Text>
        </View>
        {/* FULL NAME */}
        <View style={styles.formInputs}>
          <TextInput
            placeholder="Full Name"
            style={styles.formInputsText}
            onChangeText={(val) => setFullName(val)}
          />
        </View>
        {/* Country */}
        <View>
          <DropDown
          value={selectedCountry}
          data={countries}
          onSelect={onSelect}
          />
        </View>
        {/* Username */}
        <View style={styles.formInputs}>
          <TextInput
            placeholder="Username"
            style={styles.formInputsText}
            onChangeText={(val) => setUsername(val)}
          />
        </View>
        {/* Password */}
        <View style={styles.formInputs}>
          <TextInput
            placeholder="Password"
            style={styles.formInputsText}
            secureTextEntry={true}
            onChangeText={(val) => setPassword1(val)}
          />
        </View>
        {/*Repeat Password */}
        <View style={styles.formInputs}>
          <TextInput
            placeholder="Repeat Password"
            style={styles.formInputsText}
            secureTextEntry={true}
            onChangeText={(val) => setPassword2(val)}
          />
        </View>
        {/* Submit Button */}
        <TouchableOpacity onPress={submitHandler}>
          <View style={styles.submit}>
            <Text style={styles.submitText}>REGISTER</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    color: "#f5bf42",
  },
  formInputs: {
    display: "inlineBlock",
    minHeight: 52,
    backgroundColor: "#faf7f0",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 6,
    marginBottom: 20,
    width: 300
  },
  formInputsText: {
    fontSize: 12,
    fontWeight: "light",
    color: "grey",
    flex: 1
  },
  submit: {
    width: 120,
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
export default Register;
