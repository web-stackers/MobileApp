import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import JobStack from './JobStackScreen';
import HomeScreen from '../screens/HomeScreen';
import SettingStack from './SettingStack';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#652C9E',
        backgroundColor: '#652C9E',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Jobs"
        component={JobStack}
        options={{
          tabBarLabel: 'Jobs',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="table-search"
              color={color}
              size={size}
            />
          ),
          headerShown: false,
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={SettingStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
