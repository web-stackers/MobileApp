import {AppRegistry} from 'react-native';
import CategorySelector from './consumer/screens/JobRequest/CategorySelector';
import QuotationDetails from './consumer/screens/JobRequest/QuotationDetails';
import JobDetails from './consumer/screens/JobRequest/JobDetails';
import Provider from './Provider';
import App from './App';
import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => CategorySelector);
 AppRegistry.registerComponent(appName, () => QuotationDetails);
// AppRegistry.registerComponent(appName, () => JobDetails);
// AppRegistry.registerComponent(appName, () => Provider);
