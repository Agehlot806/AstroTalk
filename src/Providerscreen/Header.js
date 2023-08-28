import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';
import React from 'react';
import BackArrow from '../Icon/Svg/BackArrow.svg';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLOR, FONT, FONT_SIZE} from './Globles';
import {useNavigation} from '@react-navigation/native';

export const Header = ({title, navigate, Secondimage}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <StatusBar barStyle="light-content" backgroundColor={COLOR.THEAME} />
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <TouchableOpacity
            style={styles.svgContainer}
            onPress={() => navigation.goBack()}>
            <BackArrow width={wp('6%')} height={hp('3%')} />
          </TouchableOpacity>
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity
          style={styles.notificationButton}
          onPress={() => {
            navigate;
          }}>
          <Image source={Secondimage} style={styles.imgeslast} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: COLOR.THEAME,
  },
  header: {
    backgroundColor: COLOR.THEAME,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingBottom: hp('1%'),
  },
  backButton: {
    width: wp('18%'),
    height: hp('8%'),
    alignSelf: 'flex-start',
    borderBottomRightRadius: hp('8%'),
    backgroundColor: 'pink',
  },
  svgContainer: {
    marginTop: hp('4%'),
    marginLeft: hp('2%'),
  },
  title: {
    paddingHorizontal: wp('3%'),
    color: COLOR.WHITE,
    fontSize: FONT_SIZE.F_20,
    fontWeight: 'bold',
    marginTop: hp('3%'),
    width: wp('70%'),
  },
  notificationButton: {
    // marginTop: hp('1%'),
    width: wp('15%'),
    height: hp('8%'),
    alignSelf: 'flex-end',
    borderBottomLeftRadius: hp('7%'),
    backgroundColor: 'orange',
  },
  imgeslast: {
    width: wp('9%'),
    height: hp('12%'),
    resizeMode: 'contain',
  },
});
