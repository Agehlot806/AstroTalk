import React from 'react';
import {View, StyleSheet, Image, StatusBar, Text} from 'react-native';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLOR} from '../../Providerscreen/Globles';
import IocalImage from '../../Providerscreen/IocalImage';

const Splash = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('Banner1');
  }, 3000);
  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={'#ffff'} />

      <View style={styles.imageContainer}>
        <Image
          source={IocalImage.AstroSplash}
          style={{height: hp('46%'), width: wp('94%')}}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default Splash;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLOR.THEAMEWHITE,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: hp('-6.5%'),
    alignItems: 'flex-end',
  },
});
