import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
//import { db } from "../firebase-config/firebase-config";
import { useNavigation } from "@react-navigation/native";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { FlatList } from "react-native-gesture-handler";
import {db} from '../config';

export default function LoginPage() {
  const [data, setData] = useState("");
  const navigation = useNavigation();
  const db = getFirestore(db);
  const DatCollectinRef = collection(db, "User"); //database collection reference

  //inputs handle function
  const handleChangeText = (name, value) => {
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  //create user function,include firebase methods
  const add_data = async () => {
    try {
      await addDoc(DatCollectinRef, {
        email: data.email,
        name: data.name,
      });
      if (addDoc) {
        ToastAndroid.show("successfully submited!", ToastAndroid.SHORT); //application toast message
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
          marginTop: 5,
          marginBottom: 5,
          textAlign: "center",
        }}
      >
        Welcome to the Restaurant 
        Lounge 171
      </Text>
      
      <Image
        source={require('../assets/13.jpg')} 
        style={styles.image}
      />
     
      <Image
        source={require('../assets/11.jpg')}
        style={styles.image}
      />
      <Image
        source={require('../assets/7.jpg')}
        style={styles.image}
      />
       <TouchableOpacity
        style={{
          marginTop: 5,
          backgroundColor: "#d4ac0d",
          height: 40,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 7,
        }}
        onPress={() => navigation.navigate("Cus View Menu")}
        underlayColor="#0084fffa"
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
          View Menu Details
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 5,
          backgroundColor: "#d4ac0d",
          height: 40,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 7,
        }}
        onPress={() => navigation.navigate("Add Order")}
        underlayColor="#0084fffa"
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
          Add Your Order
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 5,
          backgroundColor: "#d4ac0d",
          height: 40,
          marginBottom: 20,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 7,
        }}
        onPress={() => navigation.navigate("View Order")}
        underlayColor="#0084fffa"
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
          View Your Order Details
        </Text>
      </TouchableOpacity>
     
</View>
</ScrollView>
  )
      } 

const styles = StyleSheet.create({
  text: {
      marginTop: 5,
    color: "#0D0140",
    marginVertical: 5,
    fontWeight: "bold",
    fontSize: 15,
  },
  image: {
      width: 300,
      height: 150,
      align: "center",
      marginLeft: 50,
    },
  button: {
    marginTop: 15,
    backgroundColor: "#448AFF",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
  },
});
