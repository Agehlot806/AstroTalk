import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLOR} from '../../Providerscreen/Globles';
import LocalImage from '../../Providerscreen/LocalImage';
import {Screen} from '../../constant/screen';

const Splash = ({navigation}) => {
  setTimeout(() => {
    navigation.reset({
      index: 0,
      routes: [{name: 'AuthLoading'}],
    });
  }, 250);
  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={'transparent'} translucent />

      <TouchableOpacity style={styles.imageContainer}>
        <Image
          source={LocalImage.AstroSplash}
          style={{height: hp('46%'), width: wp('94%')}}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Splash;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLOR.THEAMEWHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    resizeMode: 'cover',
  },
});
