import * as React from 'react';
import { useTheme } from 'react-native-paper';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import JobStackScreen from './JobStack';
import HomeScreen from '../screens/Home';
import SettingStack from './SettingStack';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  const {colors} = useTheme();
  
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#B295CE',
        tabBarStyle:{
          backgroundColor:colors.primary,
          height: 55,
          paddingBottom: 5,
        },
        tabBarLabelStyle: {
          fontSize: 14
        }
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Jobs"
        component={JobStackScreen}
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