import React, {useState, useEffect} from 'react';
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
  ImageBackground,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLOR, FONT, FONT_SIZE} from '../../Providerscreen/Globles';
import IocalImage from '../../Providerscreen/IocalImage';
import Back from '../../Icons/Svg/Back.svg';
import Whatsapp from '../../Icons/Svg/Whatsapp.svg';
import Searchicon from '../../Icons/Svg/Searchicon.svg';
import Delete from '../../Icons/Svg/Delete.svg';
import Location from '../../Icons/Svg/Location.svg';
import User from '../../Icons/Svg/User.svg';
import Calender from '../../Icons/Svg/Calender.svg';
import CommonButton from '../../Providerscreen/CommonButton';

const KundliNewandDelete = ({navigation}) => {
  const [Radio, setRadio] = useState(0);
  const [selectValue, setSelectValue] = useState('');
  const [name, setName] = useState('');
  const [dateBirth, setDateBirth] = useState('');
  const [timeBirth, setTimeBirth] = useState('');
  const [city, setCity] = useState('');
  const [Gname, setGName] = useState('');
  const [GdateBirth, setGDateBirth] = useState('');
  const [GtimeBirth, setGTimeBirth] = useState('');
  const [Gcity, setGCity] = useState('');
  const Usercategory = [
    {
      id: 0,
      user: 'Shreekant',
      birth: '30 may 1995',
      time: '05:57 PM',
      address: 'khandwa madhya pradesh india',
    },
    {
      id: 1,
      user: 'Pandit keshri',
      birth: '30 may 1995',
      time: '05:57 PM',
      address: 'khandwa madhya pradesh india',
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLOR.WHITE} barStyle="dark-content" />

      {/* --------Header ------- */}
      <View
        style={{
          marginVertical: hp('2%'),
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack('')}>
          <Back height={hp('6%')} width={wp('8%')} />
        </TouchableOpacity>
        <View style={{width: '65%'}}>
          <Text style={[styles.headerTitle, {marginLeft: hp('1%')}]}>
            {/* {Radio === 0 ? Kundli : 'Kundli Matching'} */}
            Kundli
          </Text>
        </View>
        <Image
          source={IocalImage.Subtract}
          style={{height: hp('3%'), width: wp('6%'), resizeMode: 'contain'}}
        />
        <TouchableOpacity
          style={styles.Imageheadiew}
          onPress={() => navigation.navigate('KundliMatching')}>
          <Whatsapp height={hp('3%')} width={wp('4%')} />
          <Text style={styles.smallText}> Share</Text>
        </TouchableOpacity>
      </View>
      {/* ---------- header end --- */}

      {/* -------- Tab -------- */}
      <View style={styles.tabCardView}>
        <TouchableOpacity
          style={[
            styles.tabView,
            {backgroundColor: Radio === 0 ? COLOR.YELLOW : COLOR.MEDIUM_GRAY},
          ]}
          onPress={() => setRadio(0)}>
          <Text style={[styles.MediumText, {color: COLOR.WHITE}]}>
            Open Kundli
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabView,
            {backgroundColor: Radio === 0 ? COLOR.MEDIUM_GRAY : COLOR.YELLOW},
          ]}
          onPress={() => setRadio(1)}>
          <Text style={[styles.MediumText, {color: COLOR.WHITE}]}>
            New Matching
          </Text>
        </TouchableOpacity>
      </View>

      {/* ---------- Search view ----- */}
      <View style={{marginTop: hp('2%')}}>
        <View style={[styles.TextView, {width: wp('90%')}]}>
          <Searchicon height={hp('3%')} width={wp('5%')} />
          <TextInput
            placeholder="Search City"
            placeholderTextColor={COLOR.LIGHT_GRAY}
            keyboardType="default"
            value={selectValue}
            onChangeText={text => setSelectValue(text)}
            style={styles.TextInputStyle}
          />
        </View>
      </View>

      {/* ---------Open kundli  tab of data ------- */}
      {Radio === 0 && (
        <View>
          <FlatList
            data={Usercategory}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <View style={styles.cardDesign}>
                  <View style={styles.UsernameView}>
                    <Text
                      style={[
                        styles.headerTitle,
                        {color: COLOR.WHITE, textAlign: 'center'},
                      ]}>
                      J
                    </Text>
                  </View>
                  <View
                    style={{
                      alignSelf: 'flex-start',
                      width: wp('55%'),
                    }}>
                    <Text style={[styles.MediumText, {textAlign: 'left'}]}>
                      {item.user}
                    </Text>
                    <Text style={styles.smallText}>
                      {item.birth}
                      <Text style={styles.smallText}>{item.time}</Text>
                    </Text>
                    <Text style={styles.smallText}>{item.address}</Text>
                  </View>
                  <View style={styles.deletView}>
                    <Delete height={hp('4%')} width={wp('10%')} />
                  </View>
                </View>
              );
            }}
          />
        </View>
      )}
      {/* ---------- Button ------ */}

      {Radio === 0 && (
        <CommonButton
          ButtonText={'Create New Kundli'}
          //   HandleNext={() => navigation.navigate('Home')}
        />
      )}

      {/* ----------- New Match ------ */}
      <ScrollView style={{flexGrow: 1}}>
        {Radio === 1 && (
          <View style={{marginBottom: hp('12%')}}>
            <View style={styles.BoyView}>
              <Text
                style={[
                  styles.MediumText,
                  {textAlign: 'left', color: COLOR.WHITE},
                ]}>
                Boy's Details
              </Text>
            </View>
            <View style={styles.BoyUWhiteView}>
              {/* ---------- TextInput view ----- */}

              <Text style={styles.TitleHeadinge}>Name</Text>
              <View
                style={[
                  styles.TextView,
                  {
                    backgroundColor: COLOR.WHITE,
                    borderColor: COLOR.GRAY,
                    borderRadius: hp('2%'),
                    borderWidth: wp('0.5%'),
                  },
                ]}>
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
              {/* --------- Date of birth ----------- */}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: wp('80%'),
                  marginTop: hp('2%'),
                }}>
                <View>
                  <Text style={styles.TitleHeadinge}>Birth Date</Text>
                  <View style={styles.dateView}>
                    <Calender height={hp('3%')} width={wp('5%')} />
                    <TextInput
                      placeholder="DD/MM/YY"
                      placeholderTextColor={COLOR.LIGHT_GRAY}
                      keyboardType="number-pad"
                      value={dateBirth}
                      onChangeText={text => setDateBirth(text)}
                      style={[styles.TextInputStyle, {width: wp('26%')}]}
                    />
                  </View>
                </View>

                {/* ------ Time OF Birth ------- */}
                <View>
                  <Text style={styles.TitleHeadinge}>Birth Time</Text>
                  <View style={styles.dateView}>
                    <Image
                      source={IocalImage.Clock}
                      style={{
                        width: wp('4%'),
                        height: hp('5%'),
                        resizeMode: 'contain',
                      }}
                    />
                    <TextInput
                      placeholder="Hr/min"
                      placeholderTextColor={COLOR.LIGHT_GRAY}
                      keyboardType="number-pad"
                      value={timeBirth}
                      onChangeText={text => setTimeBirth(text)}
                      style={[styles.TextInputStyle, {width: wp('26%')}]}
                    />
                    {/* <Eclip height={hp('3%')} width={wp('5%')} /> */}
                  </View>
                </View>
              </View>

              <Text style={[styles.TitleHeadinge, {marginTop: hp('2%')}]}>
                Birth Place
              </Text>
              <View
                style={[
                  styles.TextView,
                  {
                    backgroundColor: COLOR.WHITE,
                    borderColor: COLOR.GRAY,
                    borderRadius: hp('2%'),
                    borderWidth: wp('0.5%'),
                  },
                ]}>
                <Location height={hp('3%')} width={wp('4%')} />
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

            {/* ------------ Girls ----------- */}
            <View style={styles.BoyView}>
              <Text
                style={[
                  styles.MediumText,
                  {textAlign: 'left', color: COLOR.WHITE},
                ]}>
                Girl's Details
              </Text>
            </View>
            <View style={styles.BoyUWhiteView}>
              {/* ---------- TextInput view ----- */}

              <Text style={styles.TitleHeadinge}>Name</Text>
              <View
                style={[
                  styles.TextView,
                  {
                    backgroundColor: COLOR.WHITE,
                    borderColor: COLOR.GRAY,
                    borderRadius: hp('2%'),
                    borderWidth: wp('0.5%'),
                  },
                ]}>
                <User height={hp('3%')} width={wp('5%')} />
                <TextInput
                  placeholder="Enter Name"
                  placeholderTextColor={COLOR.LIGHT_GRAY}
                  keyboardType="default"
                  value={Gname}
                  onChangeText={text => setGName(text)}
                  style={styles.TextInputStyle}
                />
              </View>
              {/* --------- Date of birth ----------- */}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: wp('80%'),
                  marginTop: hp('2%'),
                }}>
                <View>
                  <Text style={styles.TitleHeadinge}>Birth Date</Text>
                  <View style={styles.dateView}>
                    <Calender height={hp('3%')} width={wp('5%')} />
                    <TextInput
                      placeholder="DD/MM/YY"
                      placeholderTextColor={COLOR.LIGHT_GRAY}
                      keyboardType="number-pad"
                      value={GdateBirth}
                      onChangeText={text => setGDateBirth(text)}
                      style={[styles.TextInputStyle, {width: wp('26%')}]}
                    />
                  </View>
                </View>

                {/* ------ Time OF Birth ------- */}
                <View>
                  <Text style={styles.TitleHeadinge}>Birth Time</Text>
                  <View style={styles.dateView}>
                    <Image
                      source={IocalImage.Clock}
                      style={{
                        width: wp('4%'),
                        height: hp('5%'),
                        resizeMode: 'contain',
                      }}
                    />
                    <TextInput
                      placeholder="Hr/min"
                      placeholderTextColor={COLOR.LIGHT_GRAY}
                      keyboardType="number-pad"
                      value={GtimeBirth}
                      onChangeText={text => setGTimeBirth(text)}
                      style={[styles.TextInputStyle, {width: wp('26%')}]}
                    />
                    {/* <Eclip height={hp('3%')} width={wp('5%')} /> */}
                  </View>
                </View>
              </View>

              <Text style={[styles.TitleHeadinge, {marginTop: hp('2%')}]}>
                Birth Place
              </Text>
              <View
                style={[
                  styles.TextView,
                  {
                    backgroundColor: COLOR.WHITE,
                    borderColor: COLOR.GRAY,
                    borderRadius: hp('2%'),
                    borderWidth: wp('0.5%'),
                  },
                ]}>
                <Location height={hp('3%')} width={wp('4%')} />
                <TextInput
                  placeholder="Enter City"
                  placeholderTextColor={COLOR.LIGHT_GRAY}
                  keyboardType="default"
                  value={Gcity}
                  onChangeText={text => setGCity(text)}
                  style={styles.TextInputStyle}
                />
              </View>
            </View>
          </View>
        )}
      </ScrollView>
      {/* ---------- Button ------ */}

      {Radio === 1 && (
        <CommonButton
          ButtonText={'Match Horoscop'}
          HandleNext={() => navigation.navigate('KundliMatching')}
        />
      )}
    </View>
  );
};

export default KundliNewandDelete;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
    paddingHorizontal: hp('2%'),
  },
  headerTitle: {
    fontSize: FONT_SIZE.F_17,
    fontFamily: FONT.BOLD,
    color: COLOR.DARK_BLUE,
  },
  Imageheadiew: {
    flexDirection: 'row',
    width: '20%',
    alignSelf: 'center',
    alignItems: 'center',
    borderColor: COLOR.YELLOW,
    borderWidth: wp('0.2%'),
    borderRadius: hp('0.5%'),
    marginLeft: wp('2%'),
    paddingHorizontal: wp('4%'),
  },
  subheadlineText: {
    fontFamily: FONT.SEMI_BOLD,
    fontSize: FONT_SIZE.F_16,
    color: COLOR.WHITE,
    textAlign: 'center',
  },
  MediumText: {
    // marginVertical: wp('2%'),
    fontFamily: FONT.SEMI_BOLD,
    fontSize: FONT_SIZE.F_14,
    color: COLOR.DARK_BLUE,
    textAlign: 'left',
  },
  smallText: {
    // marginVertical: wp('2%'),
    fontFamily: FONT.SEMI_BOLD,
    fontSize: FONT_SIZE.F_11,
    color: COLOR.LIGHT_GRAY,
    textAlign: 'left',
  },

  //   ----- tab view ----
  tabCardView: {
    flexDirection: 'row',
    width: wp('90%'),
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: hp('2%'),
  },
  tabView: {
    width: wp('40%'),
    alignItems: 'center',
    paddingVertical: hp('1.5%'),
    borderRadius: hp('1.5%'),
  },
  //   ------ Search ----------
  TextView: {
    marginTop: hp('1%'),
    flexDirection: 'row',
    width: wp('80%'),
    paddingHorizontal: wp('3%'),
    backgroundColor: '#d3e6ed',
    alignItems: 'center',
    // borderColor: COLOR.GRAY,
    borderRadius: hp('2%'),
    // borderWidth: wp('0.5%'),
  },
  TextInputStyle: {
    marginLeft: hp('1%'),
    fontSize: FONT_SIZE.F_13,
    fontFamily: FONT.MEDIUM,
    color: COLOR.BLACK,
    width: wp('70%'),
  },
  // -------- CARD vIEW ---------
  cardDesign: {
    marginVertical: hp('1.5%'),
    flexDirection: 'row',
    width: wp('90%'),
    paddingVertical: wp('2%'),
    justifyContent: 'space-between',
    paddingHorizontal: wp('1%'),
    backgroundColor: COLOR.WHITE,
    elevation: wp('0.3%'),
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: hp('2%'),
  },
  UsernameView: {
    flexDirection: 'row',
    width: wp('10%'),
    marginHorizontal: hp('1%'),
    height: hp('6%'),
    justifyContent: 'center',
    backgroundColor: 'pink',
    alignItems: 'center',
    borderRadius: hp('5%'),
  },
  deletView: {
    width: wp('20%'),
    alignItems: 'center',
  },
  BoyView: {
    marginTop: hp('3%'),
    width: wp('90%'),
    paddingVertical: wp('3%'),
    justifyContent: 'center',
    paddingHorizontal: hp('4%'),
    backgroundColor: COLOR.YELLOW,
    alignSelf: 'center',
    borderTopLeftRadius: hp('2%'),
    borderTopRightRadius: hp('2%'),
  },
  BoyUWhiteView: {
    // marginTop: hp('3%'),
    width: wp('90%'),
    paddingVertical: wp('3%'),
    justifyContent: 'center',
    paddingHorizontal: hp('4%'),
    backgroundColor: COLOR.WHITE,
    alignSelf: 'center',
    borderBottomLeftRadius: hp('2%'),
    borderBottomRightRadius: hp('2%'),
    elevation: wp('0.3%'),
    marginBottom: hp('2%'),
  },
  TitleHeadinge: {
    fontSize: FONT_SIZE.F_16,
    fontFamily: FONT.MEDIUM,
    color: COLOR.DARK_BLUE,
  },
  dateView: {
    marginTop: hp('1%'),
    flexDirection: 'row',
    width: wp('35%'),
    paddingHorizontal: wp('5%'),
    alignItems: 'center',
    borderColor: COLOR.GRAY,
    borderRadius: hp('2%'),
    borderWidth: wp('0.5%'),
  },
});
