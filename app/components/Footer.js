import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {createAppContainer} from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';

class HomeScreen extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text>HomeScreen</Text>
        </View>
      );
    }
  }
  
  class ProfileScreen extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text>ProfileScreen</Text>
        </View>
      );
    }
  }
  
  class OrderScreen extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text>OrderScreen</Text>
        </View>
      );
    }
  }
  
  class SettingScreen extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text>SettingScreen</Text>
        </View>
      );
    }
  }
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })
  
  const TabNavigator = createMaterialBottomTabNavigator(
    {
      Home: {
        screen: HomeScreen,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <View>
                <Icon style={[{color: tintColor}]} size={22} name={'home'} />
            </View>
          )
        }
      },
      Profile: {
        screen: ProfileScreen,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <View>
                <Icon style={[{color: tintColor}]} size={22} name={'person'} />
            </View>
          ),
          activeColor: '#ffffff',
          inactiveColor: '#a3c2fa',
          barStyle: { backgroundColor: '#2163f6' },
        }
      },
      Orders: {
        screen: OrderScreen,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <View>
                <Icon style={[{color: tintColor}]} size={22} name={'receipt-sharp'} />
            </View>
          ),
          activeColor: '#ffffff',
          inactiveColor: '#92c5c2',
          barStyle: { backgroundColor: '#2c6d6a' },
        }
      },
      Settings: {
        screen: SettingScreen,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <View>
                <Icon style={[{color: tintColor}]} size={22} name={'settings'} />
            </View>
          ),
          activeColor: '#ffffff',
          inactiveColor: '#ebaabd',
          barStyle: { backgroundColor: '#d13560' },
        }
      },
    },
    {
      initialRouteName: 'Home',
      activeColor: '#ffffff',
      inactiveColor: '#bda1f7',
      barStyle: { backgroundColor: '#6948f4' },
    }
  )
  
  export default createAppContainer(TabNavigator);