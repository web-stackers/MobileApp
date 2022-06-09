import {AppRegistry} from 'react-native';
import CategorySelector from './consumer/screens/JobRequest/CategorySelector';
import Provider from './Provider';
import App from './App';
import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => CategorySelector);
// AppRegistry.registerComponent(appName, () => Provider);
