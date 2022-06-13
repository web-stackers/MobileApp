import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import JobStackScreen from './provider/stacks/JobStack';

const Provider = () => {
  return (
    <NavigationContainer>
      <JobStackScreen />
    </NavigationContainer>
  );
};

export default Provider;
