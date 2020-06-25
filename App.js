/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';

import Login from "./src/screens/Login"
import Signup from "./src/screens/Signup"
import Home from "./src/screens/HomeScreen"
import Profile from "./src/screens/Profile" 
import ExploreScreen from "./src/screens/ExploreScreen"
import ConnectScreen from "./src/screens/ConnectScreen"
import SettingsScreen from "./src/screens/SettingsScreen"
import { createStackNavigator } from '@react-navigation/stack';

const Stact = createStackNavigator();
const HomeStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStackScreen = () =>{
  return(
    <HomeStack.Navigator headerMode="none">
      <HomeStack.Screen name="Home" component={Home}  />
      <HomeStack.Screen name="Profile" component={Profile} />
    </HomeStack.Navigator>
  )
}

const BottomTab = () =>{
  return(
<Tab.Navigator 
screenOptions={({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === 'Search') {
      return (
        <Image
          source={
            focused
              ? require('./src/Assets/icons/mag.png')
              : require('./src/Assets/icons/mag.png')
          }
          resizeMode={"contain"}

          style={{
            width: 15,
            height: 15,
            borderRadius: 40 / 2,
          }}
        />
      );
    } else if (route.name === 'Home') {
      return (
        <Image
          source={
            focused
              ? require('./src/Assets/icons/home.png')
              : require('./src/Assets/icons/home.png')
          }

          resizeMode={"contain"}
          style={{
            width: 15,
            height: 15,
            borderRadius: 40 / 2,
          }}
        />
      );
    }else if (route.name === 'Connect') {
      return (
        <Image
          source={
            focused
              ? require('./src/Assets/icons/connect.png')
              : require('./src/Assets/icons/connect.png')
          }
          style={{
            width: 15,
            height: 15,
            borderRadius: 40 / 2,
          }}

          resizeMode={"contain"}
        />
      );
    } else if (route.name === 'Settings') {
      return (
        <Image
          source={
            focused
              ? require('./src/Assets/icons/settings.png')
              : require('./src/Assets/icons/settings.png')
          }
          style={{
            width: 15,
            height: 15,
            borderRadius: 40 / 2,
          }}

          resizeMode={"contain"}

        />
      );
    }
     return <Ionicons name={iconName} size={size} color={color} />;
  },
})}


tabBarOptions={{
activeTintColor: '#fff',
inactiveTintColor: '#fff',
activeBackgroundColor:"#7d41fd",
inactiveBackgroundColor:"#7d41fd"
}


  
}>
  <Tab.Screen name="Home" component={HomeStackScreen} 
  />
  <Tab.Screen name="Connect" component={ConnectScreen}/>
  <Tab.Screen name="Search" component={ExploreScreen}/>
  <Tab.Screen name="Settings" component={SettingsScreen}/>
</Tab.Navigator>
  )
}

const App = () =>  {
  return (
    <NavigationContainer>
      <Stact.Navigator headerMode="none">
        <Stact.Screen name="Login" component={Login}/>
        <Stact.Screen name="SignUp" component={Signup}/>
        <Stact.Screen name="Home" component={BottomTab}/>
              </Stact.Navigator>
    </NavigationContainer>
  );
};


export default App;
