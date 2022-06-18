import * as React from 'react';
import {BottomNavigation, Text} from 'react-native-paper';

import {NavigationContainer} from '@react-navigation/native';

import JobRequestStackScreen from './JobRequestStack';
import JobStackScreen from './JobStack';
import SettingsScreen from '../screens/AccountScreen/SettingScreen';
import JobScreen from '../screens/JobScreen';

const HomeRoute = () => {
  return (
    <NavigationContainer>
      <JobRequestStackScreen />
    </NavigationContainer>
  );
};
const JobRoute = () => {
  return (
    <NavigationContainer>
      <JobStackScreen />
    </NavigationContainer>
  );
};

const ProfileRoute = () => {
  return (
    <NavigationContainer>
      <SettingsScreen />
    </NavigationContainer>
  );
};

const ConsumerNavigation = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'home', title: 'Home'},
    {key: 'jobs', title: 'Jobs'},
    {key: 'profile', title: 'Profile'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    jobs: JobRoute,
    profile: ProfileRoute,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default ConsumerNavigation;
