import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// Screen Constant
import {Screen} from '../constant/screen';

// Screens
import Splash from '../screens/UserCrendential/Splash';
import BannerFirst from '../screens/UserCrendential/BannerFirst';
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
import Notification from '../screens/component/Notification';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import Login from '../screens/UserCrendential/Login';
import OTPVerification from '../screens/UserCrendential/OTPVerification';
import BasicDetails from '../screens/component/BasicDetails';
import SimilarAstrologer from '../screens/component/SimilarAstrologer';
import CreateNewKundali from '../screens/component/CreateNewKundali';
import CustomTab from './CustomTab';
import Payment from '../screens/component/Payment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import {useSelector} from 'react-redux';
import { navigationRef } from '../Utils/constant';

const Stack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const AppStack = createNativeStackNavigator();
const AuthLoading = createNativeStackNavigator();
const DrawerStack = createDrawerNavigator();
const screenOptions = {headerShown: false, gestureEnabled: true};
const AuthStackComponet = () => {
  return (
    <AuthStack.Navigator screenOptions={screenOptions}>
      <AuthStack.Screen name={Screen.BANNERFIRST} component={BannerFirst} />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="OTPVerification" component={OTPVerification} />
      <AuthStack.Screen name={Screen.LANGUAGE} component={Language} />
      <AuthStack.Screen name={Screen.PROFILE} component={Profile} />
    </AuthStack.Navigator>
  );
};
const DrawerStackComponet = () => {
  return (
    <DrawerStack.Navigator
      screenOptions={screenOptions}
      drawerContent={props => CustomDrawer(props)}>
      <DrawerStack.Screen name="Drawer" component={CustomTab} />
    </DrawerStack.Navigator>
  );
};

const AppStackComponet = () => {
  return (
    <AppStack.Navigator screenOptions={screenOptions}>
      <AppStack.Screen name={'drawer'} component={DrawerStackComponet} />
      {/* <AppStack.Screen name={'customTabs'} component={CustomTab} /> */}
      <AppStack.Screen name="Notification" component={Notification} />
      <AppStack.Screen name="BasicDetails" component={BasicDetails} />
      <AppStack.Screen name="PlaceBirth" component={PlaceBirth} />
      <AppStack.Screen name="CallandChat" component={CallandChat} />
      <AppStack.Screen name="Pooja" component={Pooja} />
      <AppStack.Screen name="DailyHoroscope" component={DailyHoroscope} />
      <AppStack.Screen name="AstroDetail" component={AstroDetail} />
      <AppStack.Screen name="KundliSearch" component={KundliSearch} />
      <AppStack.Screen name="KundliForm" component={KundliForm} />
      <AppStack.Screen name="KundliMatching" component={KundliMatching} />
      <AppStack.Screen name="LiveChat" component={LiveChat} />
      <AppStack.Screen name="IncomingCall" component={IncomingCall} />
      <AppStack.Screen name="ProfileScreen" component={ProfileScreen} />
      <AppStack.Screen name="SimilarAstrologer" component={SimilarAstrologer} />
      <AppStack.Screen name="CreateNewKundali" component={CreateNewKundali} />
      <AppStack.Screen name="payment" component={Payment} />
      <AppStack.Screen
        name="KundliNewandDelete"
        component={KundliNewandDelete}
      />
    </AppStack.Navigator>
  );
};

const AuthLoadingComponent = () => {
  const {response,userData, authToken = false} = useSelector(state => state.authReducer);

  return (
    <AuthLoading.Navigator screenOptions={screenOptions}>
      {authToken ? (
        <AuthLoading.Screen name="App" component={AppStackComponet} />
      ) : (
        <AuthLoading.Screen name="Auth" component={AuthStackComponet} />
      )}
    </AuthLoading.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={screenOptions} initialRouteName="Splash">
        <Stack.Screen name={Screen.SPLASH} component={Splash} />
        <Stack.Screen name={'AuthLoading'} component={AuthLoadingComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
