import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {
  AshtakvargaTab,
  BasicDetail,
  Charts,
  ChartsButton,
  ChartsTab,
  DashaTab,
  GeneralTab,
  KalsarpaData,
  KalsarpaHeader,
  ManglikTab,
  MukhiTab,
  PlanetsHeader,
  PlanetsTab,
  Planetsdata,
  ReportTab,
  RudrakshaTab,
  kundaliTab,
  liveAstroArray,
} from '../../Utils/KundaliData';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLOR, FONT, FONT_SIZE} from '../../Providerscreen/Globles';
import IocalImage from '../../Providerscreen/IocalImage';
import {Table, Row, Rows} from 'react-native-table-component';
import CommonHeader from '../../Providerscreen/CommonHeader';
const BasicDetails = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: hp('2%'),
        backgroundColor: COLOR.WHITE,
      }}>
      <CommonHeader headerText={'Kundali'} />
      <ScrollView>
        {/* ------------ DETAILS TAB--------- */}
        <View style={{marginVertical: hp('2%')}}>
          <FlatList
            data={BasicDetail}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{justifyContent: 'center'}}
            renderItem={({item, index}) => {
              const isSelected = index === selectedItemIndex;
              return (
                <View>
                  <TouchableOpacity
                    onPress={() => setSelectedItemIndex(index)}
                    style={{
                      backgroundColor: isSelected ? COLOR.YELLOW : COLOR.GRAY,
                      width: wp('20%'),
                      padding: hp('1.5%'),
                      borderRadius: hp('2%'),
                      marginLeft: hp('2%'),
                      width: wp('30%'),
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: COLOR.WHITE,
                        fontSize: FONT_SIZE.F_14,
                        fontWeight: '900',
                      }}>
                      {item.title}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>

        {/* ---------------BASIC DETAILS--------------- */}
        
            <View style={[styles.orangeViewHead,{ alignSelf: 'center',}]}>
          <Text style={styles.tilteText}>Basic Details</Text>
        </View>

        <View
          style={[
            {
              flexDirection: 'row',
              justifyContent: 'space-around',
              // padding: hp('2%'),
              width: wp('85%'),
              backgroundColor: COLOR.WHITE,
              alignSelf: 'center',
            },
            styles.kundaliCard,
          ]}>
          <View style={{}}>
            <Text style={{color: COLOR.LIGHT_GRAY}}>Name</Text>
            <Text style={{paddingVertical: hp('1%'), color: COLOR.LIGHT_GRAY}}>
              Date
            </Text>
            <Text style={{paddingVertical: hp('1%'), color: COLOR.LIGHT_GRAY}}>
              Time
            </Text>
            <Text style={{paddingVertical: hp('1%'), color: COLOR.LIGHT_GRAY}}>
              Longitude
            </Text>
            <Text style={{paddingVertical: hp('1%'), color: COLOR.LIGHT_GRAY}}>
              Timezone
            </Text>
            <Text style={{paddingVertical: hp('1%'), color: COLOR.LIGHT_GRAY}}>
              Sunrise
            </Text>
            <Text style={{paddingVertical: hp('1%'), color: COLOR.LIGHT_GRAY}}>
              Sunset
            </Text>
            <Text style={{paddingVertical: hp('1%'), color: COLOR.LIGHT_GRAY}}>
              Ayanamsha
            </Text>
          </View>
          <View style={{}}>
            <Text style={{color: COLOR.LIGHT_GRAY}}>Rahul Vishwakarma</Text>
            <Text style={{paddingVertical: hp('1%'), color: COLOR.LIGHT_GRAY}}>
              30 May 1995
            </Text>
            <Text style={{paddingVertical: hp('1%'), color: COLOR.LIGHT_GRAY}}>
              06:57 AM
            </Text>
            <Text style={{paddingVertical: hp('1%'), color: COLOR.LIGHT_GRAY}}>
              76.35
            </Text>
            <Text style={{paddingVertical: hp('1%'), color: COLOR.LIGHT_GRAY}}>
              GMT+5.5
            </Text>
            <Text style={{paddingVertical: hp('1%'), color: COLOR.LIGHT_GRAY}}>
              {' '}
              5:41:19 AM
            </Text>
            <Text style={{paddingVertical: hp('1%'), color: COLOR.LIGHT_GRAY}}>
              7:02:44 PM
            </Text>
            <Text style={{paddingVertical: hp('1%'), color: COLOR.LIGHT_GRAY}}>
              23.7929
            </Text>
          </View>
        </View>
        <Text
          style={{
            color: COLOR.DARK_BLUE,
            fontSize: FONT_SIZE.F_17,
            fontWeight: 'bold',
            marginLeft: hp('4%'),
            marginVertical: hp('3%'),
          }}>
          Manglik Analysis
        </Text>
        <View
          style={{
            flexDirection: 'row',
           alignSelf:'center',
            backgroundColor: COLOR.WHITE,
            padding: hp('2.4%'),
            width: wp('85%'),
            borderRadius: 10,
            elevation:4
          }}>
          <Image source={IocalImage.Avtar} style={{marginTop: hp('1%')}} />
          <Text
            style={{
              color: COLOR.DARK_BLUE,
              fontSize: FONT_SIZE.F_17,
              fontWeight: 'bold',
              marginLeft: hp('2%'),
            }}>
            Rahul vish
          </Text>

          <Text
            style={{
              color: COLOR.GRAY,
              fontSize: FONT_SIZE.F_14,
              marginTop: hp('4%'),
              marginLeft: hp('-11%'),
              width: wp('60%'),
            }}>
            khandwa madhya pradesh india
          </Text>
        </View>
       <View style={[styles.orangeViewHead,{ alignSelf: 'center',}]}>
          <Text style={styles.tilteText}>Panchang Details</Text>
        </View>
        <View
          style={[
            {
              flexDirection: 'row',
              justifyContent: 'space-around',
              padding: hp('2%'),
              width: wp('85%'),
              backgroundColor: COLOR.WHITE,
              alignSelf: 'center',
            },
            styles.kundaliCard,
          ]}>
          <View style={{}}>
            <Text style={{paddingVertical: hp('1%'), color: COLOR.LIGHT_GRAY}}>
              Name
            </Text>
            <Text style={{paddingVertical: hp('1%'), color: COLOR.LIGHT_GRAY}}>
              Date
            </Text>
            <Text style={{paddingVertical: hp('1%'), color: COLOR.LIGHT_GRAY}}>
              Time
            </Text>
            <Text style={{paddingVertical: hp('1%'), color: COLOR.LIGHT_GRAY}}>
              Longitude
            </Text>
            <Text style={{paddingVertical: hp('1%'), color: COLOR.LIGHT_GRAY}}>
              Timezone
            </Text>
            <Text style={{paddingVertical: hp('1%'), color: COLOR.LIGHT_GRAY}}>
              Sunrise
            </Text>
            <Text style={{paddingVertical: hp('1%'), color: COLOR.LIGHT_GRAY}}>
              Sunset
            </Text>
            <Text style={{paddingVertical: hp('1%'), color: COLOR.LIGHT_GRAY}}>
              Ayanamsha
            </Text>
          </View>
          <View style={{}}>
            <Text style={{paddingVertical: hp('1%'), color: COLOR.LIGHT_GRAY}}>
              Rahul Vishwakarma
            </Text>
            <Text style={{paddingVertical: hp('1%'), color: COLOR.LIGHT_GRAY}}>
              30 May 1995
            </Text>
            <Text style={{paddingVertical: hp('1%'), color: COLOR.LIGHT_GRAY}}>
              06:57 AM
            </Text>
            <Text style={{paddingVertical: hp('1%'), color: COLOR.LIGHT_GRAY}}>
              76.35
            </Text>
            <Text style={{paddingVertical: hp('1%'), color: COLOR.LIGHT_GRAY}}>
              GMT+5.5
            </Text>
            <Text style={{paddingVertical: hp('1%'), color: COLOR.LIGHT_GRAY}}>
              {' '}
              5:41:19 AM
            </Text>
            <Text style={{paddingVertical: hp('1%'), color: COLOR.LIGHT_GRAY}}>
              7:02:44 PM
            </Text>
            <Text style={{paddingVertical: hp('1%'), color: COLOR.LIGHT_GRAY}}>
              23.7929
            </Text>
          </View>
        </View>
       <View style={[styles.orangeViewHead,{ alignSelf: 'center',}]}>
          <Text style={styles.tilteText}>Avakhada Details</Text>
        </View>
        <View
          style={[
            {
              flexDirection: 'row',
              justifyContent: 'space-around',
              padding: hp('2%'),
              width: wp('85%'),
              backgroundColor: COLOR.WHITE,
              alignSelf: 'center',
            },
            styles.kundaliCard,
          ]}>
          <View style={{}}>
            <Text style={{color: COLOR.LIGHT_GRAY}}>Name</Text>
            <Text style={{paddingVertical: hp('1%'), color: COLOR.LIGHT_GRAY}}>
              Date
            </Text>
            <Text style={{paddingVertical: hp('1%'), color: COLOR.LIGHT_GRAY}}>
              Time
            </Text>
            <Text style={{paddingVertical: hp('1%'), color: COLOR.LIGHT_GRAY}}>
              Longitude
            </Text>
            <Text style={{paddingVertical: hp('1%'), color: COLOR.LIGHT_GRAY}}>
              Timezone
            </Text>
            <Text style={{paddingVertical: hp('1%'), color: COLOR.LIGHT_GRAY}}>
              Sunrise
            </Text>
            <Text style={{paddingVertical: hp('1%'), color: COLOR.LIGHT_GRAY}}>
              Sunset
            </Text>
            <Text style={{paddingVertical: hp('1%'), color: COLOR.LIGHT_GRAY}}>
              Ayanamsha
            </Text>
          </View>
          <View>
            <Text style={{color: COLOR.LIGHT_GRAY}}>Rahul Vishwakarma</Text>
            <Text style={{paddingVertical: hp('1%'), color: COLOR.LIGHT_GRAY}}>
              30 May 1995
            </Text>
            <Text style={{paddingVertical: hp('1%'), color: COLOR.LIGHT_GRAY}}>
              06:57 AM
            </Text>
            <Text style={{paddingVertical: hp('1%'), color: COLOR.LIGHT_GRAY}}>
              76.35
            </Text>
            <Text style={{paddingVertical: hp('1%'), color: COLOR.LIGHT_GRAY}}>
              GMT+5.5
            </Text>
            <Text style={{paddingVertical: hp('1%'), color: COLOR.LIGHT_GRAY}}>
              {' '}
              5:41:19 AM
            </Text>
            <Text style={{paddingVertical: hp('1%'), color: COLOR.LIGHT_GRAY}}>
              7:02:44 PM
            </Text>
            <Text style={{paddingVertical: hp('1%'), color: COLOR.LIGHT_GRAY}}>
              23.7929
            </Text>
          </View>
        </View>
        {/* ---------- Live astro ----- */}
        <View style={{marginLeft: hp('2%')}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: wp('80%'),
              alignItems: 'center',
            }}>
            <Text style={styles.headerTitle}>
              Unable to understand your Kundli?
            </Text>

            <TouchableOpacity
              onPress={() => navigation.navigate('CallandChat')}>
              <Text
                style={[
                  styles.subheadlineText,
                  {color: COLOR.DARK_BLUE, marginTop: hp('7%')},
                ]}>
                See All
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={{marginTop: hp('-3'), color: COLOR.LIGHT_GRAY}}>
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

          {/* -----------Lagna Chart Tab------------- */}
          <View style={{marginVertical: hp('2%')}}>
            <FlatList
              data={Charts}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{justifyContent: 'center'}}
              renderItem={({item, index}) => {
                const isSelected = index === selectedItemIndex;
                return (
                  <View>
                    <TouchableOpacity
                      onPress={() => setSelectedItemIndex(index)}
                      style={{
                        backgroundColor: isSelected
                          ? COLOR.YELLOW
                          : COLOR.WHITE,
                        width: wp('20%'),
                        padding: hp('1%'),
                        borderWidth: 1,
                        borderColor: isSelected
                          ? COLOR.YELLOW
                          : COLOR.DARK_BLUE,
                        borderRadius: hp('6%'),
                        marginLeft: hp('2%'),
                        width: wp('33%'),
                      }}>
                      <Text
                        style={{
                          textAlign: 'center',
                          color: isSelected ? COLOR.WHITE : COLOR.DARK_BLUE,
                          fontSize: FONT_SIZE.F_16,
                          fontWeight: '500',
                        }}>
                        {item.title}
                      </Text>
                    </TouchableOpacity>
                    <View
                      style={{
                        borderBottomWidth: 1,
                        borderBottomColor: isSelected
                          ? COLOR.YELLOW
                          : COLOR.ExtLIGHT_GRAY,
                        width: hp('2.0%'),
                        borderBottomWidth: hp('0.2%'),
                        position: 'absolute',
                        top: hp('2.7%'),
                      }}></View>
                  </View>
                );
              }}
            />
          </View>
        </View>
        <Text
          style={{
            color: COLOR.DARK_BLUE,
            fontSize: FONT_SIZE.F_17,
            fontWeight: 'bold',
            marginLeft: hp('4%'),
            marginVertical: hp('2%'),
          }}>
          Lagna Chart
        </Text>

        {/* --------lagna button------- */}
        <View
          style={{
            marginVertical: hp('0.4%'),
            width: wp('80%'),
            alignSelf:'center',
            alignItems:'center',
            backgroundColor: '#F0F0F7',
            paddingVertical: hp('1%'),
            borderBottomEndRadius: hp('2%'),
            borderTopRightRadius: hp('2%'),
            borderTopLeftRadius: hp('2%'),
            borderBottomStartRadius: hp('2%'),
          }}>
          <FlatList
            data={ChartsTab}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{justifyContent: 'center'}}
            renderItem={({item, index}) => {
              const isSelected = index === selectedItemIndex;
              return (
                <View style={{}}>
                  <TouchableOpacity
                    onPress={() => setSelectedItemIndex(index)}
                    style={{
                      backgroundColor: isSelected ? COLOR.YELLOW : COLOR.WHITE,
                      padding: hp('1.5%'),
                     
                      // borderWidth:1,
                      // borderColor:isSelected ?  COLOR.YELLOW: COLOR.DARK_BLUE,
                      borderRadius: hp('2%'),
                      marginLeft: hp('1%'),
                      width: wp('32%'),
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: isSelected ? COLOR.WHITE : COLOR.DARK_BLUE,
                        fontSize: FONT_SIZE.F_16,
                      }}>
                      {item.title}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
         
        </View>
         {/* ----------kundaliNorth Image */}
         <View style={{alignSelf: 'center', marginTop: hp('4%')}}>
            <Image source={IocalImage.KundaliNorth} />
          </View>
          {/* ----------kundaliSouth Image */}
         <View style={{alignSelf: 'center', marginTop: hp('2%')}}>
            <Image source={IocalImage.KundaliNorth} />
          </View>
        {/* -----------Planets------------- */}
        <Text
          style={{
            color: COLOR.DARK_BLUE,
            fontSize: FONT_SIZE.F_17,
            fontWeight: 'bold',
            marginLeft: hp('4%'),
            marginVertical: hp('2%'),
          }}>
          Planets
        </Text>
        <View style={{}}>
          <FlatList
            data={PlanetsTab}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{justifyContent: 'center'}}
            renderItem={({item, index}) => {
              const isSelected = index === selectedItemIndex;
              return (
                <View>
                  <TouchableOpacity
                    onPress={() => setSelectedItemIndex(index)}
                    style={{
                      backgroundColor: isSelected ? COLOR.YELLOW : COLOR.WHITE,
                      padding: hp('1%'),
                      borderWidth: 1,
                      borderColor: isSelected ? COLOR.YELLOW : COLOR.DARK_BLUE,
                      borderRadius: hp('6%'),
                      marginLeft: hp('2%'),
                      width: wp('30%'),
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: isSelected ? COLOR.WHITE : COLOR.DARK_BLUE,
                        fontSize: FONT_SIZE.F_16,
                        fontWeight: '500',
                      }}>
                      {item.title}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
        {/* -----------planets table---- */}

        <View style={{marginTop: hp('4%')}}>
          <Table
            borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}
            style={{
              width: wp('90%'),
              alignSelf: 'center',
              shadowOpacity: 0.2,
              shadowRadius: 2,
              // Elevation for Android
              elevation: 6,
              borderTopLeftRadius: hp('2.9%'),
            }}>
            <Row
              data={PlanetsHeader}
              style={{
                backgroundColor: COLOR.YELLOW,
                height: hp('8%'),
                alignSelf: 'center',
                borderTopLeftRadius: hp('2%'),
                borderTopRightRadius: hp('2%'),
              }}
              textStyle={styles.text}
            />
            <Rows
              data={Planetsdata}
              textStyle={{
                color: COLOR.DARK_BLUE,
                textAlign: 'center',
                fontWeight: '100',
              }}
              style={{
                height: hp('6%'),
                backgroundColor: COLOR.WHITE,
                alignSelf: 'center',
              }}
            />
          </Table>
        </View>

        {/* ----------****************-Understanding Your Kundli------------- */}
        <Text
          style={{
            color: COLOR.DARK_BLUE,
            fontSize: FONT_SIZE.F_17,
            fontWeight: 'bold',
            marginLeft: hp('3%'),
            marginVertical: hp('3%'),
          }}>
          Understanding Your Kundli
        </Text>
        <View style={{}}>
          <FlatList
            data={kundaliTab}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{justifyContent: 'center'}}
            renderItem={({item, index}) => {
              const isSelected = index === selectedItemIndex;
              return (
                <View>
                  <TouchableOpacity
                    onPress={() => setSelectedItemIndex(index)}
                    style={{
                      backgroundColor: isSelected ? COLOR.YELLOW : COLOR.WHITE,
                      padding: hp('1%'),
                      borderWidth: 1,
                      borderColor: isSelected ? COLOR.YELLOW : COLOR.DARK_BLUE,
                      borderRadius: hp('6%'),
                      marginLeft: hp('2%'),
                      width: wp('30%'),
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: isSelected ? COLOR.WHITE : COLOR.DARK_BLUE,
                        fontSize: FONT_SIZE.F_16,
                        fontWeight: '500',
                      }}>
                      {item.title}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
        {/* --------------- kundali Card1-------*/}
        <View>
          <View style={styles.orangeViewHead}>
            <Text
              style={{
                marginLeft: hp('2%'),
                color: COLOR.WHITE,
                fontSize: FONT_SIZE.F_16,
                fontFamily: FONT.SEMI_BOLD,
              }}>
              Description
            </Text>
          </View>
          <View style={styles.kundaliCard}>
            <Text
              style={{
                color: COLOR.DARK_BLUE,
                fontSize: FONT_SIZE.F_16,
              }}>
              Ascendant is one of the most sought concepts in astrology when it
              comes to predicting the minute events in your life. At the time of
              birth, the sign that rises in the sky is the person's ascendant.
              It helps in making predictions about the minute events, unlike
              your Moon or Sun sign that help in making weekly, monthly or
              yearly predictions for you. Your ascendant is Gemini
            </Text>
          </View>
        </View>
        {/* ---------- kundali card2 ----------*/}
        <View>
          <View style={styles.orangeViewHead}>
            <Text
              style={{
                marginLeft: hp('2%'),
                color: COLOR.WHITE,
                fontSize: FONT_SIZE.F_17,
                fontFamily: FONT.SEMI_BOLD,
              }}>
              Personality
            </Text>
          </View>
          <View style={styles.kundaliCard}>
            <Text
              style={{
                color: COLOR.DARK_BLUE,
                fontSize: FONT_SIZE.F_16,
              }}>
              Those born with the Gemini sign are very lively and charming
              personalities. They are the owner of a very active mind and as a
              twin sign, also very open to change. It is a good thing but also
              shady because it prompts their thoughts to wander around and
              rarely stick on one thing. These natives are restless, easily
              bored, and find it tough to concentrate on one thing for a long
              time. Geminis are also very good with manipulation. Most of the
              time, one can't figure out what they are thinking. Thus, people,
              especially their loved ones, struggle to understand them.
              Nevertheless, the Gemini's intellect dominates them and thus when
            </Text>
          </View>
        </View>

        {/* ---------- kundali card3 ----------*/}
        <View>
          <View style={styles.orangeViewHead}>
            <Text
              style={{
                marginLeft: hp('2%'),
                color: COLOR.WHITE,
                fontSize: FONT_SIZE.F_18,
                fontFamily: FONT.SEMI_BOLD,
              }}>
              Physical
            </Text>
          </View>
          <View style={styles.kundaliCard}>
            <Text
              style={{
                color: COLOR.DARK_BLUE,
                fontSize: FONT_SIZE.F_16,
              }}>
              Those born with the Gemini sign are very lively and charming
              personalities. They are the owner of a very active mind and as a
              twin sign, also very open to change. It is a good thing but also
              shady because it prompts their thoughts to wander around and
              rarely stick on one thing. These natives are restless, easily
              bored, and find it tough to concentrate on one thing for a long
              time. Geminis are also very good with manipulation. Most of the
              time, one can't figure out what they are thinking. Thus, people,
              especially their loved ones, struggle to understand them.
              Nevertheless, the Gemini's intellect dominates them and thus when
            </Text>
          </View>
        </View>
        {/* ---------- kundali card4----------*/}
        <View>
          <View style={styles.orangeViewHead}>
            <Text
              style={{
                marginLeft: hp('2%'),
                color: COLOR.WHITE,
                fontSize: FONT_SIZE.F_18,
                fontFamily: FONT.SEMI_BOLD,
              }}>
              health
            </Text>
          </View>
          <View style={styles.kundaliCard}>
            <Text
              style={{
                color: COLOR.DARK_BLUE,
                fontSize: FONT_SIZE.F_16,
              }}>
              Those born with the Gemini sign are very lively and charming
              personalities. They are the owner of a very active mind and as a
              twin sign, also very open to change. It is a good thing but also
              shady because it prompts their thoughts to wander around and
              rarely stick on one thing. These natives are restless, easily
              bored, and find it tough to concentrate on one thing for a long
              time. Geminis are also very good with manipulation. Most of the
              time, one can't figure out what they are thinking. Thus, people,
              especially their loved ones, struggle to understand them.
              Nevertheless, the Gemini's intellect dominates them and thus when
            </Text>
          </View>
        </View>
        {/* ---------- kundali card5 ----------*/}
        <View>
          <View style={styles.orangeViewHead}>
            <Text
              style={{
                marginLeft: hp('2%'),
                color: COLOR.WHITE,
                fontSize: FONT_SIZE.F_18,
                fontFamily: FONT.SEMI_BOLD,
              }}>
              career
            </Text>
          </View>
          <View style={styles.kundaliCard}>
            <Text
              style={{
                color: COLOR.DARK_BLUE,
                fontSize: FONT_SIZE.F_16,
              }}>
              Those born with the Gemini sign are very lively and charming
              personalities. They are the owner of a very active mind and as a
              twin sign, also very open to change. It is a good thing but also
              shady because it prompts their thoughts to wander around and
              rarely stick on one thing. These natives are restless, easily
              bored, and find it tough to concentrate on one thing for a long
              time. Geminis are also very good with manipulation. Most of the
              time, one can't figure out what they are thinking. Thus, people,
              especially their loved ones, struggle to understand them.
              Nevertheless, the Gemini's intellect dominates them and thus when
            </Text>
          </View>
        </View>
        {/* ---------- kundali card6 ----------*/}
        <View>
          <View style={styles.orangeViewHead}>
            <Text
              style={{
                marginLeft: hp('2%'),
                color: COLOR.WHITE,
                fontSize: FONT_SIZE.F_19,
                fontFamily: FONT.SEMI_BOLD,
              }}>
              relationship
            </Text>
          </View>
          <View style={styles.kundaliCard}>
            <Text
              style={{
                color: COLOR.DARK_BLUE,
                fontSize: FONT_SIZE.F_16,
              }}>
              Those born with the Gemini sign are very lively and charming
              personalities. They are the owner of a very active mind and as a
              twin sign, also very open to change. It is a good thing but also
              shady because it prompts their thoughts to wander around and
              rarely stick on one thing. These natives are restless, easily
              bored, and find it tough to concentrate on one thing for a long
              time. Geminis are also very good with manipulation. Most of the
              time, one can't figure out what they are thinking. Thus, people,
              especially their loved ones, struggle to understand them.
              Nevertheless, the Gemini's intellect dominates them and thus when
            </Text>
          </View>
        </View>
        {/* -------------------KP section-------- */}
        <Text
          style={{
            color: COLOR.DARK_BLUE,
            fontSize: FONT_SIZE.F_17,
            fontWeight: 'bold',
            marginLeft: hp('3%'),
            marginVertical: hp('3%'),
          }}>
          Bhave Chalit Chart Ruling Planets
        </Text>
        <View style={{marginTop: hp('2%')}}>
          <Table
            borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}
            style={{
              width: wp('90%'),
              alignSelf: 'center',
              shadowOpacity: 0.2,
              shadowRadius: 2,
              // Elevation for Android
              elevation: 6,
              borderTopLeftRadius: hp('2.9%'),
            }}>
            <Row
              data={PlanetsHeader}
              style={{
                backgroundColor: COLOR.YELLOW,
                height: hp('10%'),
                alignSelf: 'center',
                borderTopLeftRadius: hp('2%'),
                borderTopRightRadius: hp('2%'),
              }}
              textStyle={styles.text}
            />
            <Rows
              data={Planetsdata}
              textStyle={{color: COLOR.DARK_BLUE, textAlign: 'center'}}
              style={{
                height: hp('6%'),
                backgroundColor: COLOR.WHITE,
                alignSelf: 'center',
              }}
            />
          </Table>
        </View>
        <Text
          style={{
            color: COLOR.DARK_BLUE,
            fontSize: FONT_SIZE.F_17,
            fontWeight: 'bold',
            marginLeft: hp('3%'),
            marginVertical: hp('3%'),
          }}>
          Ruling Planets
        </Text>
        <View style={{}}>
          <Table
            borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}
            style={{
              width: wp('90%'),
              alignSelf: 'center',
              shadowOpacity: 0.2,
              shadowRadius: 2,
              // Elevation for Android
              elevation: 6,
              borderTopLeftRadius: hp('2.9%'),
            }}>
            <Row
              data={PlanetsHeader}
              style={{
                backgroundColor: COLOR.YELLOW,
                height: hp('10%'),
                alignSelf: 'center',
                borderTopLeftRadius: hp('2%'),
                borderTopRightRadius: hp('2%'),
              }}
              textStyle={styles.text}
            />
            <Rows
              data={Planetsdata}
              textStyle={{color: COLOR.DARK_BLUE, textAlign: 'center'}}
              style={{
                height: hp('6%'),
                backgroundColor: COLOR.WHITE,
                alignSelf: 'center',
              }}
            />
          </Table>
        </View>
        <Text
          style={{
            color: COLOR.DARK_BLUE,
            fontSize: FONT_SIZE.F_17,
            fontWeight: 'bold',
            marginLeft: hp('3%'),
            marginVertical: hp('3%'),
          }}>
          Planets
        </Text>
        <View style={{}}>
          <Table
            borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}
            style={{
              width: wp('90%'),
              alignSelf: 'center',
              shadowOpacity: 0.2,
              shadowRadius: 2,
              // Elevation for Android
              elevation: 6,
              borderTopLeftRadius: hp('2.9%'),
            }}>
            <Row
              data={PlanetsHeader}
              style={{
                backgroundColor: COLOR.YELLOW,
                height: hp('10%'),
                alignSelf: 'center',
                borderTopLeftRadius: hp('2%'),
                borderTopRightRadius: hp('2%'),
              }}
              textStyle={styles.text}
            />
            <Rows
              data={Planetsdata}
              textStyle={{textAlign: 'center', color: COLOR.DARK_BLUE}}
              style={{
                height: hp('6%'),
                backgroundColor: COLOR.WHITE,
                alignSelf: 'center',
              }}
            />
          </Table>
        </View>
        <Text
          style={{
            color: COLOR.DARK_BLUE,
            fontSize: FONT_SIZE.F_17,
            fontWeight: 'bold',
            marginLeft: hp('3%'),
            marginVertical: hp('3%'),
          }}>
          Cusp
        </Text>
        <View style={{}}>
          <Table
            borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}
            style={{
              width: wp('90%'),
              alignSelf: 'center',
              shadowOpacity: 0.2,
              shadowRadius: 2,
              // Elevation for Android
              elevation: 6,
              borderTopLeftRadius: hp('2.9%'),
            }}>
            <Row
              data={PlanetsHeader}
              style={{
                backgroundColor: COLOR.YELLOW,
                height: hp('10%'),
                alignSelf: 'center',
                borderTopLeftRadius: hp('2%'),
                borderTopRightRadius: hp('2%'),
              }}
              textStyle={styles.text}
            />
            <Rows
              data={Planetsdata}
              textStyle={{color: COLOR.DARK_BLUE, textAlign: 'center'}}
              style={{
                height: hp('6%'),
                backgroundColor: COLOR.WHITE,
                alignSelf: 'center',
              }}
            />
          </Table>
        </View>

        {/* -----------------Ashtakvarga Chart Tab---------- */}
        <Text
          style={{
            color: COLOR.DARK_BLUE,
            fontSize: FONT_SIZE.F_17,
            fontWeight: 'bold',
            // marginLeft: hp('3%'),
            marginVertical: hp('2%'),
          }}>
          Ashtakvarga Chart
        </Text>
        <Text style={{width: hp('52%'), fontSize: FONT_SIZE.F_18}}>
          Ascendant is one of the most sought concepts in astrology when it
          comes to predicting the minute events in your life. At the time of
          birth, the sign that rises in the sky is the person's ascendant. It
          helps in making predictions about the minute events, unlike your Moon
          or Sun sign that help in making weekly, monthly or yearly predictions
          for you. Your ascendant is Gemini
        </Text>
        <View style={{marginVertical: hp('2%')}}>
          <FlatList
            data={AshtakvargaTab}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{justifyContent: 'center'}}
            renderItem={({item, index}) => {
              const isSelected = index === selectedItemIndex;
              return (
                <View>
                  <TouchableOpacity
                    onPress={() => setSelectedItemIndex(index)}
                    style={{
                      backgroundColor: isSelected
                        ? COLOR.YELLOW
                        : COLOR.ExtLIGHT_GRAY,
                      // width: wp('20%'),
                      padding: hp('1%'),
                      borderRadius: hp('2%'),
                      marginRight: hp('2%'),
                      width: wp('30%'),
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: COLOR.WHITE,
                        fontSize: FONT_SIZE.F_16,
                        fontWeight: '900',
                      }}>
                      {item.title}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
        {/* ----------kundaliNorth Image */}
        <View style={{alignSelf: 'center', marginTop: hp('4%')}}>
          <Image source={IocalImage.KundaliNorth} />
        </View>

        {/* -------------------------DASHA----------- */}
        <Text
          style={{
            color: COLOR.DARK_BLUE,
            fontSize: FONT_SIZE.F_17,
            fontWeight: 'bold',
            marginLeft: hp('3%'),
            marginVertical: hp('3%'),
          }}>
          Planets
        </Text>
        <View style={{marginVertical: hp('0.4%')}}>
          <FlatList
            data={DashaTab}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{justifyContent: 'center'}}
            renderItem={({item, index}) => {
              const isSelected = index === selectedItemIndex;
              return (
                <View>
                  <TouchableOpacity
                    onPress={() => setSelectedItemIndex(index)}
                    style={{
                      backgroundColor: isSelected
                        ? COLOR.YELLOW
                        : COLOR.ExtLIGHT_GRAY,

                      padding: hp('1.4%'),
                      borderRadius: hp('2%'),
                      marginLeft: hp('2%'),
                      width: wp('30%'),
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: COLOR.WHITE,
                        fontSize: FONT_SIZE.F_16,
                        fontWeight: '900',
                      }}>
                      {item.title}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
        <Text
          style={{
            color: COLOR.DARK_BLUE,
            fontSize: FONT_SIZE.F_17,
            // fontWeight: 'bold',
            marginLeft: hp('3%'),
            marginVertical: hp('3%'),
          }}>
          Mahadasha
        </Text>
        <View style={{marginTop: hp('1.2%')}}>
          <Table
            borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}
            style={{
              width: wp('90%'),
              alignSelf: 'center',
              shadowOpacity: 0.2,
              shadowRadius: 2,
              // Elevation for Android
              elevation: 6,
              borderTopLeftRadius: hp('2.9%'),
            }}>
            <Row
              data={PlanetsHeader}
              style={{
                backgroundColor: COLOR.YELLOW,
                height: hp('7%'),
                alignSelf: 'center',
                borderTopLeftRadius: hp('2%'),
                borderTopRightRadius: hp('2%'),
              }}
              textStyle={styles.text}
            />
            <Rows
              data={Planetsdata}
              textStyle={{color: COLOR.DARK_BLUE, textAlign: 'center'}}
              style={{
                height: hp('6%'),
                backgroundColor: COLOR.WHITE,
                alignSelf: 'center',
              }}
            />
          </Table>
        </View>
        {/* -------- Dasha TAble*/}
        <Text
          style={{
            color: COLOR.DARK_BLUE,
            fontSize: FONT_SIZE.F_17,
            // fontWeight: 'bold',
            marginLeft: hp('3%'),
            marginVertical: hp('2%'),
          }}>
          Understanding Your dasha
        </Text>
        <View>
          <View style={[styles.orangeViewHead, {flexDirection: 'row'}]}>
            <Text
              style={{
                // marginLeft: hp('2%'),
                color: COLOR.WHITE,
                fontSize: FONT_SIZE.F_16,
                fontFamily: FONT.SEMI_BOLD,
              }}>
              Moon Mahadasha
            </Text>
            <Text
              style={{
                marginLeft: hp('2%'),
                color: COLOR.WHITE,
                fontSize: FONT_SIZE.F_14,
              }}>
              (20-05-1993 -05/03/1993)
            </Text>
          </View>
          <View style={styles.kundaliCard}>
            <Text
              style={{
                color: COLOR.DARK_BLUE,
                fontSize: FONT_SIZE.F_16,
              }}>
              Those born with the Gemini sign are very lively and charming
              personalities. They are the owner of a very active mind and as a
              twin sign, also very open to change. It is a good thing but also
              shady because it prompts their thoughts to wander around and
              rarely stick on one thing. These natives are restless, easily
              bored, and find it tough to concentrate on one thing for a long
              time. Geminis are also very good with manipulation. Most of the
              time, one can't figure out what they are thinking. Thus, people,
              especially their loved ones, struggle to understand them.
              Nevertheless, the Gemini's intellect dominates them and thus when
            </Text>
          </View>
        </View>

        {/* -------- Mars Mahadasha Dasha TAble*/}

        <View>
          <View style={[styles.orangeViewHead, {flexDirection: 'row'}]}>
            <Text
              style={{
                // marginLeft: hp('2%'),
                color: COLOR.WHITE,
                fontSize: FONT_SIZE.F_16,
                fontFamily: FONT.SEMI_BOLD,
              }}>
              Mars Mahadasha
            </Text>
            <Text
              style={{
                marginLeft: hp('2%'),
                color: COLOR.WHITE,
                fontSize: FONT_SIZE.F_14,
              }}>
              (20-05-1993 -05/03/1993)
            </Text>
          </View>
          <View style={styles.kundaliCard}>
            <Text
              style={{
                color: COLOR.DARK_BLUE,
                fontSize: FONT_SIZE.F_16,
              }}>
              Those born with the Gemini sign are very lively and charming
              personalities. They are the owner of a very active mind and as a
              twin sign, also very open to change. It is a good thing but also
              shady because it prompts their thoughts to wander around and
              rarely stick on one thing. These natives are restless, easily
              bored, and find it tough to concentrate on one thing for a long
              time. Geminis are also very good with manipulation. Most of the
              time, one can't figure out what they are thinking. Thus, people,
              especially their loved ones, struggle to understand them.
              Nevertheless, the Gemini's intellect dominates them and thus when
            </Text>
          </View>
        </View>

        {/* ===================Rahu Mahadasha Dasha TAble=============== */}
        <View>
          <View style={[styles.orangeViewHead, {flexDirection: 'row'}]}>
            <Text
              style={{
                // marginLeft: hp('2%'),
                color: COLOR.WHITE,
                fontSize: FONT_SIZE.F_16,
                fontFamily: FONT.SEMI_BOLD,
              }}>
              Rahu Mahadasha
            </Text>
            <Text
              style={{
                marginLeft: hp('2%'),
                color: COLOR.WHITE,
                fontSize: FONT_SIZE.F_14,
              }}>
              (20-05-1993 -05/03/1993)
            </Text>
          </View>
          <View style={styles.kundaliCard}>
            <Text
              style={{
                color: COLOR.DARK_BLUE,
                fontSize: FONT_SIZE.F_16,
              }}>
              Those born with the Gemini sign are very lively and charming
              personalities. They are the owner of a very active mind and as a
              twin sign, also very open to change. It is a good thing but also
              shady because it prompts their thoughts to wander around and
              rarely stick on one thing. These natives are restless, easily
              bored, and find it tough to concentrate on one thing for a long
              time. Geminis are also very good with manipulation. Most of the
              time, one can't figure out what they are thinking. Thus, people,
              especially their loved ones, struggle to understand them.
              Nevertheless, the Gemini's intellect dominates them and thus when
            </Text>
          </View>
        </View>
        {/* =============Jupiter Mahadasha Dasha Table=========== */}
        <View>
          <View style={[styles.orangeViewHead, {flexDirection: 'row'}]}>
            <Text
              style={{
                // marginLeft: hp('2%'),
                color: COLOR.WHITE,
                fontSize: FONT_SIZE.F_15,
                fontFamily: FONT.SEMI_BOLD,
              }}>
              Jupiter Mahadasha
            </Text>
            <Text
              style={{
                marginLeft: hp('1%'),
                color: COLOR.WHITE,
                fontSize: FONT_SIZE.F_14,
              }}>
              (20-05-1993 -05/03/1993)
            </Text>
          </View>
          <View style={styles.kundaliCard}>
            <Text
              style={{
                color: COLOR.DARK_BLUE,
                fontSize: FONT_SIZE.F_16,
              }}>
              Those born with the Gemini sign are very lively and charming
              personalities. They are the owner of a very active mind and as a
              twin sign, also very open to change. It is a good thing but also
              shady because it prompts their thoughts to wander around and
              rarely stick on one thing. These natives are restless, easily
              bored, and find it tough to concentrate on one thing for a long
              time. Geminis are also very good with manipulation. Most of the
              time, one can't figure out what they are thinking. Thus, people,
              especially their loved ones, struggle to understand them.
              Nevertheless, the Gemini's intellect dominates them and thus when
            </Text>
          </View>
        </View>
        {/* ===============Saturn Mahadasha Dasha TAble ========== */}
        <View>
          <View style={[styles.orangeViewHead, {flexDirection: 'row'}]}>
            <Text
              style={{
                // marginLeft: hp('2%'),
                color: COLOR.WHITE,
                fontSize: FONT_SIZE.F_15,
                fontFamily: FONT.SEMI_BOLD,
              }}>
              Saturn Mahadasha
            </Text>
            <Text
              style={{
                marginLeft: hp('1%'),
                color: COLOR.WHITE,
                fontSize: FONT_SIZE.F_14,
              }}>
              (20-05-1993 -05/03/1993)
            </Text>
          </View>
          <View style={styles.kundaliCard}>
            <Text
              style={{
                color: COLOR.DARK_BLUE,
                fontSize: FONT_SIZE.F_16,
              }}>
              Those born with the Gemini sign are very lively and charming
              personalities. They are the owner of a very active mind and as a
              twin sign, also very open to change. It is a good thing but also
              shady because it prompts their thoughts to wander around and
              rarely stick on one thing. These natives are restless, easily
              bored, and find it tough to concentrate on one thing for a long
              time. Geminis are also very good with manipulation. Most of the
              time, one can't figure out what they are thinking. Thus, people,
              especially their loved ones, struggle to understand them.
              Nevertheless, the Gemini's intellect dominates them and thus when
            </Text>
          </View>
        </View>
        {/* ===========Mercury Mahadasha Dasha TAble ========= */}
        <View>
           <View style={[styles.orangeViewHead, {flexDirection: 'row'}]}>
            <Text
              style={{
                // marginLeft: hp('2%'),
                color: COLOR.WHITE,
                fontSize: FONT_SIZE.F_15,
                fontFamily: FONT.SEMI_BOLD,
              }}>
              Mercury Mahadasha
            </Text>
            <Text
              style={{
                marginLeft: hp('1%'),
                color: COLOR.WHITE,
                fontSize: FONT_SIZE.F_14,
              }}>
              (20-05-1993 -05/03/1993)
            </Text>
          </View>
          <View style={styles.kundaliCard}>
            <Text
              style={{
                color: COLOR.DARK_BLUE,
                fontSize: FONT_SIZE.F_16,
              }}>
              Those born with the Gemini sign are very lively and charming
              personalities. They are the owner of a very active mind and as a
              twin sign, also very open to change. It is a good thing but also
              shady because it prompts their thoughts to wander around and
              rarely stick on one thing. These natives are restless, easily
              bored, and find it tough to concentrate on one thing for a long
              time. Geminis are also very good with manipulation. Most of the
              time, one can't figure out what they are thinking. Thus, people,
              especially their loved ones, struggle to understand them.
              Nevertheless, the Gemini's intellect dominates them and thus when
            </Text>
          </View>
        </View>
        {/* ============ketu Mahadasha Dasha Table========= */}
        <View>
         <View style={[styles.orangeViewHead, {flexDirection: 'row'}]}>
            <Text
              style={{
                // marginLeft: hp('2%'),
                color: COLOR.WHITE,
                fontSize: FONT_SIZE.F_16,
                fontFamily: FONT.SEMI_BOLD,
              }}>
              ketu Mahadasha
            </Text>
            <Text
              style={{
                marginLeft: hp('2%'),
                color: COLOR.WHITE,
                fontSize: FONT_SIZE.F_14,
              }}>
              (20-05-1993 -05/03/1993)
            </Text>
          </View>
          <View style={styles.kundaliCard}>
            <Text
              style={{
                color: COLOR.DARK_BLUE,
                fontSize: FONT_SIZE.F_16,
              }}>
              Those born with the Gemini sign are very lively and charming
              personalities. They are the owner of a very active mind and as a
              twin sign, also very open to change. It is a good thing but also
              shady because it prompts their thoughts to wander around and
              rarely stick on one thing. These natives are restless, easily
              bored, and find it tough to concentrate on one thing for a long
              time. Geminis are also very good with manipulation. Most of the
              time, one can't figure out what they are thinking. Thus, people,
              especially their loved ones, struggle to understand them.
              Nevertheless, the Gemini's intellect dominates them and thus when
            </Text>
          </View>
        </View>
        {/* ============Venus Mahadasha Dasha Table========== */}
        <View>
          <View style={[styles.orangeViewHead, {flexDirection: 'row'}]}>
            <Text
              style={{
                // marginLeft: hp('2%'),
                color: COLOR.WHITE,
                fontSize: FONT_SIZE.F_15,
                fontFamily: FONT.SEMI_BOLD,
              }}>
              Venus Mahadasha
            </Text>
            <Text
              style={{
                marginLeft: hp('1%'),
                color: COLOR.WHITE,
                fontSize: FONT_SIZE.F_14,
              }}>
              (20-05-1993 -05/03/1993)
            </Text>
          </View>
          <View style={styles.kundaliCard}>
            <Text
              style={{
                color: COLOR.DARK_BLUE,
                fontSize: FONT_SIZE.F_16,
              }}>
              Those born with the Gemini sign are very lively and charming
              personalities. They are the owner of a very active mind and as a
              twin sign, also very open to change. It is a good thing but also
              shady because it prompts their thoughts to wander around and
              rarely stick on one thing. These natives are restless, easily
              bored, and find it tough to concentrate on one thing for a long
              time. Geminis are also very good with manipulation. Most of the
              time, one can't figure out what they are thinking. Thus, people,
              especially their loved ones, struggle to understand them.
              Nevertheless, the Gemini's intellect dominates them and thus when
            </Text>
          </View>
        </View>
        {/* ============Sun Mahadasha Dasha Table========== */}
        <View>
          <View style={[styles.orangeViewHead, {flexDirection: 'row'}]}>
            <Text
              style={{
                // marginLeft: hp('2%'),
                color: COLOR.WHITE,
                fontSize: FONT_SIZE.F_16,
                fontFamily: FONT.SEMI_BOLD,
              }}>
              Sun Mahadasha
            </Text>
            <Text
              style={{
                marginLeft: hp('2%'),
                color: COLOR.WHITE,
                fontSize: FONT_SIZE.F_14,
              }}>
              (20-05-1993 -05/03/1993)
            </Text>
          </View>
          <View style={styles.kundaliCard}>
            <Text
              style={{
                color: COLOR.DARK_BLUE,
                fontSize: FONT_SIZE.F_16,
              }}>
              Those born with the Gemini sign are very lively and charming
              personalities. They are the owner of a very active mind and as a
              twin sign, also very open to change. It is a good thing but also
              shady because it prompts their thoughts to wander around and
              rarely stick on one thing. These natives are restless, easily
              bored, and find it tough to concentrate on one thing for a long
              time. Geminis are also very good with manipulation. Most of the
              time, one can't figure out what they are thinking. Thus, people,
              especially their loved ones, struggle to understand them.
              Nevertheless, the Gemini's intellect dominates them and thus when
            </Text>
          </View>
        </View>
        {/* ------------DAHSA TAB & Yogini----------- */}
        <Text
          style={{
            color: COLOR.DARK_BLUE,
            fontSize: FONT_SIZE.F_17,
            // fontWeight: 'bold',
            marginLeft: hp('3%'),
            marginVertical: hp('1%'),
          }}>
          Siddha
        </Text>
        <View style={{marginTop: hp('1.2%')}}>
          <Table
            borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}
            style={{
              width: wp('90%'),
              alignSelf: 'center',
              shadowOpacity: 0.2,
              shadowRadius: 2,
              // Elevation for Android
              elevation: 6,
              borderTopLeftRadius: hp('2.9%'),
            }}>
            <Row
              data={PlanetsHeader}
              style={{
                backgroundColor: COLOR.YELLOW,
                height: hp('7%'),
                alignSelf: 'center',
                borderTopLeftRadius: hp('2%'),
                borderTopRightRadius: hp('2%'),
              }}
              textStyle={styles.text}
            />
            <Rows
              data={Planetsdata}
              textStyle={{color: COLOR.DARK_BLUE, textAlign: 'center'}}
              style={{
                height: hp('6%'),
                backgroundColor: COLOR.WHITE,
                alignSelf: 'center',
              }}
            />
          </Table>
        </View>
        <Text
          style={{
            color: COLOR.DARK_BLUE,
            fontSize: FONT_SIZE.F_17,
            fontWeight: 'bold',
            marginLeft: hp('3%'),
            marginVertical: hp('3%'),
          }}>
          Rashi chart
        </Text>
        {/* ----------kundaliNorth Image */}
        <View style={{alignSelf: 'center', marginTop: hp('1%')}}>
          <Image source={IocalImage.KundaliNorth} />
        </View>
        {/* --------------------Report Tab------------- */}
        <View
          style={{
            marginVertical: hp('2%'),
            width: wp('85%'),
            marginLeft: hp('2.3%'),
            backgroundColor: '#DBDCE5',
            paddingVertical: hp('1%'),
            borderBottomEndRadius: hp('2%'),
            borderTopRightRadius: hp('2%'),
            borderTopLeftRadius: hp('2%'),
            borderBottomStartRadius: hp('2%'),
          }}>
          <FlatList
            data={ReportTab}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{justifyContent: 'center'}}
            renderItem={({item, index}) => {
              const isSelected = index === selectedItemIndex;
              return (
                <View style={{}}>
                  <TouchableOpacity
                    onPress={() => setSelectedItemIndex(index)}
                    style={{
                      backgroundColor: isSelected ? COLOR.YELLOW : COLOR.WHITE,
                      padding: hp('1.8%'),
                      // borderWidth:1,
                      // borderColor:isSelected ?  COLOR.YELLOW: COLOR.DARK_BLUE,
                      borderRadius: hp('2%'),
                      marginLeft: hp('1%'),
                      width: wp('25%'),
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: isSelected ? COLOR.WHITE : COLOR.DARK_BLUE,
                        fontSize: FONT_SIZE.F_14,
                      }}>
                      {item.title}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
        {/* ========== REPORT TAB / General card1======= */}
        <View style={{marginVertical: hp('2%')}}>
          <FlatList
            data={GeneralTab}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{justifyContent: 'center'}}
            renderItem={({item, index}) => {
              const isSelected = index === selectedItemIndex;
              return (
                <View>
                  <TouchableOpacity
                    onPress={() => setSelectedItemIndex(index)}
                    style={{
                      backgroundColor: isSelected ? COLOR.YELLOW : COLOR.WHITE,
                      padding: hp('1%'),
                      borderWidth: 1,
                      borderColor: isSelected ? COLOR.YELLOW : COLOR.DARK_BLUE,
                      borderRadius: hp('6%'),
                      marginLeft: hp('2%'),
                      maxWidth: wp('40%'),
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: isSelected ? COLOR.WHITE : COLOR.DARK_BLUE,
                        fontSize: FONT_SIZE.F_16,
                        fontWeight: '500',
                      }}>
                      {item.title}
                    </Text>
                  </TouchableOpacity>
                  <View
                    style={{
                      borderBottomWidth: 1,
                      borderBottomColor: isSelected
                        ? COLOR.YELLOW
                        : COLOR.ExtLIGHT_GRAY,
                      width: hp('2.0%'),
                      borderBottomWidth: hp('0.2%'),
                      position: 'absolute',
                      top: hp('2.7%'),
                    }}></View>
                </View>
              );
            }}
          />
        </View>
        <View style={styles.orangeViewHead}>
          <Text
            style={{
              marginLeft: hp('2%'),
              color: COLOR.WHITE,
              fontSize: FONT_SIZE.F_17,
              fontFamily: FONT.SEMI_BOLD,
            }}>
            Description
          </Text>
        </View>
        <View style={styles.kundaliCard}>
          <Text
            style={{
              color: COLOR.DARK_BLUE,
              fontSize: FONT_SIZE.F_16,
            }}>
            Those born with the Gemini sign are very lively and charming
            personalities. They are the owner of a very active mind and as a
            twin sign, also very open to change. It is a good thing but also
            shady because it prompts their thoughts to wander around and rarely
            stick on one thing. These natives are restless, easily bored, and
            find it tough to concentrate on one thing for a long time. Geminis
            are also very good with manipulation. Most of the time, one can't
            figure out what they are thinking. Thus, people, especially their
            loved ones, struggle to understand them. Nevertheless, the Gemini's
            intellect dominates them and thus when
          </Text>
        </View>
        {/* ========== REPORT TAB / General card2======= */}
        <View style={styles.orangeViewHead}>
          <Text
            style={{
              marginLeft: hp('2%'),
              color: COLOR.WHITE,
              fontSize: FONT_SIZE.F_17,
              fontFamily: FONT.SEMI_BOLD,
            }}>
            Personality
          </Text>
        </View>
        <View style={styles.kundaliCard}>
          <Text
            style={{
              color: COLOR.DARK_BLUE,
              fontSize: FONT_SIZE.F_16,
            }}>
            Those born with the Gemini sign are very lively and charming
            personalities. They are the owner of a very active mind and as a
            twin sign, also very open to change. It is a good thing but also
            shady because it prompts their thoughts to wander around and rarely
            stick on one thing. These natives are restless, easily bored, and
            find it tough to concentrate on one thing for a long time. Geminis
            are also very good with manipulation. Most of the time, one can't
            figure out what they are thinking. Thus, people, especially their
            loved ones, struggle to understand them. Nevertheless, the Gemini's
            intellect dominates them and thus when
          </Text>
        </View>
        {/* ========== REPORT TAB / General card3======= */}
        <View style={styles.orangeViewHead}>
          <Text
            style={{
              marginLeft: hp('2%'),
              color: COLOR.WHITE,
              fontSize: FONT_SIZE.F_17,
              fontFamily: FONT.SEMI_BOLD,
            }}>
            Physical
          </Text>
        </View>
        <View style={styles.kundaliCard}>
          <Text
            style={{
              color: COLOR.DARK_BLUE,
              fontSize: FONT_SIZE.F_16,
            }}>
            Those born with the Gemini sign are very lively and charming
            personalities. They are the owner of a very active mind and as a
            twin sign, also very open to change. It is a good thing but also
            shady because it prompts their thoughts to wander around and rarely
            stick on one thing. These natives are restless, easily bored, and
            find it tough to concentrate on one thing for a long time. Geminis
            are also very good with manipulation. Most of the time, one can't
            figure out what they are thinking. Thus, people, especially their
            loved ones, struggle to understand them. Nevertheless, the Gemini's
            intellect dominates them and thus when
          </Text>
        </View>
        {/* ========== REPORT TAB / General card4======= */}
        <View style={styles.orangeViewHead}>
          <Text
            style={{
              marginLeft: hp('2%'),
              color: COLOR.WHITE,
              fontSize: FONT_SIZE.F_17,
              fontFamily: FONT.SEMI_BOLD,
            }}>
            health
          </Text>
        </View>
        <View style={styles.kundaliCard}>
          <Text
            style={{
              color: COLOR.DARK_BLUE,
              fontSize: FONT_SIZE.F_16,
            }}>
            Those born with the Gemini sign are very lively and charming
            personalities. They are the owner of a very active mind and as a
            twin sign, also very open to change. It is a good thing but also
            shady because it prompts their thoughts to wander around and rarely
            stick on one thing. These natives are restless, easily bored, and
            find it tough to concentrate on one thing for a long time. Geminis
            are also very good with manipulation. Most of the time, one can't
            figure out what they are thinking. Thus, people, especially their
            loved ones, struggle to understand them. Nevertheless, the Gemini's
            intellect dominates them and thus when
          </Text>
        </View>
        {/* ========== REPORT TAB / General card5======= */}
        <View style={styles.orangeViewHead}>
          <Text
            style={{
              marginLeft: hp('2%'),
              color: COLOR.WHITE,
              fontSize: FONT_SIZE.F_17,
              fontFamily: FONT.SEMI_BOLD,
            }}>
            career
          </Text>
        </View>
        <View style={styles.kundaliCard}>
          <Text
            style={{
              color: COLOR.DARK_BLUE,
              fontSize: FONT_SIZE.F_16,
            }}>
            Those born with the Gemini sign are very lively and charming
            personalities. They are the owner of a very active mind and as a
            twin sign, also very open to change. It is a good thing but also
            shady because it prompts their thoughts to wander around and rarely
            stick on one thing. These natives are restless, easily bored, and
            find it tough to concentrate on one thing for a long time. Geminis
            are also very good with manipulation. Most of the time, one can't
            figure out what they are thinking. Thus, people, especially their
            loved ones, struggle to understand them. Nevertheless, the Gemini's
            intellect dominates them and thus when
          </Text>
        </View>
        {/* ========== REPORT TAB / General card6======= */}
        <View style={styles.orangeViewHead}>
          <Text
            style={{
              marginLeft: hp('2%'),
              color: COLOR.WHITE,
              fontSize: FONT_SIZE.F_17,
              fontFamily: FONT.SEMI_BOLD,
            }}>
            relationship
          </Text>
        </View>
        <View style={styles.kundaliCard}>
          <Text
            style={{
              color: COLOR.DARK_BLUE,
              fontSize: FONT_SIZE.F_16,
            }}>
            Those born with the Gemini sign are very lively and charming
            personalities. They are the owner of a very active mind and as a
            twin sign, also very open to change. It is a good thing but also
            shady because it prompts their thoughts to wander around and rarely
            stick on one thing. These natives are restless, easily bored, and
            find it tough to concentrate on one thing for a long time. Geminis
            are also very good with manipulation. Most of the time, one can't
            figure out what they are thinking. Thus, people, especially their
            loved ones, struggle to understand them. Nevertheless, the Gemini's
            intellect dominates them and thus when
          </Text>
        </View>
        {/* ========== REPORT TAB / Planetary card7======= */}
        <View style={styles.orangeViewHead}>
          <Text
            style={{
              marginLeft: hp('2%'),
              color: COLOR.WHITE,
              fontSize: FONT_SIZE.F_17,
              fontFamily: FONT.SEMI_BOLD,
            }}>
            Sun Consideration
          </Text>
        </View>
        <View style={styles.kundaliCard}>
          <Text
            style={{
              color: COLOR.DARK_BLUE,
              fontSize: FONT_SIZE.F_16,
            }}>
            Those born with the Gemini sign are very lively and charming
            personalities. They are the owner of a very active mind and as a
            twin sign, also very open to change. It is a good thing but also
            shady because it prompts their thoughts to wander around and rarely
            stick on one thing. These natives are restless, easily bored, and
            find it tough to concentrate on one thing for a long time. Geminis
            are also very good with manipulation. Most of the time, one can't
            figure out what they are thinking. Thus, people, especially their
            loved ones, struggle to understand them. Nevertheless, the Gemini's
            intellect dominates them and thus when
          </Text>
        </View>
        {/* ========== REPORT TAB / Planetary card8======= */}
        <View style={styles.orangeViewHead}>
          <Text
            style={{
              marginLeft: hp('2%'),
              color: COLOR.WHITE,
              fontSize: FONT_SIZE.F_17,
              fontFamily: FONT.SEMI_BOLD,
            }}>
            Moon Consideration
          </Text>
        </View>
        <View style={styles.kundaliCard}>
          <Text
            style={{
              color: COLOR.DARK_BLUE,
              fontSize: FONT_SIZE.F_16,
            }}>
            Those born with the Gemini sign are very lively and charming
            personalities. They are the owner of a very active mind and as a
            twin sign, also very open to change. It is a good thing but also
            shady because it prompts their thoughts to wander around and rarely
            stick on one thing. These natives are restless, easily bored, and
            find it tough to concentrate on one thing for a long time. Geminis
            are also very good with manipulation. Most of the time, one can't
            figure out what they are thinking. Thus, people, especially their
            loved ones, struggle to understand them. Nevertheless, the Gemini's
            intellect dominates them and thus when
          </Text>
        </View>
        {/* ========== REPORT TAB / Planetary card9======= */}
        <View style={styles.orangeViewHead}>
          <Text
            style={{
              marginLeft: hp('2%'),
              color: COLOR.WHITE,
              fontSize: FONT_SIZE.F_17,
              fontFamily: FONT.SEMI_BOLD,
            }}>
            Mercury Consideration
          </Text>
        </View>
        <View style={styles.kundaliCard}>
          <Text
            style={{
              color: COLOR.DARK_BLUE,
              fontSize: FONT_SIZE.F_16,
            }}>
            Those born with the Gemini sign are very lively and charming
            personalities. They are the owner of a very active mind and as a
            twin sign, also very open to change. It is a good thing but also
            shady because it prompts their thoughts to wander around and rarely
            stick on one thing. These natives are restless, easily bored, and
            find it tough to concentrate on one thing for a long time. Geminis
            are also very good with manipulation. Most of the time, one can't
            figure out what they are thinking. Thus, people, especially their
            loved ones, struggle to understand them. Nevertheless, the Gemini's
            intellect dominates them and thus when
          </Text>
        </View>
        {/* ========== REPORT TAB / Planetary card10======= */}
        <View style={styles.orangeViewHead}>
          <Text
            style={{
              marginLeft: hp('2%'),
              color: COLOR.WHITE,
              fontSize: FONT_SIZE.F_17,
              fontFamily: FONT.SEMI_BOLD,
            }}>
            Venus Consideration
          </Text>
        </View>
        <View style={styles.kundaliCard}>
          <Text
            style={{
              color: COLOR.DARK_BLUE,
              fontSize: FONT_SIZE.F_16,
            }}>
            Those born with the Gemini sign are very lively and charming
            personalities. They are the owner of a very active mind and as a
            twin sign, also very open to change. It is a good thing but also
            shady because it prompts their thoughts to wander around and rarely
            stick on one thing. These natives are restless, easily bored, and
            find it tough to concentrate on one thing for a long time. Geminis
            are also very good with manipulation. Most of the time, one can't
            figure out what they are thinking. Thus, people, especially their
            loved ones, struggle to understand them. Nevertheless, the Gemini's
            intellect dominates them and thus when
          </Text>
        </View>
        {/* ========== REPORT TAB / Planetary card11======= */}
        <View style={styles.orangeViewHead}>
          <Text
            style={{
              marginLeft: hp('2%'),
              color: COLOR.WHITE,
              fontSize: FONT_SIZE.F_17,
              fontFamily: FONT.SEMI_BOLD,
            }}>
            Mars Consideration
          </Text>
        </View>
        <View style={styles.kundaliCard}>
          <Text
            style={{
              color: COLOR.DARK_BLUE,
              fontSize: FONT_SIZE.F_16,
            }}>
            Those born with the Gemini sign are very lively and charming
            personalities. They are the owner of a very active mind and as a
            twin sign, also very open to change. It is a good thing but also
            shady because it prompts their thoughts to wander around and rarely
            stick on one thing. These natives are restless, easily bored, and
            find it tough to concentrate on one thing for a long time. Geminis
            are also very good with manipulation. Most of the time, one can't
            figure out what they are thinking. Thus, people, especially their
            loved ones, struggle to understand them. Nevertheless, the Gemini's
            intellect dominates them and thus when
          </Text>
        </View>
        {/* ========== REPORT TAB / Planetary card3======= */}
       <View style={styles.orangeViewHead}>
          <Text
            style={{
              marginLeft: hp('2%'),
              color: COLOR.WHITE,
              fontSize: FONT_SIZE.F_17,
              fontFamily: FONT.SEMI_BOLD,
            }}>
            Jupiter Consideration
          </Text>
        </View>
        <View style={styles.kundaliCard}>
          <Text
            style={{
              color: COLOR.DARK_BLUE,
              fontSize: FONT_SIZE.F_16,
            }}>
            Those born with the Gemini sign are very lively and charming
            personalities. They are the owner of a very active mind and as a
            twin sign, also very open to change. It is a good thing but also
            shady because it prompts their thoughts to wander around and rarely
            stick on one thing. These natives are restless, easily bored, and
            find it tough to concentrate on one thing for a long time. Geminis
            are also very good with manipulation. Most of the time, one can't
            figure out what they are thinking. Thus, people, especially their
            loved ones, struggle to understand them. Nevertheless, the Gemini's
            intellect dominates them and thus when
          </Text>
        </View>
        {/* ========== REPORT TAB / Planetary card3======= */}
       <View style={styles.orangeViewHead}>
          <Text
            style={{
              marginLeft: hp('2%'),
              color: COLOR.WHITE,
              fontSize: FONT_SIZE.F_17,
              fontFamily: FONT.SEMI_BOLD,
            }}>
            Saturn Consideration
          </Text>
        </View>
        <View style={styles.kundaliCard}>
          <Text
            style={{
              color: COLOR.DARK_BLUE,
              fontSize: FONT_SIZE.F_16,
            }}>
            Those born with the Gemini sign are very lively and charming
            personalities. They are the owner of a very active mind and as a
            twin sign, also very open to change. It is a good thing but also
            shady because it prompts their thoughts to wander around and rarely
            stick on one thing. These natives are restless, easily bored, and
            find it tough to concentrate on one thing for a long time. Geminis
            are also very good with manipulation. Most of the time, one can't
            figure out what they are thinking. Thus, people, especially their
            loved ones, struggle to understand them. Nevertheless, the Gemini's
            intellect dominates them and thus when
          </Text>
        </View>
        {/* ========== REPORT TAB / Planetary card3======= */}
       <View style={styles.orangeViewHead}>
          <Text
            style={{
              marginLeft: hp('2%'),
              color: COLOR.WHITE,
              fontSize: FONT_SIZE.F_17,
              fontFamily: FONT.SEMI_BOLD,
            }}>
            Rahu Consideration
          </Text>
        </View>
        <View style={styles.kundaliCard}>
          <Text
            style={{
              color: COLOR.DARK_BLUE,
              fontSize: FONT_SIZE.F_16,
            }}>
            Those born with the Gemini sign are very lively and charming
            personalities. They are the owner of a very active mind and as a
            twin sign, also very open to change. It is a good thing but also
            shady because it prompts their thoughts to wander around and rarely
            stick on one thing. These natives are restless, easily bored, and
            find it tough to concentrate on one thing for a long time. Geminis
            are also very good with manipulation. Most of the time, one can't
            figure out what they are thinking. Thus, people, especially their
            loved ones, struggle to understand them. Nevertheless, the Gemini's
            intellect dominates them and thus when
          </Text>
        </View>
        {/* ========== REPORT TAB / Planetary card3======= */}
       <View style={styles.orangeViewHead}>
          <Text
            style={{
              marginLeft: hp('2%'),
              color: COLOR.WHITE,
              fontSize: FONT_SIZE.F_17,
              fontFamily: FONT.SEMI_BOLD,
            }}>
            Ketu Consideration
          </Text>
        </View>
        <View style={styles.kundaliCard}>
          <Text
            style={{
              color: COLOR.DARK_BLUE,
              fontSize: FONT_SIZE.F_16,
            }}>
            Those born with the Gemini sign are very lively and charming
            personalities. They are the owner of a very active mind and as a
            twin sign, also very open to change. It is a good thing but also
            shady because it prompts their thoughts to wander around and rarely
            stick on one thing. These natives are restless, easily bored, and
            find it tough to concentrate on one thing for a long time. Geminis
            are also very good with manipulation. Most of the time, one can't
            figure out what they are thinking. Thus, people, especially their
            loved ones, struggle to understand them. Nevertheless, the Gemini's
            intellect dominates them and thus when
          </Text>
        </View>
        {/* ------------REPORT TAB/Vimshtottari dasha tab card1 -------- */}

        {/* -------- Mars Mahadasha Dasha TAble*/}

        <View>
          <View style={[styles.orangeViewHead, {flexDirection: 'row'}]}>
            <Text
              style={{
                // marginLeft: hp('2%'),
                color: COLOR.WHITE,
                fontSize: FONT_SIZE.F_16,
                fontFamily: FONT.SEMI_BOLD,
              }}>
              Moon Mahadasha
            </Text>
            <Text
              style={{
                marginLeft: hp('2%'),
                color: COLOR.WHITE,
                fontSize: FONT_SIZE.F_14,
              }}>
              (20-05-1993 -05/03/1993)
            </Text>
          </View>
          <View style={styles.kundaliCard}>
            <Text
              style={{
                color: COLOR.DARK_BLUE,
                fontSize: FONT_SIZE.F_16,
              }}>
              Those born with the Gemini sign are very lively and charming
              personalities. They are the owner of a very active mind and as a
              twin sign, also very open to change. It is a good thing but also
              shady because it prompts their thoughts to wander around and
              rarely stick on one thing. These natives are restless, easily
              bored, and find it tough to concentrate on one thing for a long
              time. Geminis are also very good with manipulation. Most of the
              time, one can't figure out what they are thinking. Thus, people,
              especially their loved ones, struggle to understand them.
              Nevertheless, the Gemini's intellect dominates them and thus when
            </Text>
          </View>
        </View>

        {/* -------- Mars Mahadasha Dasha TAble*/}

        <View>
          <View style={[styles.orangeViewHead, {flexDirection: 'row'}]}>
            <Text
              style={{
                // marginLeft: hp('2%'),
                color: COLOR.WHITE,
                fontSize: FONT_SIZE.F_16,
                fontFamily: FONT.SEMI_BOLD,
              }}>
              Mars Mahadasha
            </Text>
            <Text
              style={{
                marginLeft: hp('2%'),
                color: COLOR.WHITE,
                fontSize: FONT_SIZE.F_14,
              }}>
              (20-05-1993 -05/03/1993)
            </Text>
          </View>
          <View style={styles.kundaliCard}>
            <Text
              style={{
                color: COLOR.DARK_BLUE,
                fontSize: FONT_SIZE.F_16,
              }}>
              Those born with the Gemini sign are very lively and charming
              personalities. They are the owner of a very active mind and as a
              twin sign, also very open to change. It is a good thing but also
              shady because it prompts their thoughts to wander around and
              rarely stick on one thing. These natives are restless, easily
              bored, and find it tough to concentrate on one thing for a long
              time. Geminis are also very good with manipulation. Most of the
              time, one can't figure out what they are thinking. Thus, people,
              especially their loved ones, struggle to understand them.
              Nevertheless, the Gemini's intellect dominates them and thus when
            </Text>
          </View>
        </View>

        {/* ===================Rahu Mahadasha Dasha TAble=============== */}
        <View>
          <View style={[styles.orangeViewHead, {flexDirection: 'row'}]}>
            <Text
              style={{
                // marginLeft: hp('2%'),
                color: COLOR.WHITE,
                fontSize: FONT_SIZE.F_16,
                fontFamily: FONT.SEMI_BOLD,
              }}>
              Rahu Mahadasha
            </Text>
            <Text
              style={{
                marginLeft: hp('2%'),
                color: COLOR.WHITE,
                fontSize: FONT_SIZE.F_14,
              }}>
              (20-05-1993 -05/03/1993)
            </Text>
          </View>
          <View style={styles.kundaliCard}>
            <Text
              style={{
                color: COLOR.DARK_BLUE,
                fontSize: FONT_SIZE.F_16,
              }}>
              Those born with the Gemini sign are very lively and charming
              personalities. They are the owner of a very active mind and as a
              twin sign, also very open to change. It is a good thing but also
              shady because it prompts their thoughts to wander around and
              rarely stick on one thing. These natives are restless, easily
              bored, and find it tough to concentrate on one thing for a long
              time. Geminis are also very good with manipulation. Most of the
              time, one can't figure out what they are thinking. Thus, people,
              especially their loved ones, struggle to understand them.
              Nevertheless, the Gemini's intellect dominates them and thus when
            </Text>
          </View>
        </View>
        {/* =============Jupiter Mahadasha Dasha Table=========== */}
        <View>
          <View style={[styles.orangeViewHead, {flexDirection: 'row'}]}>
            <Text
              style={{
                // marginLeft: hp('2%'),
                color: COLOR.WHITE,
                fontSize: FONT_SIZE.F_15,
                fontFamily: FONT.SEMI_BOLD,
              }}>
              Jupiter Mahadasha
            </Text>
            <Text
              style={{
                marginLeft: hp('1%'),
                color: COLOR.WHITE,
                fontSize: FONT_SIZE.F_14,
              }}>
              (20-05-1993 -05/03/1993)
            </Text>
          </View>
          <View style={styles.kundaliCard}>
            <Text
              style={{
                color: COLOR.DARK_BLUE,
                fontSize: FONT_SIZE.F_16,
              }}>
              Those born with the Gemini sign are very lively and charming
              personalities. They are the owner of a very active mind and as a
              twin sign, also very open to change. It is a good thing but also
              shady because it prompts their thoughts to wander around and
              rarely stick on one thing. These natives are restless, easily
              bored, and find it tough to concentrate on one thing for a long
              time. Geminis are also very good with manipulation. Most of the
              time, one can't figure out what they are thinking. Thus, people,
              especially their loved ones, struggle to understand them.
              Nevertheless, the Gemini's intellect dominates them and thus when
            </Text>
          </View>
        </View>
        {/* ===============Saturn Mahadasha Dasha TAble ========== */}
        <View>
          <View style={[styles.orangeViewHead, {flexDirection: 'row'}]}>
            <Text
              style={{
                // marginLeft: hp('2%'),
                color: COLOR.WHITE,
                fontSize: FONT_SIZE.F_15,
                fontFamily: FONT.SEMI_BOLD,
              }}>
              Saturn Mahadasha
            </Text>
            <Text
              style={{
                marginLeft: hp('1%'),
                color: COLOR.WHITE,
                fontSize: FONT_SIZE.F_14,
              }}>
              (20-05-1993 -05/03/1993)
            </Text>
          </View>
          <View style={styles.kundaliCard}>
            <Text
              style={{
                color: COLOR.DARK_BLUE,
                fontSize: FONT_SIZE.F_16,
              }}>
              Those born with the Gemini sign are very lively and charming
              personalities. They are the owner of a very active mind and as a
              twin sign, also very open to change. It is a good thing but also
              shady because it prompts their thoughts to wander around and
              rarely stick on one thing. These natives are restless, easily
              bored, and find it tough to concentrate on one thing for a long
              time. Geminis are also very good with manipulation. Most of the
              time, one can't figure out what they are thinking. Thus, people,
              especially their loved ones, struggle to understand them.
              Nevertheless, the Gemini's intellect dominates them and thus when
            </Text>
          </View>
        </View>
        {/* ===========Mercury Mahadasha Dasha TAble ========= */}
        <View>
          <View style={[styles.orangeViewHead, {flexDirection: 'row'}]}>
            <Text
              style={{
                // marginLeft: hp('2%'),
                color: COLOR.WHITE,
                fontSize: FONT_SIZE.F_15,
                fontFamily: FONT.SEMI_BOLD,
              }}>
              Mercury Mahadasha
            </Text>
            <Text
              style={{
                marginLeft: hp('1%'),
                color: COLOR.WHITE,
                fontSize: FONT_SIZE.F_14,
              }}>
              (20-05-1993 -05/03/1993)
            </Text>
          </View>
          <View style={styles.kundaliCard}>
            <Text
              style={{
                color: COLOR.DARK_BLUE,
                fontSize: FONT_SIZE.F_16,
              }}>
              Those born with the Gemini sign are very lively and charming
              personalities. They are the owner of a very active mind and as a
              twin sign, also very open to change. It is a good thing but also
              shady because it prompts their thoughts to wander around and
              rarely stick on one thing. These natives are restless, easily
              bored, and find it tough to concentrate on one thing for a long
              time. Geminis are also very good with manipulation. Most of the
              time, one can't figure out what they are thinking. Thus, people,
              especially their loved ones, struggle to understand them.
              Nevertheless, the Gemini's intellect dominates them and thus when
            </Text>
          </View>
        </View>
        {/* ============ketu Mahadasha Dasha Table========= */}
        <View>
        <View style={[styles.orangeViewHead, {flexDirection: 'row'}]}>
            <Text
              style={{
                // marginLeft: hp('2%'),
                color: COLOR.WHITE,
                fontSize: FONT_SIZE.F_16,
                fontFamily: FONT.SEMI_BOLD,
              }}>
              ketu Mahadasha
            </Text>
            <Text
              style={{
                marginLeft: hp('2%'),
                color: COLOR.WHITE,
                fontSize: FONT_SIZE.F_14,
              }}>
              (20-05-1993 -05/03/1993)
            </Text>
          </View>
          <View style={styles.kundaliCard}>
            <Text
              style={{
                color: COLOR.DARK_BLUE,
                fontSize: FONT_SIZE.F_16,
              }}>
              Those born with the Gemini sign are very lively and charming
              personalities. They are the owner of a very active mind and as a
              twin sign, also very open to change. It is a good thing but also
              shady because it prompts their thoughts to wander around and
              rarely stick on one thing. These natives are restless, easily
              bored, and find it tough to concentrate on one thing for a long
              time. Geminis are also very good with manipulation. Most of the
              time, one can't figure out what they are thinking. Thus, people,
              especially their loved ones, struggle to understand them.
              Nevertheless, the Gemini's intellect dominates them and thus when
            </Text>
          </View>
        </View>
        {/* ============Venus Mahadasha Dasha Table========== */}
        <View>
           <View style={[styles.orangeViewHead, {flexDirection: 'row'}]}>
            <Text
              style={{
                // marginLeft: hp('2%'),
                color: COLOR.WHITE,
                fontSize: FONT_SIZE.F_15,
                fontFamily: FONT.SEMI_BOLD,
              }}>
              Venus Mahadasha
            </Text>
            <Text
              style={{
                marginLeft: hp('1%'),
                color: COLOR.WHITE,
                fontSize: FONT_SIZE.F_14,
              }}>
              (20-05-1993 -05/03/1993)
            </Text>
          </View>
          <View style={styles.kundaliCard}>
            <Text
              style={{
                color: COLOR.DARK_BLUE,
                fontSize: FONT_SIZE.F_16,
              }}>
              Those born with the Gemini sign are very lively and charming
              personalities. They are the owner of a very active mind and as a
              twin sign, also very open to change. It is a good thing but also
              shady because it prompts their thoughts to wander around and
              rarely stick on one thing. These natives are restless, easily
              bored, and find it tough to concentrate on one thing for a long
              time. Geminis are also very good with manipulation. Most of the
              time, one can't figure out what they are thinking. Thus, people,
              especially their loved ones, struggle to understand them.
              Nevertheless, the Gemini's intellect dominates them and thus when
            </Text>
          </View>
        </View>
        {/* ============Sun Mahadasha Dasha Table========== */}
        <View>
           <View style={[styles.orangeViewHead, {flexDirection: 'row'}]}>
            <Text
              style={{
                // marginLeft: hp('2%'),
                color: COLOR.WHITE,
                fontSize: FONT_SIZE.F_15,
                fontFamily: FONT.SEMI_BOLD,
              }}>
              Sun Mahadasha
            </Text>
            <Text
              style={{
                marginLeft: hp('1%'),
                color: COLOR.WHITE,
                fontSize: FONT_SIZE.F_14,
              }}>
              (20-05-1993 -05/03/1993)
            </Text>
          </View>
          <View style={styles.kundaliCard}>
            <Text
              style={{
                color: COLOR.DARK_BLUE,
                fontSize: FONT_SIZE.F_16,
              }}>
              Those born with the Gemini sign are very lively and charming
              personalities. They are the owner of a very active mind and as a
              twin sign, also very open to change. It is a good thing but also
              shady because it prompts their thoughts to wander around and
              rarely stick on one thing. These natives are restless, easily
              bored, and find it tough to concentrate on one thing for a long
              time. Geminis are also very good with manipulation. Most of the
              time, one can't figure out what they are thinking. Thus, people,
              especially their loved ones, struggle to understand them.
              Nevertheless, the Gemini's intellect dominates them and thus when
            </Text>
          </View>
        </View>
        {/* ===============REPORT TAB /General/YogaTAB CARD1========== */}
       <View style={styles.orangeViewHead}>
          <Text
            style={{
              marginLeft: hp('2%'),
              color: COLOR.WHITE,
              fontSize: FONT_SIZE.F_19,
              fontFamily: FONT.SEMI_BOLD,
            }}>
            Gajakesari Yoga
          </Text>
        </View>
        <View style={styles.kundaliCard}>
          <Text
            style={{
              fontWeight: 'bold',
              color: COLOR.DARK_BLUE,
              fontSize: FONT_SIZE.F_16,
            }}>
            Jupiter in kendra from moon
          </Text>
          <Text
            style={{
              color: COLOR.DARK_BLUE,
              fontSize: FONT_SIZE.F_16,
              marginTop: hp('1%'),
            }}>
            Ascendant is one of the most sought concepts in astrology when it
            comes to predicting the minute events in your life. At the time of
            birth, the sign that rises in the sky is the person's ascendant. It
            helps in making predictions about the minute events, unlike your
            Moon or Sun sign that help in making weekly, monthly or yearly
            predictions for you. Your ascendant is Gemini
          </Text>
        </View>
        {/* ===============REPORT TAB /General/YogaTAB CARD2========== */}
       <View style={styles.orangeViewHead}>
          <Text
            style={{
              marginLeft: hp('2%'),
              color: COLOR.WHITE,
              fontSize: FONT_SIZE.F_19,
              fontFamily: FONT.SEMI_BOLD,
            }}>
            Sunapha yoga
          </Text>
        </View>
        <View style={styles.kundaliCard}>
          <Text
            style={{
              fontWeight: 'bold',
              color: COLOR.DARK_BLUE,
              fontSize: FONT_SIZE.F_16,
            }}>
            Any plnets,except Sun in the second house from the moon
          </Text>
          <Text
            style={{
              color: COLOR.DARK_BLUE,
              fontSize: FONT_SIZE.F_16,
              marginTop: hp('1%'),
            }}>
            Ascendant is one of the most sought concepts in astrology when it
            comes to predicting the minute events in your life. At the time of
            birth, the sign that rises in the sky is the person's ascendant. It
            helps in making predictions about the minute events, unlike your
            Moon or Sun sign that help in making weekly, monthly or yearly
            predictions for you. Your ascendant is Gemini
          </Text>
        </View>
        {/* ===============REPORT TAB /General/YogaTAB CARD3========== */}
       <View style={styles.orangeViewHead}>
          <Text
            style={{
              marginLeft: hp('2%'),
              color: COLOR.WHITE,
              fontSize: FONT_SIZE.F_19,
              fontFamily: FONT.SEMI_BOLD,
            }}>
            Vasumathi yoga
          </Text>
        </View>
        <View style={styles.kundaliCard}>
          <Text
            style={{
              fontWeight: 'bold',
              color: COLOR.DARK_BLUE,
              fontSize: FONT_SIZE.F_16,
            }}>
            Benefics occupy the uachayas 3, 6, 10, Or 11 either from the
            ascendant or from the moon
          </Text>
          <Text
            style={{
              color: COLOR.DARK_BLUE,
              fontSize: FONT_SIZE.F_16,
              marginTop: hp('1%'),
            }}>
            Ascendant is one of the most sought concepts in astrology when it
            comes to predicting the minute events in your life. At the time of
            birth, the sign that rises in the sky is the person's ascendant. It
            helps in making predictions about the minute events, unlike your
            Moon or Sun sign that help in making weekly, monthly or yearly
            predictions for you. Your ascendant is Gemini
          </Text>
        </View>
        {/* ===============REPORT TAB /General/YogaTAB CARD4========== */}
       <View style={styles.orangeViewHead}>
          <Text
            style={{
              marginLeft: hp('2%'),
              color: COLOR.WHITE,
              fontSize: FONT_SIZE.F_19,
              fontFamily: FONT.SEMI_BOLD,
            }}>
            Vasi yoga
          </Text>
        </View>
        <View style={styles.kundaliCard}>
          <Text
            style={{
              fontWeight: 'bold',
              color: COLOR.DARK_BLUE,
              fontSize: FONT_SIZE.F_16,
            }}>
            planets other than moon occupy 2nd position from sun
          </Text>
          <Text
            style={{
              color: COLOR.DARK_BLUE,
              fontSize: FONT_SIZE.F_16,
              marginTop: hp('1%'),
            }}>
            Ascendant is one of the most sought concepts in astrology when it
            comes to predicting the minute events in your life. At the time of
            birth, the sign that rises in the sky is the person's ascendant. It
            helps in making predictions about the minute events, unlike your
            Moon or Sun sign that help in making weekly, monthly or yearly
            predictions for you. Your ascendant is Gemini
          </Text>
        </View>
        {/* ===============REPORT TAB /General/YogaTAB CARD5========== */}
       <View style={styles.orangeViewHead}>
          <Text
            style={{
              marginLeft: hp('2%'),
              color: COLOR.WHITE,
              fontSize: FONT_SIZE.F_19,
              fontFamily: FONT.SEMI_BOLD,
            }}>
            Budha-aditya yoga
          </Text>
        </View>
        <View style={styles.kundaliCard}>
          <Text
            style={{
              fontWeight: 'bold',
              color: COLOR.DARK_BLUE,
              fontSize: FONT_SIZE.F_16,
            }}>
            Mericury combines with the Sun.
          </Text>
          <Text
            style={{
              color: COLOR.DARK_BLUE,
              fontSize: FONT_SIZE.F_16,
              marginTop: hp('1%'),
            }}>
            Ascendant is one of the most sought concepts in astrology when it
            comes to predicting the minute events in your life. At the time of
            birth, the sign that rises in the sky is the person's ascendant. It
            helps in making predictions about the minute events, unlike your
            Moon or Sun sign that help in making weekly, monthly or yearly
            predictions for you. Your ascendant is Gemini
          </Text>
        </View>
        {/* ===============REPORT TAB /General/YogaTAB CARD6========== */}
       <View style={styles.orangeViewHead}>
          <Text
            style={{
              marginLeft: hp('2%'),
              color: COLOR.WHITE,
              fontSize: FONT_SIZE.F_19,
              fontFamily: FONT.SEMI_BOLD,
            }}>
            Sankha yoga
          </Text>
        </View>
        <View style={styles.kundaliCard}>
          <Text
            style={{
              fontWeight: 'bold',
              color: COLOR.DARK_BLUE,
              fontSize: FONT_SIZE.F_16,
            }}>
            Lords of 5th and 6th house in mutual kendras and of lagna is
            powerfull
          </Text>
          <Text
            style={{
              color: COLOR.DARK_BLUE,
              fontSize: FONT_SIZE.F_16,
              marginTop: hp('1%'),
            }}>
            Ascendant is one of the most sought concepts in astrology when it
            comes to predicting the minute events in your life. At the time of
            birth, the sign that rises in the sky is the person's ascendant. It
            helps in making predictions about the minute events, unlike your
            Moon or Sun sign that help in making weekly, monthly or yearly
            predictions for you. Your ascendant is Gemini
          </Text>
        </View>
        {/* ===============REPORT TAB /General/YogaTAB CARD7========== */}
       <View style={styles.orangeViewHead}>
          <Text
            style={{
              marginLeft: hp('2%'),
              color: COLOR.WHITE,
              fontSize: FONT_SIZE.F_19,
              fontFamily: FONT.SEMI_BOLD,
            }}>
            Kahala yoga
          </Text>
        </View>
        <View style={styles.kundaliCard}>
          <Text
            style={{
              fontWeight: 'bold',
              color: COLOR.DARK_BLUE,
              fontSize: FONT_SIZE.F_16,
            }}>
            Lords of foirth and innth houses in kendras from each other
          </Text>
          <Text
            style={{
              color: COLOR.DARK_BLUE,
              fontSize: FONT_SIZE.F_16,
              marginTop: hp('1%'),
            }}>
            Ascendant is one of the most sought concepts in astrology when it
            comes to predicting the minute events in your life. At the time of
            birth, the sign that rises in the sky is the person's ascendant. It
            helps in making predictions about the minute events, unlike your
            Moon or Sun sign that help in making weekly, monthly or yearly
            predictions for you. Your ascendant is Gemini
          </Text>
        </View>
        {/* -------------REPORTTAB/Remedies/Rudraksha CARD1------- */}
        <View style={{marginVertical: hp('2%')}}>
          <FlatList
            data={RudrakshaTab}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{justifyContent: 'center'}}
            renderItem={({item, index}) => {
              const isSelected = index === selectedItemIndex;
              return (
                <View>
                  <TouchableOpacity
                    onPress={() => setSelectedItemIndex(index)}
                    style={{
                      backgroundColor: isSelected ? COLOR.YELLOW : COLOR.WHITE,
                      width: wp('20%'),
                      padding: hp('1%'),
                      borderWidth: 1,
                      borderColor: isSelected ? COLOR.YELLOW : COLOR.DARK_BLUE,
                      borderRadius: hp('6%'),
                      marginLeft: hp('2%'),
                      width: wp('33%'),
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: isSelected ? COLOR.WHITE : COLOR.DARK_BLUE,
                        fontSize: FONT_SIZE.F_16,
                        fontWeight: '500',
                      }}>
                      {item.title}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
       <View style={styles.orangeViewHead}>
          <Text
            style={{
              marginLeft: hp('2%'),
              color: COLOR.WHITE,
              fontSize: FONT_SIZE.F_19,
              fontFamily: FONT.SEMI_BOLD,
            }}>
            Rudraksha Suggestion Report
          </Text>
        </View>
        <View style={styles.kundaliCard}>
          <Text
            style={{
              color: COLOR.DARK_BLUE,
              fontSize: FONT_SIZE.F_16,
              marginTop: hp('1%'),
            }}>
            Ascendant is one of the most sought concepts in astrology when it
            comes to predicting the minute events in your life. At the time of
            birth, the sign that rises in the sky is the person's ascendant. It
            helps in making predictions about the minute events, unlike your
            Moon or Sun sign that help in making weekly, monthly or yearly
            predictions for you. Your ascendant is Gemini
          </Text>
        </View>
        {/* -------------REPORTTAB/Remedies/Rudraksha CARD2------- */}
       <View style={styles.orangeViewHead}>
          <Text
            style={{
              marginLeft: hp('2%'),
              color: COLOR.WHITE,
              fontSize: FONT_SIZE.F_19,
              fontFamily: FONT.SEMI_BOLD,
            }}>
            Recommendation
          </Text>
        </View>
        <View style={styles.kundaliCard}>
          <Text
            style={{
              color: COLOR.DARK_BLUE,
              fontSize: FONT_SIZE.F_16,
              marginTop: hp('1%'),
            }}>
            Ascendant is one of the most sought concepts in astrology when it
            comes to predicting the minute events in your life. At the time of
            birth, the sign that rises in the sky is the person's ascendant. It
            helps in making predictions about the minute events, unlike your
            Moon or Sun sign that help in making weekly, monthly or yearly
            predictions for you. Your ascendant is Gemini
          </Text>
        </View>
        {/* -------------REPORTTAB/Remedies/Rudraksha/2-Mukhi CARD1------- */}
        <View style={{marginVertical: hp('2%')}}>
          <FlatList
            data={MukhiTab}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{justifyContent: 'center'}}
            renderItem={({item, index}) => {
              const isSelected = index === selectedItemIndex;
              return (
                <View>
                  <TouchableOpacity
                    onPress={() => setSelectedItemIndex(index)}
                    style={{
                      backgroundColor: isSelected ? COLOR.YELLOW : COLOR.WHITE,
                      width: wp('20%'),
                      padding: hp('1%'),
                      borderWidth: 1,
                      borderColor: isSelected ? COLOR.YELLOW : COLOR.DARK_BLUE,
                      borderRadius: hp('6%'),
                      marginLeft: hp('2%'),
                      width: wp('33%'),
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: isSelected ? COLOR.WHITE : COLOR.DARK_BLUE,
                        fontSize: FONT_SIZE.F_16,
                        fontWeight: '500',
                      }}>
                      {item.title}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
       <View style={styles.orangeViewHead}>
          <Text
            style={{
              marginLeft: hp('2%'),
              color: COLOR.WHITE,
              fontSize: FONT_SIZE.F_19,
              fontFamily: FONT.SEMI_BOLD,
            }}>
            Details
          </Text>
        </View>
        <View style={styles.kundaliCard}>
          <Text
            style={{
              color: COLOR.DARK_BLUE,
              fontSize: FONT_SIZE.F_16,
              marginTop: hp('1%'),
            }}>
            Ascendant is one of the most sought concepts in astrology when it
            comes to predicting the minute events in your life. At the time of
            birth, the sign that rises in the sky is the person's ascendant. It
            helps in making predictions about the minute events, unlike your
            Moon or Sun sign that help in making weekly, monthly or yearly
            predictions for you. Your ascendant is Gemini
          </Text>
        </View>
        {/* -------------REPORTTAB/Remedies/Rudraksha/2-Mukhi CARD2------- */}
       <View style={styles.orangeViewHead}>
          <Text
            style={{
              marginLeft: hp('2%'),
              color: COLOR.WHITE,
              fontSize: FONT_SIZE.F_19,
              fontFamily: FONT.SEMI_BOLD,
            }}>
            Benefits
          </Text>
        </View>
        <View style={styles.kundaliCard}>
          <Text
            style={{
              color: COLOR.DARK_BLUE,
              fontSize: FONT_SIZE.F_16,
              marginTop: hp('1%'),
            }}>
            Ascendant is one of the most sought concepts in astrology when it
            comes to predicting the minute events in your life. At the time of
            birth, the sign that rises in the sky is the person's ascendant. It
            helps in making predictions about the minute events, unlike your
            Moon or Sun sign that help in making weekly, monthly or yearly
            predictions for you. Your ascendant is Gemini
          </Text>
        </View>
        {/* -------------REPORTTAB/Remedies/Rudraksha/2-Mukhi CARD3------- */}
       <View style={styles.orangeViewHead}>
          <Text
            style={{
              marginLeft: hp('2%'),
              color: COLOR.WHITE,
              fontSize: FONT_SIZE.F_19,
              fontFamily: FONT.SEMI_BOLD,
            }}>
            How to wear
          </Text>
        </View>
        <View style={styles.kundaliCard}>
          <Text
            style={{
              color: COLOR.DARK_BLUE,
              fontSize: FONT_SIZE.F_16,
              marginTop: hp('1%'),
            }}>
            Ascendant is one of the most sought concepts in astrology when it
            comes to predicting the minute events in your life. At the time of
            birth, the sign that rises in the sky is the person's ascendant. It
            helps in making predictions about the minute events, unlike your
            Moon or Sun sign that help in making weekly, monthly or yearly
            predictions for you. Your ascendant is Gemini
          </Text>
        </View>
        {/* -------------REPORTTAB/Remedies/Rudraksha/2-Mukhi CARD4------- */}
       <View style={styles.orangeViewHead}>
          <Text
            style={{
              marginLeft: hp('2%'),
              color: COLOR.WHITE,
              fontSize: FONT_SIZE.F_19,
              fontFamily: FONT.SEMI_BOLD,
            }}>
            Precaution
          </Text>
        </View>
        <View style={styles.kundaliCard}>
          <Text
            style={{
              color: COLOR.DARK_BLUE,
              fontSize: FONT_SIZE.F_16,
              marginTop: hp('1%'),
            }}>
            Ascendant is one of the most sought concepts in astrology when it
            comes to predicting the minute events in your life. At the time of
            birth, the sign that rises in the sky is the person's ascendant. It
            helps in making predictions about the minute events, unlike your
            Moon or Sun sign that help in making weekly, monthly or yearly
            predictions for you. Your ascendant is Gemini
          </Text>
        </View>

        {/* ========REPORTTAB/Remedies/Gemstones CARD1========= */}
        <Text
          style={{
            color: COLOR.DARK_BLUE,
            fontSize: FONT_SIZE.F_17,
            fontWeight: 'bold',
            marginLeft: hp('5%'),
            marginVertical: hp('2%'),
          }}>
          Life Stone
        </Text>
        <View style={styles.orangeViewHead}>
          <Text
            style={{
              marginLeft: hp('1%'),
              color: COLOR.WHITE,
              fontSize: FONT_SIZE.F_16,
              fontFamily: FONT.SEMI_BOLD,
            }}>
            Life Stone for Gemini ( Mithun Lagna)
          </Text>
        </View>
        <View style={styles.kundaliCard}>
          <Text
            style={{
              color: COLOR.DARK_BLUE,
              fontSize: FONT_SIZE.F_16,
              marginTop: hp('1%'),
            }}>
            Ascendant is one of the most sought concepts in astrology when it
            comes to predicting the minute events in your life. At the time of
            birth, the sign that rises in the sky is the person's ascendant. It
            helps in making predictions about the minute events, unlike your
            Moon or Sun sign that help in making weekly, monthly or yearly
            predictions for you. Your ascendant is Gemini
          </Text>
          <View
            style={{
              borderColor: '#E2DBDB',
              borderWidth: 1,
              borderRadius: 10,
              flexDirection: 'row',
            }}>
            <View style={{width: wp('40%')}}>
              <Text
                style={{
                  fontSize: FONT_SIZE.F_16,
                  padding: hp('2%'),
                  color: COLOR.DARK_BLUE,
                }}>
                Life Stone for Gemini
              </Text>
              <Text
                style={{
                  fontSize: FONT_SIZE.F_16,
                  padding: hp('2%'),
                  color: COLOR.DARK_BLUE,
                }}>
                How to wear
              </Text>
              <Text
                style={{
                  fontSize: FONT_SIZE.F_16,
                  padding: hp('2%'),
                  color: COLOR.DARK_BLUE,
                }}>
                Mamtra
              </Text>
            </View>
            <View style={{width: wp('40%')}}>
              <Text
                style={{
                  fontSize: FONT_SIZE.F_16,
                  padding: hp('2%'),
                  color: COLOR.DARK_BLUE,
                }}>
                Emerald ( Panna)
              </Text>
              <Text
                style={{
                  fontSize: FONT_SIZE.F_16,
                  padding: hp('2%'),
                  color: COLOR.DARK_BLUE,
                }}>
                Gold, in ring or little finger
              </Text>
              <Text
                style={{
                  fontSize: FONT_SIZE.F_16,
                  padding: hp('2%'),
                  color: COLOR.DARK_BLUE,
                }}>
                Om bram brim braum{' '}
              </Text>
            </View>
          </View>
        </View>
        {/* ========REPORTTAB/Remedies/Gemstones CARD2========= */}
        <Text
          style={{
            color: COLOR.DARK_BLUE,
            fontSize: FONT_SIZE.F_17,
            fontWeight: 'bold',
            marginLeft: hp('5%'),
            marginVertical: hp('2%'),
          }}>
          Fortune Stone
        </Text>
        <View style={styles.orangeViewHead}>
          <Text
            style={{
              marginLeft: hp('1%'),
              color: COLOR.WHITE,
              fontSize: FONT_SIZE.F_16,
              fontFamily: FONT.SEMI_BOLD,
            }}>
            Fortune Stone for Gemini (mithun)
          </Text>
        </View>
        <View style={styles.kundaliCard}>
          <Text
            style={{
              color: COLOR.DARK_BLUE,
              fontSize: FONT_SIZE.F_16,
              marginTop: hp('1%'),
            }}>
            Ascendant is one of the most sought concepts in astrology when it
            comes to predicting the minute events in your life. At the time of
            birth, the sign that rises in the sky is the person's ascendant. It
            helps in making predictions about the minute events, unlike your
            Moon or Sun sign that help in making weekly, monthly or yearly
            predictions for you. Your ascendant is Gemini
          </Text>
          <View
            style={{
              borderColor: '#E2DBDB',
              borderWidth: 1,
              borderRadius: 10,
              flexDirection: 'row',
            }}>
            <View style={{width: wp('40%')}}>
              <Text
                style={{
                  fontSize: FONT_SIZE.F_16,
                  padding: hp('2%'),
                  color: COLOR.DARK_BLUE,
                }}>
                Fortune Stone for Gemini
              </Text>
              <Text
                style={{
                  fontSize: FONT_SIZE.F_16,
                  padding: hp('2%'),
                  color: COLOR.DARK_BLUE,
                }}>
                How to wear
              </Text>
              <Text
                style={{
                  fontSize: FONT_SIZE.F_16,
                  padding: hp('2%'),
                  color: COLOR.DARK_BLUE,
                }}>
                Mamtra
              </Text>
            </View>
            <View style={{width: wp('40%')}}>
              <Text
                style={{
                  fontSize: FONT_SIZE.F_16,
                  padding: hp('2%'),
                  color: COLOR.DARK_BLUE,
                }}>
                Blue Sapphire (Neelam)
              </Text>
              <Text
                style={{
                  fontSize: FONT_SIZE.F_16,
                  padding: hp('2%'),
                  color: COLOR.DARK_BLUE,
                }}>
                Gold, in ring or little finger
              </Text>
              <Text
                style={{
                  fontSize: FONT_SIZE.F_16,
                  padding: hp('2%'),
                  color: COLOR.DARK_BLUE,
                }}>
                Om bram brim braum sah budhaya namah{' '}
              </Text>
            </View>
          </View>
        </View>

        {/* =========== REPORT/DASHA/ManglikTab==========*/}
        <View style={{marginVertical: hp('2%')}}>
          <FlatList
            data={ManglikTab}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{justifyContent: 'center'}}
            renderItem={({item, index}) => {
              const isSelected = index === selectedItemIndex;
              return (
                <View>
                  <TouchableOpacity
                    onPress={() => setSelectedItemIndex(index)}
                    style={{
                      backgroundColor: isSelected ? COLOR.YELLOW : COLOR.WHITE,
                      minWidth: wp('25%'),
                      padding: hp('1%'),
                      borderWidth: 1,
                      borderColor: isSelected ? COLOR.YELLOW : COLOR.DARK_BLUE,
                      borderRadius: hp('6%'),
                      marginLeft: hp('2%'),
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: isSelected ? COLOR.WHITE : COLOR.DARK_BLUE,
                        fontSize: FONT_SIZE.F_16,
                        fontWeight: '500',
                      }}>
                      {item.title}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
        <Text
          style={{
            color: COLOR.DARK_BLUE,
            fontSize: FONT_SIZE.F_17,
            fontWeight: 'bold',
            marginLeft: hp('3%'),
            marginVertical: hp('3%'),
          }}>
          Manglik Analysis
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: hp('2%'),
            backgroundColor: COLOR.WHITE,
            padding: hp('1%'),
            maxWidth: wp('83%'),
            borderRadius: 10,
            shadowOpacity: 0.2,
            shadowRadius: 2,
            // Elevation for Android
            elevation: 3,
          }}>
          <Image source={IocalImage.Avtar} style={{marginTop: hp('1%')}} />
          <Text
            style={{
              color: COLOR.DARK_BLUE,
              fontSize: FONT_SIZE.F_17,
              fontWeight: 'bold',
              marginLeft: hp('2%'),
            }}>
            Rahul vish
          </Text>

          <Text
            style={{
              color: COLOR.LIGHT_GRAY,
              fontSize: FONT_SIZE.F_14,
              marginTop: hp('4%'),
              marginLeft: hp('-11%'),
              maxWidth: wp('60%'),
            }}>
            Those born with the Gemini sign are very lively and charming
            personalities.
          </Text>
        </View>
        <Text
          style={{
            color: COLOR.GRAY,
            fontSize: FONT_SIZE.F_16,
            maxWidth: wp('90%'),
            marginLeft: hp('2%'),
            marginTop: hp('3%'),
          }}>
          Those born with the Gemini sign are very lively and charming
          personalities.
        </Text>

        <View
          style={{
            flexDirection: 'row',
            marginLeft: hp('2%'),
            backgroundColor: COLOR.WHITE,
            padding: hp('2%'),
            maxWidth: wp('85%'),
            borderRadius: 10,
            shadowOpacity: 0.2,
            shadowRadius: 2,
            elevation: 6,
            marginTop: hp('2%'),
          }}>
          <Image source={IocalImage.Avtar} style={{marginTop: hp('0.9%')}} />
          <Text
            style={{
              textAlignVertical: 'center',
              color: COLOR.DARK_BLUE,
              fontSize: FONT_SIZE.F_16,
              marginLeft: hp('1%'),
              // marginTop:hp('0.9%')
            }}>
            Kundali is free from kalsharpa sosha.
          </Text>
        </View>
        <Text
          style={{
            color: COLOR.DARK_BLUE,
            fontSize: FONT_SIZE.F_17,
            fontWeight: 'bold',
            marginLeft: hp('3%'),
            marginVertical: hp('3%'),
          }}>
          Manglik Analysis
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: hp('2%'),
            backgroundColor: COLOR.WHITE,
            padding: hp('1%'),
            maxWidth: wp('83%'),
            borderRadius: 10,
            shadowOpacity: 0.2,
            shadowRadius: 2,
            // Elevation for Android
            elevation: 3,
          }}>
          <Image source={IocalImage.Avtar} style={{marginTop: hp('1%')}} />
          <Text
            style={{
              color: COLOR.DARK_BLUE,
              fontSize: FONT_SIZE.F_17,
              fontWeight: 'bold',
              marginLeft: hp('4%'),
            }}>
            Current Sadesati Status
          </Text>

          <Text
            style={{
              color: COLOR.GRAY,
              fontSize: FONT_SIZE.F_16,
              marginTop: hp('4%'),
              marginLeft: hp('-26%'),
              width: wp('60%'),
            }}>
            Your next sadesati starts from 03-jun-2023.
          </Text>
        </View>
        {/* ===========Sadesati========== */}
        <View style={{marginTop: hp('3%')}}>
          <Table
            borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}
            style={{
              maxWidth: wp('82%'),
              alignSelf: 'center',
              shadowOpacity: 0.2,
              shadowRadius: 2,
              // Elevation for Android
              elevation: 3,
              borderTopLeftRadius: hp('2.9%'),
            }}>
            <Row
              data={KalsarpaHeader}
              style={{
                backgroundColor: COLOR.YELLOW,
                height: hp('7%'),
                alignSelf: 'center',
                borderTopLeftRadius: hp('2%'),
                borderTopRightRadius: hp('2%'),
              }}
              textStyle={styles.text}
            />
            <Rows
              data={KalsarpaData}
              textStyle={{color: COLOR.LIGHT_GRAY, textAlign: 'center'}}
              style={{
                height: hp('6%'),
                backgroundColor: COLOR.WHITE,
                alignSelf: 'center',
              }}
            />
          </Table>
        </View>
        {/* -------- Dasha TAble*/}

        <View>
          <View style={styles.orangeViewHead}>
            <Text
              style={{
                // marginLeft: hp('2%'),
                color: COLOR.WHITE,
                fontSize: FONT_SIZE.F_16,
                fontFamily: FONT.SEMI_BOLD,
              }}>
              Shani Sade sati : Rising Phase
            </Text>
          </View>
          <View style={styles.kundaliCard}>
            <Text
              style={{
                color: COLOR.DARK_BLUE,
                fontSize: FONT_SIZE.F_16,
              }}>
              Those born with the Gemini sign are very lively and charming
              personalities. They are the owner of a very active mind and as a
              twin sign, also very open to change. It is a good thing but also
              shady because it prompts their thoughts to wander around and
              rarely stick on one thing. These natives are restless, easily
              bored, and find it tough to concentrate on one thing for a long
              time. Geminis are also very good with manipulation. Most of the
              time, one can't figure out what they are thinking. Thus, people,
              especially their loved ones, struggle to understand them.
              Nevertheless, the Gemini's intellect dominates them and thus when
            </Text>
          </View>
        </View>

        {/* -------- Mars Mahadasha Dasha TAble*/}

        <View>
          <View style={styles.orangeViewHead}>
            <Text
              style={{
                // marginLeft: hp('2%'),
                color: COLOR.WHITE,
                fontSize: FONT_SIZE.F_16,
                fontFamily: FONT.SEMI_BOLD,
              }}>
              Shani Sade sati : Peak Phase
            </Text>
          </View>
          <View style={styles.kundaliCard}>
            <Text
              style={{
                color: COLOR.DARK_BLUE,
                fontSize: FONT_SIZE.F_16,
              }}>
              Those born with the Gemini sign are very lively and charming
              personalities. They are the owner of a very active mind and as a
              twin sign, also very open to change. It is a good thing but also
              shady because it prompts their thoughts to wander around and
              rarely stick on one thing. These natives are restless, easily
              bored, and find it tough to concentrate on one thing for a long
              time. Geminis are also very good with manipulation. Most of the
              time, one can't figure out what they are thinking. Thus, people,
              especially their loved ones, struggle to understand them.
              Nevertheless, the Gemini's intellect dominates them and thus when
            </Text>
          </View>
        </View>

        {/* ===================Rahu Mahadasha Dasha TAble=============== */}
        <View>
          <View style={styles.orangeViewHead}>
            <Text
              style={{
                // marginLeft: hp('2%'),
                color: COLOR.WHITE,
                fontSize: FONT_SIZE.F_16,
                fontFamily: FONT.SEMI_BOLD,
              }}>
              Shani Sade sati : Setting Phase
            </Text>
          </View>
          <View style={[styles.kundaliCard, {marginBottom: hp('10%')}]}>
            <Text
              style={{
                color: COLOR.DARK_BLUE,
                fontSize: FONT_SIZE.F_16,
              }}>
              Those born with the Gemini sign are very lively and charming
              personalities. They are the owner of a very active mind and as a
              twin sign, also very open to change. It is a good thing but also
              shady because it prompts their thoughts to wander around and
              rarely stick on one thing. These natives are restless, easily
              bored, and find it tough to concentrate on one thing for a long
              time. Geminis are also very good with manipulation. Most of the
              time, one can't figure out what they are thinking. Thus, people,
              especially their loved ones, struggle to understand them.
              Nevertheless, the Gemini's intellect dominates them and thus when
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default BasicDetails;
const styles = StyleSheet.create({
  liveView: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: hp('0.3%'),
    marginRight: hp('2%'),
    marginVertical: hp('2%'),
  },

  imageStyle: {
    height: hp('5%'),
    width: wp('6%'),
    resizeMode: 'contain',
  },
  subheadlineText: {
    fontFamily: FONT.SEMI_BOLD,
    fontSize: FONT_SIZE.F_16,
    color: COLOR.BLACK,
    textAlign: 'center',
  },

  headerTitle: {
    fontSize: FONT_SIZE.F_16,
    fontFamily: FONT.BOLD,
    color: COLOR.DARK_BLUE,
  },

  liveAstroImage: {
    height: hp('18%'),
    width: wp('25%'),
    resizeMode: 'contain',
    borderRadius: hp('1%'),
  },
  kundaliCard: {
    width: wp('90%'),
    alignSelf: 'center',
    backgroundColor: 'white', // Set your card's background color
    borderBottomLeftRadius: hp('3%'),
    borderBottomRightRadius: hp('3%'),
    padding: 16, // Set your desired padding
    // Shadow properties for iOS
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    // Elevation for Android
    elevation: 4,
  },
  tilteText: {
    textAlign: 'center',
    color: COLOR.WHITE,
    fontFamily: FONT.SEMI_BOLD,
    fontSize: FONT_SIZE.F_17,
  },
  orangeViewHead: {
    backgroundColor: COLOR.YELLOW,
    padding: hp('2%'),
    width: wp('90%'),
    alignSelf: 'center',
    marginTop: hp('3%'),
    borderTopLeftRadius: hp('3%'),
    borderTopRightRadius: hp('3%'),
  },

  container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
  header: {height: 90, backgroundColor: '#537791'},
  text: {textAlign: 'center', fontWeight: '100', color: COLOR.WHITE},
  dataWrapper: {marginTop: -1},
  row: {height: 80, backgroundColor: '#E7E6E1'},
});
