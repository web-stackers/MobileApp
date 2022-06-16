import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RatingsAndReviews from '../screens/ratingsAndReviews';

const RatingsAndReviewsStack = createNativeStackNavigator();

const RatingsAndReviewsStackScreen = () => (
  <RatingsAndReviewsStack.Navigator>
    <RatingsAndReviewsStack.Screen
      name="Ratings and Reviews"
      component={RatingsAndReviews}
    />
  </RatingsAndReviewsStack.Navigator>
);

export default RatingsAndReviewsStackScreen;