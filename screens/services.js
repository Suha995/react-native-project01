import { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import imagesPath from "../constants/imagesPath";
import countries from "../constants/countries";


function DropDown({ data, value, onSelect }) {
  // data as prop
  const [isDropped, setIsDropped] = useState(false);
  const [filteredData, setFillteredData] = useState(data);
 

  //here i need to use onSelect// we need to add the filter also// i think about the conditional rendering
  function onSearch(val) {
    const found = data.filter((item) =>
      item.name.toLowerCase().includes(val.toLowerCase())
    );
    if (found.length >= 0) {
      onSelect(null);
    } 
    // console.log(found);
    setFillteredData(found);
    console.log(filteredData);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.dropDownStyle,
          isDropped
            ? null
            : { borderBottomLeftRadius: 6, borderBottomRightRadius: 6 },
        ]}
        onPress={() => setIsDropped(!isDropped)}
      >
        <Text style={styles.dropDownTitle}>
          {/* {!!value ? value?.name : "Example : Jordan"} */}
          {value ? value.name : "Example : Jordan"}
        </Text>
        <Image source={imagesPath.iconDropDown2} style={styles.icon}></Image>
      </TouchableOpacity>

      {isDropped && (
        <View style={styles.listItemsContainer}>
          <TextInput
            placeholder="search..."
            style={styles.searchText}
            onChangeText={(val) => onSearch(val)}
          />
          <ScrollView contentContainerStyle={{ flexGrow: 1}} showsVerticalScrollIndicator={false}>
            {filteredData.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    onSelect(item);
                    setFillteredData(data);
                    setIsDropped(false);
                  }}
                >
                  {value ? (
                    <Text
                      style={[
                        styles.listItemText,
                        value.id === item.id
                          ? { backgroundColor: "#ddd" }
                          : null,
                      ]}
                    >
                      {item.name}
                    </Text>
                  ) : (
                    <Text
                      style={[
                        styles.listItemText
                      ]}
                    >
                      {item.name}
                    </Text>
                  )}
                 
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      )}
    </View>
  );
}

const Services = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const onSelectCountry = (item) => {
    setSelectedCountry(item);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={[styles.wrapper]}>
        <Text style={{ marginLeft: 20, letterSpacing: 0 }}>
          Choose a Country
        </Text>
        <DropDown
          data={countries}
          value={selectedCountry}
          onSelect={onSelectCountry}
        />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 5,
  },
  container: {
    paddingHorizontal: 5,
  },
  dropDownStyle: {
    backgroundColor: "#faf7f0",
    padding: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    minHeight: 42,
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#ddd",
    // marginBottom: 20,
    // marginBottom: 0
  },
  dropDownTitle: {
    color: "grey",
    fontSize: 12,
  },
  icon: {
    width: 10,
    height: 10,
    marginTop: 5,
  },
  listItemsContainer: {
    backgroundColor: "#faf7f0",
    marginBottom: 20,
    height: 200,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    borderLeftColor: "#ddd",
    borderLeftWidth: 1,
    borderRightColor: "#ddd",
    borderRightWidth: 1,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    padding: 10,
  },
  listItemText: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    minHeight: 42,
    borderBottomWidth: 1,
    borderBottomColor: "#dedede",
  },
  searchText: {
    // width: "95%",
    borderWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 6,
    minHeight: 42,
    marginBottom: 10
  },
});

export default Services;
