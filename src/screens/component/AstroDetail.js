// Test

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
import LocalImage from '../../Providerscreen/LocalImage';
import Back from '../../Icons/Svg/Back.svg';
import Whatsapp from '../../Icons/Svg/Whatsapp.svg';
import Star from '../../Icons/Svg/Star.svg';
import Callinfo from '../../Icons/Svg/Callinfo.svg';
import Direction from '../../Icons/Svg/Direction.svg';
import AtoZ from '../../Icons/Svg/AtoZ.svg';
import StarMoon from '../../Icons/Svg/StarMoon.svg';
import FiveStar from '../../Icons/Svg/FiveStar.svg';
import ProfileUser from '../../Icons/Svg/ProfileUser.svg';
import {IMAGE_URL} from '../../Utils/constant';
import DropDownPicker from 'react-native-dropdown-picker';
import {useDispatch, useSelector} from 'react-redux';
import {getByPoojaSlots} from '../../Redux/actions/PoojaAction';
import ErrorMessage from '../../Utils/ErrorMessage';

const AstroDetail = ({navigation, route}) => {
  const {type, detailsaData = {}} = route?.params || {};
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [slotsData, setSlotsData] = useState([]);
  const {response} = useSelector(state => state.pooja);

  useEffect(() => {
    dispatch(getByPoojaSlots());
  }, [dispatch]);

  useEffect(() => {
    const slots = Array.isArray(response) ? response : [];
    setSlotsData(slots);
  }, [response]);

  const handleBookNow = () => {
    if (value !== null) {
      navigation.navigate('payment', {type: type, detailsaData: {...detailsaData, slotId: value}});
    } else {
      ErrorMessage({
        msg: 'Please select the slot',
        backgroundColor: COLOR.RED,
      });
    }
  };
  const Photos = [
    {img: require('../../Icons/Images/User1.png')},
    {img: require('../../Icons/Images/User2.png')},
    {img: require('../../Icons/Images/User3.png')},
  ];
  const PhotosData = [
    {img: require('../../Icons/Images/User1.png')},
    {img: require('../../Icons/Images/User2.png')},
  ];

  const ReviewData = [
    {
      id: 1,
      Text1:
        ' Lorem Ipsum is simply dummy text of the printing and typesettingindustry',
      img: require('../../Icons/Images/User4.png'),
      UserName: 'Wade Warren',
    },
    {
      id: 2,
      Text1:
        ' Lorem Ipsum is simply dummy text of the printing and typesettingindustry',
      img: require('../../Icons/Images/User2.png'),
      UserName: 'Wade Warren',
    },
  ];
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

  const Giftlist = [
    {
      id: 1,
      title: 'Heart',
      price: '215',
      img: require('../../Icons/Images/Heart.png'),
    },
    {
      id: 2,
      title: 'Flower',
      price: '125',
      img: require('../../Icons/Images/Flower.png'),
    },
    {
      id: 3,
      title: 'Chocolate',
      price: '220',
      img: require('../../Icons/Images/Chocolate.png'),
    },
    {
      id: 4,
      title: 'MagicalBoll',
      price: '215',
      img: require('../../Icons/Images/MagicalBoll.png'),
    },
    {
      id: 5,
      title: 'Crown',
      price: '215',
      img: require('../../Icons/Images/Crown.png'),
    },
    {
      id: 6,
      title: 'Dakshina',
      price: '215',
      img: require('../../Icons/Images/Money.png'),
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
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.goBack('')}>
          <Back height={hp('6%')} width={wp('8%')} />
        </TouchableOpacity>
        <View style={{width: '65%'}}>
          <Text style={[styles.headerTitle, {marginLeft: hp('1%')}]}>
            {type === 'astro' ? 'Astro Detail' : 'Pooja Detail'}
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.Imageheadiew}
          onPress={() => navigation.navigate('KundliSearch')}>
          <Whatsapp height={hp('3%')} width={wp('4%')} />
          <Text style={styles.smallText}> Share</Text>
        </TouchableOpacity>
      </View>
      {/* ---------- header end --- */}

      <ScrollView style={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
        {/* Pooja Image and name */}
        {type === 'pooja' ? (
          <View>
            <Image
              source={{uri: IMAGE_URL + detailsaData?.pojapicture}}
              style={{
                width: '100%',
                height: hp('25%'),
                borderRadius: hp('3%'),
              }}
            />
            <View style={{position: 'absolute', top: hp('2%'), left: hp('2%')}}>
              <Image
                source={
                  detailsaData?.astrologer?.panditpicture
                    ? {uri: IMAGE_URL + detailsaData?.astrologer?.panditpicture}
                    : LocalImage.UserOne
                }
                style={{
                  width: wp('9%'),
                  height: wp('9%'),
                  borderRadius: hp('50%'),
                }}
              />
            </View>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: hp('2%'),
              }}>
              <View style={{width: '70%'}}>
                <Text
                  style={{
                    fontFamily: FONT.SEMI_BOLD,
                    fontSize: FONT_SIZE.F_16,
                    color: COLOR.DARK_BLUE,
                  }}>
                  {detailsaData?.name}
                </Text>
                <Text
                  style={{
                    fontFamily: FONT.REGULAR,
                    fontSize: FONT_SIZE.F_11,
                    color: COLOR.GRAY,
                  }}>
                  north Indian , chinese, biryani
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '30%',
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
          </View>
        ) : null}
        <View style={[styles.cardView, {flexDirection: 'row'}]}>
          <Image
            source={
              detailsaData?.astrologer?.panditpicture ||
              detailsaData?.panditpicture
                ? type === 'pooja'
                  ? {uri: IMAGE_URL + detailsaData?.astrologer?.panditpicture}
                  : {uri: IMAGE_URL + detailsaData?.panditpicture}
                : LocalImage.UserOne
            }
            style={styles.astroImage}
          />

          <View
            style={{
              marginLeft: wp('6%'),
              alignSelf: 'flex-start',
              alignItems: 'center',
            }}>
            <View style={styles.HeadView}>
              <Text style={[styles.subheadlineText, {color: COLOR.DARK_BLUE}]}>
                {type === 'pooja'
                  ? detailsaData?.astrologer?.name
                  : detailsaData?.name}
              </Text>
              <Text style={[styles.MediumText, {color: COLOR.DARK_BLUE}]}>
                {type === 'pooja'
                  ? detailsaData?.astrologer?.experience
                  : detailsaData?.experience}{' '}
                experience
              </Text>
            </View>
            <View style={[styles.HeadView2, {justifyContent: 'space-between'}]}>
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
                {type === 'pooja'
                  ? detailsaData?.astrologer?.languages.substring(0, 18)
                  : detailsaData?.languages.substring(0, 18)}{' '}
                ...
                <Text style={[styles.smallText, {color: '#FD6A35'}]}>
                  ₹{' '}
                  {type === 'pooja'
                    ? detailsaData?.astrologer?.price
                    : detailsaData?.price}
                </Text>
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: hp('1%'),
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
                  source={require('../../Icons/Images/CallGreen.png')}
                  style={{
                    height: hp('4%'),
                    width: wp('8%'),
                    marginLeft: wp('2%'),
                    resizeMode: 'contain',
                  }}
                />
              </View>
            </View>
            <View style={[styles.HeadView2, {marginTop: '-1%'}]}>
              <StarMoon height={hp('3%')} width={wp('4%')} />
              <Text
                numberOfLines={1}
                style={[
                  styles.smallText,
                  {
                    color: COLOR.GRAY,
                    textAlign: 'left',
                    marginHorizontal: wp('1%'),
                  },
                ]}>
                {type === 'pooja'
                  ? detailsaData?.astrologer?.expertise_in.substring(0, 18)
                  : detailsaData?.expertise_in.substring(0, 18)}{' '}
                ...
              </Text>
              <Star height={hp('3%')} width={wp('3%')} />
              <Text style={[styles.smallText, {color: COLOR.BLACK}]}>4.1</Text>
            </View>
          </View>
        </View>
        {/* ---------- Call info -------- */}
        <View
          style={{
            flexDirection: 'row',
            width: wp('88%'),
            alignSelf: 'center',
            marginVertical: hp('2%'),
            justifyContent: 'space-between',
          }}>
          <View style={styles.CallView}>
            <Direction height={hp('3%')} width={wp('5%')} />
            <Text
              style={[
                styles.MediumText,
                {color: COLOR.BLACK, marginLeft: wp('3%')},
              ]}>
              Direction
            </Text>
          </View>
          <View style={styles.CallView}>
            <Callinfo height={hp('3%')} width={wp('5%')} />
            <Text
              style={[
                styles.MediumText,
                {color: COLOR.BLACK, marginLeft: wp('3%')},
              ]}>
              Call For Info
            </Text>
          </View>
        </View>
        {type === 'astro' ? (
          <>
            {/* --------- Description -------- */}
            <View style={{marginTop: hp('2%')}}>
              <Text style={{color: COLOR.GRAY, fontSize: FONT_SIZE.F_15}}>
                {detailsaData?.about}
              </Text>
            </View>
            {/* ----------- Photos -------- */}
            <View style={{flexDirection: 'row', marginTop: hp('2%')}}>
              <FlatList
                data={Photos}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => {
                  return (
                    <View style={{marginTop: hp('1%')}}>
                      <Image
                        source={item.img}
                        style={{
                          width: wp('20%'),
                          height: hp('10%'),
                          borderRadius: wp('2%'),
                        }}
                      />
                    </View>
                  );
                }}
              />

              {/* ---- Photo 2----- */}

              <FlatList
                data={PhotosData}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => {
                  return (
                    <View style={{marginTop: hp('1%')}}>
                      <Image
                        source={item.img}
                        style={{
                          width: wp('30%'),
                          height: hp('15%'),
                          borderRadius: wp('2%'),
                        }}
                      />
                    </View>
                  );
                }}
              />
              {/* ----- Photo 3 -------- */}
              <FlatList
                data={Photos}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => {
                  return (
                    <View style={{marginTop: hp('1%')}}>
                      <Image
                        source={item.img}
                        style={{
                          width: wp('20%'),
                          height: hp('10%'),
                          borderRadius: wp('2%'),
                        }}
                      />
                    </View>
                  );
                }}
              />
            </View>
            {/* ------------  Loyal Club ------ */}
            <View style={[styles.cardView, {flexDirection: 'row'}]}>
              <Image
                source={require('../../Icons/Images/SubStra.png')}
                style={styles.astroImage}
              />
              <View style={{width: wp('48%'), marginLeft: hp('1.5%')}}>
                <Text style={[styles.blueText]}>Loyal Club Membership</Text>
                <Text style={[styles.grayText, {marginTop: hp('1%')}]}>
                  We are a group of young, energetic, creative & professional
                </Text>
              </View>
              <View style={styles.roundStyle}>
                <Text
                  style={{
                    fontFamily: FONT.SEMI_BOLD,
                    fontSize: FONT_SIZE.F_14,
                    color: COLOR.WHITE,
                  }}>
                  Buy Now
                </Text>
              </View>
            </View>
          </>
        ) : null}
        {type === 'pooja' ? (
          <View>
            <View style={{marginVertical: hp('3%')}}>
              <Text style={styles.pointsHedding}>Select Pooja slot</Text>
              <View>
                <DropDownPicker
                  open={open}
                  setOpen={setOpen}
                  value={value}
                  items={slotsData}
                  placeholder={
                    value?.slottime ? value?.slottime : 'Select Slot'
                  }
                  renderListItem={({item}) => {
                    return (
                      <TouchableOpacity
                        onPress={() => {
                          setValue(item);
                          setOpen(false);
                        }}
                        key={item.id}
                        style={{
                          borderBottomColor: COLOR.GRAY,
                          borderBottomWidth: hp('0.1%'),
                          backgroundColor: COLOR.YELLOW,
                          paddingVertical: hp('2%'),
                        }}>
                        <Text
                          style={{
                            color: '#fff',
                            fontSize: hp('2.4%'),
                            marginLeft: hp('2%'),
                          }}>
                          {item.slottime}
                        </Text>
                      </TouchableOpacity>
                    );
                  }}
                />
              </View>
            </View>
            <View style={styles.ponintsView}>
              <Text style={styles.pointsHedding}>
                What are the advantages ?
              </Text>
              <Text style={styles.pointsSubText}>
                {detailsaData?.advantages}
              </Text>
            </View>
            <View style={styles.ponintsView}>
              <Text style={styles.pointsHedding}>Who need this pooja ?</Text>
              <Text style={styles.pointsSubText}>
                {detailsaData?.needofpuja}
              </Text>
            </View>
            <View style={styles.ponintsView}>
              <Text style={styles.pointsHedding}>
                Do you need to arrange anything ?
              </Text>
              <Text style={styles.pointsSubText}>
                {detailsaData?.pujasamagri}
              </Text>
            </View>
          </View>
        ) : null}
        {/* --------- Review ------ */}
        <View style={styles.seeAllView}>
          <Text style={styles.headerTitle}>Review</Text>

          <TouchableOpacity onPress={() => navigation.navigate('Pooja')}>
            <Text style={[styles.MediumText, {color: COLOR.DARK_BLUE}]}>
              See all
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ReviewView}>
          <FlatList
            data={ReviewData}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <View>
                  <View>
                    <Text style={[styles.grayText, {marginTop: hp('1%')}]}>
                      {item.Text1}
                    </Text>
                  </View>
                  <View style={[styles.HeadView2, {marginTop: '1%'}]}>
                    <FiveStar height={hp('5%')} width={wp('19%')} />

                    <Image
                      source={item.img}
                      style={{
                        height: hp('4%'),
                        width: wp('6.5%'),
                        borderRadius: hp('3%'),
                        resizeMode: 'contain',
                        marginLeft: hp('4%'),
                      }}
                    />
                    <Text style={styles.MediumText}> {item.UserName}</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      alignSelf: 'flex-end',
                      width: wp('50%'),
                      marginTop: hp('-2%'),
                      // backgroundColor: 'pink',
                    }}>
                    <ProfileUser height={hp('3%')} width={wp('3%')} />
                    <Text
                      style={[
                        styles.smallText,
                        {
                          color: COLOR.BLACK,
                          marginTop: hp('0.6%'),
                          marginLeft: wp('1%'),
                        },
                      ]}>
                      12345
                    </Text>
                  </View>
                  <View
                    style={{
                      width: wp('85%'),
                      borderBottomColor: COLOR.LIGHT_GRAY,
                      borderBottomWidth: wp('0.2%'),
                      borderRadius: hp('3%'),
                      alignSelf: 'center',
                    }}
                  />
                </View>
              );
            }}
          />

          <View style={[styles.roundStyle, {width: wp('30%')}]}>
            <Text
              style={{
                fontFamily: FONT.SEMI_BOLD,
                fontSize: FONT_SIZE.F_14,
                color: COLOR.WHITE,
              }}>
              See All Review
            </Text>
          </View>
        </View>
        {type === 'astro' ? (
          <>
            {/* --------- Similar AStro ------- */}
            <View style={styles.seeAllView}>
              <Text style={styles.headerTitle}>Similar Astrologer</Text>

              <TouchableOpacity onPress={() => navigation.navigate('Pooja')}>
                <Text style={[styles.MediumText, {color: COLOR.DARK_BLUE}]}>
                  See all
                </Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={ZodiaArray}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index}) => {
                return (
                  <View>
                    <View style={[styles.cardView, {width: wp('60%')}]}>
                      <View style={[styles.imageView]}>
                        <Image
                          source={require('../../Icons/Images/Astrologist.png')}
                          style={styles.astroImage}
                        />
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            // width: wp('10%'),
                            // backgroundColor: 'red',
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
                        Leslie Alexander
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
                          Card Specialis
                        </Text>
                        <Text
                          style={[
                            styles.subheadlineText,
                            {color: COLOR.YELLOW, marginLeft: wp('2%')},
                          ]}>
                          $ 10/M
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
            {/* --------- Send Gift ------- */}
            <View style={styles.seeAllView}>
              <Text style={styles.headerTitle}>Send Gift</Text>

              <TouchableOpacity onPress={() => navigation.navigate('Pooja')}>
                <Text style={[styles.MediumText, {color: COLOR.DARK_BLUE}]}>
                  See all
                </Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={Giftlist}
              numColumns={3}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => {
                return (
                  <View
                    style={{
                      width: wp('28%'),
                      marginRight: hp('2%'),
                      marginBottom: hp('2%'),
                      alignSelf: 'center',
                      alignItems: 'center',
                      // backgroundColor: 'yellow',
                    }}>
                    <Image
                      source={item.img}
                      style={{
                        width: wp('16%'),
                        height: hp('10%'),
                        resizeMode: 'contain',
                      }}
                    />
                    <Text style={[styles.blueText, {fontFamily: FONT.MEDIUM}]}>
                      {item.title}
                    </Text>
                    <Text
                      style={{
                        fontSize: FONT_SIZE.F_13,
                        fontFamily: FONT.MEDIUM,
                        color: COLOR.YELLOW,
                      }}>
                      $ {item.price}
                    </Text>
                  </View>
                );
              }}
            />
          </>
        ) : null}
      </ScrollView>
      {/* Pooja Price */}
      {type === 'pooja' ? (
        <View style={styles.poojaPriceView}>
          <Text style={styles.pointsHedding}> ₹ {detailsaData?.price}</Text>
          <TouchableOpacity
            onPress={() => handleBookNow()}
            style={[styles.roundStyle, {width: wp('30%')}]}>
            <Text
              style={{
                fontFamily: FONT.SEMI_BOLD,
                fontSize: FONT_SIZE.F_14,
                color: COLOR.WHITE,
              }}>
              Book Now
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

export default AstroDetail;

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
    color: COLOR.BLACK,
  },
  smallText: {
    // marginVertical: wp('2%'),
    fontFamily: FONT.SEMI_BOLD,
    fontSize: FONT_SIZE.F_11,
    color: COLOR.BLACK,
    textAlign: 'center',
  },

  astroImage: {
    height: hp('10%'),
    width: wp('14%'),
    borderRadius: hp('2%'),
    padding: hp('1%'),
    resizeMode: 'contain',
  },
  cardView: {
    alignSelf: 'center',
    borderRadius: hp('3%'),
    padding: hp('1%'),
    width: wp('89%'),
    marginHorizontal: hp('1%'),
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
    width: wp('50%'),
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
  CallView: {
    flexDirection: 'row',
    width: wp('40%'),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    padding: wp('2%'),
    borderRadius: hp('2%'),
    borderColor: COLOR.LIGHT_GRAY,
    borderWidth: wp('0.3%'),
  },
  blueText: {
    fontFamily: FONT.BOLD,
    fontSize: FONT_SIZE.F_15,
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
    borderRadius: hp('1.5%'),
    paddingVertical: hp('1.5%'),
    width: wp('20%'),
    marginVertical: wp('3%'),
    backgroundColor: COLOR.YELLOW,
  },
  seeAllView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('88%'),
    marginTop: hp('2%'),
    marginBottom: hp('2%'),
    alignItems: 'center',
  },
  ReviewView: {
    alignSelf: 'center',
    borderRadius: hp('3%'),
    paddingTop: hp('0.8%'),
    paddingHorizontal: hp('1.5%'),
    width: wp('89%'),
    marginHorizontal: hp('2%'),
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
  pointsHedding: {
    fontFamily: FONT.SEMI_BOLD,
    fontSize: hp('2.5%'),
    color: COLOR.BLACK,
  },
  pointsSubText: {
    fontFamily: FONT.REGULAR,
    fontSize: hp('2%'),
    color: COLOR.GRAY,
  },
  ponintsView: {
    width: '100%',
    borderColor: COLOR.GRAY,
    borderWidth: hp('0.1%'),
    borderRadius: hp('2%'),
    padding: hp('2%'),
    marginBottom: hp('2%'),
  },
  poojaPriceView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
