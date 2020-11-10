import React, { Component } from 'react';
import Home from './Home';
import News from './News';
import Profile from './Profile';
import Search from './Search';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

class CreditApp extends Component {

  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: () => (
              <AntDesign name="home" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="News"
          component={News}
          options={{
            tabBarLabel: 'News',
            tabBarIcon: () => (
              <Entypo name="news" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: () => (
              <AntDesign name="user" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen 
        name="Search" 
        component={Search} 
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: () => (
            <AntDesign name="search1" size={24} color="black" />
          ),
        }}
        />
      </Tab.Navigator>
    );
  }
}
<Entypo name="news" size={24} color="black" />

export default CreditApp;