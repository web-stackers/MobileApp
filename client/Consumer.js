import React from 'react';

import ConsumerNavigation from './consumer/stacks/ConsumerNavigation';
import {NavigationContainer} from '@react-navigation/native';

const Consumer = () => {
  return (
    <NavigationContainer>
      <ConsumerNavigation />
    </NavigationContainer>
  );
};

export default Consumer;
