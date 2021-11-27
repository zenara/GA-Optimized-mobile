/**
 * @author Chathurika Senani
 * @create date 2021-10-11 18:48:01
 * @modify date 2021-10-11 19:08:35
 */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import OnboardingNavigator from './navigators/onboarding';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
        <StatusBar barStyle={isDarkMode ? 'dark-content' : 'light-content'} />
        <OnboardingNavigator />
    </NavigationContainer>
  );
};

export default App;
