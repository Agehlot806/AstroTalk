import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLOR, FONT, FONT_SIZE} from '../../Providerscreen/Globles';
import IocalImage from '../../Providerscreen/IocalImage';
import CommonButton from '../../Providerscreen/CommonButton';
import {Screen} from '../../constant/screen';
import Swiper from 'react-native-swiper';

const BannerFirst = ({navigation}) => {
  const images = [
    {imag: IocalImage.Banner_1},
    {imag: IocalImage.Banner_2},
    {imag: IocalImage.Banner_3},
    {imag: IocalImage.Banner_4},
  ];

  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={COLOR.DARK_BLUE} barStyle={'light-content'} />
      <Swiper
        style={styles.wrapper}
        // showsButtons={true}  //this for < and > icon
        paginationStyle={styles.pagination}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}>
        {images.map((item, index) => (
          <View key={index} style={styles.slide}>
            <ImageBackground
              source={item.imag}
              resizeMode="cover"
              style={styles.image}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                style={{
                  alignSelf: 'flex-end',
                  margin: hp('4%'),
                  marginTop: hp('7%'),
                }}>
                <Text style={[styles.BannerText, {fontSize: FONT_SIZE.F_17}]}>
                  Skip
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  alignSelf: 'center',
                  position: 'absolute',
                  bottom: 0,
                  // zIndex: hp('0.1%'),
                }}>
                <View
                  style={{
                    width: wp('85%'),
                    alignSelf: 'center',
                  }}>
                  <Text style={styles.BannerText}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting we industry. Lorem Ipsum has been the industry's
                  </Text>
                </View>
                <View style={styles.TextView}>
                  <CommonButton
                    ButtonText={'Next'}
                    HandleNext={() => navigation.navigate('Login')}
                  />
                </View>
              </View>
            </ImageBackground>
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLOR.DARK_BLUE,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: wp('100%'),
    flex: 1,
  },
  TextView: {
    marginTop: hp('12%'),
  },
  BannerText: {
    color: COLOR.WHITE,
    fontSize: FONT_SIZE.F_15,
    fontFamily: FONT.MEDIUM,
    textAlign: 'center',
  },
  dot: {
    backgroundColor: COLOR.WHITE, // Inactive dot color
    width: wp('2%'),
    height: hp('1%'),
    borderRadius: 4,
    margin: hp('2%'),
  },
  activeDot: {
    backgroundColor: COLOR.YELLOW, // Inactive dot color
    width: wp('2%'),
    height: hp('1%'),
    borderRadius: 4,
    margin: hp('2%'),
  },
  pagination: {
    position: 'absolute',
    bottom: hp('25%'),
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BannerFirst;
