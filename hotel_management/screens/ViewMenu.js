import {
    StyleSheet,Text,View,TouchableOpacity,FlatList,ToastAndroid,} 
    from "react-native";
  import React, { useState, useEffect } from "react";
  import { useNavigation } from "@react-navigation/native";
  import { db } from "../firebase-config/firebase-config";
  import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
  
  export default function ViewMenu() {
    const [getData, setGetData] = useState("");
    const navigation = useNavigation();
    const DatCollectinRef = collection(db, "MenuItems"); //firebase databse reference
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
    const deleteMenu = async (id) => {
      try {
        const UserDoc = doc(db, "MenuItems", id);
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
            marginTop: 50,
            textAlign: "center",
          }}
        >
          Menu List
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
              <Text style={styles.text}>Item Code : {item.ItemCode}</Text>
              <Text style={styles.text}>Item Name : {item.ItemName}</Text>
              <Text style={styles.text}>Category : {item.Category}</Text>
              <Text style={styles.text}>Unit Price : {item.UnitPrice}</Text>
              <Text style={styles.text}>Date : {item.Date}</Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "flex-end",
                }}
              >
                {/* update button */}
                <TouchableOpacity
                  style={{
                    marginTop: 15,
                    flex: 0.6,
                    backgroundColor: "#d4ac0d",
                    marginHorizontal: 5,
                    height: 30,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 10,
                  }}
                  activeOpacity={2}
                  //pass data to another page using usenavigate params for update user
                  onPress={() => navigation.navigate("Update Menu", { item })}
                  underlayColor="#0084fffa"
                >
                  <Text style={{ fontSize: 15, color: "#fff" }}>Update Menu Details</Text>
                </TouchableOpacity>
                {/* delete button */}
                <TouchableOpacity
                  style={{
                    marginTop: 15,
                    flex: 0.6,
                    backgroundColor: "#d4ac0d",
                    marginHorizontal: 5,
                    height: 30,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 10,
                  }}
                  activeOpacity={2}
                  onPress={() => deleteMenu(item.id)}
                  underlayColor="#0084fffa"
                >
                  <Text style={{ fontSize: 15, color: "#fff" }}>Delete Menu Details</Text>
                </TouchableOpacity>
              </View>
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
      backgroundColor: "#d4ac0d",
      height: 40,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 7,
    },
  });
  