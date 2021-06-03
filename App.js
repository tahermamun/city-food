import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import Footer from './app/components/Footer';
import { StyleSheet, Text, View,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NavBar from './app/components/NavBar';

export default function App () {
  return (
    <View >
      <NavigationContainer>
        <NavBar></NavBar>
      </NavigationContainer>
      <Footer></Footer>
    </View>
  )
}