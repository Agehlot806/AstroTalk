import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {COLOR, FONT, FONT_SIZE} from '../Providerscreen/Globles';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const CommonButton = ({ButtonText, HandleNext}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={HandleNext}
      style={styles.BtnStyle}>
      <Text style={styles.BtnText}>{ButtonText}</Text>
    </TouchableOpacity>
  );
};
export default CommonButton;
const styles = StyleSheet.create({
  BtnStyle: {
    backgroundColor: COLOR.YELLOW,
    padding: 10,
    width: wp('80%'),
    alignSelf: 'center',
    borderRadius: 10,
    position: 'absolute',
    bottom: hp('2%'),
  },
  BtnText: {
    color: COLOR.WHITE,
    fontSize: FONT_SIZE.F_18,
    fontFamily: FONT.SEMI_BOLD,
    textAlign: 'center',
  },
});
