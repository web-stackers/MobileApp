/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Consumer from './Consumer';
import Provider from './Provider';
import App from './App';
import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => Consumer);
/* AppRegistry.registerComponent(appName, () => Provider); */
