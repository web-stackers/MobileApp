import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RatingsAndReviews from '../screens/RatingsAndReviews';
import HomeScreen from '../screens/HomeScreen';
import PJobCompleted from '../../Provider/screens/JobsScreen/JobCompleted';
import CJobCompleted from '../../consumer/screens/JobHistory/JobCompleted';


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

    <RatingsAndReviewsStack.Screen
      name="Job Completed Provider"
      component={PJobCompleted}
      options={{
        header: () => null,
      }}
    />

    <RatingsAndReviewsStack.Screen
      name="Job Completed Consumer"
      component={CJobCompleted}
      options={{
        header: () => null,
      }}
    />
  </RatingsAndReviewsStack.Navigator>
);

export default RatingsAndReviewsStackScreen;
