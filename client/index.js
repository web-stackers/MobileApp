/* eslint-disable prettier/prettier */
import {AppRegistry} from 'react-native';
import Provider from './Provider';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import Consumer from './Consumer';
import App from './App';
import AuthStack from './auth/stacks/AuthStack';
import {name as appName} from './app.json';
import {enableLatestRenderer} from 'react-native-maps';
import Common from './Common';

// enableLatestRenderer();

const theme = {
  ...DefaultTheme,
  roundness: 0,
  colors: {
    ...DefaultTheme.colors,
    primary: '#652C9E',
    accent: '#1F2221',
    background: '#121212',
    text: 'white',
    placeholder: '#797D7F',
  },
  dark: true,
};

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
