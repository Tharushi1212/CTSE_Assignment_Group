import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import {
  collection,
  deleteDoc,
  doc,
  Firestore,
  getFirestore,
  onSnapshot,
  Query,
  QuerySnapshot,
  snapshotEqual,
} from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Button,
  ImageBackground,
} from 'react-native';
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import hotel from '../assets/hotelRoom.jpg';
import { FIRESTORE_DB } from '../config';
import UpdateRoomBooking from './updateRoomBooking';

export default function RoomList({ navigation }) {
  const [RoomName, setRoomName] = useState('User');
  const [price, setPrice] = useState('$8000');
  const [roomslist, setRoomList] = useState([]);
  const [rooms, setRooms] = useState('');
  const [nights, setNights] = useState('');
  const [Id, setId] = useState();

  useEffect(() => {
    viewRooms();
  }, []);

  //view room booking list details
  const viewRooms = () => {
    const roomList = collection(FIRESTORE_DB, 'hotelRooms');

    const list = onSnapshot(roomList, {
      next: (snapshot) => {
        console.log('View');
        const roomList = [];
        snapshot.docs.forEach((doc) => {
          roomList.push({
            id: doc.id,
            rooms: doc.rooms,
            nights: doc.nights,
            ...doc.data(),
          });
        });
        setRoomList(roomList);
        setId(roomList.id);
        console.log(roomList);
      },
    });
  };

  //delete room details
  const handleDelete = (id) => {
    console.log('delete', id);
    const db = getFirestore(); // Initialize the Firestore database
    const collectionRef = collection(db, 'hotelRooms'); // Get a reference to the "hotelRooms" collection
    const docRef = doc(collectionRef, id); // Get a reference to the document you want to delete
    deleteDoc(docRef)
      .then(() => {
        console.log('Document deleted successfully!');
      })
      .catch((error) => {
        console.error('Error deleting document: ', error);
      });
  };

  //update function to pass the props
  const handleUpdate = (data) => {
    navigation.navigate('UpdateRoomBooking', { ListId: data });
  };

  return (
    //view room booking list view
    <View style={styles.container}>
      <ImageBackground source={hotel} resizeMode="cover" style={styles.image}>
        <Text style={styles.tituloTop}>Previous bookings</Text>
        <ScrollView>
          {roomslist.map((roomInfo, id) => (
            <View style={styles.listItem} key={id}>
              <View>
                <Image style={styles.imageicon} source={hotel} />
              </View>
              <View>
                <Text style={{ flex: 1, marginTop: 10 }}>
                  Nights:{roomInfo.nights}
                </Text>
                <Text style={{ flex: 1 }}>Rooms:{roomInfo.rooms}</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginRight: 5,
                }}
              >
                {/* <Text>{price}</Text> */}
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => handleUpdate(roomInfo)}
                >
                  <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => handleDelete(roomInfo.id)}
                >
                  <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
            //{' '}
            // </View>
          ))}
        </ScrollView>
        <View style={styles.menuStyle}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate('LuxuryRoomInfo')}
          >
            <Text style={styles.textStyle}>Rooms</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate('ConfirmRoomBooking')}
          >
            <Text style={styles.textStyle}>+</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate('RoomList')}
          >
            <Text style={styles.textStyle}>List</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titulo: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Roboto Serif',
    textAlign: 'center',
  },
  tituloTop: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    textAlign: 'center',
    marginTop: 60,
  },
  listItem: {
    width: 390,
    height: 80,
    backgroundColor: '#EBE4C1',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },

  image: {
    flex: 1,
    justifyContent: 'center',
  },

  square: {
    width: 415,
    height: 447,
    backgroundColor: 'white',
    flex: 1,
    marginTop: 150,
    justifyContent: 'flex-end',
    borderTopLeftRadius: 55,
    borderTopRightRadius: 55,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  button: {
    backgroundColor: '#FFBB00',
    width: 50,
    height: 30,
    marginRight: 2,
    borderRadius: 30,
    marginTop: 12,
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
    paddingTop: 8,
  },
  imageicon: {
    width: 70,
    height: 50,
    borderRadius: 5,
    marginLeft: 5,
  },
  menuStyle: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 20,
    textAlign: 'center',
    justifyContent: 'space-evenly',
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
