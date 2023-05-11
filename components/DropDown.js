import react, {useState} from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image} from "react-native";
import imagesPath from "../constants/imagesPath";


//import colors
// to build custom dropdown
function DropDown({data, value, onSelect}){ // data as prop
    const [isDropped, setIsDropped] = useState(false);
   
    return(
        <View style={styles.container}>
            <TouchableOpacity style={isDropped ? styles.dropDownStylePressed : styles.dropDownStyleNotPressed} onPress={() => setIsDropped(!isDropped)}>
                <Text style={styles.dropDownTitle}>{!!value? value?.name : "Choose an option"}</Text>
                <Image source={imagesPath.iconDropDown} style={styles.icon}></Image>
            </TouchableOpacity>
            { isDropped && <View style={styles.listItemsContainer} >
            {
                data.map( (item, index) => {
                    return(
                        <TouchableOpacity key={index}  onPress={() => {
                            onSelect(item);
                            setIsDropped(false)
                        }}>
                            <Text style={styles.listItemText}>{item.name}</Text>
                        </TouchableOpacity>
                    )
                })
            }
            </View>}
        </View>
    );
}


const styles = StyleSheet.create({
    dropDownStyleNotPressed: {
        backgroundColor: "#faf7f0",
        padding: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        minHeight: 42,
        paddingVertical: 10,
        paddingHorizontal: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
        flexDirection: "row"
    },
    dropDownStylePressed: {
        backgroundColor: "#faf7f0",
        padding: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        minHeight: 42,
        paddingVertical: 10,
        paddingHorizontal: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 0
    },
    dropDownTitle: {
        color: "grey",
        fontSize: 12
    },
    icon:{
        width: 20,
        height: 20
    },
    listItemsContainer: {
        backgroundColor: "#faf7f0",
        marginBottom: 20,
    },
    listItemText: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        minHeight: 42,
        borderBottomWidth: 1,
        borderBottomColor: "#dedede"
    }
});

export default DropDown;