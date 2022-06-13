import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Complaints from '../screens/Complaints';

const JobFeedbackStack = createNativeStackNavigator();

const JobFeedbackStackScreen = () => (
  <JobFeedbackStack.Navigator>
    <JobFeedbackStack.Screen
      name="Complaints"
      component={Complaints}
      options={{header: () => null}}
    />
  </JobFeedbackStack.Navigator>
);

export default JobFeedbackStackScreen;
