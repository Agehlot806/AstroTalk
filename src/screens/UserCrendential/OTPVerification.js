import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {COLOR, WHITE, FONT, FONT_SIZE} from '../../Providerscreen/Globles';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import IocalImage from '../../Providerscreen/IocalImage';
import CommonButton from '../../Providerscreen/CommonButton';
import {Screen} from '../../constant/screen';

const OTPVerification = ({navigation, route}) => {
  const number = route?.params?.Number;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={IocalImage.Login_BgImage}
        style={styles.RectangleImage}>
        <View style={{marginVertical: hp('20%'), alignSelf: 'center'}}>
          <Text style={[styles.otpText, {fontSize: FONT_SIZE.F_21}]}>
            verification
          </Text>
          <Text style={[styles.otpText, {fontSize: FONT_SIZE.F_17}]}>
            Enter OTP code send to your number
          </Text>
          <Text style={styles.otpText}>{number}</Text>
        </View>
        <TouchableOpacity>{/* <EditNumber /> */}</TouchableOpacity>
        <View style={styles.OTPcontainer}>
          {/* {otpValues.map((value, index) => ( */}
          <View style={[styles.inputContainer]}>
            <TextInput
              style={[styles.input]}
              keyboardType="numeric"
              maxLength={1}
              // onChangeText={(text) => handleInputChange(text, index)}
              // value={value}
            />
          </View>
          <View style={[styles.inputContainer]}>
            <TextInput
              style={[styles.input]}
              keyboardType="numeric"
              maxLength={1}
              // onChangeText={(text) => handleInputChange(text, index)}
              // value={value}
            />
          </View>
          <View style={[styles.inputContainer]}>
            <TextInput
              style={[styles.input]}
              keyboardType="numeric"
              maxLength={1}
              // onChangeText={(text) => handleInputChange(text, index)}
              // value={value}
            />
          </View>
          <View style={[styles.inputContainer]}>
            <TextInput
              style={[styles.input]}
              keyboardType="numeric"
              maxLength={1}
              // onChangeText={(text) => handleInputChange(text, index)}
              // value={value}
            />
          </View>

          {/* ))} */}
        </View>

        {/* Button */}
        <View style={styles.TextView}>
          <CommonButton
            ButtonText={'Verification'}
            HandleNext={() => navigation.navigate('Language')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default OTPVerification;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.DARK_BLUE,
  },

  RectangleImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  otpText: {
    color: COLOR.WHITE,
    fontSize: FONT_SIZE.F_25,
    fontFamily: FONT.BOLD,
    // marginHorizontal: hp('2.4%'),
  },
  BtnStyle: {
    backgroundColor: COLOR.DARK_BLUE,
    padding: 13,
    width: wp('75%'),
    marginTop: hp('10%'),
    alignSelf: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ffff',
  },
  BtnText: {
    color: COLOR.WHITE,
    fontSize: FONT_SIZE.F_19,
    fontFamily: FONT.REGULAR,
    textAlign: 'center',
  },
  OTPcontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    marginHorizontal: hp('1.3%'),
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('15%'),
    // backgroundColor: COLOR.ThemeColor,
    height: hp('8%'),
  },
  input: {
    fontSize: 20,
  },
  TextView: {
    marginTop: hp('20%'),
  },
});
