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
import WhiteBackArrow from '../../Icons/Svg/WhiteBackArrow.svg';
import Whatsapp from '../../Icons/Svg/Whatsapp.svg';

const KundliMatching = ({navigation}) => {
  const [selectIndex, setSelectIndex] = useState(-1);
  const liveAstroArray = [
    {
      id: 1,
      image: require('../../Icons/Images/User1.png'),
    },
    {
      id: 2,
      image: require('../../Icons/Images/User2.png'),
    },
    {
      id: 3,
      image: require('../../Icons/Images/User3.png'),
    },
    {
      id: 4,
      image: require('../../Icons/Images/User2.png'),
    },
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
      <StatusBar backgroundColor={COLOR.SkyBLUE} barStyle="dark-content" />

      {/* --------Header ------- */}
      <View
        style={{
          //   marginVertical: hp('2%'),
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'center',
          width: wp('100%'),
          backgroundColor: COLOR.SkyBLUE,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack('')}>
          <WhiteBackArrow height={hp('6%')} width={wp('8%')} />
        </TouchableOpacity>
        <View style={{width: wp('65%')}}>
          <Text style={[styles.headerTitle, {marginLeft: hp('1%')}]}>
            Kundli Matching
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
      <ScrollView style={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
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
                <View style={{width: wp('58%')}}>
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
                      textAlign: 'center',
                    }}>
                    1/1
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />

        {/* ----------- Manglic --------- */}
        <Text style={styles.heading}>Manglik Report</Text>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            justifyContent: 'space-between',
            width: wp('87%'),
            marginVertical: wp('2%'),
          }}>
          <View
            style={{
              width: wp('28%'),
              alignSelf: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={IocalImage.Taraju}
              style={{
                width: wp('16%'),
                height: hp('10%'),
                resizeMode: 'contain',
              }}
            />
            <Text style={[styles.blueText, {fontFamily: FONT.MEDIUM}]}>
              Rahu Vishu
            </Text>
            <Text
              style={{
                fontSize: FONT_SIZE.F_13,
                fontFamily: FONT.MEDIUM,
                color: COLOR.YELLOW,
              }}>
              Manglik
            </Text>
            <View
              style={{
                backgroundColor: COLOR.YELLOW,
                borderRadius: hp('1%'),
                width: wp('25%'),
                alignItems: 'center',
                padding: wp('1%'),
              }}>
              <Text
                style={{
                  fontFamily: FONT.SEMI_BOLD,
                  fontSize: FONT_SIZE.F_10,
                  color: COLOR.WHITE,
                }}>
                View Kundli
              </Text>
            </View>
          </View>

          {/* ----- Image ----- */}
          <Image
            source={IocalImage.Matchkundi}
            style={{
              width: wp('16%'),
              height: hp('10%'),
              resizeMode: 'contain',
            }}
          />
          <View
            style={{
              width: wp('28%'),
              alignSelf: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={IocalImage.Ariea}
              style={{
                width: wp('16%'),
                height: hp('10%'),
                resizeMode: 'contain',
              }}
            />
            <Text style={[styles.blueText, {fontFamily: FONT.MEDIUM}]}>
              Jenny Wiliam
            </Text>
            <Text
              style={{
                fontSize: FONT_SIZE.F_13,
                fontFamily: FONT.MEDIUM,
                color: COLOR.YELLOW,
              }}>
              Manglik
            </Text>
            <View
              style={{
                backgroundColor: COLOR.YELLOW,
                borderRadius: hp('1%'),
                width: wp('25%'),
                alignItems: 'center',
                padding: wp('1%'),
              }}>
              <Text
                style={{
                  fontFamily: FONT.SEMI_BOLD,
                  fontSize: FONT_SIZE.F_10,
                  color: COLOR.WHITE,
                }}>
                View Kundli
              </Text>
            </View>
          </View>
        </View>

        {/* ------------- Manglick Report ----------- */}
        <View
          style={[styles.ManglikView, {backgroundColor: '#FEAF3C'}]}
          activeOpacity={1}>
          <Text
            style={[styles.heading, {color: COLOR.WHITE, textAlign: 'center'}]}>
            Manglik Report
          </Text>

          <View style={{marginTop: hp('2%')}}>
            <Text
              style={[
                styles.blueText,
                {fontFamily: FONT.MEDIUM, textAlign: 'left'},
              ]}>
              Ascendant is one of the most sought concepts in astrology when it
              comes to predicting the minute events in your life. At the time of
              birth, the sign that rises in the sky is the person's ascendant.
              It helps in making predictions about the minute events, unlike
              your Moon or Sun sign that help in making weekly, monthly or
              yearly predictions for you. Your ascendant is Gemini
            </Text>
          </View>
          {/* --------- Chat with Astro ------ */}
          <TouchableOpacity
            style={styles.ButtonStyle}
            onPress={() => navigation.navigate('LiveChat')}>
            <Text
              style={{
                fontFamily: FONT.SEMI_BOLD,
                fontSize: FONT_SIZE.F_13,
                color: COLOR.BLACK,
              }}>
              Chat With Astrology
            </Text>
          </TouchableOpacity>
          <Image
            style={{height: hp('35%'), width: wp('45%'), resizeMode: 'contain'}}
            source={IocalImage.Couple}
          />
          <View
            style={[
              styles.ButtonStyle,
              {width: wp('60%'), backgroundColor: COLOR.YELLOW},
            ]}>
            <Text
              style={{
                fontFamily: FONT.SEMI_BOLD,
                fontSize: FONT_SIZE.F_13,
                color: COLOR.WHITE,
              }}>
              Share my match
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.heading}>Have doubts regarding your match</Text>
          <Text style={styles.blueText}>See All</Text>
        </View>
        <Text
          style={[
            styles.heading,
            {color: COLOR.LIGHT_GRAY, fontSize: FONT_SIZE.F_14},
          ]}>
          Connect with astrologers on live
        </Text>

        <FlatList
          data={liveAstroArray}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('CallandChat')}
                style={[styles.liveView]}>
                <Image source={item.image} style={styles.liveAstroImage} />
              </TouchableOpacity>
            );
          }}
        />
      </ScrollView>
    </View>
  );
};

export default KundliMatching;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
    paddingHorizontal: hp('2.4%'),
  },
  headerTitle: {
    fontSize: FONT_SIZE.F_17,
    fontFamily: FONT.BOLD,
    color: COLOR.DARK_BLUE,
  },
  Imageheadiew: {
    flexDirection: 'row',
    width: '17%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
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

  //   --------Color ful View -------
  detailView: {
    alignSelf: 'center',
    borderRadius: hp('3%'),
    padding: hp('2%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('91%'),
    alignSelf: 'center',
    borderRadius: hp('3%'),
    marginVertical: wp('2%'),
  },
  blueText: {
    fontFamily: FONT.SEMI_BOLD,
    fontSize: FONT_SIZE.F_14,
    color: COLOR.DARK_BLUE,
  },
  grayText: {
    fontFamily: FONT.SEMI_BOLD,
    fontSize: FONT_SIZE.F_12,
    color: COLOR.GRAY,
  },
  roundStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp('8%'),
    padding: hp('2%'),
    width: wp('14%'),
    height: wp('14%'),
    marginVertical: wp('3%'),
  },

  //   ------- heading --
  heading: {
    fontSize: FONT_SIZE.F_16,
    fontFamily: FONT.SEMI_BOLD,
    color: COLOR.DARK_BLUE,
  },
  ManglikView: {
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: hp('3%'),
    padding: hp('3%'),
    width: wp('88%'),
    alignItems: 'center',
    borderRadius: hp('3%'),
    marginVertical: wp('2%'),
  },
  ButtonStyle: {
    backgroundColor: COLOR.WHITE,
    borderRadius: hp('1%'),
    width: wp('40%'),
    alignItems: 'center',
    padding: wp('2%'),
    alignSelf: 'center',
    marginVertical: wp('2%'),
  },

  liveAstroImage: {
    height: hp('18%'),
    width: wp('25%'),
    resizeMode: 'contain',
    borderRadius: hp('1%'),
  },
  liveView: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: hp('0.3%'),
    marginRight: hp('2%'),
    marginVertical: hp('2%'),
  },
});
