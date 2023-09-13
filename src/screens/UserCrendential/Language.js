import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
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
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [languageAPIData, setLanguageAPIData] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLanguage());
  }, [dispatch]);

  const {response, CreateRes} = useSelector(state => state.authReducer);

  useEffect(() => {
    const languageArray = Array.isArray(response) ? response : [];
    setLanguageAPIData(languageArray);
    if (CreateRes?.status === 201) {
      dispatch(removeAuthState());
      setSelectedLanguage(null); // Reset the selected language
      navigation.navigate('Home');
    }
  }, [response, CreateRes]);

  const handleSelect = item => {
    if (selectedLanguage) {
      // Deselect the previously selected language
      setLanguageAPIData(prevLanguageArray =>
        prevLanguageArray.map(el => ({
          ...el,
          isSelected: false,
        })),
      );
    }

    // Select the current language
    setLanguageAPIData(prevLanguageArray =>
      prevLanguageArray.map(el =>
        el.id === item.id ? {...el, isSelected: true} : el,
      ),
    );
    setSelectedLanguage(item);
  };

  const handleSubmit = async () => {
    const userId =await AsyncStorage.getItem('userId');

    if (selectedLanguage) {
      const params = {
        user: JSON.parse(userId),
        language: selectedLanguage.name,
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
        Select The Languages Which You Know
      </Text>
      {/* -------- FlatList language ----------- */}
      <FlatList
        data={languageAPIData}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{marginTop: hp('3%')}}
        numColumns={3}
        renderItem={({item}) => (
          <View style={styles.listTab}>
            <TouchableOpacity
              style={[
                styles.textView,
                {
                  backgroundColor: item.isSelected
                    ? COLOR.YELLOW
                    : selectedLanguage === item
                    ? COLOR.YELLOW
                    : COLOR.GRAY,
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
