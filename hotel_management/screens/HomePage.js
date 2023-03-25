import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
//import { db } from "../firebase-config/firebase-config";
import { useNavigation } from "@react-navigation/native";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { FlatList } from "react-native-gesture-handler";
import {db} from "../config";

export default function HomePage() {
  const [data, setData] = useState("");
  const navigation = useNavigation();
  const db = getFirestore(db);
  const DatCollectinRef = collection(db, "User"); //database collection reference

  return (
  <ScrollView>
    <View style={{ flex: 1, top: 20 }}>
      <Text
        style={{
          color: "#0D0140",
          fontWeight: "bold",
          fontSize: 30,
          marginTop: 55,
          marginBottom: 5,
          textAlign: "center",
        }}
      >
        Welcome to the Restaurant 
        Lounge 171
      </Text>
      
      <Image
        source={require('../assets/1.jpg')} 
        style={styles.image}
      />
     
      <Image
        source={require('../assets/15.jpg')}
        style={styles.image}
      />
      <Image
        source={require('../assets/16.jpg')}
        style={styles.image}
      />
       <TouchableOpacity
        style={{
          marginTop: 15,
          backgroundColor: "#d4ac0d",
          height: 40,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 7,
        }}
        onPress={() => navigation.navigate("Tab View")}
        underlayColor="#0084fffa"
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
          View Menu Details
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 15,
          backgroundColor: "#d4ac0d",
          height: 40,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 7,
        }}
        onPress={() => navigation.navigate("Add Menu")}
        underlayColor="#0084fffa"
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
          Add Menu Items
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 15,
          backgroundColor: "#d4ac0d",
          height: 40,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 7,
        }}
        onPress={() => navigation.navigate("View Order Details")}
        underlayColor="#0084fffa"
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
          View Order Details
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 15,
          backgroundColor: "#d4ac0d",
          height: 40,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 7,
        }}
        onPress={() => navigation.navigate("MultiRowList")}
        underlayColor="#0084fffa"
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
          View Staff Details
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
    backgroundColor: "#d4ac0d",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
  },
});
