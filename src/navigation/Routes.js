import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// Screen Constant
import {Screen} from '../constant/screen';

// Screens
import Splash from '../screens/UserCrendential/Splash';
import Banner1 from '../screens/UserCrendential/Banner1';
import Language from '../screens/UserCrendential/Language';
import Profile from '../screens/ProfileScreen/Profile';
import PlaceBirth from '../screens/ProfileScreen/PlaceBirth';
import Home from '../screens/component/Home';
import CallandChat from '../screens/component/CallandChat';
import Pooja from '../screens/component/Pooja';
import DailyHoroscope from '../screens/component/DailyHoroscope';
import AstroDetail from '../screens/component/AstroDetail';
import KundliSearch from '../screens/component/KundliSearch';
import KundliForm from '../screens/component/KundliForm';
import KundliNewandDelete from '../screens/component/KundliNewandDelete';
import KundliMatching from '../screens/component/KundliMatching';
import LiveChat from '../screens/component/LiveChat';
import IncomingCall from '../screens/component/IncomingCall';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Language">
        <Stack.Screen name={Screen.SPLASH} component={Splash} />
        <Stack.Screen name={Screen.BANNER1} component={Banner1} />
        <Stack.Screen name={Screen.LANGUAGE} component={Language} />
        <Stack.Screen name={Screen.PROFILE} component={Profile} />
        <Stack.Screen name={Screen.HOME} component={Home} />
        <Stack.Screen name="PlaceBirth" component={PlaceBirth} />
        <Stack.Screen name="CallandChat" component={CallandChat} />
        <Stack.Screen name="Pooja" component={Pooja} />
        <Stack.Screen name="DailyHoroscope" component={DailyHoroscope} />
        <Stack.Screen name="AstroDetail" component={AstroDetail} />
        <Stack.Screen name="KundliSearch" component={KundliSearch} />
        <Stack.Screen name="KundliForm" component={KundliForm} />
        <Stack.Screen name="KundliMatching" component={KundliMatching} />
        <Stack.Screen name="LiveChat" component={LiveChat} />
        <Stack.Screen name="IncomingCall" component={IncomingCall} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen
          name="KundliNewandDelete"
          component={KundliNewandDelete}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
