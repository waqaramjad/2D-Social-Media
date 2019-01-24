import React, {
  Component
} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,

  NetInfo
} from 'react-native';
import {
  Navigator
} from 'react-native-deprecated-custom-components'
// import Login from './components/LoginSignup/loginSignup'
import Splash from './components/SplashScreen/splash'
import Dashboard from './components/home/DashBoard'
import {createStackNavigator ,createAppContainer } from 'react-navigation';


 const App = createStackNavigator({
  //  Login: {screen: Login},
   Splash: {screen: Splash},
  Dashboard: {screen: Dashboard},
});

const AppContainer = createAppContainer(App) 
export default AppContainer





console.disableYellowBox = true;

