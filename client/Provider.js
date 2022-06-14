import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import JobStackScreen from './provider/stacks/JobStack';
import BottomNavigator from './provider/stacks/BottomNavigator';

const Provider = () => {
  return (
    <NavigationContainer>
      <JobStackScreen />
      {/* <BottomNavigator /> */}
    </NavigationContainer>
  );
};

export default Provider;
