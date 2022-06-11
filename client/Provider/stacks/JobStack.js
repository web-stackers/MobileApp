/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import JobDetails from '../screens/JobResponse/JobDetails';
import QuotationDetails from '../screens/JobResponse/QuotationDetails';
import JobRefuse from '../screens/JobResponse/JobRefuse';
import Quotation from '../screens/JobResponse/Quotation';
import Acknowledge from '../screens/JobResponse/Acknowledge';
import JobWithdrawal from '../screens/PostJobActions/JobWithdrawal';

const JobStack = createNativeStackNavigator();

const JobStackScreen = () => (
  <JobStack.Navigator>
    <JobStack.Screen name="Job Details" component={JobDetails} />

    <JobStack.Screen
      name="Quotation"
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

    <JobStack.Screen name="Quotation Preview" component={Quotation} />

    <JobStack.Screen
      name="Acknowledgement"
      component={Acknowledge}
      options={{
        header: () => null,
      }}
    />

    <JobStack.Screen name="Job Withdrawal" component={JobWithdrawal} />
  </JobStack.Navigator>
);

export default JobStackScreen;
