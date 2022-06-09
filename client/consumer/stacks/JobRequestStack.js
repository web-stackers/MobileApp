import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import JobDetails from '../screens/JobRequest/JobDetails';
import QuotationDetails from '../screens/JobRequest/QuotationDetails';
import CategorySelector from '../screens/JobRequest/CategorySelector';

const JobRequestStack = createNativeStackNavigator();

const JobRequestStackScreen = () => (
  <JobRequestStack.Navigator>
    <JobRequestStack.Screen
      name="CategorySelector"
      component={CategorySelector}
    />
    <JobRequestStack.Screen name="JobDetails" component={JobDetails} />

    <JobRequestStack.Screen
      name="Quotation"
      component={QuotationDetails}
      title="Job Quotation"
    />
  </JobRequestStack.Navigator>
);

export default JobRequestStackScreen;
