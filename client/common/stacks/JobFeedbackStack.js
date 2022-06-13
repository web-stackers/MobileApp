import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProviderComplaints from '../screens/Complaints/Provider/index';
import ConsumerComplaints from '../screens/Complaints/Consumer/index';
import ComplaintsCategory from '../screens/ComplaintsCategory';

const JobFeedbackStack = createNativeStackNavigator();

const JobFeedbackStackScreen = () => (
  <JobFeedbackStack.Navigator>
    {/* <JobFeedbackStack.Screen
      name="Let us know your issues"
      component={ProviderComplaints}
    /> */}

    <JobFeedbackStack.Screen
      name="Let us know your issues"
      component={ConsumerComplaints}
    />

    <JobFeedbackStack.Screen
      name="Complains Category"
      component={ComplaintsCategory}
    />
  </JobFeedbackStack.Navigator>
);

export default JobFeedbackStackScreen;
