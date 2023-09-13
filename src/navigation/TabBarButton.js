import {BottomTabBarButtonProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import PlayShape from '../Icons/Svg/PlayShape.svg'


export default function TabBarButton({}) {
  return (
    <View style={styles.container}>
      <PlayShape width={wp('15%')} heigth={hp('8%')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    // width: wp('15%'),
    // height: wp('15%'),
    // borderRadius: hp('50%'),
    bottom: hp('1%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    color: 'white',
  },
});
