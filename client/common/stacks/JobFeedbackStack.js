import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Complaints from '../screens/Complaints/Complaints/index';
import ComplaintsCategory from '../screens/Complaints/ComplaintsCategory/index';

const JobFeedbackStack = createNativeStackNavigator();

const JobFeedbackStackScreen = () => (
  <JobFeedbackStack.Navigator>
    <JobFeedbackStack.Screen
      name="Let us know your issues"
      component={Complaints}
    />

    <JobFeedbackStack.Screen
      name="Complaint Category"
      component={ComplaintsCategory}
      options={{
        header: () => null,
      }}
    />
  </JobFeedbackStack.Navigator>
);

export default JobFeedbackStackScreen;
