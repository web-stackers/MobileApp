/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import JobDetails from '../screens/JobResponse/JobDetails';
import QuotationDetails from '../screens/JobResponse/QuotationDetails';
import JobRefuse from '../screens/JobResponse/JobRefuse';
import QuotationPreview from '../screens/JobResponse/QuotationPreview';
import Acknowledge from '../screens/JobResponse/Acknowledge';
import JobWithdrawal from '../screens/PostJobActions/JobWithdrawal';

const JobStack = createNativeStackNavigator();

// Stack for job related pages
const JobStackScreen = () => (
  <JobStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#1F2221'
      },
      headerTintColor: '#fff'
    }}
  >
    <JobStack.Screen 
      name="Job Details" 
      component={JobDetails} 
    />

    <JobStack.Screen
      name="Quotation Details"
      component={QuotationDetails}
      title="Job Quotation"
    />

    <JobStack.Screen
      name="Refuse Job"
      component={JobRefuse}
      options={{
        header: () => null,
      }}
    />

    <JobStack.Screen 
      name="Quotation Preview" 
      component={QuotationPreview} 
    />

    <JobStack.Screen
      name="Acknowledgement"
      component={Acknowledge}
      options={{
        header: () => null,
      }}
    />

    <JobStack.Screen 
      name="Job Withdrawal" 
      component={JobWithdrawal} 
      options={{
        header: () => null,
      }}
    />
  </JobStack.Navigator>
);

export default JobStackScreen;
