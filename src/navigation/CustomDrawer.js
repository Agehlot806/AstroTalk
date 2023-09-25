import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {COLOR, FONT} from '../Providerscreen/Globles';
import LocalImage from '../Providerscreen/LocalImage';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { userLogout } from '../Redux/actions/AuthAction';

const CustomDrawer = ({navigation}) => {
  const dispatch = useDispatch()
  const handlelogoutPress = async () => {
    dispatch(userLogout())
  };
  return (
    <View style={styles.drawerMain}>
      <StatusBar backgroundColor={COLOR.WHITE} barStyle={'dark-content'} />
      <View style={{flex: 1}}>
        <View style={styles.profileView}>
          <Image source={LocalImage.UserOne} style={styles.profileImg} />
          <View>
            <Text style={styles.userName}>User Name</Text>
          </View>
        </View>
      </View>
      <View style={styles.logoutView}>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => handlelogoutPress()}>
          <Text style={styles.buttonTxt}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  drawerMain: {
    flex: 1,
    backgroundColor: COLOR.YELLOW,
  },
  profileView: {
    padding: hp('2%'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImg: {
    width: wp('15%'),
    height: wp('15%'),
    borderRadius: hp('50%'),
  },
  userName: {
    fontFamily: FONT.SEMI_BOLD,
    fontSize: hp('2.5%'),
    color: COLOR.WHITE,
    marginLeft: hp('2%'),
  },
  logoutView: {
    padding: hp('3%'),
    alignItems: 'center',
  },
  logoutButton: {
    backgroundColor: COLOR.WHITE,
    width: wp('50%'),
    height: hp('7%'),
    borderRadius: hp('1%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTxt: {
    color: COLOR.BLACK,
    fontFamily: FONT.BOLD,
    fontSize: hp('2.2%'),
  },
});
