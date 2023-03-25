import React, { Component } from 'react';
import { View, Text, Image, navigate, StyleSheet } from 'react-native';

class SplashScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      // Replace 'Home' with the name of your app's main screen
      this.props.navigation.navigate('Home Page');
    }, 3000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/26.png')}
          style={styles.image}
        />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 390,
    height: 370,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
  },
});

export default SplashScreen;
