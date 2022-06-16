import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ComplaintStackScreen from './common/stacks/ComplaintStack';

const Common = () => {
    return (
      <NavigationContainer>
        <ComplaintStackScreen />
      </NavigationContainer>
    );
}

export default Common;