import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLOR, FONT, FONT_SIZE} from './Globles';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const KundaliCard = props => {
  return (
    <>
      <View
        style={[
          styles.orangeViewHead,
          {flexDirection: 'row', alignItems: 'center'},
        ]}>
        <Text
          style={{
            // marginLeft: hp('2%'),
            color: COLOR.WHITE,
            fontSize: FONT_SIZE.F_16,
            fontFamily: FONT.SEMI_BOLD,
          }}>
          {props.title}
        </Text>
        <Text
          style={{
            marginLeft: hp('2%'),
            color: COLOR.WHITE,
            fontSize: FONT_SIZE.F_14,
          }}>
          {props.date}
        </Text>
      </View>
      <View style={styles.kundaliCard}>
        <Text
          style={{
            fontWeight: 'bold',
            color: COLOR.DARK_BLUE,
            fontSize: FONT_SIZE.F_16,
          }}>
          {props.headding}
        </Text>
        <Text
          style={{
            color: COLOR.DARK_BLUE,
            fontSize: FONT_SIZE.F_16,
            textAlign: 'justify',
          }}>
          Those born with the Gemini sign are very lively and charming
          personalities. They are the owner of a very active mind and as a twin
          sign, also very open to change. It is a good thing but also shady
          because it prompts their thoughts to wander around and rarely stick on
          one thing. These natives are restless, easily bored, and find it tough
          to concentrate on one thing for a long time. Geminis are also very
          good with manipulation. Most of the time, one can't figure out what
          they are thinking. Thus, people, especially their loved ones, struggle
          to understand them. Nevertheless, the Gemini's intellect dominates
          them and thus when
        </Text>
      </View>
    </>
  );
};

export default KundaliCard;

const styles = StyleSheet.create({
  orangeViewHead: {
    backgroundColor: COLOR.YELLOW,
    padding: hp('2%'),
    width: wp('90%'),
    alignSelf: 'center',
    marginTop: hp('3%'),
    borderTopLeftRadius: hp('3%'),
    borderTopRightRadius: hp('3%'),
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
});
