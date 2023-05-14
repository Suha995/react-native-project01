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
  Keyboard,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

function Register() {
  const [fullName, setFullName] = useState(""); //object
  const [fullNameError, setFullNameError] = useState("");
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [password1, setPassword1] = useState("");
  const [PasswordError1, setPasswordError1] = useState("");
  const [password2, setPassword2] = useState("");
  const [passwordError2, setPasswordError2] = useState("");
  const [message, setMessage] = useState("");
  const countries = [
    { id: 1, name: "Palestine" },
    { id: 2, name: "Egypt" },
    { id: 3, name: "Canada" },
    { id: 3, name: "Australia" },
    { id: 4, name: "Ireland" },
  ];
  const [selectedCountry, setSelectedCountry] = useState(null); //object
  const [countryError, setCountryError] = useState("");

  const onSelect = (item) => {
    setSelectedCountry(item);
  };

  //The problem was with the else statements and absence of return
  const submitHandler = () => {
    if (fullName === "") {
      setFullNameError("Your full name is empty");
      return;
    }

    if (selectedCountry === null) {
      setCountryError("You should select a country");
      return;
    } else {
      setCountryError("");
    }

    if (username === "") {
      setUsernameError("Your username is empty!");
      return;
    } else if (username.length < 4) {
      setUsernameError("Your username should be more than 4 digits");
      return;
    }

    if (password1.length === 0) {
      setPasswordError1("Your password is empty!");
      return;
    } else if (password1.length < 6 || !password1.length > 16) {
      setPasswordError1(
        "Your Password should contain at least 6 digits and at most 16 digits"
      );
      return;
    } else if (password1 !== password2) {
      setPasswordError1("The two passwords are not identical");
      return;
    }

    if (password2.length === 0) {
      setPasswordError2("You should repeat the password");
      return;
    } else if (password2.length < 6 || !password2.length > 16) {
      setPasswordError2(
        "Your Confirm Password should contain at least 6 digits and at most 16 digits"
      );
      return;
    } else if (password1 !== password2) {
      setPasswordError2("The two passwords are not identical");
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
        <KeyboardAwareScrollView
          style={styles.form}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View>
            <Text style={styles.message}>{message}</Text>
          </View>
          {/* FULL NAME */}
          <Text style={{ color: "red", fontSize: 10 }}>{fullNameError}</Text>
          <View style={styles.formInputs}>
            <TextInput
              placeholder="Full Name"
              style={styles.formInputsText}
              onChangeText={(val) => setFullName(val)}
              onBlur={() => {
                if (fullName === "") {
                  setFullNameError("Your full name is empty");
                } else if (fullName.length < 4) {
                  setFullNameError(
                    "Your username should be more than 4 digits"
                  );
                } else {
                  setFullNameError("");
                }
              }}
            />
          </View>
          {/* Country */}
          <Text style={{ color: "red", fontSize: 10 }}>{countryError}</Text>
          <View>
            <DropDown
              value={selectedCountry}
              data={countries}
              onSelect={onSelect}
            />
          </View>
          {/* Username */}
          <Text style={{ color: "red", fontSize: 10 }}>{usernameError}</Text>
          <View style={styles.formInputs}>
            <TextInput
              placeholder="Username"
              style={styles.formInputsText}
              onChangeText={(val) => setUsername(val)}
              onBlur={() => {
                if (username === "") {
                  setUsernameError("Your username is empty!");
                } else if (username.length < 4) {
                  setUsernameError(
                    "Your username should be more than 4 digits"
                  );
                } else {
                  setUsernameError("");
                }
              }}
            />
          </View>
          {/* Password */}
          <Text style={{ color: "red", fontSize: 10 }}>{PasswordError1}</Text>
          <View style={styles.formInputs}>
            <TextInput
              placeholder="Password"
              style={styles.formInputsText}
              secureTextEntry={true}
              onChangeText={(val) => setPassword1(val)}
              onBlur={() => {
                if (password1.length === 0) {
                  setPasswordError1("Your password is empty!");
                } else if (password1.length < 6 || !password1.length > 16) {
                  setPasswordError1(
                    "Your Password should contain at least 6 digits and at most 16 digits"
                  );
                } else {
                  setPasswordError1("");
                }
              }}
            />
          </View>
          {/*Repeat Password */}
          <Text style={{ color: "red", fontSize: 10 }}>{passwordError2}</Text>
          <View style={styles.formInputs}>
            <TextInput
              placeholder="Repeat Password"
              style={styles.formInputsText}
              secureTextEntry={true}
              onChangeText={(val) => setPassword2(val)}
              onBlur={() => {
                if (password2.length === 0) {
                  setPasswordError2("You should repeat the password");
                } else if (password2.length < 6 || !password2.length > 16) {
                  setPasswordError2(
                    "Your Confirm Password should contain at least 6 digits and at most 16 digits"
                  );
                } else if (password1 !== password2) {
                  setPasswordError2("The two passwords are not identical");
                } else {
                  setPasswordError2("");
                }
              }}
              onFocus={() => {
                if (password1.length === 0) {
                  setPasswordError1("You should enter this password first");
                } else {
                  setPasswordError1("");
                }
              }}
            />
          </View>
          {/* Submit Button */}
          <TouchableOpacity onPress={submitHandler}>
            <View style={styles.submit}>
              <Text style={styles.submitText}>REGISTER</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
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
    marginBottom: 10,
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
    width: 300,
  },
  formInputsText: {
    fontSize: 12,
    fontWeight: "light",
    color: "grey",
    flex: 1,
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
