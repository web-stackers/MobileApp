import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import JobResponseStackScreen from './Provider//stacks/JobResponseStack';

const App = () => {

  return (
      <NavigationContainer>
        <JobResponseStackScreen />
      </NavigationContainer>
  );
};

export default App;
