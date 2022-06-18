import * as React from 'react';
import {BottomNavigation, Text} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from '../screens/Home';
import JobStackScreen from './JobStack';
import SettingsScreen from '../../consumer/screens/AccountScreen/SettingScreen';

const HomeRoute = () => {
  return (
    <NavigationContainer>
      <HomeScreen />
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

const ProviderNavigation = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'home', title: 'Home', icon: 'home',},
    {key: 'jobs', title: 'Jobs', icon: 'application'},
    {key: 'profile', title: 'Profile', icon: 'account'},
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

export default ProviderNavigation;
