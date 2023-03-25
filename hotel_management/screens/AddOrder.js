import {StyleSheet,Text,View,TextInput,TouchableOpacity,ToastAndroid,}
 from "react-native";
  import React, { useState } from "react";
  //import { db } from "../firebase-config/firebase-config";
  import { useNavigation } from "@react-navigation/native";
  import { collection, addDoc, getFirestore } from "firebase/firestore";
import { FlatList } from "react-native-gesture-handler";
import {db} from "../config";
  
  export default function AddOrder() {
    const [data, setData] = useState("");
    const navigation = useNavigation();
    const db = getFirestore(db);
    const DatCollectinRef = collection(db, "OrderDetails"); //database collection reference
  
    //inputs handle function
    const handleChangeText = (Cus_Name, value) => {
      setData((prevState) => ({ ...prevState, [Cus_Name]: value }));
    };
  
    //create user function,include firebase methods
    const add_data = async () => {
      try {
        await addDoc(DatCollectinRef, {
          Cus_Name: data.Cus_Name,
          Cus_NIC: data.Cus_NIC,
          Cus_Contact: data.Cus_Contact,
          Cus_Email: data.Cus_Email,
        //   Cus_Address: data.Cus_Address,
          Item_Code: data.Item_Code,
          Item_Name: data.Item_Name,
        //   Price: data.Price,
          Qty: data.Qty,
          Order_Date: data.Order_Date,
          
        });
        if (addDoc) {
          ToastAndroid.show("Successfully added your order!", ToastAndroid.SHORT); //application toast message
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

      <View style={{ flex: 1, top: 20 }}>
        
        <Text
          style={{
            color: "#0D0140",
            fontWeight: "bold",
            fontSize: 30,
            marginTop: 5,
            textAlign: "center",
          }}
        >
          Add Your Order
        </Text>
        
        {/* user data entering form start form here */}
        <View
          style={{
            margin: 5,
            borderBottomWidth: 1,
            borderColor: "#d4ac0d",
            padding: 10,
          }}
        >
          {/* lables */}
          <Text style={styles.text}>Name</Text>
          {/* input fields  */}
          <TextInput
            style={{
              borderColor: "#d4ac0d",
              borderWidth: 1.5,
              borderRadius: 10,
              padding: 5,
              paddingLeft: 10,
            }}
            keyboardType="Cus_Name"
            placeholder="Enter Customer Name"
            onChangeText={(val) => handleChangeText("Cus_Name", val)}
          ></TextInput>
          {/* lables */}
          <Text style={styles.text}>Customer NIC</Text>
          {/* input fields  */}
          <TextInput
            style={{
              borderColor: "#d4ac0d",
              borderWidth: 1.5,
              borderRadius: 10,
              padding: 5,
              paddingLeft: 10,
            }}
            placeholder="Enter NIC"
            onChangeText={(val) => handleChangeText("Cus_NIC", val)}
          ></TextInput>
  
  <Text style={styles.text}>Contact</Text>
          {/* input fields  */}
          <TextInput
            style={{
              borderColor: "#d4ac0d",
              borderWidth: 1.5,
              borderRadius: 10,
              padding: 5,
              paddingLeft: 10,
            }}
            placeholder="Enter Contact"
            onChangeText={(val) => handleChangeText("Cus_Contact", val)}
          ></TextInput>
  
  <Text style={styles.text}>Email</Text>
          {/* input fields  */}
          <TextInput
            style={{
              borderColor: "#d4ac0d",
              borderWidth: 1.5,
              borderRadius: 10,
              padding: 5,
              paddingLeft: 10,
            }}
            placeholder="Enter Email"
            onChangeText={(val) => handleChangeText("Cus_Email", val)}
          ></TextInput>
  
 
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
            placeholder="Enter Item Code"
            onChangeText={(val) => handleChangeText("Item_Code", val)}
          ></TextInput>

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
            onChangeText={(val) => handleChangeText("Item_Name", val)}
          ></TextInput>



<Text style={styles.text}>Quantity</Text>
          {/* input fields  */}
          <TextInput
            style={{
              borderColor: "#d4ac0d",
              borderWidth: 1.5,
              borderRadius: 10,
              padding: 5,
              paddingLeft: 10,
            }}
            placeholder="Enter Quantity"
            onChangeText={(val) => handleChangeText("Qty", val)}
          ></TextInput>

<Text style={styles.text}>Order Date</Text>
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
            onChangeText={(val) => handleChangeText("Order_Date", val)}
          ></TextInput>
  
          {/* submit button */}
          <TouchableOpacity
            style={styles.button}
            activeOpacity={2}
            onPress={() => add_data()}
            underlayColor="#0084fffa"
          >
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
              Add Order Details
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginHorizontal: 15 }}>
          {/* Button */}
          
        </View>
        <View style={{ marginHorizontal: 15 }}>
          {/* Button */}
          <TouchableOpacity
            style={{
              marginTop: 5,
              backgroundColor: "#d4ac0d",
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 7,
            }}
            onPress={() => navigation.navigate("Cus Home Page")}
            underlayColor="#0084fffa"
          >
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
              Back To Home Page
            </Text>
          </TouchableOpacity>
         
        </View>
        
      </View>
      
    );
  }
  
  const styles = StyleSheet.create({
    text: {
      color: "#0D0140",
      marginVertical: 5,
      fontWeight: "bold",
      fontSize: 15,
    },
    button: {
      marginTop: 5,
      backgroundColor: "#d4ac0d",
      height: 40,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 7,
    },
  });
  