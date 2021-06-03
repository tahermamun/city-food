import React from 'react';
import { View, Text } from 'react-native'
import HomeScreen from './screens/HomeScreen';

const AppNavigator = () => {
    return (
       <View>
          <HomeScreen></HomeScreen>
       </View>
    );
};

export default AppNavigator;