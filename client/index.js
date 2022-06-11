/* eslint-disable prettier/prettier */
import {AppRegistry} from 'react-native';
import Provider from './Provider';
import {Provider as PaperProvider} from 'react-native-paper';
import * as React from 'react';
import Consumer from './Consumer';
import App from './App';
import {name as appName} from './app.json';

export default function Main() {
  return (
    <PaperProvider>
      <Consumer />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
