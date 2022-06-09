import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import JobRequestStackScreen from './consumer//stacks/JobRequestStack';

const App = () => {
  return (
    <NavigationContainer>
      <JobRequestStackScreen />
    </NavigationContainer>
  );
};

export default App;
