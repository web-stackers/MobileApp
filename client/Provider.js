import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import JobStackScreen from './Provider/stacks/JobStack';
import BottomNavigator from './Provider/stacks/BottomNavigator';

const Provider = () => {
  return (
    <NavigationContainer>
      {/* <JobStackScreen /> */}
      <BottomNavigator />
    </NavigationContainer>
  );
};

export default Provider;