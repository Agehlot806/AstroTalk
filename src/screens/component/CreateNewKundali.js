import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import SearchIcon from '../../Icons/Svg/Searchicon.svg';
import {COLOR, FONT, FONT_SIZE} from '../../Providerscreen/Globles';
import {kundaliInfo} from '../../Utils/KundaliData';
import EditIcon from '../../Icons/Svg/EditIcon.svg';
import DeleteIcon from '../../Icons/Svg/DeleteIcon.svg';
import CommonButton from '../../Providerscreen/CommonButton';
import {Screen} from '../../constant/screen';
import CommonHeader from '../../Providerscreen/CommonHeader';

const CreateNewKundali = ({navigation}) => {
  const [City, setCity] = useState('');
  return (
    <View style={styles.mainView}>
      <CommonHeader headerText={'Kundali'} GoBack={() => navigation.goBack()} />
      <ScrollView style={{flex: 1, height: hp('50%')}}>
        {/* Search */}

        <View style={styles.searchView}>
          <View style={{}}>
            <SearchIcon width={wp('6%')} height={hp('5%')} />
          </View>

          <TextInput
            placeholderTextColor={COLOR.ExtLIGHT_GRAY}
            placeholder="Search City"
            keyboardType="default"
            value={City}
            onChangeText={txt => {
              setCity(txt);
            }}
            style={{
              width: wp('60%'),
              fontSize: FONT_SIZE.F_15,
              fontFamily: FONT.MEDIUM,
              color: COLOR.BLACK,
            }}
          />

          <TouchableOpacity style={{flex: 0.5}}>
            {/* <Filter width={wp('10%')} height={hp('6%')} /> */}
          </TouchableOpacity>
        </View>

        <View style={{marginVertical: hp('2%')}}>
          <FlatList
            data={kundaliInfo}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{justifyContent: 'center'}}
            renderItem={({item}) => {
              console.log(item, '---------------hkh');
              return (
                <View style={styles.kundaliInfContainer}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      backgroundColor: COLOR.WHITE,
                      padding: hp('2.6%'),
                      width: wp('88%'),
                      elevation: 3,
                      alignItems: 'center',
                      borderRadius: 10,
                    }}>
                    <View style={{marginHorizontal: hp('2%')}}>
                      {item.image}
                    </View>
                    <View>
                      <Text
                        style={{
                          color: COLOR.DARK_BLUE,
                          fontSize: FONT_SIZE.F_16,
                          fontFamily: FONT.SEMI_BOLD, // marginLeft: hp('2%'),
                        }}>
                        {item.name}
                      </Text>
                      <Text
                        style={{
                          color: COLOR.GRAY,
                          fontSize: FONT_SIZE.F_14,
                          // marginLeft: hp('2%'),
                        }}>
                        {item.date}
                        {item.time}
                      </Text>
                      <Text
                        style={{
                          color: COLOR.GRAY,
                          fontSize: FONT_SIZE.F_14,
                          // marginLeft: hp('2%'),
                        }}>
                        {item.Address}
                      </Text>
                    </View>
                    <View
                      style={{
                        // paddingVertical: hp('3%'),
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                      }}>
                      <TouchableOpacity>
                        <DeleteIcon />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <EditIcon style={{marginLeft: hp('2%')}} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
      <View style={{marginTop: hp('10%')}}>
        <CommonButton
          ButtonText={'Create New Kundali'}
          HandleNext={() => navigation.navigate('BasicDetails')}
        />
      </View>
    </View>
  );
};

export default CreateNewKundali;
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    paddingHorizontal: hp('2%'),
    backgroundColor: COLOR.WHITE,
  },
  searchView: {
    backgroundColor: '#F8F8FA',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: hp('1%'),
    paddingVertical: hp('0.3%'),
    borderRadius: hp('2%'),
  },

  kundaliInfContainer: {
    width: wp('88%'),
    marginVertical: hp('1%'),
    alignSelf: 'center',
    // backgroundColor: 'red',
    alignItems: 'center',
  },
});
