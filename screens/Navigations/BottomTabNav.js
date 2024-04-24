import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Fontisto, FontAwesome } from '@expo/vector-icons';

// MainScreens
import HomePage from '../../MainScreens/Home';
import FavPage from '../../MainScreens/FavLoc';
import ProfilePage from '../../MainScreens/Profile';


// Define your active and inactive colors
const activeColor = 'pink';
const inactiveColor = 'darkpink';


const Tab = createMaterialBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Tab.Navigator   
        initialRouteName="Home" 
        barStyle={{ backgroundColor: 'lightgrey', height:60 }}>
        <Tab.Screen 
            name="Home" 
            component={HomePage} 
            options={{
                tabBarLabel: '',
                tabBarIcon: ({ color, focused }) => (
                    <MaterialCommunityIcons 
                        name="home" 
                        color={focused ? '#FF1493' : 'grey'} 
                        size={29} 
                    />
                ),
            }}
        />
        <Tab.Screen 
            name="FavLoc" 
            component={FavPage} 
            options={{
                tabBarLabel: '',
                tabBarIcon: ({ color, focused }) => (
                    <Fontisto 
                        name="favorite" 
                        size={24} 
                        color={focused ? '#FF1493' : 'grey'} // Set active and inactive colors
                    />
                ),
            }}
        />
        <Tab.Screen 
            name="Profile" 
            component={ProfilePage} 
            options={{
                tabBarLabel: '',
                tabBarIcon: ({ color, focused }) => (
                    <FontAwesome 
                        name="user" 
                        size={24} 
                        color={focused ? '#FF1493' : 'grey'} 
                    />
                ),
            }}
        />
    </Tab.Navigator>
  )
}

export default BottomTabNav

const styles = StyleSheet.create({})