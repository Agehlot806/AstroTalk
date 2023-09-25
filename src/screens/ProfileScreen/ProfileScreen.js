import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLOR, FONT, FONT_SIZE} from '../../Providerscreen/Globles';
import LocalImage from '../../Providerscreen/LocalImage';
import Wallet from '../../Icons/Svg/Wallet.svg';
import Store from '../../Icons/Svg/Store.svg';
import Level from '../../Icons/Svg/Level.svg';
import Family from '../../Icons/Svg/Family.svg';
import About from '../../Icons/Svg/About.svg';
import Feedback from '../../Icons/Svg/Feedback.svg';
import Block from '../../Icons/Svg/Block.svg';
import Setting from '../../Icons/Svg/Setting.svg';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#FBA424'} barStyle="dark-content" />
      <ScrollView style={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
        <ImageBackground
          style={styles.backImageView}
          source={LocalImage.LightOrange}>
          <View style={{marginTop: hp('3%')}}>
            <Text style={styles.TextTitle}>Profile</Text>
          </View>
          <View style={styles.profileView}>
            <Image source={LocalImage.UserOne} style={styles.imageProfile} />
            <View style={{position: 'absolute', bottom: 0, right: wp('3%')}}>
              <Image source={LocalImage.UserOne} style={styles.smallImage} />
            </View>
          </View>
          <View style={{marginTop: hp('3%')}}>
            <Text style={styles.TextTitle}>Alfredo Calzoni</Text>
            <Text style={styles.TextSmall}>ID : 12345</Text>
          </View>
        </ImageBackground>

        <View
          style={{
            paddingHorizontal: hp('3%'),
            marginTop: hp('2%'),
            width: wp('88%'),
            flexDirection: 'row',
            alignSelf: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{alignSelf: 'center'}}>
            <Text style={styles.menuTitle}>40.5k</Text>
            <Text style={[styles.TextSmall, {color: COLOR.BLACK}]}>
              Following
            </Text>
          </View>
          <View style={{alignSelf: 'center'}}>
            <Text style={[styles.menuTitle, {color: '#FBA424'}]}>90</Text>
            <Text style={[styles.TextSmall, {color: '#FBA424'}]}>Visitors</Text>
          </View>
          <View style={{alignSelf: 'center'}}>
            <Text style={styles.menuTitle}>40.5k</Text>
            <Text style={[styles.TextSmall, {color: COLOR.BLACK}]}>
              Friends
            </Text>
          </View>
        </View>

        {/* ---------- Menu ---------- */}
        <View style={{paddingHorizontal: hp('3%'), marginTop: hp('6%')}}>
          <View style={styles.MenuView}>
            <Wallet height={hp('5%')} width={wp('9%')} />
            <Text style={styles.menuTitle}>Wallet</Text>
          </View>
          <View style={styles.MenuView}>
            <Store height={hp('5%')} width={wp('9%')} />
            <Text style={styles.menuTitle}>Store</Text>
          </View>

          <View style={styles.MenuView}>
            <Feedback height={hp('5%')} width={wp('9%')} />
            <Text style={styles.menuTitle}>Feedback</Text>
          </View>
          <View style={styles.MenuView}>
            <Block height={hp('5%')} width={wp('9%')} />
            <Text style={styles.menuTitle}>Blocked List</Text>
          </View>
          <View style={styles.MenuView}>
            <About height={hp('5%')} width={wp('9%')} />
            <Text style={styles.menuTitle}>About</Text>
          </View>
          <View style={[styles.MenuView, {marginBottom: hp('8%')}]}>
            <Setting height={hp('5%')} width={wp('9%')} />
            <Text style={styles.menuTitle}>Settings</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backImageView: {
    height: hp('42.5%'),
    width: wp('100%'),
    resizeMode: 'cover',
  },
  TextTitle: {
    fontSize: FONT_SIZE.F_17,
    fontFamily: FONT.SEMI_BOLD,
    color: COLOR.WHITE,
    textAlign: 'center',
  },
  imageProfile: {
    height: hp('17.5%'),
    width: wp('30%'),
    borderRadius: wp('15%'),
    borderWidth: wp('1%'),
    borderColor: COLOR.WHITE,
    resizeMode: 'contain',
  },
  smallImage: {
    height: hp('5%'),
    width: wp('9%'),
    borderRadius: wp('5%'),
    borderWidth: wp('0.5%'),
    borderColor: COLOR.WHITE,
    resizeMode: 'contain',
  },
  profileView: {
    marginTop: hp('7%'),
    width: wp('35%'),
    alignSelf: 'center',
  },
  TextSmall: {
    fontSize: FONT_SIZE.F_15,
    fontFamily: FONT.MEDIUM,
    color: COLOR.WHITE,
    textAlign: 'center',
  },
  MenuView: {
    width: wp('88%'),
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical: wp('2%'),
  },
  menuTitle: {
    fontSize: FONT_SIZE.F_16,
    fontFamily: FONT.MEDIUM,
    color: COLOR.BLACK,
    marginLeft: wp('2%'),
  },
});
