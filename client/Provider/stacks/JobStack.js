/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import JobHistory from '../screens/JobsScreen/JobHistory';
import CompletedJobsScreen from '../screens/JobsScreen/JobCompleted';
import PendingJobsScreen from '../screens/JobsScreen/JobPending';
import QuotationSent from '../screens/JobsScreen/Quotation Sent';
import QuotationRejected from '../screens/JobsScreen/QuotationRejected';
import WithdrawnJobsScreen from '../screens/JobsScreen/JobWithdrawal';
import PendingRequestScreen from '../screens/JobsScreen/RequestPending';
import RefusedJobs from '../screens/JobsScreen/RefusedJobs';
import JobDetails from '../screens/Jobs/JobDetails';
import QuotationDetails from '../screens/Jobs/QuotationDetails';
import JobRefuse from '../screens/Jobs/JobRefuse';
import QuotationPreview from '../screens/Jobs/QuotationPreview';
import Acknowledge from '../../common/screens/Acknowledge';
import Withdrawal from '../../common/screens/Withdrawal';
import Complaints from '../../common/screens/Complaints/Complaints';
import RatingsAndReviews from '../../common/screens/RatingsAndReviews';
import Chat from '../../common/screens/Chat';

const JobStack = createNativeStackNavigator();

// Stack for job related pages
const JobStackScreen = ({userParams}) => (
  <JobStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#3b3d3e',
      },
      headerTintColor: '#fff',
    }}>
    <JobStack.Screen
      name="Job History"
      children={props => (
        <JobHistory userParams={userParams} {...props} />
      )}
    />

    <JobStack.Screen 
      name="Completed Jobs" 
      component={CompletedJobsScreen} 
    />

    <JobStack.Screen 
      name="Quotation Sent" 
      component={QuotationSent} 
    />

    <JobStack.Screen 
      name="Quotation Rejected" 
      component={QuotationRejected} 
    />

    <JobStack.Screen 
      name="Pending Jobs" 
      component={PendingJobsScreen} 
    />

    <JobStack.Screen 
      name="Withdrawn Jobs" 
      component={WithdrawnJobsScreen} 
    />

    <JobStack.Screen 
      name="Pending Request" 
      component={PendingRequestScreen} 
    />
    
    <JobStack.Screen 
      name="Refused Jobs" 
      component={RefusedJobs} 
    />

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
      name="Chat" 
      component={Chat} 
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

    <JobStack.Screen name="Complaint" component={Complaints} />

    <JobStack.Screen name="Rating and Review" component={RatingsAndReviews} />
  </JobStack.Navigator>
);

export default JobStackScreen;
