import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import IocalImage from '../Providerscreen/IocalImage';
import Notification from '../screens/component/Notification';
import CallandChat from '../screens/component/CallandChat';
import Pooja from '../screens/component/Pooja';
import Home from '../screens/component/Home';
import {COLOR} from '../Providerscreen/Globles';
import TabBar from './TabBar';

const Tab = createBottomTabNavigator();
const CustomTAbBarButton = ({children, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'transparent',
        width: wp('20%'),
        height: wp('20%'),
        borderRadius: hp('10%'),
        top: hp('-8%'),
        justifyContent: 'center',
      }}>
      <View
        style={{
          backgroundColor: COLOR.YELLOW,
        }}>
        {children}
      </View>
    </TouchableOpacity>
  );
};
const CustomTab = () => {
  return (
    <Tab.Navigator
      tabBar={props => <TabBar props={props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <Image source={IocalImage.ActiveHome} style={styles.Icons} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: () => (
            <Image source={IocalImage.Activemessages} style={styles.Icons} />
          ),
        }}
      />
      <Tab.Screen
        name="live"
        component={Notification}
        options={{
          tabBarIcon: () => (
            <Image
              source={IocalImage.Play}
              style={{
                width: wp('10%'),
                height: hp('8%'),
                resizeMode: 'contain',
              }}
            />
          ),
          tabBarButton: props => <CustomTAbBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="chat"
        component={CallandChat}
        options={{
          tabBarIcon: () => (
            <Image source={IocalImage.Activecall} style={styles.Icons} />
          ),
        }}
      />
      <Tab.Screen
        name="pooja"
        component={Pooja}
        options={{
          tabBarIcon: () => (
            <Image source={IocalImage.Activepot} style={styles.Icons} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default CustomTab;

const styles = StyleSheet.create({
  Icons: {
    width: wp('7%'),
    height: hp('5%'),
    resizeMode: 'contain',
  },
});
