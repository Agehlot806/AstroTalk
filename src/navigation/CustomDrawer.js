import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import Home from '../screens/Home/Home';
// import CustomTab from './CustomTab';
// import {Screen} from '../constant/screen';
// import HandleStatus from '../screens/StatusHandle/HandleStatus';
// import Profile from '../screens/Profile';

const Drawer = createDrawerNavigator();
const CustomDrawer = () => {
  return (
    
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#952D24',
        },
        drawerLabelStyle: {
          color: '#fff',
        }
      }}>
      <Drawer.Screen name="tabs" component={CustomTab} />
      <Drawer.Screen name={Screen.STATUS} component={HandleStatus} />
      <Drawer.Screen name={Screen.PROFILE} component={Profile} />
      <Drawer.Screen name="help" component={CustomTab} />
    </Drawer.Navigator>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({});
