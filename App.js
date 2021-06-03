import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './app/AppNavigator';


// Redux path
import { Provider } from 'react-redux'
import store from './app/Redux/store'


export default function App() {
  return (
      <Provider store={store}>

        <AppNavigator></AppNavigator>
      </Provider>


  );
}
