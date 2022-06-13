import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ComplaintsCategory from '../screens/ComplaintsCategory';
import ProviderAbsent from '../screens/ComplaintsCategory/CategoryOne';
import Complaints from '../screens/Complaints/index';

const JobFeedbackStack = createNativeStackNavigator();

const JobFeedbackStackScreen = () => (
  <JobFeedbackStack.Navigator>
    <JobFeedbackStack.Screen
      name="Let us know your issues"
      component={Complaints}
    />

    <JobFeedbackStack.Screen
      name="Provider is absent"
      component={ProviderAbsent}
    />

    <JobFeedbackStack.Screen
      name="Complains Category"
      component={ComplaintsCategory}
    />
  </JobFeedbackStack.Navigator>
);

export default JobFeedbackStackScreen;
