import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Back from '../../Icons/Svg/Back.svg';
import {COLOR, FONT, FONT_SIZE} from '../../Providerscreen/Globles';
import LocalImage from '../../Providerscreen/LocalImage';
import {useDispatch} from 'react-redux';
import {bookPoojaSlot, poojaPayment} from '../../Redux/actions/PoojaAction';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Options = [
  {
    id: 1,
    name: 'UPI',
    image: LocalImage.upiImage,
  },
  {
    id: 2,
    name: 'Wallet',
    image: '',
  },
  {
    id: 3,
    name: 'Phonepe',
    image: LocalImage.phonepeImage,
  },
  {
    id: 4,
    name: 'Paytm',
    image: LocalImage.PaytmImage,
  },
];
const Payment = ({navigation, route}) => {
  const {type, detailsaData = {}} = route?.params || {};
  const dispatch = useDispatch();
  console.log('detailsaData in payment', detailsaData);
  const [selectedId, setSelectedId] = useState(0);

  const handlePayment = () => {
    if (type === 'pooja') {
      PoojaBooking();
    }
  };

  const PoojaBooking = async () => {
    const userId = AsyncStorage.getItem('userId');
    const getNextDays = (currentDate = new Date(), daysToAdd = 1) => {
      const nextDate = new Date(currentDate);
      nextDate.setDate(currentDate.getDate() + daysToAdd);
      return nextDate;
    };
    const slotParam = {
      user: userId,
      pooja: detailsaData?.id,
      pujaslot: 1,
      dateofpuja: moment(getNextDays).format('DD-MM-YYYY'),
    };
    const BookingParam = {
      ...slotParam,
      order_price: detailsaData?.price,
      razor_pay_order_id: 'dwsdfwerwr434',
      razor_pay_payment_signature: 'rwerwrw',
    };
    if (detailsaData) {
      dispatch(bookPoojaSlot());
      dispatch(poojaPayment());
    }
  };
  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={COLOR.WHITE} barStyle="dark-content" />
      {/* --------Header ------- */}
      <TouchableOpacity
        onPress={() => navigation.goBack('')}
        style={{
          marginTop: hp('2%'),
          marginBottom: hp('8%'),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Back height={hp('6%')} width={wp('7%')} />
          <View style={{}}>
            <Text style={[styles.headerTitle, {marginLeft: hp('1%')}]}>
              Payment
            </Text>
          </View>
        </View>
        <View
          style={{
            width: '15%',
            marginHorizontal: hp('2%'),
            marginRight: hp('2%'),
          }}>
          <View
            style={{
              borderColor: COLOR.YELLOW,
              borderWidth: wp('0.2%'),
            }}>
            <Text style={styles.smallText}> $ 125.00</Text>
          </View>
        </View>
      </TouchableOpacity>
      {/* Payment Option */}
      {Options.map(item => {
        return (
          <TouchableOpacity
            key={item.id}
            onPress={() => setSelectedId(item.id)}
            style={styles.optionsView}>
            <TouchableOpacity style={styles.radioButton}>
              {selectedId === item.id ? <View style={styles.radioDot} /> : null}
            </TouchableOpacity>
            <View>
              {item.image === '' ? (
                <Text
                  style={{
                    color: COLOR.BLACK,
                    fontFamily: FONT.SEMI_BOLD,
                    fontSize: hp('2.5%'),
                    marginLeft: hp('3%'),
                  }}>
                  {item.name}
                </Text>
              ) : (
                <Image source={item.image} style={styles.paymentImg} />
              )}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: hp('2%'),
    backgroundColor: COLOR.WHITE,
  },
  headerTitle: {
    fontSize: FONT_SIZE.F_19,
    fontFamily: FONT.BOLD,
    color: COLOR.DARK_BLUE,
  },
  smallText: {
    // marginVertical: wp('2%'),
    fontFamily: FONT.SEMI_BOLD,
    fontSize: FONT_SIZE.F_11,
    color: COLOR.BLACK,
    textAlign: 'center',
  },
  radioButton: {
    height: wp('5.5%'),
    width: wp('5.5%'),
    borderRadius: hp('50%'),
    borderWidth: hp('0.3%'),
    borderColor: COLOR.YELLOW,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioDot: {
    height: wp('3.2%'),
    width: wp('3.2%'),
    borderRadius: hp('50%'),
    backgroundColor: COLOR.YELLOW,
  },
  optionsView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: COLOR.GRAY,
    borderWidth: hp('0.05%'),
    padding: hp('1.2%'),
    borderRadius: hp('1.5%'),
    marginBottom: hp('5%'),
  },
  paymentImg: {
    width: wp('20%'),
    height: hp('5%'),
    marginLeft: hp('3%'),
    resizeMode: 'contain',
  },
});
