import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Back from '../../Icons/Svg/Back.svg';
import {COLOR, FONT, FONT_SIZE} from '../../Providerscreen/Globles';
import LocalImage from '../../Providerscreen/LocalImage';
import {useDispatch, useSelector} from 'react-redux';
import {
  bookPoojaSlot,
  poojaPayment,
  removePoojaOrder,
} from '../../Redux/actions/PoojaAction';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RazorpayCheckout from 'react-native-razorpay';
import ErrorMessage from '../../Utils/ErrorMessage';

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
  // console.log('detailsaData in payment', detailsaData);
  const {
    bookRes,
    slotBook = false,
    poojaBook = false,
  } = useSelector(state => state.pooja);
  console.log('bookRes', bookRes);
  const [selectedId, setSelectedId] = useState(0);
  const [razorpayData, setRazorpayData] = useState('');

  useEffect(() => {
    if (bookRes?.status === 201 && slotBook) {
      handlePayment();
    } else if (bookRes?.status === 201 && poojaBook) {
      ErrorMessage({
        msg: 'Pooja book Successfully',
        backgroundColor: COLOR.Green
      })
      navigation.navigate('Pooja');
      dispatch(removePoojaOrder());
    }

    return () => {};
  }, [bookRes]);

  const handleBooking = () => {
    if (type === 'pooja') {
      PoojaBooking();
    }
  };

  const handlePayment = async () => {
    const userInfo = await AsyncStorage.getItem('userInfo');
    const phone = await AsyncStorage.getItem('userPhone');
    var options = {
      order_id: bookRes?.data?.order_id ? bookRes?.data?.order_id : '',
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: 'rzp_test_yXpKwsLWjkzvBJ',
      amount: Math.round(Number(detailsaData?.price).toFixed(2) * 100),
      name: detailsaData?.name,
      prefill: {
        email: 'void@razorpay.com',
        contact: phone ? phone : '',
        name: 'Razorpay Software',
      },
      theme: {color: COLOR.YELLOW},
    };
    RazorpayCheckout.open(options)
      .then(data => {
        console.log('data in success', data);
        // handle success
        // alert(`Success: ${data.razorpay_payment_id}`);
        setRazorpayData(data);
        PoojaBooking(data);
      })
      .catch(error => {
        // handle failure
        console.log('error in payment', error);
        alert(`Error: ${error.code} | ${error.description}`);
      });
  };

  const poojaslotBook = async () => {
    const userId = await AsyncStorage.getItem('userId');
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const formData = new FormData();
    formData.append('myuser', Number(userId));
    formData.append('pooja', detailsaData?.id),
      formData.append('pujaslot', detailsaData?.slotId?.id),
      formData.append(
        'dateofpuja',
        moment(tomorrow.toDateString()).format('DD-MM-YYYY'),
      );
    dispatch(bookPoojaSlot(formData));
  };

  const PoojaBooking = async (data) => {
    const userId = await AsyncStorage.getItem('userId');
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const slotParam = {
      user: userId,
      pooja: detailsaData?.id,
      pujaslot: detailsaData?.slotId?.id,
      dateofpuja: moment(tomorrow.toDateString()).format('DD-MM-YYYY'),
    };

    const formData = new FormData();
    formData.append('userid', Number(userId));
    formData.append('pujaid', detailsaData?.id),
      formData.append('pujaslot', detailsaData?.slotId?.id),
      formData.append(
        'dateofpuja',
        moment(tomorrow.toDateString()).format('DD-MM-YYYY'),
      );
    formData.append('order_price', detailsaData?.price);
    formData.append('razor_pay_order_id', data?.razorpay_order_id);
    formData.append(
      'razor_pay_payment_signature',
      data?.razorpay_signature,
    );
    console.log('formData', formData);

    if (detailsaData) {
      dispatch(poojaPayment(formData));
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
      <View style={{flex: 1}}>
        {Options.map(item => {
          return (
            <TouchableOpacity
              key={item.id}
              onPress={() =>
                setSelectedId(item.id === selectedId ? 0 : item.id)
              }
              style={styles.optionsView}>
              <TouchableOpacity style={styles.radioButton}>
                {selectedId === item.id ? (
                  <View style={styles.radioDot} />
                ) : null}
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
      <View style={styles.btnView}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            if (selectedId === 0) {
              ErrorMessage({
                msg: 'Please select the payment method to process',
                backgroundColor: COLOR.RED,
              });
            } else {
              poojaslotBook();
            }
          }}>
          <Text style={styles.btnTxt}>Process</Text>
        </TouchableOpacity>
      </View>
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
  btnView: {
    marginVertical: hp('3%'),
  },
  btn: {
    backgroundColor: COLOR.YELLOW,
    height: hp('8%'),
    width: '100%',
    borderRadius: hp('2%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTxt: {
    color: COLOR.WHITE,
    fontFamily: FONT.SEMI_BOLD,
    fontSize: hp('3%'),
    textTransform: 'uppercase',
  },
});
