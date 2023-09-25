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
import React, {useState, useEffect} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLOR, FONT, FONT_SIZE} from '../../Providerscreen/Globles';
import LocalImage from '../../Providerscreen/LocalImage';
import Speaker from '../../Icons/Svg/Speaker.svg';
import MuteVoice from '../../Icons/Svg/MuteVoice.svg';
import RedCall from '../../Icons/Svg/RedCall.svg';

const IncomingCall = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#091E84'} barStyle="light-content" />
      <Text style={styles.headText}>Incoming Call</Text>
      <Image source={LocalImage.UserTwo} style={styles.imageStyle} />
      <Text style={styles.headText}>01:20</Text>
      <View
        style={{
          width: wp('70%'),
          marginTop: hp('29%'),
          flexDirection: 'row',
          alignSelf: 'center',
          justifyContent: 'space-between',
        }}>
        <Speaker height={hp('8.5%')} width={wp('13%')} />
        <MuteVoice height={hp('8.5%')} width={wp('13%')} />
        <RedCall height={hp('8.5%')} width={wp('13%')} />
      </View>
    </View>
  );
};

export default IncomingCall;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#091E84',
    paddingHorizontal: hp('2%'),
  },
  headText: {
    marginTop: hp('2%'),
    fontFamily: FONT.SEMI_BOLD,
    fontSize: FONT_SIZE.F_18,
    color: COLOR.WHITE,
    alignSelf: 'center',
  },
  imageStyle: {
    width: wp('35%'),
    height: hp('20%'),
    borderRadius: hp('10%'),
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: hp('19%'),
  },
});
