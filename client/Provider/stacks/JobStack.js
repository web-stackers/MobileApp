/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import JobDetails from '../screens/Jobs/JobDetails';
import QuotationDetails from '../screens/Jobs/QuotationDetails';
import JobRefuse from '../screens/Jobs/JobRefuse';
import QuotationPreview from '../screens/Jobs/QuotationPreview';
import Acknowledge from '../../common/screens/Acknowledge';
import Withdrawal from '../../common/screens/Withdrawal';
import Complaints from '../../common/screens/Complaints/Complaints';
import RatingsAndReviews from '../../common/screens/RatingsAndReviews';

const JobStack = createNativeStackNavigator();

// Stack for job related pages
const JobStackScreen = () => (
  <JobStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#3b3d3e'
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
      component={Withdrawal}
      options={{
        header: () => null,
      }}
    />

    <JobStack.Screen
      name="Complaint"
      component={Complaints}
    />

    <JobStack.Screen
      name="Rating and Review"
      component={RatingsAndReviews}
    />
  </JobStack.Navigator>
);

export default JobStackScreen;