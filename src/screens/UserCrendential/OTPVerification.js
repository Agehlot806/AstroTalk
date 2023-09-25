import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {COLOR, WHITE, FONT, FONT_SIZE} from '../../Providerscreen/Globles';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import LocalImage from '../../Providerscreen/LocalImage';
import CommonButton from '../../Providerscreen/CommonButton';
import {Screen} from '../../constant/screen';
import EditNumber from '../../Icons/Svg/EditIcon.svg';
import {useDispatch, useSelector} from 'react-redux';
import {OtpVerify} from '../../Redux/actions/AuthAction';

const OTPVerification = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {response} = useSelector(state => state.authReducer);
  const [otp, setOTP] = useState(['', '', '', '']);
  console.log(otp);
  const otpString = otp.join('');
  const [newOtp, setNewOTP] = useState(otpString);
  useEffect(() => {
    const newOtpString = otp.join('');
    setNewOTP(newOtpString);
  }, [otp]);

  console.log(newOtp);

  const number = route?.params?.Number;
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    inputRefs[0].current.focus();
  }, []);

  const handleInputChange = (text, index) => {
    const newOTP = [...otp];
    newOTP[index] = text;

    setOTP(newOTP);

    if (text && index < 3) {
      inputRefs[index + 1].current.focus();
    } else if (!text && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const handleVerification = () => {
    const enteredOTP = otp.join('');

    if (response?.data?.phoneno === 'Existing') {
      dispatch(OtpVerify());
      navigation.reset({
        index: 0,
        routes: [{name: 'AuthLoading'}],
      });
    } else {
      navigation.navigate('Profile');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'transparent'} translucent />
      <ImageBackground
        source={LocalImage.Login_BgImage}
        style={styles.RectangleImage}>
        <View style={{marginVertical: hp('20%'), alignSelf: 'center'}}>
          <Text style={[styles.otpText, {fontSize: FONT_SIZE.F_21}]}>
            verification
          </Text>
          <Text style={[styles.otpText, {fontSize: FONT_SIZE.F_17}]}>
            Enter OTP code send to your number
          </Text>
          <Text style={styles.otpText}>{number}</Text>
          <View
            style={{
              alignSelf: 'center',
              marginTop: hp('-3.5%'),
              marginRight: hp('12%'),
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Login');
              }}>
              <EditNumber height={hp('3%')} width={wp('5%')} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.OTPcontainer}>
          {otp.map((value, index) => (
            <View style={[styles.inputContainer]} key={index}>
              <TextInput
                ref={inputRefs[index]}
                style={[styles.input]}
                keyboardType="numeric"
                maxLength={1}
                onChangeText={text => handleInputChange(text, index)}
                value={value}
              />
            </View>
          ))}
        </View>

        {/* Button */}
        <View style={styles.TextView}>
          <CommonButton
            ButtonText={'Verification'}
            HandleNext={() => handleVerification()}
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
    resizeMode: 'contain',
  },
  otpText: {
    color: COLOR.WHITE,
    fontSize: FONT_SIZE.F_25,
    fontFamily: FONT.BOLD,
    // marginHorizontal: hp('2.4%'),
  },
  BtnStyle: {
    backgroundColor: COLOR.DARK_BLUE,
    // padding: hp('13%'),
    width: wp('75%'),
    marginTop: hp('10%'),
    alignSelf: 'center',
    // borderRadius: 20,
    // borderWidth: 1,
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
    borderWidth: hp('0.2%'),
    borderColor: 'gray',
    borderRadius: hp('1%'),
    marginHorizontal: hp('1.3%'),
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('15%'),
    height: hp('8%'),
  },
  input: {
    fontSize: hp('2%'),
    color: '#FFFFFF',
  },
  TextView: {
    marginTop: hp('20%'),
  },
});
