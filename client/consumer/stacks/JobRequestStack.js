/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import JobDetails from '../screens/JobRequest/JobDetails';
import JobAcknowledge from '../screens/JobRequest/JobAcknowledge';
import CategorySelector from '../screens/JobRequest/CategorySelector';
import NoProviders from '../screens/JobRequest/NoProviders';
import Map from '../screens/JobRequest/Map';
import SearchProvider from '../screens/JobRequest/SearchProvider';
import ProviderJobProfile from '../screens/JobRequest/ProviderJobProfile';
import ProviderMap from '../screens/JobRequest/ProviderMap';
import PhotoUpload from '../screens/JobRequest/PhotoUpload';

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
      name="PhotoUpload"
      component={PhotoUpload}
      options={{
        header: () => null,
      }}
    />

    <JobRequestStack.Screen
      name="ProviderMap"
      component={ProviderMap}
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
      name="NoProviders"
      component={NoProviders}
      options={{
        header: () => null,
      }}
    />
  </JobRequestStack.Navigator>
);

export default JobRequestStackScreen;
