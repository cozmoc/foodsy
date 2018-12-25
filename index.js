import { AppRegistry } from 'react-native';

import App from './App/components/App/App';

// Dislable YellowBox warnings
console.disableYellowBox = true;

AppRegistry.registerComponent(
  'foodsy', 
  () => App
);
