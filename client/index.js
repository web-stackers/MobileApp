import {AppRegistry} from 'react-native';
import Consumer from './Consumer';
import App from './App';
import ConsumerForm from './screens/ConsumerForm';
import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => Consumer);
AppRegistry.registerComponent(appName, () => ConsumerForm);
