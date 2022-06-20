/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import EditAccount from '../screens/AccountScreen/EditAccount';
import SignOut from '../screens/AccountScreen/SignOut';
import SettingsScreen from '../screens/AccountScreen/SettingScreen';

const SettingStack = createNativeStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#3b3d3e'
  },
  headerTintColor: '#fff'
};

const SettingStackScreen = () => {
  return (
    <SettingStack.Navigator screenOptions={screenOptionStyle}>
      <SettingStack.Screen name="Settings" component={SettingsScreen} options={{ tabBarLabel: 'Settings' }}/>
      <SettingStack.Screen name="Edit Account" component={EditAccount} />
      <SettingStack.Screen name="Sign Out" component={SignOut} />
    </SettingStack.Navigator>
  );
};

export default SettingStackScreen;
