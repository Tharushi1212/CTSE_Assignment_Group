import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  ToastAndroid,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
//import { db } from "../firebase-config/firebase-config";
import { collection, getDocs, doc, deleteDoc, getFirestore } from "firebase/firestore";
import {db} from "../config";

export default function CusViewMenu() {
  const [getData, setGetData] = useState("");
  const navigation = useNavigation();
  const db = getFirestore(db);
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
    <ScrollView>
    <View>
     
    
      <Text
        style={{
          color: "#0D0140",
          fontWeight: "bold",
          fontSize: 30,
          marginTop: 35,
          textAlign: "center",
        }}
      >
        Menu List
      </Text>
      
      <Image
        source={require('../assets/3.jpg')} 
        style={styles.image}
      />
     
      <Image
        source={require('../assets/20.jpg')}
        style={styles.image}
      />
      <Image
        source={require('../assets/6.jpg')}
        style={styles.image}
      />
      
      {/* store feched data in list using react native flatlist */}
      <FlatList
        style={{
          margin: 5,
          height: "100%",
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
              
            </View>
          </View>
        )}
      ></FlatList>
      <TouchableOpacity
          style={{
              marginTop: 15,
              flex: 0.5,
              backgroundColor: "#d4ac0d",
              marginHorizontal: 5,
              height: 30,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
          }}
          onPress={() => navigation.navigate("Cus Home Page")}
          underlayColor="#0084fffa"
        >
          <Text style={{ fontSize: 15, color: "#fff" }}>
            Back To Home Page
          </Text>
        </TouchableOpacity>
      
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "black",
    marginVertical: 5,
    fontSize: 15,
  },
  container1:{
      flex: 1,
      borderWidth:0.5,
      marginTop: 15,
      flexDirection: 'row',
      backgroundColor: "#448AFF",
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 7,
  },
  button: {
    marginTop: 15,
    backgroundColor: "#448AFF",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
  },
  image: {
      width: 250,
      height: 130,
      flexDirection: 'row',
      alignItems: "center",
      marginLeft: 80,
    },
  button1: {
      marginTop: 5,
      marginBottom: 10,
      flex: 1,
      flexDirection: 'row',
      backgroundColor: "tomato",
      marginHorizontal: 5,
      height: 30,
      width: 150,
      borderRadius: 10,
      // marginTop:180,
      // borderWidth:0.5,
      // marginTop: 15,
      // flexDirection: 'row',
      // backgroundColor: "#448AFF",
      // height: 50,
      // justifyContent: "center",
      // alignItems: "center",
      // borderRadius: 7,
  },
});
