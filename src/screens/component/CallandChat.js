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
import Menuicon from '../../Icons/Svg/Menuicon.svg';
import Star from '../../Icons/Svg/Star.svg';
import Searchicon from '../../Icons/Svg/Searchicon.svg';
import AtoZ from '../../Icons/Svg/AtoZ.svg';
import StarMoon from '../../Icons/Svg/StarMoon.svg';
import Fliter from '../../Icons/Svg/Fliter.svg';
import Footer from '../../Providerscreen/Footer';

const CallandChat = ({navigation}) => {
  const [activePageName, setActivePageName] = useState(2);
  const [name, setName] = useState('');
  const [dateBirth, setDateBirth] = useState('');
  const [timeBirth, setTimeBirth] = useState('');
  const [city, setCity] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const CategyArray = [
    {
      id: 1,
      title: 'All',
    },
    {
      id: 2,
      title: 'Love',
    },
    {
      id: 3,
      title: 'Education',
    },
    {
      id: 4,
      title: 'Career',
    },
  ];

  const astroaArray = [
    {
      id: 1,
      title: 'Cody Fisher',
      image: require('../../Icons/Images/User1.png'),
      call: require('../../Icons/Images/CallGreen.png'),
    },
    {
      id: 2,
      title: 'Jenny Wilson',
      image: require('../../Icons/Images/User2.png'),
      call: require('../../Icons/Images/CallGreen.png'),
    },
    {
      id: 3,
      title: 'Gemini Jenny',
      time: ' Wait 10 min',
      image: require('../../Icons/Images/User3.png'),
      call: require('../../Icons/Images/Redcall.png'),
    },
    {
      id: 4,
      title: 'Kerry Cody',
      image: require('../../Icons/Images/User1.png'),
      call: require('../../Icons/Images/CallGreen.png'),
    },
    {
      id: 4,
      title: 'Cancer',
      time: ' Wait 10 min',
      image: require('../../Icons/Images/User3.png'),
      call: require('../../Icons/Images/Redcall.png'),
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLOR.WHITE} barStyle="dark-content" />
      {/* --------Header ------- */}
      <TouchableOpacity
        onPress={() => navigation.goBack('')}
        style={{
          marginVertical: hp('2%'),
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Menuicon height={hp('6%')} width={wp('7%')} />
        <View style={{}}>
          <Text style={[styles.headerTitle, {marginLeft: hp('1%')}]}>
            Call & Chat With Astro
          </Text>
        </View>
        <View
          style={{
            width: '20%',
            marginHorizontal: hp('2%'),
            marginRight: hp('2%'),
            flexDirection: 'row',
            alignSelf: 'flex-end',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              borderColor: COLOR.YELLOW,
              borderWidth: wp('0.2%'),
            }}>
            <Text style={styles.smallText}> $ 125.00</Text>
          </View>
          <Fliter height={hp('6%')} width={wp('6%')} />
        </View>
      </TouchableOpacity>

      <ScrollView style={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
        {/* ---------- TextInput view ----- */}
        <View style={{marginTop: hp('1.5%')}}>
          <View style={styles.TextView}>
            <Searchicon height={hp('3%')} width={wp('5%')} />
            <TextInput
              placeholder="Search City"
              placeholderTextColor={COLOR.LIGHT_GRAY}
              keyboardType="default"
              value={name}
              onChangeText={text => setName(text)}
              style={styles.TextInputStyle}
            />
          </View>
        </View>

        {/* --------- categ list ------- */}
        <FlatList
          data={CategyArray}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <View>
                <View
                  style={[
                    styles.HoroView,
                    {
                      backgroundColor:
                        item.id === 1 ? COLOR.YELLOW : COLOR.GRAY,
                    },
                  ]}>
                  <Text style={[styles.CategrText]}>{item.title}</Text>
                </View>
              </View>
            );
          }}
        />

        {/* ------------ Astrologer ----------- */}

        <FlatList
          data={astroaArray}
          //   horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => navigation.navigate('AstroDetail')}>
                <View style={styles.cardView}>
                  <Image source={item.image} style={styles.astroImage} />

                  <View
                    style={{
                      marginLeft: wp('4%'),
                      //   width: wp('30%'),
                      alignSelf: 'flex-start',
                      alignItems: 'center',
                    }}>
                    <View style={styles.HeadView}>
                      <Text
                        style={[
                          styles.subheadlineText,
                          {color: COLOR.DARK_BLUE},
                        ]}>
                        {item.title}
                      </Text>
                      <Text
                        style={[styles.MediumText, {color: COLOR.DARK_BLUE}]}>
                        5 Year experience
                      </Text>
                    </View>
                    <View
                      style={[
                        styles.HeadView2,
                        {justifyContent: 'space-between', marginTop: hp('-1%')},
                      ]}>
                      <AtoZ height={hp('3%')} width={wp('4%')} />
                      <Text
                        style={[
                          styles.smallText,
                          {
                            color: COLOR.GRAY,
                            textAlign: 'left',
                            width: wp('40%'),
                            marginLeft: wp('1%'),
                          },
                        ]}>
                        English,Hindi
                        <Text style={[styles.smallText, {color: '#FD6A35'}]}>
                          {'  '} $ 125
                        </Text>
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          marginTop: hp('2%'),
                        }}>
                        <Image
                          source={require('../../Icons/Images/Message.png')}
                          style={{
                            height: hp('4%'),
                            width: wp('10%'),
                            resizeMode: 'contain',
                          }}
                        />
                        <Image
                          source={item.call}
                          style={{
                            height: hp('4%'),
                            width: wp('8%'),
                            marginLeft: wp('2%'),
                            resizeMode: 'contain',
                          }}
                        />
                      </View>
                    </View>
                    <View style={[styles.HeadView2]}>
                      <StarMoon height={hp('3%')} width={wp('4%')} />
                      <Text
                        numberOfLines={1}
                        style={[
                          styles.smallText,
                          {
                            width: wp('20%'),
                            color: COLOR.GRAY,
                            textAlign: 'left',
                            marginHorizontal: wp('1%'),
                          },
                        ]}>
                        Vedic,Vastu, pal..
                      </Text>
                      <Star
                        height={hp('3%')}
                        width={wp('3%')}
                        style={{marginHorizontal: hp('1%')}}
                      />
                      <Text
                        style={[
                          styles.smallText,
                          {color: COLOR.BLACK, marginTop: hp('0.4%')},
                        ]}>
                        4.1
                      </Text>

                      <Text
                        style={[
                          styles.MediumText,
                          {
                            fontSize: FONT_SIZE.F_12,
                            color: 'red',
                            marginVertical: hp('0.5%'),
                            marginLeft: wp('14%'),
                            alignSelf: 'flex-end',
                          },
                        ]}>
                        {item.time}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </ScrollView>
      <Footer activePageName={activePageName} />
    </View>
  );
};

export default CallandChat;

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
    width: wp('80%'),
    marginLeft: hp('1%'),
    fontSize: FONT_SIZE.F_15,
    fontFamily: FONT.MEDIUM,
    color: COLOR.BLACK,
  },

  TextView: {
    marginTop: hp('1%'),
    flexDirection: 'row',
    width: wp('87%'),
    paddingHorizontal: wp('3%'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8F8FA',
    borderRadius: hp('2%'),
    // borderWidth: wp('0.5%'),
  },

  subheadlineText: {
    fontFamily: FONT.SEMI_BOLD,
    fontSize: FONT_SIZE.F_16,
    color: COLOR.WHITE,
    textAlign: 'center',
  },
  CategrText: {
    fontFamily: FONT.MEDIUM,
    fontSize: FONT_SIZE.F_15,
    color: COLOR.WHITE,
    textAlign: 'center',
  },
  MediumText: {
    // marginVertical: wp('2%'),
    fontFamily: FONT.MEDIUM,
    fontSize: FONT_SIZE.F_14,
    color: COLOR.BLACK,
    textAlign: 'center',
  },
  smallText: {
    // marginVertical: wp('2%'),
    fontFamily: FONT.SEMI_BOLD,
    fontSize: FONT_SIZE.F_11,
    color: COLOR.BLACK,
    textAlign: 'center',
  },
  HoroView: {
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: hp('2%'),
    padding: hp('1%'),
    paddingHorizontal: hp('2%'),
    marginHorizontal: hp('0.3%'),
    elevation: 0.4,
    // width: wp('20%'),
    marginRight: hp('2%'),
    marginTop: hp('2%'),
  },

  astroImage: {
    height: hp('12%'),
    width: wp('15%'),
    borderRadius: hp('2%'),
    padding: hp('1%'),
    resizeMode: 'contain',
  },
  cardView: {
    flexDirection: 'row',
    alignSelf: 'center',
    borderRadius: hp('3%'),
    padding: hp('1%'),
    width: wp('89%'),
    marginTop: hp('2%'),
    marginBottom: wp('2%'),
    backgroundColor: COLOR.WHITE,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.14,
    elevation: 4,
  },

  imageView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: wp('10%'),
  },
  HeadView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp('64%'),
    justifyContent: 'space-between',
    // backgroundColor: 'pink',
  },
  HeadView2: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp('63%'),
    // backgroundColor: 'pink',
  },
});
