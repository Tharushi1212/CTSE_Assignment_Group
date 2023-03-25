import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity,
    ToastAndroid,
  } from "react-native";
  import React, { useState, useEffect } from "react";
  import { db } from "../firebase-config/firebase-config";
  import { useNavigation } from "@react-navigation/native";
  import {
    collection,
    getDocs,
    updateDoc,
    getDoc,
    deleteDoc,
    doc,
  } from "firebase/firestore";
  
  export default function UpdateOrderDetails({ route }) {
    const { item } = route.params;
    const id = item.id;
    const [data, setData] = useState("");
    const navigation = useNavigation();
    const initialState = {
        Cus_Name: "",
      Cus_NIC: "",
      Cus_Contact: "",
      Cus_Email: "",
      Cus_Address: "",
      Item_Code: "",
      Item_Name: "",
      Price: "",
      Qty: "",
      Order_Date: "",
    };
  
          
    useEffect(() => {
      const Updateorder = async () => {
        try {
          const docRef = await getDoc(doc(db, "OrderDetails", id));
          // console.log("Document update data:", docRef.data());
          setData({ ...docRef.data(), id: docRef.id });
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      };
  
      Updateorder();
    }, []);
  
    const handleChangeText = (Cus_Name, value) => {
      setData((prevState) => ({ ...prevState, [Cus_Name]: value }));
    };
  
    const UpdateMenuItems = async () => {
      try {
        await updateDoc(doc(db, "OrderDetails", id), {
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
        if (updateDoc) {
          ToastAndroid.show("Updated successfully!", ToastAndroid.SHORT);
          navigation.navigate("View Order");
        }
      } catch (e) {
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
            color: "black",
            fontWeight: "bold",
            fontSize: 30,
            marginTop: 10,
            textAlign: "center",
          }}
        >
          Update Order Details
        </Text>
        <View
          style={{
            margin: 5,
            borderBottomWidth: 1,
            borderColor: "#BDBDBD",
            padding: 10,
          }}
        >
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
            value={data.Cus_Name}
            onChangeText={(val) => handleChangeText("Cus_Name", val)}
          ></TextInput>

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
            value={data.Cus_NIC}
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
            value={data.Cus_Contact}
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
            value={data.Cus_Email}
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
            value={data.Item_Code}
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
            value={data.Item_Name}
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
            value={data.Qty}
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
            value={data.Order_Date}
            onChangeText={(val) => handleChangeText("Order_Date", val)}
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
  