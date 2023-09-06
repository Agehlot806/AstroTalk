import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLOR, FONT, FONT_SIZE} from '../../Providerscreen/Globles';
import Back from '../../Icons/Svg/Back.svg';
import Whatsapp from '../../Icons/Svg/Whatsapp.svg';

const Notification = ({navigation}) => {
  const NotiArray = [
    {
      id: 1,
      title: 'Comment on your announce Alpina B12-Alpina...',
      image: require('../../Icons/Images/Ticksquare.png'),
    },
    {
      id: 2,
      title: 'Flat 35rs. Cashback',
      image: require('../../Icons/Images/Chat.png'),
    },
    {
      id: 3,
      title: 'Comment on your announce Alpina B12-Alpina...',
      image: require('../../Icons/Images/Not.png'),
    },
    {
      id: 4,
      title: 'Flat 35rs. Cashback',
      image: require('../../Icons/Images/Ticksquare.png'),
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
            Notification
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.6}
          //   onPress={() => navigation.navigate('KundliSearch')}
          style={styles.Imageheadiew}>
          <Whatsapp height={hp('3%')} width={wp('4%')} />
          <Text style={styles.smallText}> Share</Text>
        </TouchableOpacity>
      </View>
      {/* ---------- header end --- */}

      <FlatList
        data={NotiArray}
        // horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <View style={{flexDirection: 'row'}}>
              <View style={[styles.cardView]}>
                <Image source={item.image} style={styles.astroImage} />

                <View
                  style={{
                    width: wp('50%'),
                    marginLeft: hp('2%'),
                  }}>
                  <Text
                    numberOfLines={2}
                    style={[styles.subheadlineText, {color: COLOR.DARK_BLUE}]}>
                    {item.title}
                  </Text>
                </View>

                {/* ----- DAY AND tIME -------- */}
                <View
                  style={{
                    marginTop: hp('3.5%'),
                    alignItems: 'center',
                  }}>
                  <Text style={[styles.smallText, {color: COLOR.GRAY}]}>
                    15 min ago
                  </Text>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Notification;

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
    // width: '20%',
    alignSelf: 'center',
    alignItems: 'center',
    borderColor: COLOR.YELLOW,
    borderWidth: wp('0.2%'),
    borderRadius: hp('0.5%'),
    marginLeft: wp('2%'),
    paddingHorizontal: wp('4%'),
  },
  cardView: {
    flexDirection: 'row',
    width: wp('90%'),
    alignSelf: 'center',
    // justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp('3%'),
    padding: wp('4%'),
    marginVertical: wp('2%'),
    backgroundColor: '#EDD7FF',
  },
  astroImage: {
    height: hp('5%'),
    width: wp('6%'),
    // borderRadius: hp('5%'),
    // padding: hp('1%'),
    resizeMode: 'contain',
  },
  smallText: {
    fontFamily: FONT.SEMI_BOLD,
    fontSize: FONT_SIZE.F_11,
    color: COLOR.BLACK,
  },
});
