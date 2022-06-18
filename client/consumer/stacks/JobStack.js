/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import JobScreen from '../screens/JobScreen';
import JobWithdrawal from '../screens/JobRequest/JobWithdrawal';
import QuotationAcknowledge from '../screens/JobRequest/QuotationAcknowledge';
import WithdrawalAcknowledge from '../screens/JobRequest/WithdrawalAcknowledge';
import QuotationDetails from '../screens/JobRequest/QuotationDetails';
import QuotationRefuse from '../screens/JobRequest/QuotationRefuse';

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
  </JobStack.Navigator>
);

export default JobStackScreen;
