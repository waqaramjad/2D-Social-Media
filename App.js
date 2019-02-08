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

import firebase from 'firebase';



import {
  Navigator
} from 'react-native-deprecated-custom-components'
// import Login from './components/LoginSignup/loginSignup'
import Example from './components/SplashScreen/dummy'
import Dashboard from './components/home/DashBoard'
import SignIn from './components/Auth/SignIn'
import SignUp from './components/Auth/SignUp'
import Splash from './components/SplashScreen/splash'
import {createStackNavigator ,createAppContainer } from 'react-navigation';


var config = {
  apiKey: "AIzaSyB4j851elw4Rkp63U_S3vnCXqNYOlWUoOU",
    authDomain: "practice-6b442.firebaseapp.com",
    databaseURL: "https://practice-6b442.firebaseio.com",
    projectId: "practice-6b442",
    storageBucket: "practice-6b442.appspot.com",
    messagingSenderId: "463133660375"
};
firebase.initializeApp(config);


const App = createStackNavigator({
  Dashboard: {screen: Dashboard},
  SignIn: {screen: SignIn},   
  Example: {screen: Example},
   SignUp: {screen: SignUp},
   Splash: {screen: Splash},
});

const AppContainer = createAppContainer(App) 
export default AppContainer





console.disableYellowBox = true;

