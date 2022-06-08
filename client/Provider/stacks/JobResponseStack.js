import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import JobDetails from '../screens/JobResponse/JobDetails';
import QuotationDetails from '../screens/JobResponse/QuotationDetails';
import JobRefuse from '../screens/JobResponse/JobRefuse';
import Quotation from '../screens/JobResponse/Quotation';
import Acknowledge from '../screens/JobResponse/Acknowledge';

const JobResponseStack = createNativeStackNavigator();

const JobResponseStackScreen = () => (
  <JobResponseStack.Navigator>
    <JobResponseStack.Screen 
      name="Job Details" 
      component={JobDetails} 
    />

    <JobResponseStack.Screen
      name="Quotation"
      component={QuotationDetails}
      title="Job Quotation"
    />

    <JobResponseStack.Screen 
      name="Refuse Job" 
      component={JobRefuse} 
      options={{
        header: () => null,
      }}
    />

    <JobResponseStack.Screen 
      name="Quotation Preview" 
      component={Quotation} 
    />
    
    <JobResponseStack.Screen
      name="Acknowledgement"
      component={Acknowledge}
      options={{
        header: () => null,
      }}
    />
  </JobResponseStack.Navigator>
);

export default JobResponseStackScreen;
