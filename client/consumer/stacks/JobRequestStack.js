import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import JobDetails from '../screens/JobRequest/JobDetails';
import JobAcknowledge from '../screens/JobRequest/JobAcknowledge';
import JobWithdrawal from '../screens/JobRequest/JobWithdrawal';
import QuotationAcknowledge from '../screens/JobRequest/QuotationAcknowledge';
import WithdrawalAcknowledge from '../screens/JobRequest/WithdrawalAcknowledge';
import QuotationDetails from '../screens/JobRequest/QuotationDetails';
import QuotationRefuse from '../screens/JobRequest/QuotationRefuse';
import CategorySelector from '../screens/JobRequest/CategorySelector';
import NoProviders from '../screens/JobRequest/NoProviders';
import Map from '../screens/JobRequest/Map';
import SearchProvider from '../screens/JobRequest/SearchProvider';
import ProviderJobProfile from '../screens/JobRequest/ProviderJobProfile';

const JobRequestStack = createNativeStackNavigator();

const JobRequestStackScreen = () => (
  <JobRequestStack.Navigator>
    <JobRequestStack.Screen
      name="CategorySelector"
      component={CategorySelector}
      options={{
        header: () => null,
      }}
    />
    <JobRequestStack.Screen
      name="JobDetails"
      component={JobDetails}
      options={{
        header: () => null,
      }}
    />

    <JobRequestStack.Screen
      name="JobAcknowledge"
      component={JobAcknowledge}
      options={{
        header: () => null,
      }}
    />

    <JobRequestStack.Screen
      name="ProviderJobProfile"
      component={ProviderJobProfile}
      options={{
        header: () => null,
      }}
    />

    <JobRequestStack.Screen
      name="SearchProvider"
      component={SearchProvider}
      options={{
        header: () => null,
      }}
    />

    <JobRequestStack.Screen
      name="Map"
      component={Map}
      options={{
        header: () => null,
      }}
    />

    <JobRequestStack.Screen
      name="JobWithdrawal"
      component={JobWithdrawal}
      options={{
        header: () => null,
      }}
    />

    <JobRequestStack.Screen
      name="NoProviders"
      component={NoProviders}
      options={{
        header: () => null,
      }}
    />

    <JobRequestStack.Screen
      name="QuotationDetails"
      component={QuotationDetails}
      options={{
        header: () => null,
      }}
    />

    <JobRequestStack.Screen
      name="QuotationAcknowledge"
      component={QuotationAcknowledge}
      options={{
        header: () => null,
      }}
    />

    <JobRequestStack.Screen
      name="QuotationRefuse"
      component={QuotationRefuse}
      options={{
        header: () => null,
      }}
    />

    <JobRequestStack.Screen
      name="WithdrawalAcknowledge"
      component={WithdrawalAcknowledge}
      options={{
        header: () => null,
      }}
    />
  </JobRequestStack.Navigator>
);

export default JobRequestStackScreen;
