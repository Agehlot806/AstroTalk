import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  Alert,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLOR, FONT, FONT_SIZE} from '../../Providerscreen/Globles';
import PhoneNumberInput from 'react-native-phone-number-input';
import IocalImage from '../../Providerscreen/IocalImage';
import CommonButton from '../../Providerscreen/CommonButton';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {UserLogin} from '../../Redux/actions/AuthAction';
import ErrorMessage from '../../Utils/ErrorMessage';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const {response} = useSelector(state => state.authReducer);
  console.log('response in loGIN', response);
  const handlePhoneInputChange = number => {
    setPhoneNumber(number);
  };
  useEffect(() => {
    if (response?.status === 201) {
      navigation.navigate('OTPVerification', {Number: phoneNumber});
    }
  }, [response]);

  const PostData = async () => {
    if (phoneNumber === '') {
      ErrorMessage({
        msg: 'Please enter the number',
        backgroundColor: COLOR.RED,
      });
      // Alert.alert('Please enter the number');
      return; // Exit the function early if phone number is empty
    } else if (phoneNumber.length < 10) {
      ErrorMessage({
        msg: 'Please enter at least 10 digits of the number',
        backgroundColor: COLOR.RED,
      });
      // Alert.alert('Please enter at least 10 digits of the number');
      return; // Exit the function early if phone number is too short
    }

    dispatch(UserLogin(phoneNumber));
    // try {
    //   const response = await axios.post(
    //     'https://astrotalk.techpanda.art/base/user-login/',
    //     {
    //       phoneno: phoneNumber,
    //     },
    //   );
    //   console.log('Response Status:', response.status);
    //   console.log('Response Data:', response.data);
    // } catch (error) {
    //   console.error('Error:', error);
    // }
  };

  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={'transparent'} translucent />
      <ImageBackground
        source={IocalImage.Login_BgImage}
        style={styles.ImageContainer}>
        {/* Log in and sign up */}
        <View style={{alignSelf: 'center', marginVertical: hp('10%')}}>
          <Text style={styles.title}>Login with Mobile Number</Text>
          <Text style={styles.subtitle}>
            Lorem Ipsum is simply dummy text of the{' '}
          </Text>
        </View>
        {/* Contact */}
        <View style={styles.phoneNumberContainer}>
          <PhoneNumberInput
            defaultCode="US"
            layout="first"
            onChangeText={handlePhoneInputChange}
            value={phoneNumber}
            withDarkTheme
            flagButtonStyle={styles.flagButton}
            codeTextStyle={styles.codeText}
            containerStyle={styles.phoneNumberInputContainer}
            textContainerStyle={{
              paddingVertical: hp('2%'),
              color: 'black',
              borderRadius: wp('4%'),
            }}
            textInputStyle={styles.phoneNumberTextInput}
            autoFocus
          />
        </View>
        {/* Button */}
        <View style={styles.TextView}>
          <CommonButton ButtonText={'Sign Up'} HandleNext={() => PostData()} />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLOR.DARK_BLUE,
  },
  ImageContainer: {
    flex: 1,
    resizeMode: 'contain',
  },
  TextView: {
    marginTop: hp('16%'),
  },
  BannerText: {
    color: COLOR.WHITE,
    fontSize: FONT_SIZE.F_15,
  },

  BannerText: {
    color: COLOR.WHITE,
    fontSize: FONT_SIZE.F_15,
  },
  title: {
    color: COLOR.WHITE,
    fontSize: FONT_SIZE.F_19,
    fontFamily: FONT.SEMI_BOLD,
  },
  subtitle: {
    color: COLOR.WHITE,
    fontSize: FONT_SIZE.F_15,
    fontFamily: FONT.MEDIUM,
  },
  textInput: {
    color: COLOR.LIGHT_GRAY,
    fontSize: FONT_SIZE.F_14,
    fontFamily: FONT.MEDIUM,
  },

  buttonText: {
    color: COLOR.BLACK,
    fontSize: FONT_SIZE.F_17,
    fontFamily: FONT.MEDIUM,
  },
  phoneNumberContainer: {
    // width: wp('60%'),
    alignSelf: 'center',
    // justifyContent: 'center',
    // backgroundColor: COLOR.DARK_BLUE,
    borderRadius: wp('7%'),
    marginTop: hp('20%'),
    height: hp('8%'),
  },
  phoneNumberInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: wp('4%'),
  },
  phoneNumberTextInput: {
    color: COLOR.BLACK,
    fontSize: FONT_SIZE.F_15,
    fontFamily: FONT.MEDIUM,
    padding: hp('-0%'),
  },
  flagButton: {
    // Adjust the styles for the flag button (country flag)
    paddingRight: 1,
  },
  codeText: {
    // Adjust the styles for the selected country code
    fontSize: FONT_SIZE.F_15,
    fontFamily: FONT.MEDIUM,
    color: COLOR.BLACK,
  },
});

export default Login;
