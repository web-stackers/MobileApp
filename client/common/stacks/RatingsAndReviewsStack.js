import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RatingsAndReviews from '../screens/RatingsAndReviews';
import HomeScreen from '../screens/HomeScreen';

const RatingsAndReviewsStack = createNativeStackNavigator();

const RatingsAndReviewsStackScreen = () => (
  <RatingsAndReviewsStack.Navigator>
    <RatingsAndReviewsStack.Screen
      name="Ratings and Reviews"
      component={RatingsAndReviews}
      options={{
        header: () => null,
      }}
    />

    <RatingsAndReviewsStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        header: () => null,
      }}
    />
  </RatingsAndReviewsStack.Navigator>
);

export default RatingsAndReviewsStackScreen;
