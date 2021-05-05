/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import SignIn from './src/components/SignIn/SignIn'
import Welcome from './src/components/Welcome/Welcome'
import Home from './src/components/Home/Home'
import Item from './src/components/Home/Items/ItemNotification'
import test from './src/components/Introduce/snippets'
import Info from './src/components/Info/Info'
import Test from './src/components/Services/Apart_Empty/Apart'


import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () =>App);
