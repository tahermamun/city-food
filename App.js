import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NavBar from './app/components/NavBar';

export default function App() {
  return (
    <NavigationContainer>
      <NavBar></NavBar>
    </NavigationContainer>
  );
}
