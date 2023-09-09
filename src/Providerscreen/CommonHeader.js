import React from 'react';
import {View, Text, TouchableOpacity, Image, StatusBar} from 'react-native';

import ArrowLeft from '../Icons/Svg/Arrowleft.svg';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import SubIcon from '../Icons/Svg/SubIcon.svg';
import Whatsapp2 from '../Icons/Svg/Whatsapp2.svg';
import {COLOR, FONT_SIZE} from './Globles';
const CommonHeader = ({GoBack, headerText}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        // marginHorizontal: hp('2%'),
        alignItems: 'center',
      }}>
      {/* <StatusBar backgroundColor={COLOR.WHITE}/> */}

      <TouchableOpacity onPress={GoBack}>
        <ArrowLeft
          width={wp('10%')}
          height={hp('10%')}
          style={{tintColor: COLOR.DARK_BLUE}}
        />
      </TouchableOpacity>

      <View style={{width: wp('28%')}}>
        <Text
          style={{
            color: COLOR.DARK_BLUE,
            fontSize: FONT_SIZE.F_20,
            marginVertical: hp('3.9%'),
            fontWeight: 'bold',
          }}>
          {headerText}
        </Text>
      </View>
      <View
        style={{
          alignSelf: 'center',
          marginHorizontal: hp('13%'),
          flexDirection: 'row',
        }}>
        <SubIcon
          style={{marginHorizontal: hp('1%'), marginVertical: hp('0.9%')}}
          height={hp('3.5%')}
          width={hp('4%')}
        />
        <TouchableOpacity>
          <Whatsapp2 height={hp('5.3%')} width={hp('10%')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CommonHeader;
