/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import EditAccount from '../screens/AccountScreen/EditAccount';
import SettingsScreen from '../screens/AccountScreen/SettingScreen';
import PasswordScreen from '../screens/AccountScreen/ChangePassword';
import LocationScreen from '../screens/AccountScreen/ChangeLocation';

const SettingStack = createNativeStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#3b3d3e'
  },
  headerTintColor: '#fff'
};

const SettingStackScreen = ({userParams}) => {
  return (
    <SettingStack.Navigator screenOptions={screenOptionStyle}>
      <SettingStack.Screen
        name="Settings"
        children={props => (
          <SettingsScreen userParams={userParams} {...props} />
        )}
        options={{ tabBarLabel: 'Settings' }}
      />
      <SettingStack.Screen name="Edit Account" component={EditAccount} />
      <SettingStack.Screen name="Change Password" component={PasswordScreen} />
      <SettingStack.Screen name="Change Location" component={LocationScreen} />
    </SettingStack.Navigator>
  );
};

export default SettingStackScreen;
