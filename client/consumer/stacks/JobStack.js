/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import JobCompleted from '../screens/JobHistory/JobCompleted';
import JobPending from '../screens/JobHistory/JobPending';
import QuotationPending from '../screens/JobHistory/QuotationPending';
import JobHistoryScreen from '../screens/JobHistory/HistoryScreen';
import JobWithDrawal from '../screens/JobHistory/JobWithDrawal';
import RequestRefused from '../screens/JobHistory/RequestRefused';
import QuotationRejected from '../screens/JobHistory/QuotationRejected';
import RequestSent from '../screens/JobHistory/RequestSent';

import JobWithdrawal from '../screens/JobRequest/JobWithdrawal';
import QuotationAcknowledge from '../screens/JobRequest/QuotationAcknowledge';
import WithdrawalAcknowledge from '../screens/JobRequest/WithdrawalAcknowledge';
import QuotationDetails from '../screens/JobRequest/QuotationDetails';
import QuotationRefuse from '../screens/JobRequest/QuotationRefuse';

// Complaints
import Complaints from '../../common/screens/Complaints/Complaints';
import ComplaintsCategory from '../../common/screens/Complaints/ComplaintsCategory';
import Acknowledge from '../../common/screens/Complaints/Acknowledge';

// Ratings and reviews
import RatingsAndReviews from '../../common/screens/RatingsAndReviews';

const JobStack = createNativeStackNavigator();

const JobStackScreen = ({userParams}) => (
  <JobStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#3b3d3e',
      },
      headerTintColor: '#fff',
    }}>
    <JobStack.Screen
      name="JobHistoryScreen"
      children={props => (
        <JobHistoryScreen userParams={userParams} {...props} />
      )}
      options={{
        header: () => null,
      }}
    />
    <JobStack.Screen name="Completed Jobs" component={JobCompleted} />

    <JobStack.Screen name="Pending Jobs" component={JobPending} />

    <JobStack.Screen name="Pending Quotation" component={QuotationPending} />

    <JobStack.Screen name="Withdrawn Jobs" component={JobWithDrawal} />

    <JobStack.Screen name="Refused Request" component={RequestRefused} />

    <JobStack.Screen name="Quotation Rejected" component={QuotationRejected} />

    <JobStack.Screen name="Request Sent" component={RequestSent} />

    <JobStack.Screen
      name="JobWithdrawal"
      component={JobWithdrawal}
      options={{
        header: () => null,
      }}
    />

    <JobStack.Screen
      name="QuotationDetails"
      component={QuotationDetails}
      options={{
        header: () => null,
      }}
    />

    <JobStack.Screen
      name="QuotationAcknowledge"
      component={QuotationAcknowledge}
      options={{
        header: () => null,
      }}
    />

    <JobStack.Screen
      name="QuotationRefuse"
      component={QuotationRefuse}
      options={{
        header: () => null,
      }}
    />

    <JobStack.Screen
      name="WithdrawalAcknowledge"
      component={WithdrawalAcknowledge}
      options={{
        header: () => null,
      }}
    />

    <JobStack.Screen name="Let us know your issues" component={Complaints} />

    <JobStack.Screen
      name="Complaint Category"
      component={ComplaintsCategory}
      options={{
        header: () => null,
      }}
    />

    <JobStack.Screen
      name="Acknowledge"
      component={Acknowledge}
      options={{
        header: () => null,
      }}
    />

    <JobStack.Screen
      name="Ratings and Reviews"
      component={RatingsAndReviews}
      options={{
        header: () => null,
      }}
    />
  </JobStack.Navigator>
);

export default JobStackScreen;
