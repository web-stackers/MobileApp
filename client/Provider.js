import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import JobStackScreen from './Provider/stacks/JobStack';

const Provider = () => {
  return (
    <NavigationContainer>
      <JobStackScreen />
      {/* <BottomNavigator /> */}
    </NavigationContainer>
  );
};

export default Provider;
