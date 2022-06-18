/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import JobScreen from '../screens/JobScreen';
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

const JobStackScreen = () => (
  <JobStack.Navigator>
    <JobStack.Screen
      name="JobScreen"
      component={JobScreen}
      options={{
        header: () => null,
      }}
    />
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
