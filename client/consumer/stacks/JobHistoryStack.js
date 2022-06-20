import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CancelledJobs from '../screens/JobHistory/CancelledJobs';
import CompletedAfterRating from '../screens/JobHistory/CompletedAfterRating';
import CompletedBeforeRating from '../screens/JobHistory/CompletedBeforeRating';
import JobHistoryScreen from '../screens/JobHistory/JobHistoryScreen';
import JobWithDrawal from '../screens/JobHistory/JobWithDrawal';
import QuotationAccepted from '../screens/JobHistory/QuotationAccepted';
import QuotationReceived from '../screens/JobHistory/QuotationReceived';
import QuotationRejected from '../screens/JobHistory/QuotationRejected';
import RequestSent from '../screens/JobHistory/RequestSent';

const JobHistoryStack = createNativeStackNavigator();

const screenOptionStyle = {
  headerTintColor: 'white',
  headerBackTitle: 'Back',
  headerShown: false,
};

const JobHistoryStackScreen = () => (
  <JobHistoryStack.Navigator initialscreenOptions={screenOptionStyle}>
    <JobHistoryStack.Screen
      name="JobHistoryScreen"
      component={JobHistoryScreen}
      options={{
        header: () => null,
      }}
    />
    <JobHistoryStack.Screen
      name="CancelledJobs"
      component={CancelledJobs}
      options={{
        header: () => null,
      }}
    />

    <JobHistoryStack.Screen
      name="CompletedAfterRating"
      component={CompletedAfterRating}
      options={{
        header: () => null,
      }}
    />

    <JobHistoryStack.Screen
      name="CompletedBeforeRating"
      component={CompletedBeforeRating}
      options={{
        header: () => null,
      }}
    />

    <JobHistoryStack.Screen
      name="JobWithDrawal"
      component={JobWithDrawal}
      options={{
        header: () => null,
      }}
    />

    <JobHistoryStack.Screen
      name="QuotationAccepted"
      component={QuotationAccepted}
      options={{
        header: () => null,
      }}
    />

    <JobHistoryStack.Screen
      name="QuotationReceived"
      component={QuotationReceived}
      options={{
        header: () => null,
      }}
    />

    <JobHistoryStack.Screen
      name="QuotationRejected"
      component={QuotationRejected}
      options={{
        header: () => null,
      }}
    />

    <JobHistoryStack.Screen
      name="RequestSent"
      component={RequestSent}
      options={{
        header: () => null,
      }}
    />
  </JobHistoryStack.Navigator>
);

export default JobHistoryStackScreen;
