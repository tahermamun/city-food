import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import Header from '../components/Header';



const Stack = createStackNavigator();

const NavBar = () => {
    return (
        <Stack.Navigator>
        <Stack.Screen 
        name="City Food"
        component={Header}
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('Please Select Your Food from the menu')}
              title="More Info"
              color="#00cc00"
            />
          ),
        }}
        />
        
      </Stack.Navigator>
    );
};

export default NavBar;