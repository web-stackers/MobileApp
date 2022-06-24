/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import StartScreen from '../screens/Start';
import LoginScreen from '../screens/Login';
import ConsumerRegisterScreen from '../screens/ConsumerRegister';
import ConfirmOTPscreen from '../screens/ConfirmOTP'
import RegistrationSucceedScreen from '../screens/RegistrationSucceed'
import ChangePasswordScreen from '../screens/ChangePassword'
import SetLocationScreen from '../screens/SetLocation'
import ProviderNavigation from '../../Provider/stacks/BottomNavigator';
import ConsumerNavigation from '../../consumer/stacks/BottomNavigator';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1F2221',
        },
        headerTintColor: '#fff',
      }}>
      <Stack.Screen
        name="Start"
        // children={props => (
        //   <StartScreen setUser={setUser} user={user} {...props} />
        // )}
        component={StartScreen}
        options={{
          header: () => null,
        }}
      />
    
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        // options={({route}) => ({title: 'Login as ' + route.params.type})}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="ConsumerRegister"
        component={ConsumerRegisterScreen}
        // options={({route}) => ({title: 'Login as ' + route.params.type})}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="ConfirmOTP"
        component={ConfirmOTPscreen}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="RegistrationSucceed"
        component={RegistrationSucceedScreen}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePasswordScreen}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="SetLocation"
        component={SetLocationScreen}
        options={{ title: 'Pick your residential location' }}
      />

      <Stack.Screen
        name="Provider"
        component={ProviderNavigation}
        options={{
          header: () => null,
        }}
      />

      <Stack.Screen
        name="Consumer"
        component={ConsumerNavigation}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
  );
};
export default AuthStack;
