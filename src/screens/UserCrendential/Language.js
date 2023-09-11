import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLOR, FONT, FONT_SIZE} from '../../Providerscreen/Globles';
import Back from '../../Icons/Svg/Back.svg';
import CommonButton from '../../Providerscreen/CommonButton';
import {useDispatch, useSelector} from 'react-redux';
import ErrorMessage from '../../Utils/ErrorMessage';
import {
  addLanguage,
  getLanguage,
  removeAuthState,
} from '../../Redux/actions/AuthAction';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Language = ({navigation}) => {
  const [value, setValue] = useState([]);
  const [languageArray, setLanguageArray] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLanguage());
  }, [dispatch]);

  const {response, CreateRes} = useSelector(state => state.authReducer);
  console.log('CreateRes', CreateRes);
  useEffect(() => {
    const languageArray = Array.isArray(response) ? response : [];
    setLanguageArray(languageArray);
    if (CreateRes?.status === 201) {
      dispatch(removeAuthState());
      setValue([]);
      navigation.navigate('Home');
    }
  }, [response, CreateRes]);

  const handleSelect = item => {
    setLanguageArray(prevLanguageArray => {
      const index = prevLanguageArray.findIndex(el => el.id === item.id);

      if (index === -1) return prevLanguageArray;

      const updatedArray = [...prevLanguageArray];
      updatedArray[index].isSelected = !item?.isSelected;

      const updatedValue = updatedArray
        .filter(el => el.isSelected)
        .map(el => el.name);

      setValue(updatedValue);
      return updatedArray;
    });
  };

  const handleSubmit = async () => {
   const userId =  await AsyncStorage.getItem('userId');
   console.log('userId',userId);
    if (value && value.length > 0) {
      const params = {
        user: JSON.parse(userId),
        language: {data: value},
      };
      dispatch(addLanguage(params));
    } else {
      ErrorMessage({
        msg: 'Please select at least one language',
        backgroundColor: COLOR.RED,
      });
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLOR.WHITE} barStyle="dark-content" />
      {/* --------Header ------- */}
      <TouchableOpacity
        onPress={() => navigation.goBack('')}
        style={{marginVertical: hp('2%')}}>
        <Back height={hp('6%')} width={wp('10%')} />
      </TouchableOpacity>

      <Text style={styles.headerTitle}>Select all your languages ?</Text>
      <Text style={[styles.subHeadinge, {marginTop: hp('2%')}]}>
        Lorem Ipsum is simply dummy text of the
      </Text>
      {/* -------- FlatList language ----------- */}
      <FlatList
        data={languageArray}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{marginTop: hp('3%')}}
        numColumns={3}
        renderItem={({item}) => (
          <View style={styles.listTab}>
            <TouchableOpacity
              style={[
                styles.textView,
                {
                  backgroundColor: item.isSelected ? COLOR.YELLOW : COLOR.GRAY,
                },
              ]}
              onPress={() => handleSelect(item)}>
              <Text style={styles.textStyle}>{item.name}</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* ---------- Button ------ */}
      <View style={{marginBottom: hp('3%')}}>
        <CommonButton ButtonText={'Submit'} HandleNext={() => handleSubmit()} />
      </View>
    </View>
  );
};

export default Language;

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
  subHeadinge: {
    fontSize: FONT_SIZE.F_15,
    fontFamily: FONT.MEDIUM,
    color: COLOR.DARK_BLUE,
  },
  textView: {
    padding: hp('1.6%'),
    paddingHorizontal: hp('1.6%'),
    marginRight: wp('5%'),
    borderRadius: hp('2%'),
  },
  textStyle: {
    fontSize: FONT_SIZE.F_15,
    fontFamily: FONT.MEDIUM,
    color: COLOR.WHITE,
    textAlign: 'center',
  },
  listTab: {
    marginVertical: hp('0.8%'),
  },
});
