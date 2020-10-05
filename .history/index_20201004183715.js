/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import MyHomePage from './MyHomePage.js'
import Main from './Main.js';

//AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => Main);
//AppRegistry.registerComponent(appName, () => MyHomePage);