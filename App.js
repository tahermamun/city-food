import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './app/AppNavigator';
import Navigator from './app/homeStack'
import { NavigationContainer } from '@react-navigation/native';
import NavBar from './app/components/NavBar';

// Redux path
import { Provider } from 'react-redux'
import store from './app/Redux/store'
import HomeScreen from './app/screens/HomeScreen';


export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
      {/* <HomeScreen></HomeScreen> */}
      {/* <AppNavigator></AppNavigator> */}


      <NavigationContainer>
        <NavBar></NavBar>
      </NavigationContainer>




    </Provider>
  );
}


