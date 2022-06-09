import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import JobDetails from '../screens/JobRequest/JobDetails';
import JobAcknowledge from '../screens/JobRequest/JobAcknowledge';
import QuotationAcknowledge from '../screens/JobRequest/QuotationAcknowledge';
import QuotationDetails from '../screens/JobRequest/QuotationDetails';
import CategorySelector from '../screens/JobRequest/CategorySelector';

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
  </JobRequestStack.Navigator>
);

export default JobRequestStackScreen;
