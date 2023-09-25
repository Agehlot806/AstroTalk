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
import Searchicon from '../../Icons/Svg/Searchicon.svg';
import Youtude from '../../Icons/Svg/Youtude.svg';
import Footer from '../../Providerscreen/Footer';
import {useDispatch, useSelector} from 'react-redux';
import {
  getAstrologers,
  getHoroscopeCategory,
  getProducts,
  getZodics,
} from '../../Redux/actions/HomeAction';
import {IMAGE_URL} from '../../Utils/constant';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const [activePageName, setActivePageName] = useState(0);
  const [name, setName] = useState('');
  const [horoscopes, setHoroscopes] = useState([]);
  const [zodics, setZodics] = useState([]);
  const [astrologers, setAstrologers] = useState([]);
  const [products, setProducts] = useState([]);
  const {response, ZodicRes, AstroRes, ProductRes} = useSelector(
    state => state.homeState,
  );
  useEffect(() => {
    dispatch(getHoroscopeCategory());
    dispatch(getZodics());
    dispatch(getAstrologers());
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    const category = Array.isArray(response) ? response : [];
    const Zodics = Array.isArray(ZodicRes) ? ZodicRes?.slice(0, 4) : [];
    const Astrologer = Array.isArray(AstroRes) ? AstroRes : [];
    const Product = Array.isArray(ProductRes) ? ProductRes : [];
    setHoroscopes(category);
    setZodics(Zodics);
    setAstrologers(Astrologer);
    setProducts(Product);
  }, [response, ZodicRes, AstroRes, ProductRes]);

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
        <TouchableOpacity onPress={() =>  navigation.toggleDrawer()}>
          <Menuicon height={hp('6%')} width={wp('6%')} />
        </TouchableOpacity>
        <View style={{width: wp('65%'), marginLeft: wp('2%')}}>
          <Text style={styles.headerTitle}>Welcome to Astro</Text>
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
      </View>

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

        {/* --------- Horoscope list ------- */}
        <FlatList
          data={horoscopes}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('DailyHoroscope')}>
                <View
                  style={[
                    styles.HoroView,
                    {
                      backgroundColor: item.id === 1 ? COLOR.YELLOW : '#F8F8FA',
                    },
                  ]}>
                  <Image
                    source={{
                      uri: IMAGE_URL + item.catpicture,
                    }}
                    style={styles.cateImage}
                  />
                </View>
                <Text
                  style={[
                    styles.subheadlineText,
                    {width: wp('20%'), marginVertical: wp('2%')},
                  ]}>
                  {item.catname}
                </Text>
              </TouchableOpacity>
            );
          }}
        />

        {/* ---------- bannerimage ------- */}
        <View style={{marginTop: hp('2%')}}>
          <Image
            source={require('../../Icons/Images/Banner.png')}
            style={{
              height: hp('18%'),
              width: wp('90%'),
              resizeMode: 'contain',
            }}
          />
        </View>

        {/* --------- Zodiac list ------- */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: wp('90%'),
            marginTop: hp('2%'),
            alignItems: 'center',
          }}>
          <Text style={styles.titleHead}>Zodiac</Text>
          <TouchableOpacity>
            {/* onPress={() => navigation.navigate('AstrologierList')} */}
            <Text style={[styles.subheadlineText, {color: COLOR.DARK_BLUE}]}>
              See all
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={zodics}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <View>
                <View
                  style={[
                    styles.HoroView,
                    {
                      backgroundColor: COLOR.WHITE,
                    },
                  ]}>
                  <Image
                    source={{
                      uri: IMAGE_URL + item.horoscopeimg,
                    }}
                    style={styles.cateImage}
                  />
                </View>
                <Text
                  style={[
                    styles.subheadlineText,
                    {
                      color: COLOR.DARK_BLUE,
                      width: wp('20%'),
                      marginVertical: wp('2%'),
                    },
                  ]}>
                  {item.catname}
                </Text>
              </View>
            );
          }}
        />

        {/* ------------ Astrologer ----------- */}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: wp('90%'),
            marginTop: hp('2%'),
            alignItems: 'center',
          }}>
          <Text style={styles.titleHead}>Astrologer</Text>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate('CallandChat')}>
            {/* onPress={() => navigation.navigate('AstrologierList')} */}
            <Text style={[styles.subheadlineText, {color: COLOR.DARK_BLUE}]}>
              See all
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={astrologers}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <View>
                <View style={styles.cardView}>
                  <View style={styles.imageView}>
                    <Image
                      source={{
                        uri: IMAGE_URL + item.panditpicture,
                      }}
                      style={styles.astroImage}
                    />
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={require('../../Icons/Images/Message.png')}
                        style={{
                          height: hp('8%'),
                          width: wp('8%'),
                          resizeMode: 'contain',
                        }}
                      />
                      <Image
                        source={require('../../Icons/Images/CallGreen.png')}
                        style={{
                          height: hp('9%'),
                          width: wp('8%'),
                          marginLeft: wp('2%'),
                          resizeMode: 'contain',
                        }}
                      />
                    </View>
                  </View>

                  <Text
                    style={[
                      styles.subheadlineText,
                      {color: COLOR.DARK_BLUE, textAlign: 'left'},
                    ]}>
                    {item.name}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignSelf: 'flex-start',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={[
                        styles.MediumText,
                        {color: COLOR.GRAY, textAlign: 'left'},
                      ]}>
                      {item.expertise_in?.substring(0, 13)}...
                    </Text>
                    <Text
                      style={[
                        styles.subheadlineText,
                        {color: COLOR.YELLOW, marginLeft: wp('2%')},
                      ]}>
                      ₹ {item.price}
                    </Text>
                    <Text
                      style={[
                        styles.MediumText,
                        {
                          color: COLOR.LIGHT_GRAY,
                          textAlign: 'left',
                          marginLeft: hp('2%'),
                          textDecorationLine: 'line-through',
                          textDecorationStyle: 'solid',
                        },
                      ]}>
                      $ 10/M
                    </Text>
                  </View>

                  {/* ----- DAY AND tIME -------- */}
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={require('../../Icons/Images/Greycalender.png')}
                      style={{
                        height: hp('4%'),
                        width: wp('4%'),
                        resizeMode: 'contain',
                      }}
                    />
                    <Text
                      style={[
                        styles.smallText,
                        {color: COLOR.GRAY, marginLeft: wp('2%')},
                      ]}>
                      Mon, Aug 29
                    </Text>
                    <Image
                      source={require('../../Icons/Images/Clock.png')}
                      style={{
                        height: hp('4%'),
                        width: wp('4%'),
                        resizeMode: 'contain',
                        marginLeft: wp('7%'),
                      }}
                    />
                    <Text
                      style={[
                        styles.smallText,
                        {color: COLOR.GRAY, marginLeft: wp('1%')},
                      ]}>
                      1:00 - 12:00 AM
                    </Text>
                  </View>
                </View>
              </View>
            );
          }}
        />

        {/* ---------- Live astro ----- */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: wp('90%'),
            marginTop: hp('2%'),
            alignItems: 'center',
          }}>
          <Text style={styles.titleHead}>Live Astrologer</Text>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate('CallandChat')}>
            <Text style={[styles.subheadlineText, {color: COLOR.DARK_BLUE}]}>
              See all
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={liveAstroArray}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => navigation.navigate('CallandChat')}
                style={[styles.liveView]}>
                <Image source={item.image} style={styles.liveAstroImage} />
              </TouchableOpacity>
            );
          }}
        />

        {/* --------------- Shop add ------ */}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: wp('90%'),
            marginTop: hp('2%'),
            alignItems: 'center',
          }}>
          <Text style={styles.titleHead}>Shop add astromoll</Text>

          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate('Pooja')}>
            <Text style={[styles.subheadlineText, {color: COLOR.DARK_BLUE}]}>
              See all
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={products}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => navigation.navigate('Pooja')}
                  style={[styles.liveView]}>
                  <Image
                    source={{
                      uri: IMAGE_URL + item.prodpicture,
                    }}
                    style={styles.AstromollImage}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    position: 'absolute',
                    justifyContent: 'center',
                    alignItems: 'center',
                    bottom: hp('3.5%'),
                    width: wp('35%'),
                  }}>
                  <Text style={[styles.subheadlineText, {color: COLOR.BLACK}]}>
                    {item.prodname}
                  </Text>
                </View>
              </>
            );
          }}
        />

        {/* --------- Video --------- */}
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.navigate('CallandChat')}
          style={[styles.liveView]}>
          <ImageBackground
            imageStyle={{
              borderRadius: hp('3%'),
              alignSelf: 'center',
            }}
            source={require('../../Icons/Images/pooja1.png')}
            style={{
              height: hp('23%'),
              width: wp('90%'),
              resizeMode: 'contain',
            }}>
            <View
              style={{
                alignSelf: 'center',
                position: 'absolute',
                bottom: hp('8%'),
                zIndex: 3,
              }}>
              <Youtude height={hp('6%')} width={wp('13%')} />
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <View style={{marginBottom: hp('16%')}}>
          <Text style={styles.titleHead}>Ranbir kapur talk Astrotalk </Text>
        </View>
      </ScrollView>
      {/* <Footer activePageName={activePageName} /> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
    paddingHorizontal: hp('2%'),
  },
  headerTitle: {
    fontSize: FONT_SIZE.F_18,
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
  imageStyle: {
    height: hp('5%'),
    width: wp('6%'),
    resizeMode: 'contain',
  },
  subheadlineText: {
    fontFamily: FONT.MEDIUM,
    fontSize: FONT_SIZE.F_15,
    color: COLOR.BLACK,
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
    borderRadius: hp('3%'),
    padding: hp('1%'),
    marginHorizontal: hp('0.3%'),
    elevation: 1,
    width: wp('20%'),
    marginRight: hp('2%'),
    marginTop: hp('2%'),
  },
  liveView: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: hp('0.3%'),
    marginRight: hp('2%'),
    marginVertical: hp('2%'),
  },
  cateImage: {
    height: hp('10%'),
    width: wp('10%'),
    resizeMode: 'contain',
  },
  liveAstroImage: {
    height: hp('18%'),
    width: wp('25%'),
    resizeMode: 'contain',
    borderRadius: hp('1%'),
  },
  AstromollImage: {
    height: hp('20%'),
    width: wp('35%'),
    resizeMode: 'cover',
    borderRadius: hp('2.5%'),
    backgroundColor: COLOR.BLACK,
    opacity: 0.4,
  },
  astroImage: {
    height: hp('8%'),
    width: wp('14%'),
    resizeMode: 'contain',
  },
  cardView: {
    alignSelf: 'center',
    borderRadius: hp('3%'),
    padding: hp('1%'),
    paddingHorizontal: hp('1%'),
    width: wp('60%'),
    marginHorizontal: hp('1%'),
    // marginTop: hp('2%'),
    marginVertical: wp('2%'),
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
    alignSelf: 'flex-start',
    width: wp('50%'),
    // backgroundColor: 'pink',
  },
  titleHead: {
    fontSize: FONT_SIZE.F_17,
    fontFamily: FONT.SEMI_BOLD,
    color: COLOR.DARK_BLUE,
  },
});
