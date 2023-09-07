import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {COLOR, FONT, FONT_SIZE} from '../Providerscreen/Globles';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import IocalImage from './IocalImage';
import {useNavigation} from '@react-navigation/native';

const Footer = ({activePageName}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          flexDirection: 'row',
          width: wp('35%'),
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigation.navigate('Home')}
          style={styles.BtnStyle}>
          {activePageName === 0 ? (
            <Image source={IocalImage.ActiveHome} style={styles.Images} />
          ) : (
            <Image source={IocalImage.DiativateHome} style={styles.Images} />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigation.navigate('Notification')}
          style={styles.BtnStyle}>
          {activePageName === 1 ? (
            <Image source={IocalImage.Activemessages} style={styles.Images} />
          ) : (
            <Image source={IocalImage.Deactivemessage} style={styles.Images} />
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.MiddleView}>
        <TouchableOpacity
          activeOpacity={0.9}
          // onPress={() => navigation.navigate('CallandChat')}
          style={styles.VideoBtnStyle}>
          <Image source={IocalImage.Play} style={styles.VideoImages} />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          width: wp('35%'),
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigation.navigate('CallandChat')}
          style={styles.BtnStyle}>
          {activePageName === 2 ? (
            <Image source={IocalImage.Activecall} style={styles.Images} />
          ) : (
            <Image source={IocalImage.Deactivecall} style={styles.Images} />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigation.navigate('Pooja')}
          style={styles.BtnStyle}>
          {activePageName === 3 ? (
            <Image source={IocalImage.Activepot} style={styles.Images} />
          ) : (
            <Image source={IocalImage.DeactivePlot} style={styles.Images} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // padding: hp('1%'),
    backgroundColor: COLOR.YELLOW,
    alignSelf: 'center',
    width: wp('100%'),
    position: 'absolute',
    bottom: 0,
  },
  BtnStyle: {
    // backgroundColor: COLOR.DARK_BLUE,
    padding: hp('1%'),
    width: wp('15%'),
    alignItems: 'center',
    borderRadius: wp('5%'),
  },
  Images: {
    height: hp('5%'),
    width: wp('7%'),
    resizeMode: 'contain',
  },
  MiddleView: {
    width: wp('25%'),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    // position: 'absolute',
    top: hp('-1%'),
    // backgroundColor: 'skylight',
    // padding: hp('1%'),
  },
  VideoBtnStyle: {
    backgroundColor: COLOR.WHITE,
    padding: hp('1%'),
    width: wp('19%'),
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: wp('10%'),
  },
  VideoImages: {
    height: hp('8%'),
    width: wp('15%'),
    resizeMode: 'contain',
  },
});
