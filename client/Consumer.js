import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import JobRequestStackScreen from './consumer/stacks/JobRequestStack';
import BottomNavigator from './consumer/stacks/BottomNavigator';

const Consumer = () => {
  return (
    <NavigationContainer>
      {/* <JobRequestStackScreen /> */}
      <BottomNavigator />
    </NavigationContainer>
  );
};

export default Consumer;
