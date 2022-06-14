import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Complaints from '../screens/Complaints/index';
import ComplaintsCategory from '../screens/ComplaintsCategory';

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
