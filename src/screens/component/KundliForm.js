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
import User from '../../Icons/Svg/User.svg';
import Calender from '../../Icons/Svg/Calender.svg';
import Eclip from '../../Icons/Svg/Eclip.svg';
import CommonButton from '../../Providerscreen/CommonButton';
import {Screen} from '../../constant/screen';

const KundliForm = ({navigation}) => {
  const [name, setName] = useState('');
  const [dateBirth, setDateBirth] = useState('');
  const [timeBirth, setTimeBirth] = useState('');
  const [city, setCity] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const genderArray = [
    {id: 1, title: 'Man', image: require('../../Icons/Images/Man.png')},
    {id: 2, title: 'Woman', image: require('../../Icons/Images/Woman.png')},
    {id: 3, title: 'Other', image: require('../../Icons/Images/Other.png')},
  ];
  const LanguagePress = title => {
    setSelectValue(title);
  };

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
        <Back height={hp('6%')} width={wp('10%')} />
        <Text style={styles.headerTitle}>Kundli</Text>
      </TouchableOpacity>

      <ScrollView style={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
        {/* ---------- TextInput view ----- */}
        <View style={{marginTop: hp('2%')}}>
          <Text style={styles.TitleHeadinge}>Name</Text>
          <View style={styles.TextView}>
            <User height={hp('3%')} width={wp('5%')} />
            <TextInput
              placeholder="Enter Name"
              placeholderTextColor={COLOR.LIGHT_GRAY}
              keyboardType="default"
              value={name}
              onChangeText={text => setName(text)}
              style={styles.TextInputStyle}
            />
          </View>

          {/* ----------- Gender --------- */}
          <View style={{marginTop: hp('2%')}}>
            <Text style={styles.TitleHeadinge}>What is your gender?</Text>
            <FlatList
              data={genderArray}
              keyExtractor={item => item.id.toString()}
              contentContainerStyle={{marginTop: hp('3%')}}
              numColumns={3}
              renderItem={({item}) => (
                <View style={styles.listTab}>
                  <TouchableOpacity
                    onPress={() => LanguagePress(item.title)}
                    style={[
                      styles.textView,
                      {
                        backgroundColor:
                          selectValue === item.title
                            ? COLOR.YELLOW
                            : COLOR.GRAY,
                      },
                    ]}>
                    <Image source={item.image} style={styles.imageStyle} />
                    <Text style={styles.textStyle}>{item.title}</Text>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
          {/* --------- Date of birth ----------- */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: wp('85%'),
              marginTop: hp('4%'),
            }}>
            <View>
              <Text style={styles.TitleHeadinge}>Date of Birth</Text>
              <View style={styles.dateView}>
                <TextInput
                  placeholder="DD/MM/YY"
                  placeholderTextColor={COLOR.LIGHT_GRAY}
                  keyboardType="number-pad"
                  value={dateBirth}
                  onChangeText={text => setDateBirth(text)}
                  style={[styles.TextInputStyle, {width: wp('26%')}]}
                />
                <Calender height={hp('3%')} width={wp('5%')} />
              </View>
            </View>

            {/* ------ Time OF Birth ------- */}
            <View>
              <Text style={styles.TitleHeadinge}>Time of Birth</Text>
              <View style={styles.dateView}>
                <TextInput
                  placeholder="Hr/min"
                  placeholderTextColor={COLOR.LIGHT_GRAY}
                  keyboardType="number-pad"
                  value={timeBirth}
                  onChangeText={text => setTimeBirth(text)}
                  style={[styles.TextInputStyle, {width: wp('26%')}]}
                />
                <Eclip height={hp('3%')} width={wp('5%')} />
              </View>
            </View>
          </View>

          {/* ---------- TextInput view ----- */}
          <View style={{marginTop: hp('3%')}}>
            <Text style={styles.TitleHeadinge}>Place of Birth</Text>
            <View style={styles.TextView}>
              <Image
                source={require('../../Icons/Images/Plot.png')}
                style={styles.imageStyle}
              />
              <TextInput
                placeholder="Enter City"
                placeholderTextColor={COLOR.LIGHT_GRAY}
                keyboardType="default"
                value={city}
                onChangeText={text => setCity(text)}
                style={styles.TextInputStyle}
              />
            </View>
          </View>

          {/* ---------- Button ------ */}
          <View style={{marginTop: hp('16%')}}>
            <CommonButton
              ButtonText={'Verification'}
              HandleNext={() => navigation.navigate('CreateNewKundali')}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default KundliForm;

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
  },
  subHeadinge: {
    fontSize: FONT_SIZE.F_15,
    fontFamily: FONT.MEDIUM,
    color: COLOR.DARK_BLUE,
  },
  TitleHeadinge: {
    fontSize: FONT_SIZE.F_16,
    fontFamily: FONT.MEDIUM,
    color: COLOR.DARK_BLUE,
  },

  TextView: {
    marginTop: hp('1%'),
    flexDirection: 'row',
    width: wp('88%'),
    paddingHorizontal: wp('3%'),
    // backgroundColor: COLOR.YELLOW,
    alignItems: 'center',
    borderColor: COLOR.GRAY,
    borderRadius: hp('2%'),
    borderWidth: wp('0.5%'),
  },
  textView: {
    // width: wp('20%'),
    padding: hp('1%'),
    paddingHorizontal: hp('1.6%'),
    marginRight: wp('5%'),
    borderRadius: hp('2%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: FONT_SIZE.F_15,
    fontFamily: FONT.MEDIUM,
    color: COLOR.WHITE,
    textAlign: 'center',
  },
  listTab: {
    marginVertical: hp('0.8%'),
  },
  imageStyle: {
    height: hp('3%'),
    width: wp('6%'),
    resizeMode: 'contain',
  },
  dateView: {
    marginTop: hp('1%'),
    flexDirection: 'row',
    width: wp('40%'),
    paddingHorizontal: wp('5%'),
    alignItems: 'center',
    borderColor: COLOR.GRAY,
    borderRadius: hp('2%'),
    borderWidth: wp('0.5%'),
  },
});
