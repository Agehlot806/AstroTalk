import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// Screen Constant
import {Screen} from '../constant/screen';

// Screens
import Splash from '../screens/UserCrendential/Splash'
import Banner1 from '../screens/UserCrendential/Banner1';


const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={Screen.SPLASH} component={Splash} />
        <Stack.Screen name={Screen.BANNER1} component={Banner1} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
