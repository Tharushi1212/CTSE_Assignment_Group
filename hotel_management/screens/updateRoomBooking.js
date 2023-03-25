import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { getFirestore, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Button,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import { TouchableOpacity } from 'react-native';

import hotel from '../assets/hotelRoom.jpg';
import { db } from '../config';

//import { FIRESTORE_DB } from '../config';

export default function UpdateRoomBooking({ navigation, route }) {
  const listId = route.params.ListId;
  const [Name, setFullname] = useState(listId.Name);
  const [nights, setNights] = useState(listId.nights);
  const [rooms, setRooms] = useState(listId.rooms);
  const [NIC, setNic] = useState(listId.NIC);
  const FIRESTORE_DB = getFirestore(db);

  useEffect(() => {
    console.log(listId.nights, 'update page');
    //getDataFromFirestore(listId);
  }, []);

  //update room bookings
  const handleUpdateInvitation = async () => {
    try {
      await updateDoc(doc(FIRESTORE_DB, 'hotelRooms', listId.id), {
        Name,
        NIC,
        nights,
        rooms,
      });
      if (updateDoc) {
        alert('updated succesful');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancell = () => {
    setFullname(''), setNic(''), setRooms(''), setNights('');
  };

  return (
    <ImageBackground source={hotel} resizeMode="cover" style={styles.image}>
      <View style={styles.topicContainer}>
        <Text style={styles.tituloTop}>Update Booking</Text>
      </View>
      <ScrollView>
        <View style={styles.container}>
          <View
            style={{
              alignItems: 'center',
              width: '90%',
              height: '100%',
              backgroundColor: ' rgba(52, 52, 52, 0.8)',
              margin: 20,
              borderRadius: 10,
              flex: 1,
              marginTop: 100,
            }}
          >
            <TextInput
              placeholder="Name"
              style={styles.textInput}
              value={Name}
              onChangeText={(e) => setFullname(e)}
            />
            <TextInput
              placeholder="NIC"
              style={styles.textInput}
              value={NIC}
              onChangeText={(e) => setNic(e)}
            />
            <TextInput
              placeholder="Number of nights"
              style={styles.textInput}
              value={nights.toString()}
              onChangeText={(e) => setNights(e)}
            />
            <TextInput
              placeholder="Number of rooms"
              style={styles.textInput}
              value={rooms.toString()}
              onChangeText={(e) => setRooms(e)}
            />

            <View style={styles.buttonAlignment}>
              <TouchableOpacity
                style={styles.buttonCancel}
                onPress={handleCancell}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={handleUpdateInvitation}
              >
                <Text style={styles.buttonText}>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
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
  );
}

const styles = StyleSheet.create({
  container: {},
  titulo: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Roboto Serif',
    textAlign: 'center',
  },
  tituloTop: {
    fontSize: 40,
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    textAlign: 'center',
    marginTop: 100,
    marginBottom: 50,
    margin: 10,
  },
  subtitle: {
    fontSize: 15,
    color: 'gray',
    marginTop: 20,
  },

  textInput: {
    padding: 10,
    paddingStart: 30,
    width: '80%',
    height: 50,
    marginTop: 15,
    borderRadius: 20,
    backgroundColor: '#FBFAF3',
  },

  buttonAlignment: {
    display: 'flex',
    flexDirection: 'row',
  },
  buttonText: {
    textAlign: 'left',
    color: 'black',
    fontSize: 5,
  },
  image: {
    height: '100%',
    width: '100%',
    flex: 1,
  },

  topicTop: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    textAlign: 'left',
    marginLeft: 28,
    marginTop: 10,
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

  button: {
    backgroundColor: '#FFBB00',
    width: '30%',
    height: 40,
    padding: 10,
    borderRadius: 30,
    margin: 20,
  },
  buttonCancel: {
    backgroundColor: 'white',
    width: '30%',
    height: 40,
    padding: 10,
    borderRadius: 30,
    marginTop: 20,
    borderColor: '#FFBB00',
    borderWidth: 2,
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
  topicContainer: {
    width: 415,
    height: 200,
    backgroundColor: '#FFBB00',
    top: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
});
