import {
  StyleSheet,Text,View,TextInput,Image,TouchableOpacity,ToastAndroid,}
   from "react-native";
import React, { useState, useEffect } from "react";
//import { db } from "../firebase-config/firebase-config";
import { useNavigation } from "@react-navigation/native";
import {
  collection,
  getDocs,
  updateDoc,
  getDoc,
  deleteDoc,
  doc,
  getFirestore,
} from "firebase/firestore";
import {db} from "../config";
import { ScrollView } from "react-native-gesture-handler";

export default function UpdateMenuItems({ route }) {
  const { item } = route.params;
  const id = item.id;
  const [data, setData] = useState("");
  const db = getFirestore(db);
  const navigation = useNavigation();
  const initialState = {
    ItemCode: "",
    ItemName: "",
    Category: "",
    UnitPrice: "",
    Date: "",
  };

  useEffect(() => {
    const UpdateMenu = async () => {
      try {
        const docRef = await getDoc(doc(db, "MenuItems", id));
        // console.log("Document update data:", docRef.data());
        setData({ ...docRef.data(), id: docRef.id });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    };

    UpdateMenu();
  }, []);

  const handleChangeText = (ItemName, value) => {
    setData((prevState) => ({ ...prevState, [ItemName]: value }));
  };

  const UpdateMenuItems = async () => {
    try {
      await updateDoc(doc(db, "MenuItems", id), {
        ItemCode: data.ItemCode,
        ItemName: data.ItemName,
        Category: data.Category,
        UnitPrice: data.UnitPrice,
        Date: data.Date,
      });
      if (updateDoc) {
        ToastAndroid.show("Updated successfully!", ToastAndroid.SHORT);
        navigation.navigate("View Menu");
      }
    } catch (e) {
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
          color: "black",
          fontWeight: "bold",
          fontSize: 30,
          marginTop: 50,
          textAlign: "center",
        }}
      >
        Update Menu Details
      </Text>
      <View
        style={{
          margin: 5,
          borderBottomWidth: 1,
          borderColor: "#BDBDBD",
          padding: 10,
        }}
      >
        <Text style={styles.text}>Item Code</Text>
        <TextInput
          style={{
            borderColor: "#d4ac0d",
            borderWidth: 1.5,
            borderRadius: 10,
            padding: 5,
            paddingLeft: 10,
          }}
          keyboardType="ItemCode"
          placeholder="Item Code"
          value={data.ItemCode}
          onChangeText={(val) => handleChangeText("ItemCode", val)}
        ></TextInput>

        <Text style={styles.text}>Item Name</Text>
        <TextInput
          style={{
            borderColor: "#d4ac0d",
            borderWidth: 1.5,
            borderRadius: 10,
            padding: 5,
            paddingLeft: 10,
          }}
          placeholder="Item Name"
          value={data.ItemName}
          onChangeText={(val) => handleChangeText("ItemName", val)}
        ></TextInput>

<Text style={styles.text}>Category</Text>
        <TextInput
          style={{
            borderColor: "#d4ac0d",
            borderWidth: 1.5,
            borderRadius: 10,
            padding: 5,
            paddingLeft: 10,
          }}
          keyboardType="Category"
          placeholder="Category"
          value={data.Category}
          onChangeText={(val) => handleChangeText("Category", val)}
        ></TextInput>

<Text style={styles.text}>Unit Price</Text>
        <TextInput
          style={{
            borderColor: "#d4ac0d",
            borderWidth: 1.5,
            borderRadius: 10,
            padding: 5,
            paddingLeft: 10,
          }}
          keyboardType="UnitPrice"
          placeholder="Unit Price"
          value={data.UnitPrice}
          onChangeText={(val) => handleChangeText("UnitPrice", val)}
        ></TextInput>

<Text style={styles.text}>Date</Text>
        <TextInput
          style={{
            borderColor: "#d4ac0d",
            borderWidth: 1.5,
            borderRadius: 10,
            padding: 5,
            paddingLeft: 10,
          }}
          keyboardType="Date"
          placeholder="Date"
          value={data.Date}
          onChangeText={(val) => handleChangeText("Date", val)}
        ></TextInput>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={2}
          onPress={() => UpdateMenuItems()}
          underlayColor="#0084fffa"
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
            Update Menu Details
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
          onPress={() => navigation.navigate("Home Page")}
          underlayColor="#0084fffa"
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
            Back To Home Page
          </Text>
        </TouchableOpacity>
        <Image
        source={require('../assets/19.jpg')}
        style={styles.image}
      />
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
    fontSize: 20,
  },
  image: {
      marginTop:50,
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
