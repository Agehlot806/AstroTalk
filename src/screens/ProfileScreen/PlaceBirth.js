import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLOR, FONT, FONT_SIZE} from '../../Providerscreen/Globles';
import Back from '../../Icons/Svg/Back.svg';
import Searchicon from '../../Icons/Svg/Searchicon.svg';
import CommonButton from '../../Providerscreen/CommonButton';
import {Screen} from '../../constant/screen';

const PlaceBirth = ({navigation}) => {
  const [name, setName] = useState('');
  const genderArray = [
    {id: 1, title: 'Man', image: require('../../Icons/Images/Man.png')},
    {id: 2, title: 'Woman', image: require('../../Icons/Images/Woman.png')},
    {id: 3, title: 'Other', image: require('../../Icons/Images/Other.png')},
  ];

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLOR.ThemeColor} barStyle="dark-content" />
      {/* --------Header ------- */}
      <TouchableOpacity
        onPress={() => navigation.goBack('')}
        style={{
          marginVertical: hp('2%'),
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Back height={hp('6%')} width={wp('13%')} />
        <Text style={styles.headerTitle}>Place of Birth</Text>
      </TouchableOpacity>

      <ScrollView style={{flexGrow: 1}}>
        {/* ---------- TextInput view ----- */}
        <View style={{marginTop: hp('2%')}}>
          <View style={styles.TextView}>
            <Searchicon height={hp('3%')} width={wp('5%')} />
            <TextInput
              placeholder="Indore"
              placeholderTextColor={COLOR.DARK_BLUE}
              keyboardType="default"
              value={name}
              onChangeText={text => setName(text)}
              style={styles.TextInputStyle}
            />
          </View>
        </View>

        {/* ---------- Button ------ */}
        <View style={{marginTop: hp('75%')}}>
          <CommonButton
            ButtonText={'Verification'}
            HandleNext={() => navigation.navigate('Home')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default PlaceBirth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
    paddingHorizontal: hp('2%'),
  },
  headerTitle: {
    fontSize: FONT_SIZE.F_19,
    fontFamily: FONT.BOLD,
    color: COLOR.DARK_BLUE,
  },
  TextInputStyle: {
    marginLeft: hp('1%'),
    fontSize: FONT_SIZE.F_15,
    fontFamily: FONT.MEDIUM,
    color: COLOR.BLACK,
    width: wp('80%'),
    // backgroundColor: 'pink',
  },

  TextView: {
    marginTop: hp('1%'),
    flexDirection: 'row',
    width: wp('92%'),
    paddingHorizontal: wp('3%'),
    backgroundColor: '#F8F8FA',
    alignItems: 'center',
    // borderColor: COLOR.GRAY,
    borderRadius: hp('2%'),
    // borderWidth: wp('0.5%'),
  },
  textView: {
    width: wp('20%'),
    padding: hp('1%'),
    paddingHorizontal: hp('1.6%'),
    marginRight: wp('5%'),
    borderRadius: hp('2%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
