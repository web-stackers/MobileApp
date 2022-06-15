import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import JobRequestStackScreen from './consumer/stacks/JobRequestStack';
import BottomNavigator from './consumer/stacks/BottomNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <JobRequestStackScreen />
      {/* <BottomNavigator /> */}
    </NavigationContainer>
  );
};

export default App;
