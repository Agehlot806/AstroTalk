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
import IocalImage from '../../Providerscreen/IocalImage';
import {Screen} from '../../constant/screen';

const Splash = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate(Screen.BANNERFIRST);
  }, 3000);
  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={'transparent'} translucent />

      <TouchableOpacity
        onPress={() => navigation.navigate(Screen.BANNERFIRST)}
        style={styles.imageContainer}>
        <Image
          source={IocalImage.AstroSplash}
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
