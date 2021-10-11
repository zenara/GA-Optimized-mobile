/**
 * @author Chathurika Senani
 * @create date 2021-10-11 18:49:09
 * @modify date 2021-10-11 19:03:47
 */

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home';


const Stack = createNativeStackNavigator();

const OnboardingNavigator = () => {
  return (
    <Stack.Navigator>
    	<Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default OnboardingNavigator;