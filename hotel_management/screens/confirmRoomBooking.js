import { async } from '@firebase/util';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from '../config';
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
//import { FIRESTORE_DB } from '../config';

export default function ConfirmRoomBooking({ navigation }) {
  const [Name, setFullname] = useState('');
  const [nights, setNights] = useState();
  const [rooms, setRooms] = useState();
  const [NIC, setNic] = useState();
  const FIRESTORE_DB = getFirestore(db);

  //insert room booking details to databse
  const handleConfirmBooking = async () => {
    try {
      const docRef = addDoc(collection(FIRESTORE_DB, 'hotelRooms'), {
        Name,
        NIC,
        nights,
        rooms,
      });
      alert('Booking succesful');
      clr();
    } catch (error) {
      console.error(error.message);
    }
  };

  const clr = () => {
    Name, NIC, nights, rooms;
  };

  return (
    //add room booking view
    <ImageBackground source={hotel} resizeMode="cover" style={styles.image}>
      <View style={styles.topicContainer}>
        <Text style={styles.tituloTop}>Confirm Booking</Text>
      </View>
      <ScrollView>
        <View style={styles.container}>
          <View
            style={{
              alignItems: 'center',
              width: '90%',
              height: '100%',
              backgroundColor: ' rgba(52, 52, 52, 0.8)',
              // backgroundColor: '#F5EAEA',
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
              value={nights}
              onChangeText={(e) => setNights(e)}
            />
            <TextInput
              placeholder="Number of rooms"
              style={styles.textInput}
              value={rooms}
              onChangeText={(e) => setRooms(e)}
            />

            <View style={styles.buttonAlignment}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleConfirmBooking()}
              >
                <Text style={styles.buttonText}>Confirmm</Text>
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
  container: {
    flexGrow: 2,
  },
  titulo: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    textAlign: 'center',
  },
  tituloTop: {
    fontSize: 40,
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'Roboto Serif',
    textAlign: 'center',
    marginTop: 100,
    marginLeft: 10,
    marginRight: 10,
  },
  subtitle: {
    fontSize: 15,
    color: 'gray',
    marginTop: 20,
  },
  image: {
    height: '100%',
    width: '100%',
    flex: 1,
  },

  textInput: {
    padding: 10,
    paddingStart: 30,
    width: '80%',
    height: 50,
    marginTop: 15,
    borderRadius: 30,
    backgroundColor: '#FBFAF3',
  },
  square: {
    width: 415,
    height: 447,
    backgroundColor: 'white',
    flex: 1,
    marginTop: 100,
    justifyContent: 'flex-end',
    borderTopLeftRadius: 55,
    borderTopRightRadius: 55,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },

  buttonAlignment: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  buttonText: {
    textAlign: 'left',
    color: 'black',
    fontSize: 5,
  },
  topicContainer: {
    width: 415,
    height: 100,
    backgroundColor: '#FFBB00',
    position: 'absolute',
    top: 0,
    borderTopLeftRadius: 55,
    borderTopRightRadius: 55,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  description: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'regular',
    fontFamily: 'Roboto',
    textAlign: 'justify',
    marginLeft: 28,
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
  topicBottom: {
    fontSize: 20,
    color: 'gray',
    fontWeight: 'bold',
    fontFamily: 'Roboto Serif',
    textAlign: 'left',
    marginLeft: 28,
    marginTop: 5,
  },
  topicmid: {
    position: 'absolute',
    right: 10,
    marginTop: 40,
  },
  descriptionStyle: {
    marginTop: 0,
    marginRight: 28,
  },
  button: {
    backgroundColor: '#FFBB00',
    width: '30%',
    height: 40,
    padding: 10,
    borderRadius: 30,
    margin: 20,
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
  blur: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  topicContainer: {
    width: 415,
    height: 200,
    backgroundColor: '#FFBB00',
    top: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
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
