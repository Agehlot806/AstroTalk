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
import Star from '../../Icons/Svg/Star.svg';
import Whatsapp from '../../Icons/Svg/Whatsapp.svg';
import CommonButton from '../../Providerscreen/CommonButton';
import Footer from '../../Providerscreen/Footer';

const Pooja = ({navigation}) => {
  const [activePageName, setActivePageName] = useState(3);
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

  const ZodiaArray = [
    {
      id: 1,
      title: 'Sanatan prapti pooja',
      image: require('../../Icons/Images/pooja1.png'),
      User: require('../../Icons/Images/User2.png'),
    },
    {
      id: 2,
      title: 'Sanatan prapti poojaTaurus',
      image: require('../../Icons/Images/pooja2.png'),
      User: require('../../Icons/Images/User1.png'),
    },
    {
      id: 3,
      title: 'Sanatan prapti pooja',
      image: require('../../Icons/Images/pooja3.png'),
      User: require('../../Icons/Images/User3.png'),
    },
    {
      id: 4,
      title: 'Sanatan prapti pooja',
      image: require('../../Icons/Images/pooja2.png'),
      User: require('../../Icons/Images/User2.png'),
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
        <Menuicon height={hp('6%')} width={wp('8%')} />
        <View style={{width: '65%'}}>
          <Text style={[styles.headerTitle, {marginLeft: hp('1%')}]}>
            Pooja
          </Text>
        </View>
        <View
          style={{
            width: '20%',
            flexDirection: 'row',
            alignSelf: 'flex-end',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Image
            source={require('../../Icons/Images/Subtract.png')}
            style={styles.imageStyle}
          />
          <View
            style={{
              flexDirection: 'row',
              width: '70%',
              alignItems: 'center',
              borderColor: COLOR.YELLOW,
              borderWidth: wp('0.2%'),
              borderRadius: hp('0.5%'),
              marginLeft: wp('2%'),
              paddingHorizontal: wp('0.2%'),
            }}>
            <Whatsapp height={hp('3%')} width={wp('4%')} />
            <Text style={styles.smallText}> Share</Text>
          </View>
        </View>
      </TouchableOpacity>

      <ScrollView style={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
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
                  <Text style={[styles.CategoryText]}>{item.title}</Text>
                </View>
              </View>
            );
          }}
        />

        {/* ------------ Astrologer ----------- */}

        <FlatList
          data={ZodiaArray}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('Pooja')}>
                <View style={styles.cardView}>
                  <ImageBackground
                    imageStyle={{borderRadius: hp('2%')}}
                    source={item.image}
                    style={styles.astroImage}>
                    <Image
                      source={item.User}
                      style={{
                        height: hp('4%'),
                        width: wp('6.5%'),
                        resizeMode: 'contain',
                        borderRadius: hp('2%'),
                        position: 'absolute',
                        margin: wp('3%'),
                      }}
                    />
                  </ImageBackground>

                  <View
                    style={{
                      marginLeft: wp('3%'),
                      alignSelf: 'center',
                      alignItems: 'center',
                      width: wp('80%'),
                    }}>
                    <View style={styles.HeadView}>
                      <Text
                        style={[
                          styles.subheadlineText,
                          {color: COLOR.DARK_BLUE},
                        ]}>
                        {item.title}
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Star height={hp('3%')} width={wp('4%')} />
                        <Text
                          style={[
                            styles.smallText,
                            {color: COLOR.GRAY, marginTop: hp('0.5%')},
                          ]}>
                          {' '}
                          5 Star
                        </Text>
                      </View>
                    </View>
                    <View
                      style={[
                        styles.HeadView2,
                        {justifyContent: 'space-between'},
                      ]}>
                      <Text
                        style={[
                          styles.smallText,
                          {
                            color: COLOR.GRAY,
                            textAlign: 'left',
                            width: wp('40%'),
                            marginTop: hp('-2%'),
                          },
                        ]}>
                        north India, Rice, Kumkum
                      </Text>
                      <View
                        style={{
                          width: '26%',
                          backgroundColor: COLOR.YELLOW,
                          paddingVertical: hp('0.5%'),
                          borderRadius: hp('0.5%'),
                          //   marginVe: wp('2%'),
                        }}>
                        <Text style={[styles.MediumText, {color: COLOR.WHITE}]}>
                          Book Now
                        </Text>
                      </View>
                    </View>
                    <View style={[styles.HeadView2]}>
                      <Text
                        style={[
                          styles.subheadlineText,
                          {color: COLOR.DARK_BLUE},
                          {color: COLOR.DARK_BLUE, marginTop: hp('-2%')},
                        ]}>
                        $ 125.00
                      </Text>
                      <Text
                        style={[
                          styles.MediumText,
                          {color: COLOR.GRAY, marginTop: hp('-2%')},
                        ]}>
                        {' '}
                        Remaining Seate :256
                      </Text>
                    </View>
                  </View>
                  <View style={styles.imageView}></View>
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

export default Pooja;

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

  TextView: {
    marginTop: hp('1%'),
    flexDirection: 'row',
    width: wp('92%'),
    paddingHorizontal: wp('3%'),
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
  imageStyle: {
    height: hp('5%'),
    width: wp('6%'),
    resizeMode: 'contain',
  },
  subheadlineText: {
    fontFamily: FONT.MEDIUM,
    fontSize: FONT_SIZE.F_16,
    color: COLOR.WHITE,
    textAlign: 'center',
  },
  CategoryText: {
    fontFamily: FONT.MEDIUM,
    fontSize: FONT_SIZE.F_14,
    color: COLOR.WHITE,
    textAlign: 'center',
  },
  MediumText: {
    // marginVertical: wp('2%'),
    fontFamily: FONT.SEMI_BOLD,
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
    borderRadius: hp('1.5%'),
    padding: hp('1%'),
    paddingHorizontal: hp('2%'),
    marginHorizontal: hp('0.3%'),
    elevation: 0.4,
    // width: wp('20%'),
    marginRight: hp('2%'),
    marginTop: hp('2%'),
  },

  astroImage: {
    height: hp('24%'),
    width: wp('88%'),
    borderRadius: wp('4%'),
    // resizeMode: 'contain',
  },
  cardView: {
    // flexDirection: 'row',
    alignSelf: 'center',
    borderRadius: hp('3%'),
    // padding: hp('1%'),
    // elevation: 0.4,
    width: wp('88%'),
    marginRight: hp('2%'),
    marginTop: hp('2%'),
    marginVertical: wp('2%'),
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
    width: wp('85%'),
    justifyContent: 'space-between',
    // backgroundColor: 'pink',
  },
  HeadView2: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp('85%'),
  },
});
