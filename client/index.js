import {AppRegistry} from 'react-native';
// import QuotationDetails from './consumer/screens/JobRequest/QuotationDetails';
import Provider from './Provider';
import Consumer from './Consumer';
import App from './App';
import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => QuotationDetails);
// AppRegistry.registerComponent(appName, () => Provider);
AppRegistry.registerComponent(appName, () => Consumer);
