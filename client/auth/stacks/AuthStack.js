/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import StartScreen from '../screens/Start';
import LoginScreen from '../screens/Login';
import ConfirmOTPscreen from '../screens/ConfirmOTP'
import ChangePasswordScreen from '../screens/ChangePassword'
import SetLocationScreen from '../screens/SetLocation'
import ProviderNavigation from '../../Provider/stacks/BottomNavigator';
import ConsumerNavigation from '../../consumer/stacks/BottomNavigator';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  // const [isSet, setIsSet] = React.useState('');
  // AsyncStorage.setItem('profile', JSON.stringify({result:{email:"gowsigan@outlook.com",password:"sfsdfd"},token:"dfgds"}));
  // AsyncStorage.removeItem('profile');

  // let local;

  // const getData = async key => {
  //   // get Data from Storage
  //   try {
  //     const data = await AsyncStorage.getItem(key);
  //     if (data !== null) {
  //       return data;
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const setData = async () => {
  //   // get Data from Storage
  //   try {
  //     await getData('profile')
  //   .then(data => data)
  //   .then(value => {
  //     console.log("profile is "+value);
  //     if (!value == undefined) {
  //       return JSON.parse(value);
  //     } else {
  //       return null;
  //     }
  //   })
  //   .catch(err => console.log('cannot, ' + err));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // React.useEffect(() => {

  //   setData().then(data => data).then(value => {
  //       console.log("parded data ia :  ")
  //       console.log(value)
  //       setUser(()=>{return value});
  //       console.log(user)
  //     }).catch(err => console.log("cannot, "+err))
  // }, []);
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
        name="ConfirmOTP"
        component={ConfirmOTPscreen}
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
