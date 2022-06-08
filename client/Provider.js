import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import JobResponseStackScreen from './Provider//stacks/JobResponseStack';

const App = () => {

  return (
      <NavigationContainer>
        <JobResponseStackScreen />
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;
