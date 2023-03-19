import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
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

import hotel from '../assets/hotelRoom.jpg';

export default function LakeRoomInfo({ navigation }) {
  const [userRole, setUserRole] = useState('User');
  const [Fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [regCode, setRegCode] = useState('');
  const [password, setPassword] = useState('');

  const registerUser = () => {
    // const URL = `http://172.28.6.14:8000/user/signup`;
    // const payload = {
    //   Fullname,
    //   email,
    //   regCode,
    //   password,
    //   userRole,
    // };
    // axios
    //   .post(URL, payload)
    //   .then((res) => {
    //     navigation.navigate('Login');
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     Alert.alert(
    //       'Error',
    //       'Registration Unsuccessful',
    //       [{ text: 'Check Again' }],
    //       { cancelable: false }
    //     );
    //   });
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={hotel} resizeMode="cover" style={styles.image}>
        <Text style={styles.tituloTop}>Select Your Desire Room</Text>

        <View style={styles.square}>
          <View style={styles.topicContainer}>
            <Text style={styles.topicTop}>Lake View Rooms</Text>
            <Text style={styles.topicmid}>$6000</Text>
            <Text style={styles.topicBottom}>Top rated</Text>
          </View>
          <View style={styles.descriptionStyle}>
            <Text style={styles.description}>
              Offering striking views of the Indian Ocean, Beira Lake and the
              city beyond, our 500 guest rooms and suites, and 41 serviced
              apartments are tastefully furnished to complement the
              urban-oceanside location and are among the largest in Colombo.
            </Text>
          </View>
          <View style={styles.buttonAlignment}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('ConfirmRoomBooking')}
            >
              <Text style={styles.buttonText}>Book</Text>
            </TouchableOpacity>
          </View>
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
    fontFamily: 'Roboto Serif',
    textAlign: 'center',
    marginTop: 60,
  },
  subtitle: {
    fontSize: 15,
    color: 'gray',
    marginTop: 20,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
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
    marginTop: 150,
    justifyContent: 'flex-end',
    borderTopLeftRadius: 55,
    borderTopRightRadius: 55,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  button: {
    backgroundColor: '#5D3FD3',
    width: '30%',
    height: 40,
    padding: 10,
    borderRadius: 30,
    marginTop: 20,
    // position: 'absolute',
    // right: 0,
  },
  buttonAlignment: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
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
    fontFamily: 'Roboto Serif',
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
    marginTop: 20,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
});
