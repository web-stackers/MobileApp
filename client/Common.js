import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ComplaintStackScreen from './common/stacks/ComplaintStack';
import RatingsAndReviewsStackScreen from './common/stacks/RatingsAndReviewsStack';

const Common = () => {
  return (
    <NavigationContainer>
      {/* <ComplaintStackScreen /> */}
      <RatingsAndReviewsStackScreen />
    </NavigationContainer>
  );
};

export default Common;
