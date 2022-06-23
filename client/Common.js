import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ComplaintStackScreen from './common/stacks/ComplaintStack';
import RatingsAndReviewsStackScreen from './common/stacks/RatingsAndReviewsStack';
import ChatStackScreen from './common/stacks/ChatStack';

const Common = () => {
  return (
    <NavigationContainer>
      <ComplaintStackScreen />
      {/* <RatingsAndReviewsStackScreen /> */}
      {/* <ChatStackScreen /> */}
    </NavigationContainer>
  );
};

export default Common;
