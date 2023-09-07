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
import React, {useState, useEffect} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLOR, FONT, FONT_SIZE} from '../../Providerscreen/Globles';
import Menuicon from '../../Icons/Svg/Menuicon.svg';

const DailyHoroscope = ({navigation}) => {
  const [selectHoro, setSelectHoro] = useState('');
  const [selectDay, setSelectDay] = useState('');
  const [selectIndex, setSelectIndex] = useState(-1);
  const ZodiaArray = [
    {
      id: 1,
      title: 'Aries',
      image: require('../../Icons/Images/Ariea.png'),
    },
    {
      id: 2,
      title: 'Taurus',
      image: require('../../Icons/Images/Kundli.png'),
    },
    {
      id: 3,
      title: 'Gemini',
      image: require('../../Icons/Images/Gemini.png'),
    },
    {
      id: 4,
      title: 'Cancer',
      image: require('../../Icons/Images/Cancer.png'),
    },
  ];
  const Days = [
    {id: 1, title: 'Yesterday'},
    {id: 2, title: 'Today'},
    {id: 2, title: 'Tomorrow'},
  ];

  const Detaillist = [
    {
      id: 1,
      title: 'Compatibility (Varna)',
      title1:
        'Ascendant is one of the most sought concepts in astrology when it comes to predicting the minute events in your life.',
    },
    {
      id: 2,
      title: 'Love (bhakut)',
      title1:
        'Ascendant is one of the most sought concepts in astrology when it comes to predicting the minute events in your life.',
    },
    {
      id: 3,
      title: 'Mental Compatibility (maitri)',
      title1:
        'Ascendant is one of the most sought concepts in astrology when it comes to predicting the minute events in your life.',
    },
    {
      id: 4,
      title: 'Health (Nadi)',
      title1:
        'Ascendant is one of the most sought concepts in astrology when it comes to predicting the minute events in your life.',
    },
    {
      id: 5,
      title: 'Dominaance(vashya)',
      title1:
        'Ascendant is one of the most sought concepts in astrology when it comes to predicting the minute events in your life.',
    },
    {
      id: 6,
      title: 'Temperament (Gana)',
      title1:
        'Ascendant is one of the most sought concepts in astrology when it comes to predicting the minute events in your life.',
    },
  ];

  const Horoscop = title => {
    console.log('titd', title);
    setSelectHoro(title);
  };
  const Dayfunction = title => {
    console.log('titd', title);
    setSelectDay(title);
  };

  //   ---------- List color of card -----
  const getColorByIndex = index => {
    const colors = ['#EDD7FF', '#FFFCDE', '#d4ffcd', 'lightblue', '#E6E5FF']; // Add more colors as needed
    return colors[index % colors.length];
  };
  const getColorByText = index => {
    const colors = ['violet', '#FDF777', 'lightgreen', '#5C59F5', '#CD95FB']; // Add more colors as needed
    return colors[index % colors.length];
  };

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
        <Menuicon height={hp('6%')} width={wp('6%')} />
        <View style={{width: wp('65%'), marginLeft: wp('2%')}}>
          <Text style={styles.headerTitle}>Daily Horoscope</Text>
        </View>
        <View
          style={{
            width: '20%',
            flexDirection: 'row',
            alignSelf: 'flex-end',
            justifyContent: 'space-between',
          }}>
          <Image
            source={require('../../Icons/Images/Wallet.png')}
            style={styles.imageStyle}
          />
          <Image
            source={require('../../Icons/Images/Subtract.png')}
            style={styles.imageStyle}
          />
        </View>
      </TouchableOpacity>

      <ScrollView style={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
        {/* ------ Horocsop ====== */}
        <FlatList
          data={ZodiaArray}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => Horoscop(item.title)}>
                <View
                  style={[
                    styles.HoroView,
                    {
                      backgroundColor:
                        selectHoro === item.title ? COLOR.YELLOW : COLOR.WHITE,
                    },
                  ]}>
                  <Image source={item.image} style={styles.cateImage} />
                </View>
                <Text
                  style={[
                    styles.subheadlineText,
                    {width: wp('20%'), marginVertical: wp('2%')},
                  ]}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
        {/* -------- day --------- */}
        {/* ------ Horocsop ====== */}
        <FlatList
          data={Days}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => Dayfunction(item.title)}>
                <View
                  style={[
                    styles.dayView,
                    {
                      backgroundColor:
                        selectDay === item.title ? COLOR.YELLOW : '#F8F8FA',
                    },
                  ]}>
                  <Text style={[styles.subheadlineText]}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />

        {/* ---------- Banner ------- */}
        <View
          style={{
            marginTop: hp('2%'),
            alignSelf: 'center',
            width: wp('90%'),
          }}>
          <Image
            source={require('../../Icons/Images/Luckbanner.png')}
            style={{
              height: hp('25%'),
              width: wp('90%'),
              borderRadius: hp('4%'),
              //   resizeMode: 'contain',
            }}
          />

          {/* ------Detail ----------- */}
          <FlatList
            data={Detaillist}
            // horizontal={true}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={[
                    styles.detailView,
                    {
                      backgroundColor:
                        selectIndex === index
                          ? COLOR.YELLOW
                          : getColorByIndex(index),
                    },
                  ]}
                  activeOpacity={1}
                  onPress={() => setSelectIndex(index)}>
                  <View style={{width: wp('55%')}}>
                    <Text style={[styles.blueText]}>{item.title}</Text>
                    <Text style={[styles.grayText, {marginTop: hp('1%')}]}>
                      {item.title1}
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.roundStyle,
                      {
                        backgroundColor:
                          selectIndex === index
                            ? COLOR.YELLOW
                            : getColorByText(index),
                      },
                    ]}>
                    <Text
                      style={{
                        fontFamily: FONT.SEMI_BOLD,
                        fontSize: FONT_SIZE.F_14,
                        color: COLOR.GRAY,
                      }}>
                      1/1
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default DailyHoroscope;

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
  },
  imageStyle: {
    height: hp('5%'),
    width: wp('6%'),
    resizeMode: 'contain',
  },
  HoroView: {
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: hp('3%'),
    padding: hp('0.5%'),
    marginHorizontal: hp('0.8%'),
    elevation: 0.4,
    width: wp('17%'),
    marginRight: hp('2%'),
    marginTop: hp('2%'),
    elevation: wp('1%'),
  },
  cateImage: {
    height: hp('8%'),
    width: wp('8%'),
    resizeMode: 'contain',
  },
  subheadlineText: {
    fontFamily: FONT.MEDIUM,
    fontSize: FONT_SIZE.F_14,
    color: COLOR.BLACK,
    textAlign: 'center',
  },
  dayView: {
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: hp('1%'),
    padding: hp('1%'),
    marginHorizontal: hp('0.8%'),
    elevation: 0.4,
    // width: wp('20%'),
    marginRight: hp('2%'),
    marginTop: hp('2%'),
    elevation: wp('1%'),
    marginVertical: wp('2%'),
  },
  detailView: {
    alignSelf: 'center',
    borderRadius: hp('3%'),
    padding: hp('3%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('88%'),
    alignSelf: 'center',
    borderRadius: hp('3%'),
    marginVertical: wp('3%'),
  },
  blueText: {
    fontFamily: FONT.SEMI_BOLD,
    fontSize: FONT_SIZE.F_16,
    color: COLOR.DARK_BLUE,
  },
  grayText: {
    fontFamily: FONT.SEMI_BOLD,
    fontSize: FONT_SIZE.F_14,
    color: COLOR.GRAY,
  },
  roundStyle: {
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: hp('10%'),
    padding: hp('3%'),
    width: wp('16%'),
    height: wp('16%'),
    marginVertical: wp('3%'),
  },
});
