import {AppRegistry} from 'react-native';
import Consumer from './screens/consumer/Consumer';
import App from './App';
import ConsumerForm from './screens/consumer/ConsumerForm';
import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => Consumer);
// AppRegistry.registerComponent(appName, () => ConsumerForm);
