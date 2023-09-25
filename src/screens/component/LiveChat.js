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
import LocalImage from '../../Providerscreen/LocalImage';
import ProfileUser from '../../Icons/Svg/ProfileUser.svg';
import WhiteEye from '../../Icons/Svg/WhiteEye.svg';
import Gift from '../../Icons/Svg/Gift.svg';
import Share from '../../Icons/Svg/Share.svg';
import Calling from '../../Icons/Svg/Calling.svg';

const LiveChat = ({navigation}) => {
  const UserList = [
    {
      id: 1,
      title: 'Wade Warren',
      messg: 'You looking Beautiful today',
      picture: require('../../Icons/Images/User3.png'),
    },
    {
      id: 2,
      title: 'Alen',
      messg: 'May be in summer',
      picture: require('../../Icons/Images/User2.png'),
    },
    {
      id: 3,
      title: 'Vue Drain',
      messg: 'Good Morning',
      picture: require('../../Icons/Images/User1.png'),
    },
    {
      id: 4,
      title: 'Alen Waken',
      messg: 'May be in summer',
      picture: require('../../Icons/Images/User4.png'),
    },
  ];
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backImageView}
        source={LocalImage.Livechat}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.midHeadView}>
            <Image
              source={LocalImage.UserOne}
              style={{
                height: hp('4.5%'),
                width: wp('7.5%'),
                borderRadius: wp('6%'),
                resizeMode: 'contain',
              }}
            />
            <View
              style={{
                marginHorizontal: hp('2%'),
                borderRightColor: COLOR.WHITE,
                borderRightWidth: wp('0.6%'),
              }}>
              <Text style={[styles.titleText, {marginRight: hp('3%')}]}>
                Wade Warren
              </Text>
              <View style={[styles.TextandImageView, {marginTop: hp('0%')}]}>
                <ProfileUser height={hp('2%')} width={wp('4%')} fill="white" />
                <Text
                  style={[
                    styles.smallText,
                    {
                      marginLeft: wp('1%'),
                    },
                  ]}>
                  12345
                </Text>
              </View>
            </View>
            <View style={[styles.TextandImageView, {marginTop: hp('0%')}]}>
              <Image
                source={LocalImage.TwoUser}
                style={{
                  height: hp('4.5%'),
                  width: wp('7.5%'),
                  resizeMode: 'contain',
                }}
              />
              <Text
                style={[
                  styles.smallText,
                  {
                    marginLeft: wp('1%'),
                  },
                ]}>
                12345
              </Text>
            </View>
          </View>
          {/* ----- Follow - */}
          <View
            style={[
              styles.midHeadView,
              {
                marginLeft: wp('2%'),
                width: wp('20%'),
              },
            ]}>
            <Text
              style={{
                fontFamily: FONT.SEMI_BOLD,
                fontSize: FONT_SIZE.F_13,
                color: COLOR.WHITE,
              }}>
              Follow
            </Text>
          </View>
          <View
            style={{
              marginHorizontal: hp('2%'),
              marginTop: hp('3%'),
              alignItems: 'center',
              justifyContent: 'center',
              width: wp('10%'),
              // backgroundColor: 'yellow',
            }}>
            <TouchableOpacity onPress={() => navigation.goBack('')}>
              <Image
                source={LocalImage.WhitCross}
                style={{
                  height: hp('4%'),
                  width: wp('4%'),
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView style={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: wp('90%'),
              marginTop: hp('50%'),
              alignSelf: 'center',
            }}>
            <FlatList
              data={UserList}
              contentContainerStyle={{
                height: hp('38%'),
                // backgroundColor: 'pink',
              }}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => {
                return (
                  <View style={[styles.ChatView]}>
                    <Image
                      source={item.picture}
                      style={{
                        height: hp('5%'),
                        width: wp('8.7%'),
                        borderRadius: wp('6%'),
                        resizeMode: 'contain',
                      }}
                    />
                    <View
                      style={{
                        marginHorizontal: hp('2%'),
                      }}>
                      <Text
                        style={[
                          styles.titleText,
                          {color: COLOR.LIGHT_GRAY, fontSize: FONT_SIZE.F_14},
                        ]}>
                        {item.title}
                      </Text>

                      <Text style={[styles.smallText]}>{item.messg}</Text>
                    </View>
                  </View>
                );
              }}
            />
            <View style={{marginTop: hp('5%'), alignSelf: 'center'}}>
              <Gift height={hp('8.5%')} width={wp('13%')} />
              <TouchableOpacity
                onPress={() => navigation.navigate('ProfileScreen')}>
                <Share height={hp('8.5%')} width={wp('13%')} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('IncomingCall')}>
                <Calling height={hp('8.5%')} width={wp('13%')} />
              </TouchableOpacity>
              <View
                style={[
                  styles.ChatView,
                  {
                    paddingVertical: hp('1%'),
                    width: wp('18%'),
                    marginTop: hp('3%'),
                    alignItems: 'center',
                    justifyContent: 'center',
                  },
                ]}>
                <Text
                  style={{
                    fontFamily: FONT.MEDIUM,
                    fontSize: FONT_SIZE.F_12,
                    color: '#ED315E',
                    textDecorationLine: 'line-through',
                    textDecorationStyle: 'solid',
                  }}>
                  $ 20/m
                </Text>
              </View>
            </View>
          </View>
          <View
            style={[
              styles.ChatView,
              {
                paddingVertical: hp('0%'),
                marginBottom: hp('2%'),
                alignItems: 'center',
              },
            ]}>
            <TextInput
              placeholder="Say something ..."
              placeholderTextColor={COLOR.WHITE}
              keyboardType="default"
              style={{width: wp('45%'), color: COLOR.WHITE}}
            />
            <Image
              source={LocalImage.SendMssg}
              style={{height: hp('5%'), width: wp('8%'), resizeMode: 'contain'}}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default LiveChat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backImageView: {
    flex: 1,
    resizeMode: 'contain',
    paddingHorizontal: hp('2%'),
  },
  midHeadView: {
    marginTop: hp('2%'),
    flexDirection: 'row',
    alignItems: 'center',
    padding: hp('1%'),
    justifyContent: 'center',
    borderRadius: wp('3%'),
    backgroundColor: '#00ffff24',
  },
  TextandImageView: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  smallText: {
    fontSize: FONT_SIZE.F_11,
    fontFamily: FONT.MEDIUM,
    color: COLOR.WHITE,
  },
  titleText: {
    fontSize: FONT_SIZE.F_12,
    fontFamily: FONT.MEDIUM,
    color: COLOR.WHITE,
  },
  ChatView: {
    marginTop: hp('1.5%'),
    flexDirection: 'row',
    padding: hp('1%'),
    // justifyContent: 'center',
    borderRadius: wp('3%'),
    backgroundColor: '#00ffff15',
    alignSelf: 'flex-start',
  },
});
