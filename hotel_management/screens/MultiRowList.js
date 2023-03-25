import React from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

  // import { useNavigation } from "@react-navigation/native";
  // import { db } from "../firebase-config/firebase-config";
  // import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
  // import { firebase } from "../config";

  
const data = [
  {
    title: 'Restaurant Managers',
    items: [
      { id: 1, text: 'General Manager' },
      { id: 2, text: 'Kitchen Manager' },
    ]
  },
  {
    title: 'Restaurant supervisors',
    items: [
      { id: 4, text: 'Food & Beverage' },
      { id: 5, text: 'Cashier' },
      { id: 6, text: 'Suppliers' }
    ]
  },
  {
    title: 'Restaurant waiters',
    items: [
      { id: 7, text: 'Food Supplier' },
      { id: 8, text: 'Table arrangement' },
      { id: 9, text: 'Event Handling' }
    ]
  },
  {
    title: 'Restaurant chefs',
    items: [
      { id: 7, text: 'Execute Chef' },
      { id: 8, text: 'Sous Chef' },
      { id: 9, text: 'Pastry Chef' }
    
    ]
  }
];

const MultiRowList = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.text}</Text>
    </View>
  );

  const renderList = ({ item }) => (
    <View style={styles.listContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <FlatList
        data={item.items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
      />
    </View>
  );

  return (
    
    <View style={styles.container}>
        
      <Text style={{fontSize:25,marginBottom:20,marginTop:0,fontWeight: 'bold'}}>Restaurant Staff Position Details</Text>
     
      <FlatList
        data={data}
        renderItem={renderList}
        keyExtractor={(item) => item.title}
      />
      <TouchableOpacity
            style={{
                marginTop: 5,
                flex: 0.4,
                backgroundColor: "tomato",
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
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    marginBottom: 50,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  item: {
    width:120,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    height: 100,
    backgroundColor: '#f4d03f',
  },
  itemText: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default MultiRowList;