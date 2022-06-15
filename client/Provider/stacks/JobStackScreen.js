/* eslint-disable no-unused-vars */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CompletedJobsScreen from '../screens/JobsScreen/CompletedJobsScreen';
import PendingJobsScreen from '../screens/JobsScreen/PendingJobsScreen';
import CancelledJobsScreen from '../screens/JobsScreen/CancelledJobsScreen';
import OrdersScreen from '../screens/JobsScreen/OrdersScreen';

const Stack = createNativeStackNavigator();

const screenOptionStyle = {
  headerTintColor: 'white',
  headerBackTitle: 'Back',
};

const JobStack = () => {
  return (
    <Stack.Navigator initialscreenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Categories"
        component={OrdersScreen}
        options={{tabBarLabel: 'Categories'}}
      />
      <Stack.Screen name="Completed Jobs" component={CompletedJobsScreen} />
      <Stack.Screen name="Cancelled Jobs" component={CancelledJobsScreen} />
      <Stack.Screen name="Pending Jobs" component={PendingJobsScreen} />
    </Stack.Navigator>
  );
};

export default JobStack;
