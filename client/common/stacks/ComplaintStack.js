import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Complaints from '../screens/Complaints/Complaints/index';
import ComplaintsCategory from '../screens/Complaints/ComplaintsCategory/index';
import Acknowledge from '../screens/Complaints/Acknowledge';
import HomeScreen from '../screens/HomeScreen';
import PJobCompleted from '../../Provider/screens/JobsScreen/JobCompleted';
import CJobCompleted from '../../consumer/screens/JobHistory/JobCompleted';

const ComplaintStack = createNativeStackNavigator();

const ComplaintStackScreen = () => (
  <ComplaintStack.Navigator>
    <ComplaintStack.Screen
      name="Let us know your issues"
      component={Complaints}
    />

    <ComplaintStack.Screen
      name="Complaint Category"
      component={ComplaintsCategory}
      options={{
        header: () => null,
      }}
    />

    <ComplaintStack.Screen
      name="Acknowledge"
      component={Acknowledge}
      options={{
        header: () => null,
      }}
    />

    <ComplaintStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        header: () => null,
      }}
    />

    <ComplaintStack.Screen
      name="Job Completed Provider"
      component={PJobCompleted}
      options={{
        header: () => null,
      }}
    />

    <ComplaintStack.Screen
      name="Job Completed Consumer"
      component={CJobCompleted}
      options={{
        header: () => null,
      }}
    />
  </ComplaintStack.Navigator>
);

export default ComplaintStackScreen;
