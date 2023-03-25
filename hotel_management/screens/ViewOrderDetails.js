import {StyleSheet,Text,View,TouchableOpacity,FlatList,ToastAndroid,} 
    from "react-native";
  import React, { useState, useEffect } from "react";
  import { useNavigation } from "@react-navigation/native";
  //import { db } from "../firebase-config/firebase-config";
  import { collection, getDocs, doc, deleteDoc, getFirestore } from "firebase/firestore";
  import {db} from "../config";
  
  export default function ViewOrderDetails() {
    const [getData, setGetData] = useState("");
    const navigation = useNavigation();
    const db = getFirestore(db);
    const DatCollectinRef = collection(db, "OrderDetails"); //firebase databse reference
    const [ignored, forceUpdate] = React.useReducer((x) => x + 1, 0); //the method for refresh functions
  
    useEffect(() => {
      //fetch the all data from firebase and set it to usestate, this firebase method
      const getAllData = async () => {
        const data = await getDocs(DatCollectinRef);
        setGetData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        forceUpdate();
      };
      getAllData();
    }, [ignored]);
  
    //delete users from datasase
    const deleteorder = async (id) => {
      try {
        const UserDoc = doc(db, "OrderDetails", id);
        await deleteDoc(UserDoc);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      ToastAndroid.show("successfully Deleted!", ToastAndroid.SHORT);
      forceUpdate();
    };
  
    return (
      <View>
        <Text
          style={{
            color: "#0D0140",
            fontWeight: "bold",
            fontSize: 30,
            marginTop: 40,
            textAlign: "center",
          }}
        >
          Order Details
        </Text>
        {/* store feched data in list using react native flatlist */}
        <FlatList
          style={{
            margin: 5,
            height: "95%",
          }}
          data={getData}
          renderItem={({ item }) => (
            <View
              style={{
                margin: 5,
                backgroundColor: "#fff",
                padding: 10,
                borderRadius: 15,
                elevation: 10,
              }}
            >

          <Text style={styles.text}>Item Code : {item.Cus_Name}</Text>
              <Text style={styles.text}>Item Name : {item.Cus_NIC}</Text>
              <Text style={styles.text}>Category : {item.Cus_Contact}</Text>
              <Text style={styles.text}>Unit Price : {item.Cus_Email}</Text>
              <Text style={styles.text}>Date : {item.Cus_Address}</Text>
              <Text style={styles.text}>Item Code : {item.Item_Code}</Text>
              <Text style={styles.text}>Item Name : {item.Item_Name}</Text>
              <Text style={styles.text}>Category : {item.Price}</Text>
              <Text style={styles.text}>Unit Price : {item.Qty}</Text>
              <Text style={styles.text}>Date : {item.Order_Date}</Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "flex-end",
                }}
              >
                
                
              </View>
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

            </View>
            
          )}
        ></FlatList>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    text: {
      color: "#0D0140",
      marginVertical: 5,
      fontSize: 20,
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
  