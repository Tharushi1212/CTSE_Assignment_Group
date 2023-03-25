import {

  StyleSheet,Text,View,TextInput,Image,Picker,TouchableOpacity,ScrollView,ToastAndroid,}
from "react-native";
import React, { useState } from "react";
//import { db } from "../firebase-config/firebase-config";
import { useNavigation } from "@react-navigation/native";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import {db} from '../config';
export default function AddMenuItems() {
  const [data, setData] = useState("");
  const navigation = useNavigation();
  const db = getFirestore(db);
  const DatCollectinRef = collection(db, "MenuItems"); //database collection reference

  //inputs handle function
  const handleChangeText = (ItemName, value) => {
    setData((prevState) => ({ ...prevState, [ItemName]: value }));
  };


    StyleSheet,Text,View,TextInput,Image,Picker,TouchableOpacity,ScrollView,ToastAndroid,}
  from "react-native";
  import React, { useState } from "react";
  //import { db } from "../firebase-config/firebase-config";
  import { useNavigation } from "@react-navigation/native";
  import { collection, addDoc, getFirestore } from "firebase/firestore";
  import {db} from "../config";
  export default function AddMenuItems() {
    const [data, setData] = useState("");
    const navigation = useNavigation();

    const db = getFirestore(db);
    const DatCollectinRef = collection(db, "MenuItems"); //database collection reference
  
    //inputs handle function
    const handleChangeText = (ItemName, value) => {
      setData((prevState) => ({ ...prevState, [ItemName]: value }));
    };

  
  //create user function,include firebase methods
  const add_data = async () => {
    try {
      await addDoc(DatCollectinRef, {
        ItemCode: data.ItemCode,
        ItemName: data.ItemName,
        Category: data.Category,
        UnitPrice: data.UnitPrice,
        Date: data.Date,

      });
      if (addDoc) {
        ToastAndroid.show("Successfully added new items to the menu!", ToastAndroid.SHORT); //application toast message
      }
    } catch (e) {
      //error handling
      console.error("Error adding document: ", e);
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode, errorMessage);
    }
  };

  return (
    <ScrollView>
    <View style={{ flex: 1, top: 20 }}>
      <Text
        style={{
          color: "#0D0140",
          fontWeight: "bold",
          fontSize: 30,
          marginTop: 40,
          textAlign: "center",
          marginBottom: 30
        }}
      >
        Add New Items to the Menu
      </Text>

      <Image
        source={require('../assets/25.png')} 
        style={styles.image}
      />
      {/* user data entering form start form here */}
      <View
        style={{
          margin: 5,
          borderBottomWidth: 1,
          borderColor: "#BDBDBD",
          padding: 10,
        }}
      >
        {/* lables */}
        <Text style={styles.text}>Item Code</Text>
        {/* input fields  */}
        <TextInput
          style={{
            borderColor: "#d4ac0d",
            borderWidth: 1.5,
            borderRadius: 10,
            padding: 5,
            paddingLeft: 10,
          }}
          keyboardType="ItemCode"
          placeholder="Enter Item Code"
          onChangeText={(val) => handleChangeText("ItemCode", val)}
        ></TextInput>
        {/* lables */}
        <Text style={styles.text}>Item Name</Text>
        {/* input fields  */}
        <TextInput
          style={{
            borderColor: "#d4ac0d",
            borderWidth: 1.5,
            borderRadius: 10,
            padding: 5,
            paddingLeft: 10,
          }}
          placeholder="Enter Item Name"
          onChangeText={(val) => handleChangeText("ItemName", val)}
        ></TextInput>
        

<Text style={styles.text}>Category</Text>
        {/* input fields  */}
        <TextInput
          style={{
            borderColor: "#d4ac0d",
            borderWidth: 1.5,
            borderRadius: 10,
            padding: 5,
            paddingLeft: 10,
          }}
          placeholder="Enter Category"
          onChangeText={(val) => handleChangeText("Category", val)}
        ></TextInput>

<Text style={styles.text}>Unit Price</Text>
        {/* input fields  */}
        <TextInput
          style={{
            borderColor: "#d4ac0d",
            borderWidth: 1.5,
            borderRadius: 10,
            padding: 5,
            paddingLeft: 10,
          }}
          placeholder="Enter Unit Price"
          onChangeText={(val) => handleChangeText("UnitPrice", val)}
        ></TextInput>

<Text style={styles.text}>Date</Text>
        {/* input fields  */}
        <TextInput
          style={{
            borderColor: "#d4ac0d",
            borderWidth: 1.5,
            borderRadius: 10,
            padding: 5,
            paddingLeft: 10,
          }}
          placeholder="Enter Date"
          onChangeText={(val) => handleChangeText("Date", val)}
        ></TextInput>

        {/* submit button */}
        <TouchableOpacity
          style={styles.button}
          activeOpacity={2}
          onPress={() => add_data()}
          underlayColor="#0084fffa"
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
            Add New Menu Item
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginHorizontal: 15 }}>
        {/* Button */}
        <TouchableOpacity
          style={{
            marginTop: 15,
            backgroundColor: "#d4ac0d",
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 7,
          }}
          onPress={() => navigation.navigate("Home Page")}
          underlayColor="#0084fffa"
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
            Back to Home Page
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
        
}

const styles = StyleSheet.create({
  text: {
    color: "#0D0140",
    marginVertical: 5,
    fontWeight: "bold",
    fontSize: 15,
  },
  image: {
    width: 300,
    height: 250,
    align: "center",
    marginLeft: 50,
  },
  button: {
    marginTop: 15,
    backgroundColor: "#d4ac0d",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
  },
});

